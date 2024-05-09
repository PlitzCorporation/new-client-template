import type { Metadata } from "next";
import "./globals.css";

import { primaryFont, secondaryFont } from "./FontSettings";

export const metadata: Metadata = {
  title: "Plitz7 New Project Template",
  description: "Generated by create next app with a touch of Plitz7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable} ${secondaryFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
