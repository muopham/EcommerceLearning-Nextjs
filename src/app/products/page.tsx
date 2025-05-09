import { Suspense } from "react";
import ProductsPage from "./ProductPage";
import Loading from "./Loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Your one-stop shop for modern essentials.",
};
export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsPage />
    </Suspense>
  );
}
