import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

import StyledComponentsRegistry from "./StyledComponentsRegistry";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Rabbit Gang LoL",
  description: "토끼파 롤 내전 전적",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider> 
      <html lang="en" className={`${pretendard.variable}`}>
        <body className={pretendard.className}>
          <StyledComponentsRegistry>
            {children}
          </StyledComponentsRegistry>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
