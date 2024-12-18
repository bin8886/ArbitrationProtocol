import { useActiveEVMChainConfig } from "@/services/chains/hooks/useActiveEVMChainConfig";
import { useCallback, useEffect, useState } from "react";
import { Transaction } from "../model/transaction";
import { fetchTransactions } from "../transactions.service";

export const useTransactions = (): { transactions: Transaction[] } => {
  const activeChain = useActiveEVMChainConfig();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const refreshTransactions = useCallback(() => {
    if (activeChain) {
      void fetchTransactions(activeChain, 0, 100).then(({ transactions: txs }) => {
        setTransactions(txs);
      });
    }
  }, [activeChain]);

  useEffect(() => {
    refreshTransactions();
  }, [refreshTransactions]);

  return { transactions }
}