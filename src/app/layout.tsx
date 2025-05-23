import type { Metadata } from "next";
import { CartProvider } from "@/context/CartContext";
import { MobileMenuProvider } from "@/context/MobileMenuContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ShoppingCart from "@/components/ShoppingCart";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextShop",
  description: "Your one-stop shop for modern essentials.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <Toaster />
              <div className="flex flex-col min-h-screen">
                <MobileMenuProvider>
                  <Header />
                </MobileMenuProvider>
                <main className="flex-grow">{children}</main>
                <Footer />
                <ShoppingCart />
              </div>
            </TooltipProvider>
          </QueryClientProvider>
        </CartProvider>
      </body>
    </html>
  );
}
