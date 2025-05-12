import { mockProducts } from "@/app/api/data";

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  const { category } = params;
  const products = mockProducts.filter(
    (product) => product.category === category
  );

  if (products.length === 0) {
    return new Response(JSON.stringify({ message: "No products found" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
