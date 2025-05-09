import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Discover Modern Essentials for Your Lifestyle
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Shop the latest trends with NextShop's curated collection of
              premium products.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/products">
                <Button
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  size="lg"
                >
                  Shop Now
                </Button>
              </Link>
              <Button
                className="px-8 py-3 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                variant="outline"
                size="lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Premium Products Showcase"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
