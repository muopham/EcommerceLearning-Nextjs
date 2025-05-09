"use client";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { User, ShoppingCart, Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import { useSearchProducts } from "@/hooks/useSearchProducts";
import { useMobileMenu } from "@/context/MobileMenuContext";

export default function Actions() {
  const { toggleCart, getItemCount } = useCart();
  const itemCount = getItemCount();

  const { isOpen, toggle, close } = useMobileMenu();

  const { searchQuery, setSearchQuery, handleSearch } =
    useSearchProducts(close);

  return (
    <div className="flex items-center space-x-4">
      <div className="relative hidden md:block">
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          onSubmit={handleSearch}
        />
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

      <button
        className="md:hidden text-gray-600 hover:text-blue-600 transition-colors"
        onClick={toggle}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
    </div>
  );
}
