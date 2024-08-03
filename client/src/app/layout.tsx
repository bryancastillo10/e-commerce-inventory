import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import DashboardContainer from "./(components)/DashboardContainer";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-commerce Inventory Management",
  description: "Next JS App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <DashboardContainer>
          {children}
        </DashboardContainer>
      </body>
    </html>
  );
}
