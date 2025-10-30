"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { allProducts } from "@/lib/products-data"

const categoryProducts = {
  "luxe-acrylaatletters": allProducts.filter((p) => p.category === "Luxe Acrylaatletters"),
  doosletters: allProducts.filter((p) => p.category === "Doosletters"),
  doosletterframes: allProducts.filter((p) => p.category === "Doosletterframes"),
  "led-neon": allProducts.filter((p) => p.category === "LED Neon"),
  lichtbakken: allProducts.filter((p) => p.category === "Lichtbakken"),
}

export function CategoryGrid({ category }: { category: string }) {
  const products = categoryProducts[category as keyof typeof categoryProducts] || []

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group text-left w-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="aspect-square relative bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-semibold">{product.price}</span>
                    <Button variant="ghost" size="sm" className="text-accent hover:text-accent/80" type="button">
                      Meer info →
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">Producten worden binnenkort toegevoegd</p>
          </div>
        )}
      </div>
    </section>
  )
}
