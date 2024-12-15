const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ConfigManager", function () {
    let configManager;
    let owner;
    let other;
    
    // Constants for default values
    const DEFAULT_MIN_STAKE = ethers.parseEther("1");
    const DEFAULT_MAX_STAKE = ethers.parseEther("100");
    const DEFAULT_MIN_STAKE_LOCKED_TIME = 7 * 24 * 60 * 60; // 7 days
    const DEFAULT_MIN_TRANSACTION_DURATION = 24 * 60 * 60; // 1 day
    const DEFAULT_MAX_TRANSACTION_DURATION = 30 * 24 * 60 * 60; // 30 days
    const DEFAULT_TRANSACTION_MIN_FEE_RATE = 100; // 1%
    const DEFAULT_ARBITRATION_TIMEOUT = 24 * 60 * 60; // 24 hours
    const DEFAULT_ARBITRATION_FROZEN_PERIOD = 30 * 60; // 30 minutes
    const DEFAULT_SYSTEM_FEE_RATE = 500; // 5%
    const DEFAULT_SYSTEM_COMPENSATION_FEE_RATE = 200; // 2%

    beforeEach(async function () {
        [owner, other] = await ethers.getSigners();
        
        const ConfigManager = await ethers.getContractFactory("ConfigManager");
        configManager = await ConfigManager.deploy(owner.address);
    });

    describe("Constructor", function () {
        it("Should set correct default values", async function () {
            const [keys, values] = await configManager.getAllConfigs();
            
            // Create a map of config values
            const configs = {};
            for (let i = 0; i < keys.length; i++) {
                configs[keys[i]] = values[i];
            }
            
            // Verify each default value
            expect(await configManager.getConfig(await configManager.MIN_STAKE())).to.equal(DEFAULT_MIN_STAKE);
            expect(await configManager.getConfig(await configManager.MAX_STAKE())).to.equal(DEFAULT_MAX_STAKE);
            expect(await configManager.getConfig(await configManager.MIN_STAKE_LOCKED_TIME())).to.equal(DEFAULT_MIN_STAKE_LOCKED_TIME);
            expect(await configManager.getConfig(await configManager.MIN_TRANSACTION_DURATION())).to.equal(DEFAULT_MIN_TRANSACTION_DURATION);
            expect(await configManager.getConfig(await configManager.MAX_TRANSACTION_DURATION())).to.equal(DEFAULT_MAX_TRANSACTION_DURATION);
            expect(await configManager.getConfig(await configManager.TRANSACTION_MIN_FEE_RATE())).to.equal(DEFAULT_TRANSACTION_MIN_FEE_RATE);
            expect(await configManager.getConfig(await configManager.ARBITRATION_TIMEOUT())).to.equal(DEFAULT_ARBITRATION_TIMEOUT);
            expect(await configManager.getConfig(await configManager.ARBITRATION_FROZEN_PERIOD())).to.equal(DEFAULT_ARBITRATION_FROZEN_PERIOD);
            expect(await configManager.getConfig(await configManager.SYSTEM_FEE_RATE())).to.equal(DEFAULT_SYSTEM_FEE_RATE);
            expect(await configManager.getConfig(await configManager.SYSTEM_COMPENSATION_FEE_RATE())).to.equal(DEFAULT_SYSTEM_COMPENSATION_FEE_RATE);
        });

        it("Should set correct owner", async function () {
            expect(await configManager.owner()).to.equal(owner.address);
        });
    });

    describe("Stake Configurations", function () {
        it("Should set minimum stake correctly", async function () {
            const newMinStake = ethers.parseEther("2");
            await expect(configManager.connect(owner).setMinStake(newMinStake))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.MIN_STAKE(), DEFAULT_MIN_STAKE, newMinStake);

            expect(await configManager.getConfig(await configManager.MIN_STAKE())).to.equal(newMinStake);
        });

        it("Should fail to set minimum stake above maximum stake", async function () {
            const newMinStake = ethers.parseEther("101");
            await expect(configManager.connect(owner).setMinStake(newMinStake))
                .to.be.revertedWith("MIN_STAKE_EXCEEDS_MAX");
        });

        it("Should set maximum stake correctly", async function () {
            const newMaxStake = ethers.parseEther("200");
            await expect(configManager.connect(owner).setMaxStake(newMaxStake))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.MAX_STAKE(), DEFAULT_MAX_STAKE, newMaxStake);

            expect(await configManager.getConfig(await configManager.MAX_STAKE())).to.equal(newMaxStake);
        });

        it("Should fail to set maximum stake below minimum stake", async function () {
            const newMaxStake = ethers.parseEther("0.5");
            await expect(configManager.connect(owner).setMaxStake(newMaxStake))
                .to.be.revertedWith("MAX_STAKE_BELOW_MIN");
        });

        it("Should set minimum stake locked time correctly", async function () {
            const newTime = 14 * 24 * 60 * 60; // 14 days
            await expect(configManager.connect(owner).setMinStakeLockedTime(newTime))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.MIN_STAKE_LOCKED_TIME(), DEFAULT_MIN_STAKE_LOCKED_TIME, newTime);

            expect(await configManager.getConfig(await configManager.MIN_STAKE_LOCKED_TIME())).to.equal(newTime);
        });
    });

    describe("Transaction Duration Configurations", function () {
        it("Should set minimum transaction duration correctly", async function () {
            const newDuration = 2 * 24 * 60 * 60; // 2 days
            await expect(configManager.connect(owner).setMinTransactionDuration(newDuration))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.MIN_TRANSACTION_DURATION(), DEFAULT_MIN_TRANSACTION_DURATION, newDuration);

            expect(await configManager.getConfig(await configManager.MIN_TRANSACTION_DURATION())).to.equal(newDuration);
        });

        it("Should fail to set minimum duration above maximum duration", async function () {
            const newDuration = 31 * 24 * 60 * 60; // 31 days
            await expect(configManager.connect(owner).setMinTransactionDuration(newDuration))
                .to.be.revertedWith("MIN_DURATION_EXCEEDS_MAX");
        });

        it("Should set maximum transaction duration correctly", async function () {
            const newDuration = 60 * 24 * 60 * 60; // 60 days
            await expect(configManager.connect(owner).setMaxTransactionDuration(newDuration))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.MAX_TRANSACTION_DURATION(), DEFAULT_MAX_TRANSACTION_DURATION, newDuration);

            expect(await configManager.getConfig(await configManager.MAX_TRANSACTION_DURATION())).to.equal(newDuration);
        });

        it("Should fail to set maximum duration below minimum duration", async function () {
            const newDuration = 12 * 60 * 60; // 12 hours
            await expect(configManager.connect(owner).setMaxTransactionDuration(newDuration))
                .to.be.revertedWith("MAX_DURATION_BELOW_MIN");
        });
    });

    describe("Fee Configurations", function () {
        it("Should set transaction minimum fee rate correctly", async function () {
            const newRate = 200; // 2%
            await expect(configManager.connect(owner).setTransactionMinFeeRate(newRate))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.TRANSACTION_MIN_FEE_RATE(), DEFAULT_TRANSACTION_MIN_FEE_RATE, newRate);

            expect(await configManager.getConfig(await configManager.TRANSACTION_MIN_FEE_RATE())).to.equal(newRate);
        });

        it("Should set system fee rate correctly", async function () {
            const newRate = 1000; // 10%
            await expect(configManager.connect(owner).setSystemFeeRate(newRate))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.SYSTEM_FEE_RATE(), DEFAULT_SYSTEM_FEE_RATE, newRate);

            expect(await configManager.getSystemFeeRate()).to.equal(newRate);
        });

        it("Should set system compensation fee rate correctly", async function () {
            const newRate = 300; // 3%
            await expect(configManager.connect(owner).setSystemCompensationFeeRate(newRate))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.SYSTEM_COMPENSATION_FEE_RATE(), DEFAULT_SYSTEM_COMPENSATION_FEE_RATE, newRate);

            expect(await configManager.getSystemCompensationFeeRate()).to.equal(newRate);
        });
    });

    describe("System Fee Collector", function () {
        it("Should set system fee collector correctly", async function () {
            await expect(configManager.connect(owner).setSystemFeeCollector(other.address))
                .to.emit(configManager, "ConfigUpdated")
                .withArgs(await configManager.SYSTEM_FEE_COLLECTOR(), 0, BigInt(other.address));

            expect(await configManager.getSystemFeeCollector()).to.equal(other.address);
        });

        it("Should fail to set zero address as fee collector", async function () {
            await expect(configManager.connect(owner).setSystemFeeCollector(ethers.ZeroAddress))
                .to.be.revertedWithCustomError(configManager, "ZERO_ADDRESS");
        });

        it("Should return owner as default fee collector if not set", async function () {
            expect(await configManager.getSystemFeeCollector()).to.equal(owner.address);
        });
    });

    describe("Batch Configuration Updates", function () {
        it("Should set multiple configs correctly", async function () {
            const keys = [
                await configManager.MIN_STAKE(),
                await configManager.MAX_STAKE(),
                await configManager.SYSTEM_FEE_RATE()
            ];
            const values = [
                ethers.parseEther("2"),
                ethers.parseEther("200"),
                1000
            ];

            await configManager.connect(owner).setConfigs(keys, values);

            for (let i = 0; i < keys.length; i++) {
                expect(await configManager.getConfig(keys[i])).to.equal(values[i]);
            }
        });

        it("Should fail if arrays have different lengths", async function () {
            const keys = [await configManager.MIN_STAKE(), await configManager.MAX_STAKE()];
            const values = [ethers.parseEther("2")];

            await expect(configManager.connect(owner).setConfigs(keys, values))
                .to.be.revertedWithCustomError(configManager, "LENGTH_MISMATCH");
        });
    });

    describe("Access Control", function () {
        it("Should prevent non-owner from setting configs", async function () {
            await expect(configManager.connect(other).setMinStake(ethers.parseEther("2")))
                .to.be.revertedWith("Ownable: caller is not the owner");

            await expect(configManager.connect(other).setSystemFeeRate(1000))
                .to.be.revertedWith("Ownable: caller is not the owner");

            await expect(configManager.connect(other).setSystemFeeCollector(other.address))
                .to.be.revertedWith("Ownable: caller is not the owner");
        });
    });

    describe("Config Queries", function () {
        it("Should return all configs correctly", async function () {
            const [keys, values] = await configManager.getAllConfigs();
            expect(keys.length).to.equal(11); // Total number of configs
            expect(values.length).to.equal(11);
        });

        it("Should return correct individual config values", async function () {
            const minStake = await configManager.getConfig(await configManager.MIN_STAKE());
            expect(minStake).to.equal(DEFAULT_MIN_STAKE);

            const systemFeeRate = await configManager.getSystemFeeRate();
            expect(systemFeeRate).to.equal(DEFAULT_SYSTEM_FEE_RATE);
        });
    });
});