import { useActiveEVMChainConfig } from "@/services/chains/hooks/useActiveEVMChainConfig";
import { useBehaviorSubject } from "@/utils/useBehaviorSubject";
import { useCallback, useEffect } from "react";
import { BehaviorSubject } from "rxjs";
import { fetchArbiters as fetchArbitersApi } from "../arbiters.service";
import { ArbiterInfo } from "../model/arbiter-info";
import { useArbiterIsActive } from "./contract/useArbiterIsActive";
import { useMultiArbiterIsActive } from "./contract/useMultiArbiterIsActive";

const state$ = new BehaviorSubject<{
  wasFetched: boolean; // Fetching has been tried once
  isPending: boolean; // Fetching is in progress
  arbiters?: ArbiterInfo[];
}>({ isPending: false, wasFetched: false });

export const useArbiters = () => {
  const activeChain = useActiveEVMChainConfig();
  const state = useBehaviorSubject(state$);
  const { fetchArbiterIsActive } = useArbiterIsActive();
  const { fetchMultiArbiterIsActive } = useMultiArbiterIsActive();

  const fetchArbiters = useCallback(async () => {
    state$.next({ isPending: true, wasFetched: false });
    if (activeChain) {
      const { arbiters } = await fetchArbitersApi(activeChain);

      if (arbiters) {
        const isActives = await fetchMultiArbiterIsActive(arbiters?.map(arbiter => arbiter.id));
        for (const arbiter of arbiters) {
          arbiter.isActive = isActives?.find(s => s.id === arbiter.id)?.isActive || undefined;
        }
      }

      state$.next({ isPending: false, wasFetched: true, arbiters });
    }
  }, [activeChain, fetchMultiArbiterIsActive]);

  // Initial lazy fetch (first access)
  useEffect(() => {
    if (!state.wasFetched && !state.isPending)
      void fetchArbiters();
  }, [fetchArbiters, state]);

  return { fetchArbiters, ...state }
}