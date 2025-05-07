import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import SearchHeader from "./SearchHeader";
import MobileHeader from "./MobileHeader";

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
            <Link
              href="/"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              Products
            </Link>
            <Link
              href="#"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              Categories
            </Link>
            <Link
              href="#"
              className="font-medium hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Actions */}
          <SearchHeader />
        </div>
        {/* Mobile Navigation */}
        <MobileHeader />
      </div>
    </header>
  );
}
