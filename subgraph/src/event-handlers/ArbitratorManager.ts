import { BigInt, ethereum, log } from "@graphprotocol/graph-ts";
import { ArbitratorParamsSet, ArbitratorPaused, ArbitratorStatusChanged, ArbitratorUnpaused, OperatorSet, OwnershipTransferred, RevenueAddressesSet, StakeAdded, StakeWithdrawn } from "../../generated/ArbitratorManager/ArbitratorManager";
import { ArbitratorInfo } from "../../generated/schema";
import { ZERO_ADDRESS } from "../constants";

export function handleArbitratorStatusChanged(event: ArbitratorStatusChanged): void {
    const arbitratorAddress = event.params.arbitrator.toHexString();
    const status = event.params.status;

    const arbitratorInfo = getArbitratorInfo(event.block, arbitratorAddress);
    arbitratorInfo.status = status.toString(); // TODO: enum

    arbitratorInfo.save();
}

export function handleStakeAdded(event: StakeAdded): void {
    const arbitratorAddress = event.params.arbitrator.toHexString();
    const assetAddress = event.params.assetAddress.toHexString();
    const amount = event.params.amount;

    const arbitratorInfo = getArbitratorInfo(event.block, arbitratorAddress);

    if (assetAddress == ZERO_ADDRESS) // Native token staked - strict equality doesn't work here
        arbitratorInfo.ethAmount = arbitratorInfo.ethAmount.plus(amount);
    else
        throw new Error(`Non native add stake not implemented yet, asset address ${assetAddress} ${assetAddress.length} ${typeof assetAddress} ${ZERO_ADDRESS} ${typeof ZERO_ADDRESS} ${assetAddress === ZERO_ADDRESS}`);

    arbitratorInfo.save();
}

export function handleStakeWithdrawn(event: StakeWithdrawn): void {
    const arbitratorAddress = event.params.arbitrator.toHexString();
    const assetAddress = event.params.assetAddress.toHexString();
    const amount = event.params.amount;

    const arbitratorInfo = getArbitratorInfo(event.block, arbitratorAddress);

    if (assetAddress == ZERO_ADDRESS) // Native token staked - strict equality doesn't work here
        arbitratorInfo.ethAmount = arbitratorInfo.ethAmount.minus(amount);
    else
        throw new Error(`Non native withdraw stake not implemented yet, asset address ${assetAddress}`);

    arbitratorInfo.save();
}

export function handleArbitratorParamsSet(event: ArbitratorParamsSet): void {
    const arbitratorAddress = event.params.arbitrator.toHexString();
    const feeRate = event.params.feeRate;
    const deadline = event.params.deadline;

    const arbitratorInfo = getArbitratorInfo(event.block, arbitratorAddress);
    arbitratorInfo.currentFeeRate = feeRate;
    arbitratorInfo.lastArbitrationTime = deadline;

    arbitratorInfo.save();
}

export function handleArbitratorPaused(event: ArbitratorPaused): void {
    const arbitratorAddress = event.params.arbitrator.toHexString();

    const arbitratorInfo = getArbitratorInfo(event.block, arbitratorAddress);
    arbitratorInfo.status = "Paused";

    arbitratorInfo.save();
}

export function handleArbitratorUnpaused(event: ArbitratorUnpaused): void {
    const arbitratorAddress = event.params.arbitrator.toHexString();

    const arbitratorInfo = getArbitratorInfo(event.block, arbitratorAddress);
    arbitratorInfo.status = "Active";

    arbitratorInfo.save();
}

// Stub for handling OwnershipTransferred event
export function handleOwnershipTransferred(event: OwnershipTransferred): void {
    // TODO: Implement logic
}

export function handleRevenueAddressesSet(event: RevenueAddressesSet): void {
    const arbitratorAddress = event.params.arbitrator.toHexString();

    const arbitratorInfo = getArbitratorInfo(event.block, arbitratorAddress);
    arbitratorInfo.operatorEvmAddress = event.params.ethAddress.toHexString();
    arbitratorInfo.operatorBtcAddress = event.params.btcAddress;
    arbitratorInfo.operatorBtcPubKey = event.params.btcPubKey.toHexString();

    arbitratorInfo.save();
}

export function handleOperatorSet(event: OperatorSet): void {
    const arbitratorAddress = event.params.arbitrator.toHexString();

    const arbitratorInfo = getArbitratorInfo(event.block, arbitratorAddress);
    arbitratorInfo.operatorEvmAddress = event.params.operator.toHexString();
    arbitratorInfo.operatorBtcAddress = event.params.btcAddress;
    arbitratorInfo.operatorBtcPubKey = event.params.btcPubKey.toHexString();

    arbitratorInfo.save();
}

/**
 * Gets the existing arbitrator info if any, otherwise creates a new one.
 */
function getArbitratorInfo(block: ethereum.Block, arbitratorAddress: string): ArbitratorInfo {
    let existingArbitrator = ArbitratorInfo.load(arbitratorAddress);

    if (existingArbitrator) {
        log.debug("USING EXISTING INFO {}", [arbitratorAddress]);
        return existingArbitrator;
    }

    log.debug("CREATING NEW INFO {}", [arbitratorAddress]);

    const arbitratorInfo = new ArbitratorInfo(arbitratorAddress);
    arbitratorInfo.createdAt = block.timestamp;
    arbitratorInfo.address = arbitratorAddress;
    arbitratorInfo.status = "Paused";
    arbitratorInfo.ethAmount = new BigInt(0);

    return arbitratorInfo;
}

/**
 * Block-flexible mapping that adjust potential changes in contract enums (order change, deletions...) into
 * more stable graphql values.
 *
 * TODO: check block height to know when contract gets breaking changes in order to handle changing order type values differently.
 */
// function contractToGqlOrderType(contractOrderType: i32, blockHeight: number): GqlOrderType {
//   switch (contractOrderType) {
//     case 0: return "BORROW";
//     case 1: return "LENDING";
//     default: throw new Error(`Unhandled contract order type value ${contractOrderType}`)
//   }
// }