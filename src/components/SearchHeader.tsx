"use client";
import React, { useState } from "react";
import { Input } from "./ui/input";
import { Search, ShoppingCart, User, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function SearchHeader() {
  const route = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { toggleCart, getItemCount } = useCart();

  const itemCount = getItemCount();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      route.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      //   closeMobileMenu();
    }
  };
  return (
    <>
      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <form onSubmit={handleSearch}>
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-64"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </form>
        </div>
        <button className="text-gray-600 hover:text-blue-600 transition-colors">
          <User className="h-5 w-5" />
        </button>
        <button
          className="text-gray-600 hover:text-blue-600 transition-colors relative"
          onClick={toggleCart}
        >
          <ShoppingCart className="h-5 w-5" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Search */}

      <div className="mt-4 md:hidden">
        <form onSubmit={handleSearch}>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          </div>
        </form>
      </div>
    </>
  );
}
