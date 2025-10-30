import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { CategoryGrid } from "@/components/category-grid"

export default function LedNeonPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryHero
        title="LED - Neon Signs"
        description="Moderne LED en neon verlichting voor opvallende signage"
        category="led-neon"
      />
      <CategoryGrid category="led-neon" />
      <Footer />
    </main>
  )
}
