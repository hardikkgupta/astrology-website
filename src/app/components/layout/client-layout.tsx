"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Header from "./header";
import Footer from "./footer";
import ScrollToTop from "../scroll-to-top";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideLayout = false;

  return (
    <ThemeProvider
      attribute="class"
      enableSystem={false}
      defaultTheme="light"
      forcedTheme="light"
    >
      {!hideLayout && <Header />}
      {children}
      {!hideLayout && <Footer />}
      <ScrollToTop />
    </ThemeProvider>
  );
}

