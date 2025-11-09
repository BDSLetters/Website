import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function MontagePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Montage</h1>
              <p className="text-lg text-black max-w-2xl mx-auto">
                BDS Letters beschikt over een volledig gecertificeerd montageteam. Indien u dit wenst, kunnen wij, naast
                de productie van de letters, ook uw montage verzorgen.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">Soorten montage</h2>
              <p className="text-black leading-relaxed">
                Wij bieden verschillende montagemethoden aan, afhankelijk van de locatie en het type letters. Hieronder
                vindt u de meest voorkomende opties:
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Montage met frame</h3>
              <ul className="list-disc list-inside text-black leading-relaxed space-y-2">
                <li><strong>Voorbereiding:</strong> de doosletters worden op een aluminium frame geplaatst.</li>
                <li><strong>Voordelen:</strong> een frame zorgt voor snellere montage, omdat het geheel in één keer geplaatst kan worden.</li>
                <li><strong>Schoonheid:</strong> het gebruik van een frame vermindert het aantal gaten in de gevel.</li>
                <li><strong>Bedrading:</strong> de kabels van de letters worden op het frame aan de achterkant doorverbonden.</li>
                <li><strong>Installatie:</strong> het complete frame wordt aan de muur bevestigd, vaak in de kleur van de gevel om minder op te vallen.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Montage met montagerails</h3>
              <ul className="list-disc list-inside text-black leading-relaxed space-y-2">
                <li><strong>Toepassing:</strong> deze montagesoort wordt vaak gebruikt voor plaatsing op daken of voor kleinere doosletters tegen een gevel.</li>
                <li><strong>Installatie:</strong> de letters worden uitgelijnd op de rails gemonteerd.</li>
                <li><strong>Voordelen:</strong> de stroomtoevoer kan worden ingebouwd in de rails, zodat niet elke letter een aparte stroomkabel nodig heeft.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black">Losse montage</h3>
              <ul className="list-disc list-inside text-black leading-relaxed space-y-2">
                <li><strong>Toepassing:</strong> grotere doosletters kunnen ook per stuk aan de gevel worden bevestigd.</li>
                <li><strong>Bedrading:</strong> elk van de letters krijgt een eigen stroomtoevoer.</li>
              </ul>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/products/montage.jpg"
                alt="Montage van reclameletters"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center bg-neutral-50 p-12 rounded-lg mt-12">
              <h2 className="text-3xl font-bold text-black mb-4">Montage door professionals</h2>
              <p className="text-black mb-8 max-w-2xl mx-auto">
                Neem contact met ons op voor meer informatie over onze montageservice of om een offerte aan te vragen.
              </p>
              <Link href="https://api.whatsapp.com/send/?phone=310625505222">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Neem Contact Op
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
