import { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "./Loading";
import { getProduct, getRelatedProducts } from "@/app/action";
import ProductDetails from "./ProductDetails";
import ProductBreadcrumb from "./ProductBreadcrumb";
import RelatedProducts from "./RelatedProducts";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const { id } = await props.params;
  const product = await getProduct(id);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: `${product.name} | NextShop`,
    description: product.description,
  };
}

export default async function ProductPage(props: PageProps) {
  const { id } = await props.params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = await getRelatedProducts(
    product.category,
    product.id
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductBreadcrumb product={product} />

      <div className="bg-white rounded-lg shadow-sm p-6">
        <Suspense fallback={<Loading />}>
          <ProductDetails product={product} />
          <RelatedProducts products={relatedProducts} />
        </Suspense>
      </div>
    </div>
  );
}
