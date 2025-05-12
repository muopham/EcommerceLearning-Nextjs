"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Error() {
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold text-red-500 mb-2">
          Error Loading Product
        </h2>
        <p className="mb-4">
          There was an error loading the product. Please try again later.
        </p>
        <Button onClick={() => router.push("/products")}>
          Return to Products
        </Button>
      </div>
    </div>
  );
}
