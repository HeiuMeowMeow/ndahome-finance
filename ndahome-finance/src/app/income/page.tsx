"use client";
import {ArrowDownLeft} from "lucide-react";
import {useFinance} from "@/components/FinanceProvider";
import {money,totals} from "@/lib/finance";
import {TransactionTable} from "@/components/TransactionTable";
export default function IncomePage(){const {transactions}=useFinance();const rows=transactions.filter(t=>t.type==="income");return <div className="page-stack"><div className="page-heading"><div><div className="eyebrow">QUẢN LÝ TÀI CHÍNH</div><h1>Quản lý khoản thu</h1><p>Theo dõi tất cả nguồn thu và doanh thu của NDAHOME.</p></div></div><div className="summary-strip"><div className="summary-symbol green"><ArrowDownLeft/></div><div><small>TỔNG THU TOÀN KỲ MẪU</small><strong>{money(totals(rows).income)}</strong></div><span>{rows.length} khoản thu</span></div><TransactionTable type="income"/></div>}
