export type TransactionType = "income" | "expense";
export type Transaction = {
  id: string;
  type: TransactionType;
  title: string;
  category: string;
  amount: number;
  date: string;
  method: string;
  note: string;
};
export const incomeCategories = ["Bán hàng", "Dịch vụ", "Thu công nợ", "Đầu tư", "Thu khác"];
export const expenseCategories = ["Vận hành", "Nhân sự", "Marketing", "Mặt bằng", "Vật tư", "Chi khác"];
export const methods = ["Chuyển khoản", "Tiền mặt", "Ví điện tử"];
export const initialTransactions: Transaction[] = [
  {id:"ND001", type:"income",title:"Thanh toán hợp đồng thiết kế căn hộ",category:"Dịch vụ",amount:85000000,date:"2026-11-18",method:"Chuyển khoản",note:"Khách hàng Nguyễn Minh"},
  {id:"ND002", type:"expense",title:"Chi phí quảng cáo Facebook",category:"Marketing",amount:12500000,date:"2026-11-18",method:"Chuyển khoản",note:"Chiến dịch tháng 11"},
  {id:"ND003", type:"income",title:"Doanh thu đơn hàng nội thất",category:"Bán hàng",amount:46000000,date:"2026-11-17",method:"Chuyển khoản",note:""},
  {id:"ND004", type:"expense",title:"Thanh toán lương nhân viên",category:"Nhân sự",amount:38000000,date:"2026-11-16",method:"Chuyển khoản",note:""},
  {id:"ND005", type:"income",title:"Thu công nợ dự án Riverside",category:"Thu công nợ",amount:62500000,date:"2026-11-14",method:"Chuyển khoản",note:"Đợt 2"},
  {id:"ND006", type:"expense",title:"Mua vật tư thi công",category:"Vật tư",amount:24000000,date:"2026-11-13",method:"Tiền mặt",note:""},
  {id:"ND007", type:"income",title:"Phí tư vấn thiết kế showroom",category:"Dịch vụ",amount:18000000,date:"2026-11-11",method:"Tiền mặt",note:""},
  {id:"ND008", type:"expense",title:"Tiền thuê văn phòng",category:"Mặt bằng",amount:18000000,date:"2026-11-08",method:"Chuyển khoản",note:""},
  {id:"ND009", type:"income",title:"Thanh toán hợp đồng nhà phố",category:"Dịch vụ",amount:120000000,date:"2026-10-28",method:"Chuyển khoản",note:""},
  {id:"ND010", type:"expense",title:"Chi phí vận chuyển",category:"Vận hành",amount:9000000,date:"2026-10-24",method:"Tiền mặt",note:""},
  {id:"ND011", type:"income",title:"Đơn hàng sofa và bàn ăn",category:"Bán hàng",amount:35000000,date:"2026-09-25",method:"Chuyển khoản",note:""},
  {id:"ND012", type:"expense",title:"In ấn catalogue",category:"Marketing",amount:6000000,date:"2026-09-11",method:"Chuyển khoản",note:""},
  {id:"ND013", type:"income",title:"Phí thiết kế nội thất",category:"Dịch vụ",amount:59000000,date:"2026-08-20",method:"Chuyển khoản",note:""},
  {id:"ND014", type:"expense",title:"Nâng cấp máy tính",category:"Vận hành",amount:28000000,date:"2026-08-02",method:"Chuyển khoản",note:""},
  {id:"ND015", type:"income",title:"Thu từ công trình hoàn thiện",category:"Dịch vụ",amount:76000000,date:"2026-07-15",method:"Chuyển khoản",note:""},
  {id:"ND016", type:"expense",title:"Chi phí nhân công",category:"Nhân sự",amount:31000000,date:"2026-07-08",method:"Chuyển khoản",note:""}
];
export function money(amount:number) { return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",maximumFractionDigits:0}).format(amount); }
export function shortMoney(amount:number) {return `${new Intl.NumberFormat("vi-VN",{maximumFractionDigits:1}).format(amount/1000000)} tr`;}
export function dateLabel(date:string) { const [y,m,d] = date.split("-"); return `${d}/${m}/${y}`; }
export function totals(rows:Transaction[]) {return rows.reduce((a,r)=>{if(r.type==="income") a.income+=r.amount; else a.expense+=r.amount; return a;},{income:0,expense:0});}
export function monthKey(date:string){return date.slice(0,7);}
export function monthSeries(rows:Transaction[], count=6, anchor="2026-11") {
  const [year,month] = anchor.split("-").map(Number);
  return Array.from({length:count},(_,i)=>{
    const d = new Date(year,month-1-(count-1-i),1);
    const key=`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}`;
    const {income,expense}=totals(rows.filter(x=>monthKey(x.date)===key));
    return {name:`T${d.getMonth()+1}`,month:key,thu:income,chi:expense};
  });
}
