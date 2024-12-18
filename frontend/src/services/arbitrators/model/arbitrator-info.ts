import { ArbitratorInfo as ArbitratorInfoDTO } from "@/services/subgraph/dto/arbitrator-info";
import { tokenToReadableValue } from "@/services/tokens/tokens";
import { Expose, Transform } from "class-transformer";

export class ArbitratorInfo implements Omit<ArbitratorInfoDTO, "ethAmount" | "createdAt"> {
  @Expose() public id: string;
  @Expose() public address: string;
  @Expose() @Transform(({ value }) => tokenToReadableValue(value, 18)) public ethAmount: bigint;
  @Expose() public status: string;
  @Expose() @Transform(({ value }) => new Date(value * 1000)) public createdAt: Date;
  @Expose() public lastArbitrationTime: number;
  @Expose() public currentFeeRate: number;
  @Expose() public pendingFeeRate: number;
  @Expose() public activeTransactionId: string;
  @Expose() public operatorEvmAddress: string;
  @Expose() public operatorBtcAddress: string;
  @Expose() public operatorBtcPubKey: string;

  public isPaused(): boolean {
    return this.status === "Paused"; // TODO: improve with enum
  }
}