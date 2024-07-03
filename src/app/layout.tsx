import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";

import { Providers } from "../providers";

import "../css/app.scss";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const robotoMono = Roboto_Mono({
  weight: ["400"],
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[robotoMono.variable, inter.variable].join(" ")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
