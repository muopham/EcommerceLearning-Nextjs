import { mockProducts } from "@/app/api/data";
export function GET() {
  const featuredProducts = mockProducts.filter((product) => product.featured);
  return new Response(JSON.stringify(featuredProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
