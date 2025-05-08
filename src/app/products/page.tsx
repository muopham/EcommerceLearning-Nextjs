import { Suspense } from "react";
import ProductsPage from "./ProductPage";
import Loading from "./Loading";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductsPage />
    </Suspense>
  );
}
