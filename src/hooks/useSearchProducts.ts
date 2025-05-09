"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useSearchProducts(onAfterSearch?: () => void) {
  const [searchQuery, setSearchQuery] = useState("");
  const route = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      route.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      onAfterSearch?.();
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    handleSearch,
  };
}
