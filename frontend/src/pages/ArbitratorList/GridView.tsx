import { StatusLabel } from "@/components/base/StatusLabel";
import { ArbitratorInfo } from "@/services/arbitrators/model/arbitrator-info";
import { useActiveChainNativeCoin } from "@/services/chains/hooks/useActiveChainNativeCoin";
import { useActiveEVMChainConfig } from "@/services/chains/hooks/useActiveEVMChainConfig";
import { formatDateWithoutYear } from "@/utils/dates";
import { formatAddress } from "@/utils/formatAddress";
import moment from "moment";
import { FC } from "react";

export const GridView: FC<{
  arbitrators: ArbitratorInfo[],
}> = ({ arbitrators }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {arbitrators.map((arbitrator) => <ArbitratorGridItem key={arbitrator.address} arbitrator={arbitrator} />)}
    </div>
  )
}

const ArbitratorGridItem: FC<{ arbitrator: ArbitratorInfo }> = ({ arbitrator }) => {
  const activeChain = useActiveEVMChainConfig();
  const termEnd = arbitrator.getTermEndDate();

  return <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-lg font-semibold">
        {arbitrator.address.slice(0, 6)}...{arbitrator.address.slice(-4)}
      </h3>
      <StatusLabel
        title={arbitrator.isPaused() ? 'Paused' : 'Active'}
        color={arbitrator.isPaused() ? 'red' : 'green'}
      />
    </div>
    <div className="space-y-3 text-sm">
      <div className="flex justify-between">
        <span className="text-gray-600">Operator</span>
        <span className="font-mono">{formatAddress(arbitrator.operatorEvmAddress)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Fee Rate</span>
        <span>{Number(arbitrator.currentFeeRate) / 100}%</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Term end</span>
        <span>{formatDateWithoutYear(termEnd)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Stake</span>
        <span>{Number(arbitrator.ethAmount)} {activeChain?.nativeCurrency.symbol}</span>
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="text-gray-600 mb-1">BTC Address</div>
        <div className="font-mono text-xs break-all">{formatAddress(arbitrator.operatorBtcAddress)}</div>
      </div>
    </div>
  </div>
}