import type {Metadata} from "next";
import "./globals.css";
import {AppShell} from "@/components/AppShell";
export const metadata:Metadata={title:"NDAHOME | Quản lý tài chính",description:"Hệ thống quản lý thu chi nội bộ NDAHOME - phiên bản demo"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="vi"><body><AppShell>{children}</AppShell></body></html>;}
