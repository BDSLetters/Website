import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { CategoryGrid } from "@/components/category-grid"

export default function LuxeAcrylaatlettersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryHero
        title="Luxe Acrylaatletters"
        description="Hoogwaardige luxe acrylaat letters voor een premium uitstraling"
        category="luxe-acrylaatletters"
      />
      <CategoryGrid category="luxe-acrylaatletters" />
      <Footer />
    </main>
  )
}
