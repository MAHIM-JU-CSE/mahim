import type { Metadata } from "next";
import { GeistSans, GeistMono } from 'geist/font'
import "./globals.css";
import ThemeRegistry from "@/src/theme/ThemeRegistry";

const geistSans = GeistSans;
const geistMono = GeistMono;

export const metadata: Metadata = {
  title: "Mahbub Islam Mahim",
  description: "A modern web application with a stylized M logo",
  icons: {
    icon: '/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
