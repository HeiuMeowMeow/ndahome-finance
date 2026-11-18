"use client";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Bell,Menu,CalendarDays,ChevronDown} from "lucide-react";
import {FinanceProvider} from "./FinanceProvider";
import {Sidebar} from "./Sidebar";
const names:Record<string,string>={"/":"Tổng quan tài chính","/income":"Quản lý khoản thu","/expenses":"Quản lý khoản chi","/transactions":"Quản lý giao dịch","/reports":"Báo cáo tài chính"};
export function AppShell({children}:{children:React.ReactNode}){const [open,setOpen]=useState(false);const path=usePathname();return <FinanceProvider><div className="app-shell"><Sidebar open={open} onClose={()=>setOpen(false)}/><div className="main-wrap"><header className="topbar"><div className="top-left"><button className="icon-btn menu-trigger" onClick={()=>setOpen(true)} aria-label="Mở menu"><Menu size={22}/></button><div className="breadcrumb">Trang chủ <span>/</span> <strong>{names[path]||"Tài chính"}</strong></div></div><div className="top-right"><div className="top-date"><CalendarDays size={16}/> 18/11/2026 <ChevronDown size={14}/></div><button className="icon-btn bell-btn" title="Thông báo mẫu" aria-label="Thông báo"><Bell size={19}/><i/></button><div className="top-avatar">AD</div></div></header><main className="page-content">{children}</main></div></div></FinanceProvider>}
