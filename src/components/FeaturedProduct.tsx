"use client";
import { useQuery } from "@tanstack/react-query";
import { Product } from "../../shared/schema";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";
export default function FeaturedProduct() {
  const {
    data: featuredProducts,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["/api/products/featured"],
  });
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link href={"/products"}>
            <Button
              variant="link"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts?.map((product) => (
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
      </div>
    </section>
  );
}
