import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GoTV - 最佳海外电视直播应用",
  description: "GoTV提供700+高清电视直播频道，支持Android、iOS、Windows、Mac等平台。10年稳定服务，免费试看，无广告无限制。",
  keywords: "IPTV, 电视直播, 海外电视, 高清频道, 网络电视",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
