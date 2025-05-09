import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function PromotionBanner() {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold mb-2">Summer Sale is On!</h2>
            <p className="text-blue-100">
              Get up to 40% off on selected items. Limited time offer.
            </p>
          </div>
          <Link href={"/products"}>
            <Button
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              size="lg"
              variant="outline"
            >
              Shop Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
