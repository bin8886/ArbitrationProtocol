import { BPosNFT as BPosNFTDTO } from "@/services/subgraph/dto/bpos-nft";
import { Expose, Transform } from "class-transformer";

export class BPosNFT implements Omit<BPosNFTDTO, "createdAt"> {
  @Expose() public id: string;
  @Expose() @Transform(({ value }) => new Date(value * 1000)) public createdAt: Date;
  @Expose() public owner: string;
  @Expose() public tokenId: string;
}