import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { CategoryGrid } from "@/components/category-grid"

export default function LichtbakkenPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryHero
        title="Speciale Lichtbakken"
        description="Hoogwaardige lichtbakken voor professionele verlichting"
        category="lichtbakken"
      />
      <CategoryGrid category="lichtbakken" />
      <Footer />
    </main>
  )
}
