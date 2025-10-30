import { allProducts } from "@/lib/products-data"
import ProductDetailClient from "./product-detail-client"

export function generateStaticParams() {
  return allProducts.map((product) => ({
    id: product.id,
  }))
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const { id } = params
  const product = allProducts.find((p) => p.id === id)

  if (!product) {
    // This case should ideally be handled by notFound from next/navigation in the client component
    // or by returning null/empty in a server component context if no product is found.
    // For this refactor, we assume notFound will be called in the client component if needed.
  }

  return <ProductDetailClient product={product} />
}
