"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {LayoutDashboard,ArrowDownLeft,ArrowUpRight,ArrowLeftRight,ChartNoAxesCombined,House,PanelLeftClose,X} from "lucide-react";
const links=[{href:"/",name:"Tổng quan",icon:LayoutDashboard},{href:"/income",name:"Khoản thu",icon:ArrowDownLeft},{href:"/expenses",name:"Khoản chi",icon:ArrowUpRight},{href:"/transactions",name:"Giao dịch",icon:ArrowLeftRight},{href:"/reports",name:"Báo cáo tài chính",icon:ChartNoAxesCombined}];
export function Sidebar({open,onClose}:{open:boolean;onClose:()=>void}){
 const path=usePathname();
 return <><div className={`mobile-scrim ${open?"visible":""}`} onClick={onClose}/><aside className={`sidebar ${open?"is-open":""}`}>
 <div className="brand"><div className="brand-icon"><House size={23} strokeWidth={2.4}/></div><div><div className="brand-title">NDA<span>HOME</span></div><div className="brand-sub">FINANCE MANAGEMENT</div></div><button className="icon-btn mobile-close" onClick={onClose} aria-label="Đóng menu"><X size={20}/></button></div>
 <div className="nav-label">KHÔNG GIAN LÀM VIỆC</div><nav className="nav-links">{links.map(({href,name,icon:Icon})=><Link key={href} href={href} onClick={onClose} className={`nav-link ${path===href?"active":""}`}><Icon size={19}/><span>{name}</span>{path===href&&<span className="nav-active-dot"/>}</Link>)}</nav>
 <div className="sidebar-bottom"><div className="help-card"><div className="help-icon"><PanelLeftClose size={18}/></div><strong>Quản trị dòng tiền</strong><p>Theo dõi thu chi và đưa ra quyết định hiệu quả hơn.</p></div><div className="sidebar-user"><div className="avatar">AD</div><div><strong>Quản trị viên</strong><small>Ban điều hành NDAHOME</small></div><span className="online-dot"/></div></div>
 </aside></>;
}
