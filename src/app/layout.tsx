import { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/layout/client-layout";

const manrope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "/images/logo/favicon.svg?v=3",
    shortcut: "/images/logo/favicon.svg?v=3",
    apple: "/images/logo/favicon.svg?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={manrope.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
