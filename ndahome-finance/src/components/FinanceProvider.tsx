"use client";
import {createContext,useCallback,useContext,useEffect,useMemo,useState} from "react";
import {initialTransactions,Transaction} from "@/lib/finance";
const KEY="ndahome-finance-demo-v1";
type FinanceContextValue = {transactions:Transaction[]; ready:boolean; save:(item:Transaction)=>void; remove:(id:string)=>void; reset:()=>void};
const FinanceContext=createContext<FinanceContextValue|null>(null);
export function FinanceProvider({children}:{children:React.ReactNode}){
  const [transactions,setTransactions]=useState<Transaction[]>(initialTransactions);
  const [ready,setReady]=useState(false);
  useEffect(()=>{
    try {const raw=localStorage.getItem(KEY); if(raw){const data:unknown=JSON.parse(raw);if(Array.isArray(data)) setTransactions(data as Transaction[]);}}catch{ /* ignore broken demo cache */ }
    setReady(true);
  },[]);
  useEffect(()=>{if(ready) localStorage.setItem(KEY,JSON.stringify(transactions));},[transactions,ready]);
  const save=useCallback((item:Transaction)=>setTransactions(old=>old.some(x=>x.id===item.id)?old.map(x=>x.id===item.id?item:x):[item,...old]),[]);
  const remove=useCallback((id:string)=>setTransactions(old=>old.filter(x=>x.id!==id)),[]);
  const reset=useCallback(()=>setTransactions(initialTransactions),[]);
  const value=useMemo(()=>({transactions,ready,save,remove,reset}),[transactions,ready,save,remove,reset]);
  return <FinanceContext.Provider value={value}>{children}</FinanceContext.Provider>;
}
export function useFinance(){const data=useContext(FinanceContext);if(!data)throw new Error("FinanceProvider missing");return data;}
