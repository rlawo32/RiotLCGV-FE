import type { Metadata } from "next";
import Script from 'next/script';
import localFont from "next/font/local"
import "./globals.css";
import { ReactQueryClientProvider } from "./ReactQueryClientProvider";

// styled-components issus solution
import StyledComponentsRegistry from "./StyledComponentsRegistry";

// fontawesome issue solution
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// vercle analytics
import { Analytics } from '@vercel/analytics/react';

// font-family addition
const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Rabbit Gang LoL",
  description: "토끼파 롤 내전 전적",
  icons: {
    icon: "/rabbit.png",
  },
  /*
  twitter: {
    card: 'summary_large_image',
    title: 'Teamzza - 팀짜',
    description: '편리한 UI와 기능으로 팀을 구성하세요!',
    images: ['/rabbit.png'],
  },
  */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pretendard.variable}`}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8758982260086798"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={pretendard.className}>
        <ReactQueryClientProvider> 
          <StyledComponentsRegistry>
            {children}
            <Analytics />
          </StyledComponentsRegistry>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
