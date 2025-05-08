"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LayoutGrid, List } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
import { Product } from "../../../shared/schema";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import FiltersSidebar from "./FiltersSidebar";
import SortAndView from "./SortAndView";

export default function ProductsPage() {
  const route = useRouter();
  const pathname = usePathname();

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search");
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [categoryParam]);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const filteredProducts = products?.filter((product) => {
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    if (priceRange) {
      const price = parseFloat(product.price);
      if (priceRange === "under50" && price >= 50) return false;
      if (priceRange === "50to100" && (price < 50 || price > 100)) return false;
      if (priceRange === "100to200" && (price < 100 || price > 200))
        return false;
      if (priceRange === "over200" && price <= 200) return false;
    }
    if (selectedRatings.length > 0) {
      const rating = parseFloat(product.rating || "0");
      return selectedRatings.some((minRating) => rating >= minRating);
    }
    return true;
  });

  const sortedProducts = [...(filteredProducts || [])].sort((a, b) => {
    if (sortBy === "priceAsc") return parseFloat(a.price) - parseFloat(b.price);
    if (sortBy === "priceDesc")
      return parseFloat(b.price) - parseFloat(a.price);
    if (sortBy === "rating")
      return parseFloat(b.rating || "0") - parseFloat(a.rating || "0");
    if (sortBy === "newest") return b.id - a.id;
    return 0;
  });

  const toggleRatingFilter = (rating: number) => {
    setSelectedRatings((prevRatings) => {
      if (prevRatings.includes(rating)) {
        return prevRatings.filter((r) => r !== rating);
      } else {
        return [...prevRatings, rating];
      }
    });
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setPriceRange(null);
    setSelectedRatings([]);
    setSortBy("featured");
    route.push(pathname);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>All Products</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-3xl font-bold mb-6">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : selectedCategory
          ? selectedCategory
          : "All Products"}
      </h1>

      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/4 pr-0 lg:pr-8 mb-6 lg:mb-0">
          <FiltersSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            selectedRatings={selectedRatings}
            toggleRatingFilter={toggleRatingFilter}
            clearFilters={clearFilters}
          />
        </div>

        <div className="lg:w-3/4">
          <SortAndView
            viewMode={viewMode}
            setViewMode={setViewMode}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />

          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">
                Failed to load products. Please try again later.
              </p>
            </div>
          ) : sortedProducts?.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <p className="text-gray-500">
                No products found matching your criteria.
              </p>
              <Button
                variant="link"
                onClick={clearFilters}
                className="text-blue-600 hover:text-blue-800 mt-4"
              >
                Clear filters and try again
              </Button>
            </div>
          ) : (
            <div
              className={`grid ${
                viewMode === "grid"
                  ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1"
              } gap-6`}
            >
              {sortedProducts?.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  rating={product.rating || "0"}
                  reviewCount={product.reviewCount || 0}
                  isNew={product.isNew ?? undefined}
                  onSale={product.onSale ?? undefined}
                  originalPrice={product.originalPrice ?? undefined}
                />
              ))}
            </div>
          )}

          {/* {sortedProducts && sortedProducts.length > 0 && <Pagination />} */}
        </div>
      </div>
    </div>
  );
}
