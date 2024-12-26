// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ArbitrationRequested extends ethereum.Event {
  get params(): ArbitrationRequested__Params {
    return new ArbitrationRequested__Params(this);
  }
}

export class ArbitrationRequested__Params {
  _event: ArbitrationRequested;

  constructor(event: ArbitrationRequested) {
    this._event = event;
  }

  get dapp(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get txId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class ArbitrationSubmitted extends ethereum.Event {
  get params(): ArbitrationSubmitted__Params {
    return new ArbitrationSubmitted__Params(this);
  }
}

export class ArbitrationSubmitted__Params {
  _event: ArbitrationSubmitted;

  constructor(event: ArbitrationSubmitted) {
    this._event = event;
  }

  get dapp(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get txId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class CompensationManagerInitialized extends ethereum.Event {
  get params(): CompensationManagerInitialized__Params {
    return new CompensationManagerInitialized__Params(this);
  }
}

export class CompensationManagerInitialized__Params {
  _event: CompensationManagerInitialized;

  constructor(event: CompensationManagerInitialized) {
    this._event = event;
  }

  get compensationManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SetArbitratorManager extends ethereum.Event {
  get params(): SetArbitratorManager__Params {
    return new SetArbitratorManager__Params(this);
  }
}

export class SetArbitratorManager__Params {
  _event: SetArbitratorManager;

  constructor(event: SetArbitratorManager) {
    this._event = event;
  }

  get arbitratorManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TransactionCancelled extends ethereum.Event {
  get params(): TransactionCancelled__Params {
    return new TransactionCancelled__Params(this);
  }
}

export class TransactionCancelled__Params {
  _event: TransactionCancelled;

  constructor(event: TransactionCancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class TransactionCompleted extends ethereum.Event {
  get params(): TransactionCompleted__Params {
    return new TransactionCompleted__Params(this);
  }
}

export class TransactionCompleted__Params {
  _event: TransactionCompleted;

  constructor(event: TransactionCompleted) {
    this._event = event;
  }

  get dapp(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get txId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class TransactionCreated extends ethereum.Event {
  get params(): TransactionCreated__Params {
    return new TransactionCreated__Params(this);
  }
}

export class TransactionCreated__Params {
  _event: TransactionCreated;

  constructor(event: TransactionCreated) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get sender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get arbitrator(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TransactionRegistered extends ethereum.Event {
  get params(): TransactionRegistered__Params {
    return new TransactionRegistered__Params(this);
  }
}

export class TransactionRegistered__Params {
  _event: TransactionRegistered;

  constructor(event: TransactionRegistered) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get dapp(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get arbitrator(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TransactionManager__getTransactionResultValue0Struct extends ethereum.Tuple {
  get dapp(): Address {
    return this[0].toAddress();
  }

  get arbitrator(): Address {
    return this[1].toAddress();
  }

  get startTime(): BigInt {
    return this[2].toBigInt();
  }

  get deadline(): BigInt {
    return this[3].toBigInt();
  }

  get btcTx(): Bytes {
    return this[4].toBytes();
  }

  get btcTxHash(): Bytes {
    return this[5].toBytes();
  }

  get status(): i32 {
    return this[6].toI32();
  }

  get depositedFee(): BigInt {
    return this[7].toBigInt();
  }

  get signature(): Bytes {
    return this[8].toBytes();
  }

  get compensationReceiver(): Address {
    return this[9].toAddress();
  }

  get timeoutCompensationReceiver(): Address {
    return this[10].toAddress();
  }

  get utxos(): Array<TransactionManager__getTransactionResultValue0UtxosStruct> {
    return this[11].toTupleArray<TransactionManager__getTransactionResultValue0UtxosStruct>();
  }
}

export class TransactionManager__getTransactionResultValue0UtxosStruct extends ethereum.Tuple {
  get txHash(): Bytes {
    return this[0].toBytes();
  }

  get index(): BigInt {
    return this[1].toBigInt();
  }

  get script(): Bytes {
    return this[2].toBytes();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }
}

export class TransactionManager__getTransactionByIdResultValue0Struct extends ethereum.Tuple {
  get dapp(): Address {
    return this[0].toAddress();
  }

  get arbitrator(): Address {
    return this[1].toAddress();
  }

  get startTime(): BigInt {
    return this[2].toBigInt();
  }

  get deadline(): BigInt {
    return this[3].toBigInt();
  }

  get btcTx(): Bytes {
    return this[4].toBytes();
  }

  get btcTxHash(): Bytes {
    return this[5].toBytes();
  }

  get status(): i32 {
    return this[6].toI32();
  }

  get depositedFee(): BigInt {
    return this[7].toBigInt();
  }

  get signature(): Bytes {
    return this[8].toBytes();
  }

  get compensationReceiver(): Address {
    return this[9].toAddress();
  }

  get timeoutCompensationReceiver(): Address {
    return this[10].toAddress();
  }

  get utxos(): Array<TransactionManager__getTransactionByIdResultValue0UtxosStruct> {
    return this[11].toTupleArray<TransactionManager__getTransactionByIdResultValue0UtxosStruct>();
  }
}

export class TransactionManager__getTransactionByIdResultValue0UtxosStruct extends ethereum.Tuple {
  get txHash(): Bytes {
    return this[0].toBytes();
  }

  get index(): BigInt {
    return this[1].toBigInt();
  }

  get script(): Bytes {
    return this[2].toBytes();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }
}

export class TransactionManager__transactionsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: Bytes;
  value5: Bytes;
  value6: i32;
  value7: BigInt;
  value8: Bytes;
  value9: Address;
  value10: Address;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: Bytes,
    value5: Bytes,
    value6: i32,
    value7: BigInt,
    value8: Bytes,
    value9: Address,
    value10: Address,
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
    this.value10 = value10;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromBytes(this.value4));
    map.set("value5", ethereum.Value.fromFixedBytes(this.value5));
    map.set(
      "value6",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value6)),
    );
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromBytes(this.value8));
    map.set("value9", ethereum.Value.fromAddress(this.value9));
    map.set("value10", ethereum.Value.fromAddress(this.value10));
    return map;
  }

  getDapp(): Address {
    return this.value0;
  }

  getArbitrator(): Address {
    return this.value1;
  }

  getStartTime(): BigInt {
    return this.value2;
  }

  getDeadline(): BigInt {
    return this.value3;
  }

  getBtcTx(): Bytes {
    return this.value4;
  }

  getBtcTxHash(): Bytes {
    return this.value5;
  }

  getStatus(): i32 {
    return this.value6;
  }

  getDepositedFee(): BigInt {
    return this.value7;
  }

  getSignature(): Bytes {
    return this.value8;
  }

  getCompensationReceiver(): Address {
    return this.value9;
  }

  getTimeoutCompensationReceiver(): Address {
    return this.value10;
  }
}

export class TransactionManager__transferArbitrationFeeResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getArbitratorFee(): BigInt {
    return this.value0;
  }

  getSystemFee(): BigInt {
    return this.value1;
  }
}

export class TransactionManager extends ethereum.SmartContract {
  static bind(address: Address): TransactionManager {
    return new TransactionManager("TransactionManager", address);
  }

  arbitratorManager(): Address {
    let result = super.call(
      "arbitratorManager",
      "arbitratorManager():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_arbitratorManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "arbitratorManager",
      "arbitratorManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  compensationManager(): Address {
    let result = super.call(
      "compensationManager",
      "compensationManager():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_compensationManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "compensationManager",
      "compensationManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  configManager(): Address {
    let result = super.call("configManager", "configManager():(address)", []);

    return result[0].toAddress();
  }

  try_configManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "configManager",
      "configManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  dappRegistry(): Address {
    let result = super.call("dappRegistry", "dappRegistry():(address)", []);

    return result[0].toAddress();
  }

  try_dappRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall("dappRegistry", "dappRegistry():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRegisterTransactionFee(deadline: BigInt, arbitrator: Address): BigInt {
    let result = super.call(
      "getRegisterTransactionFee",
      "getRegisterTransactionFee(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(deadline),
        ethereum.Value.fromAddress(arbitrator),
      ],
    );

    return result[0].toBigInt();
  }

  try_getRegisterTransactionFee(
    deadline: BigInt,
    arbitrator: Address,
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRegisterTransactionFee",
      "getRegisterTransactionFee(uint256,address):(uint256)",
      [
        ethereum.Value.fromUnsignedBigInt(deadline),
        ethereum.Value.fromAddress(arbitrator),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTransaction(
    txHash: Bytes,
  ): TransactionManager__getTransactionResultValue0Struct {
    let result = super.call(
      "getTransaction",
      "getTransaction(bytes32):((address,address,uint256,uint256,bytes,bytes32,uint8,uint256,bytes,address,address,(bytes32,uint32,bytes,uint256)[]))",
      [ethereum.Value.fromFixedBytes(txHash)],
    );

    return changetype<TransactionManager__getTransactionResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_getTransaction(
    txHash: Bytes,
  ): ethereum.CallResult<TransactionManager__getTransactionResultValue0Struct> {
    let result = super.tryCall(
      "getTransaction",
      "getTransaction(bytes32):((address,address,uint256,uint256,bytes,bytes32,uint8,uint256,bytes,address,address,(bytes32,uint32,bytes,uint256)[]))",
      [ethereum.Value.fromFixedBytes(txHash)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TransactionManager__getTransactionResultValue0Struct>(
        value[0].toTuple(),
      ),
    );
  }

  getTransactionById(
    id: Bytes,
  ): TransactionManager__getTransactionByIdResultValue0Struct {
    let result = super.call(
      "getTransactionById",
      "getTransactionById(bytes32):((address,address,uint256,uint256,bytes,bytes32,uint8,uint256,bytes,address,address,(bytes32,uint32,bytes,uint256)[]))",
      [ethereum.Value.fromFixedBytes(id)],
    );

    return changetype<TransactionManager__getTransactionByIdResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_getTransactionById(
    id: Bytes,
  ): ethereum.CallResult<TransactionManager__getTransactionByIdResultValue0Struct> {
    let result = super.tryCall(
      "getTransactionById",
      "getTransactionById(bytes32):((address,address,uint256,uint256,bytes,bytes32,uint8,uint256,bytes,address,address,(bytes32,uint32,bytes,uint256)[]))",
      [ethereum.Value.fromFixedBytes(id)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TransactionManager__getTransactionByIdResultValue0Struct>(
        value[0].toTuple(),
      ),
    );
  }

  isAbleCompletedTransaction(id: Bytes): boolean {
    let result = super.call(
      "isAbleCompletedTransaction",
      "isAbleCompletedTransaction(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(id)],
    );

    return result[0].toBoolean();
  }

  try_isAbleCompletedTransaction(id: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isAbleCompletedTransaction",
      "isAbleCompletedTransaction(bytes32):(bool)",
      [ethereum.Value.fromFixedBytes(id)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  transactions(param0: Bytes): TransactionManager__transactionsResult {
    let result = super.call(
      "transactions",
      "transactions(bytes32):(address,address,uint256,uint256,bytes,bytes32,uint8,uint256,bytes,address,address)",
      [ethereum.Value.fromFixedBytes(param0)],
    );

    return new TransactionManager__transactionsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBytes(),
      result[5].toBytes(),
      result[6].toI32(),
      result[7].toBigInt(),
      result[8].toBytes(),
      result[9].toAddress(),
      result[10].toAddress(),
    );
  }

  try_transactions(
    param0: Bytes,
  ): ethereum.CallResult<TransactionManager__transactionsResult> {
    let result = super.tryCall(
      "transactions",
      "transactions(bytes32):(address,address,uint256,uint256,bytes,bytes32,uint8,uint256,bytes,address,address)",
      [ethereum.Value.fromFixedBytes(param0)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TransactionManager__transactionsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBytes(),
        value[5].toBytes(),
        value[6].toI32(),
        value[7].toBigInt(),
        value[8].toBytes(),
        value[9].toAddress(),
        value[10].toAddress(),
      ),
    );
  }

  transferArbitrationFee(
    id: Bytes,
  ): TransactionManager__transferArbitrationFeeResult {
    let result = super.call(
      "transferArbitrationFee",
      "transferArbitrationFee(bytes32):(uint256,uint256)",
      [ethereum.Value.fromFixedBytes(id)],
    );

    return new TransactionManager__transferArbitrationFeeResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
    );
  }

  try_transferArbitrationFee(
    id: Bytes,
  ): ethereum.CallResult<TransactionManager__transferArbitrationFeeResult> {
    let result = super.tryCall(
      "transferArbitrationFee",
      "transferArbitrationFee(bytes32):(uint256,uint256)",
      [ethereum.Value.fromFixedBytes(id)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TransactionManager__transferArbitrationFeeResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
      ),
    );
  }

  txHashToId(param0: Bytes): Bytes {
    let result = super.call("txHashToId", "txHashToId(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(param0),
    ]);

    return result[0].toBytes();
  }

  try_txHashToId(param0: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall("txHashToId", "txHashToId(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(param0),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CompleteTransactionCall extends ethereum.Call {
  get inputs(): CompleteTransactionCall__Inputs {
    return new CompleteTransactionCall__Inputs(this);
  }

  get outputs(): CompleteTransactionCall__Outputs {
    return new CompleteTransactionCall__Outputs(this);
  }
}

export class CompleteTransactionCall__Inputs {
  _call: CompleteTransactionCall;

  constructor(call: CompleteTransactionCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CompleteTransactionCall__Outputs {
  _call: CompleteTransactionCall;

  constructor(call: CompleteTransactionCall) {
    this._call = call;
  }
}

export class InitCompensationManagerCall extends ethereum.Call {
  get inputs(): InitCompensationManagerCall__Inputs {
    return new InitCompensationManagerCall__Inputs(this);
  }

  get outputs(): InitCompensationManagerCall__Outputs {
    return new InitCompensationManagerCall__Outputs(this);
  }
}

export class InitCompensationManagerCall__Inputs {
  _call: InitCompensationManagerCall;

  constructor(call: InitCompensationManagerCall) {
    this._call = call;
  }

  get _compensationManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitCompensationManagerCall__Outputs {
  _call: InitCompensationManagerCall;

  constructor(call: InitCompensationManagerCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _arbitratorManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _dappRegistry(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _configManager(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RegisterTransactionCall extends ethereum.Call {
  get inputs(): RegisterTransactionCall__Inputs {
    return new RegisterTransactionCall__Inputs(this);
  }

  get outputs(): RegisterTransactionCall__Outputs {
    return new RegisterTransactionCall__Outputs(this);
  }
}

export class RegisterTransactionCall__Inputs {
  _call: RegisterTransactionCall;

  constructor(call: RegisterTransactionCall) {
    this._call = call;
  }

  get utxos(): Array<RegisterTransactionCallUtxosStruct> {
    return this._call.inputValues[0].value.toTupleArray<RegisterTransactionCallUtxosStruct>();
  }

  get arbitrator(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get deadline(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get compensationReceiver(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class RegisterTransactionCall__Outputs {
  _call: RegisterTransactionCall;

  constructor(call: RegisterTransactionCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class RegisterTransactionCallUtxosStruct extends ethereum.Tuple {
  get txHash(): Bytes {
    return this[0].toBytes();
  }

  get index(): BigInt {
    return this[1].toBigInt();
  }

  get script(): Bytes {
    return this[2].toBytes();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RequestArbitrationCall extends ethereum.Call {
  get inputs(): RequestArbitrationCall__Inputs {
    return new RequestArbitrationCall__Inputs(this);
  }

  get outputs(): RequestArbitrationCall__Outputs {
    return new RequestArbitrationCall__Outputs(this);
  }
}

export class RequestArbitrationCall__Inputs {
  _call: RequestArbitrationCall;

  constructor(call: RequestArbitrationCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get btcTx(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get timeoutCompensationReceiver(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class RequestArbitrationCall__Outputs {
  _call: RequestArbitrationCall;

  constructor(call: RequestArbitrationCall) {
    this._call = call;
  }
}

export class SetArbitratorManagerCall extends ethereum.Call {
  get inputs(): SetArbitratorManagerCall__Inputs {
    return new SetArbitratorManagerCall__Inputs(this);
  }

  get outputs(): SetArbitratorManagerCall__Outputs {
    return new SetArbitratorManagerCall__Outputs(this);
  }
}

export class SetArbitratorManagerCall__Inputs {
  _call: SetArbitratorManagerCall;

  constructor(call: SetArbitratorManagerCall) {
    this._call = call;
  }

  get _arbitratorManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetArbitratorManagerCall__Outputs {
  _call: SetArbitratorManagerCall;

  constructor(call: SetArbitratorManagerCall) {
    this._call = call;
  }
}

export class SubmitArbitrationCall extends ethereum.Call {
  get inputs(): SubmitArbitrationCall__Inputs {
    return new SubmitArbitrationCall__Inputs(this);
  }

  get outputs(): SubmitArbitrationCall__Outputs {
    return new SubmitArbitrationCall__Outputs(this);
  }
}

export class SubmitArbitrationCall__Inputs {
  _call: SubmitArbitrationCall;

  constructor(call: SubmitArbitrationCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get btcTxSignature(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SubmitArbitrationCall__Outputs {
  _call: SubmitArbitrationCall;

  constructor(call: SubmitArbitrationCall) {
    this._call = call;
  }
}

export class TransferArbitrationFeeCall extends ethereum.Call {
  get inputs(): TransferArbitrationFeeCall__Inputs {
    return new TransferArbitrationFeeCall__Inputs(this);
  }

  get outputs(): TransferArbitrationFeeCall__Outputs {
    return new TransferArbitrationFeeCall__Outputs(this);
  }
}

export class TransferArbitrationFeeCall__Inputs {
  _call: TransferArbitrationFeeCall;

  constructor(call: TransferArbitrationFeeCall) {
    this._call = call;
  }

  get id(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class TransferArbitrationFeeCall__Outputs {
  _call: TransferArbitrationFeeCall;

  constructor(call: TransferArbitrationFeeCall) {
    this._call = call;
  }

  get arbitratorFee(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }

  get systemFee(): BigInt {
    return this._call.outputValues[1].value.toBigInt();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
