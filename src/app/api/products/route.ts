import { mockProducts } from "@/app/api/data";
export function GET() {
  return new Response(JSON.stringify(mockProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
