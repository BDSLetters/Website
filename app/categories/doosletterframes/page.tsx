import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategoryHero } from "@/components/category-hero"
import { CategoryGrid } from "@/components/category-grid"

export default function DooslettersPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CategoryHero
        title="DoosletterFrames"
        description="Professionele dooslettersframes in verschillende kleuren"
        category="doosletterframes"
      />
      <CategoryGrid category="doosletterframes" />
      <Footer />
    </main>
  )
}
