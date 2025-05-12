import { Product } from "@/../shared/schema";
import ProductCard from "@/components/ProductCard";

interface RelatedProductsProps {
  products: Product[];
}

export default function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products?.length) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.map((products) => (
          <ProductCard
            key={products.id}
            id={products.id}
            name={products.name}
            description={products.description}
            price={products.price}
            imageUrl={products.imageUrl}
            rating={products.rating || "0"}
            reviewCount={products.reviewCount || 0}
            isNew={products.isNew ?? undefined}
            onSale={products.onSale ?? undefined}
            originalPrice={products.originalPrice ?? undefined}
          />
        ))}
      </div>
    </div>
  );
}
