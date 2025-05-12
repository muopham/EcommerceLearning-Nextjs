"use server";
import { Product } from "@/../shared/schema";

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch product details");
  }
}

export async function getProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error(`Failed to fetch product: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/products/featured`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch featured products: ${response.statusText}`
      );
    }

    return response.json();
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}

export async function getRelatedProducts(
  category: string,
  currentProductId: number
): Promise<Product[]> {
  try {
    const products: Product[] = await getProducts();

    return products
      .filter(
        (product) =>
          product.category === category && product?.id !== currentProductId
      )
      .slice(0, 4); // Limit to 4 related products
  } catch (error) {
    console.error("Error fetching related products:", error);
    return [];
  }
}
