import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { CategoryGrid } from "@/components/category-grid"

export default function RVSLettersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryHero
        title="RVS"
        description="Professionele RVS Letters"
        category="rvs"
      />
      <CategoryGrid category="rvs" />
      <Footer />
    </main>
  )
}
