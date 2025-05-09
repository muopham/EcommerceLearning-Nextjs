"use client";
import Link from "next/link";
import { useMobileMenu } from "@/context/MobileMenuContext";
import SearchBar from "./SearchBar";
import { useSearchProducts } from "@/hooks/useSearchProducts";

export default function MobileMenu() {
  const { isOpen, close: closeMenu } = useMobileMenu();

  const { searchQuery, setSearchQuery, handleSearch } =
    useSearchProducts(closeMenu);

  return (
    <>
      <div className="mt-4 md:hidden">
        <div className="relative">
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            onSubmit={handleSearch}
          />
        </div>
      </div>

      <div className={`md:hidden mt-4 pb-2 ${isOpen ? "block" : "hidden"}`}>
        <nav className="flex flex-col space-y-2">
          {["Home", "Products", "Categories", "About"].map((item) => (
            <Link
              key={item}
              href={
                item === "Home" ? "/" : item === "Products" ? "/products" : "#"
              }
              onClick={closeMenu}
              className="font-medium hover:text-blue-600 transition-colors py-2 border-b border-gray-100"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
