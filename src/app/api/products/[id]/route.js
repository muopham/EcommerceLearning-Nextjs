import { mockProducts } from "@/app/api/data";

export async function GET(request, { params }) {
  const { id } = await params;
  const product = mockProducts.find((comment) => comment.id === parseInt(id));
  //   console.log(product);
  if (!product) {
    return new Response("Comment not found", { status: 404 });
  }
  return new Response(JSON.stringify(product), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
