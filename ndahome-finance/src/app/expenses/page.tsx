"use client";
import {ArrowUpRight} from "lucide-react";
import {useFinance} from "@/components/FinanceProvider";
import {money,totals} from "@/lib/finance";
import {TransactionTable} from "@/components/TransactionTable";
export default function ExpensesPage(){const {transactions}=useFinance();const rows=transactions.filter(t=>t.type==="expense");return <div className="page-stack"><div className="page-heading"><div><div className="eyebrow">QUẢN LÝ TÀI CHÍNH</div><h1>Quản lý khoản chi</h1><p>Kiểm soát chi phí và tối ưu ngân sách hoạt động.</p></div></div><div className="summary-strip"><div className="summary-symbol red"><ArrowUpRight/></div><div><small>TỔNG CHI TOÀN KỲ MẪU</small><strong>{money(totals(rows).expense)}</strong></div><span>{rows.length} khoản chi</span></div><TransactionTable type="expense"/></div>}
