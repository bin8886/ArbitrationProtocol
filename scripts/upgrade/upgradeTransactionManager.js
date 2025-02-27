const { ethers, network, getChainId } = require("hardhat");
const { readConfig } = require("../helper.js");


async function main() {
    let chainId = await getChainId();
    console.log("chainId is :" + chainId, " network ", network.name);

    const [ deployer ] = await ethers.getSigners();
    console.log("Deployer address", deployer.address);

    const contractAddress = await readConfig(network.name, "TRANSACTION_MANAGER");

    console.log("contractAddress address", contractAddress);

    const contractFactory = await ethers.getContractFactory("TransactionManager", deployer);
    // await upgrades.forceImport(contractAddress, contractFactory);
    const newContract = await upgrades.upgradeProxy(contractAddress, contractFactory);

    console.log("upgrade address ", newContract.address);

    console.log('completed.');

}

main();
