"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { Menu, X } from "lucide-react";

export default function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>
      <div
        className={`md:hidden mt-4 pb-2 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col space-y-2">
          <Link
            href="/"
            onClick={closeMobileMenu}
            className="font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
          >
            Home
          </Link>
          <Link
            href="/products"
            onClick={closeMobileMenu}
            className="font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
          >
            Products
          </Link>
          <Link
            href="#"
            onClick={closeMobileMenu}
            className="font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
          >
            Categories
          </Link>
          <Link
            href="#"
            onClick={closeMobileMenu}
            className="font-medium hover:text-blue-600 transition-colors py-2"
          >
            About
          </Link>
        </nav>
      </div>
    </>
  );
}
