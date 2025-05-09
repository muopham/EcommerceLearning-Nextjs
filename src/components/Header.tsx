import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import HeaderAction from "./HeaderAction";
import HeaderMobileMenu from "./HeaderMobileMenu";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-blue-600 flex items-center"
          >
            <ShoppingBag className="mr-2" />
            <span>NextShop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Home", "Products", "Categories", "About"].map((item) => (
              <Link
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Products"
                    ? "/products"
                    : "#"
                }
                className="font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <HeaderAction />
        </div>
        {/* Mobile Navigation */}
        <HeaderMobileMenu />
      </div>
    </header>
  );
}
