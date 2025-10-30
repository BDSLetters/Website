import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function OverOnsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Over BDS Letters</h1>
              <p className="text-lg text-black max-w-2xl mx-auto">
                Meer dan 20 jaar ervaring in professionele gevel- en lichtreclame
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-12">
              {/* Welcome Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-black">Welkom bij BDS Letters</h2>
                <p className="text-black leading-relaxed">
                  BDS Letters is een fabrikant van reclameletters in Nederland. Wij produceren doosletters (verlichte én
                  onverlichte letters), acrylaatletters, acrylaat 3D-letters en speciale (transparante) lichtbakken. Bij
                  ons staan kennis, vakmanschap, passie en service hoog in het vaandel.
                </p>
                <p className="text-black leading-relaxed">
                  Om onszelf te kunnen onderscheiden van alle andere leveranciers van reclameletters, richten wij ons op
                  de unieke productiemethoden, materialen en afwerkingen die wij aanbieden bij onze producten:
                </p>
                <ul className="space-y-3 text-black leading-relaxed">
                  <li>
                    <strong>Materialen:</strong> wij gebruiken duurzame materialen, bijvoorbeeld hoogwaardige aluminium,
                    of roestvrijstalen letters met een perfecte afwerking;
                  </li>
                  <li>
                    <strong>Productieproces:</strong> wij maken gebruik van innovatieve productietechnieken,
                    bijvoorbeeld lasergraveren voor precieze markeringen, of geavanceerde CNC-frezen voor strakke,
                    scherpe lijnen;
                  </li>
                  <li>
                    <strong>Belichting:</strong> wij bieden ledverlichting en speciale lichteffecten aan voor een uniek
                    en opvallend design;
                  </li>
                  <li>
                    <strong>Ontwerp:</strong> wij bieden gepersonaliseerde ontwerpmogelijkheden aan, maar wij kunnen ook
                    unieke lettertypes aanbieden die een meerwaarde hebben;
                  </li>
                  <li>
                    <strong>Afwerking:</strong> wij maken gebruik van speciale coatings en afwerkingen die niet alleen
                    de levensduur van de letters verlengen, maar ook de uitstraling van de letters verrijken. U kunt
                    daarbij denken aan: zijdeglans, mat of specifieke kleuren die goed passen bij de merkidentiteit van
                    uw klant.
                  </li>
                </ul>
              </div>

              {/* Image Section */}
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/products/neon-sign.png"
                  alt="BDS Letters werkplaats"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Feature Sections */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-black">Snelle Service</h3>
                  <p className="text-black leading-relaxed">
                    Wij begrijpen dat tijd essentieel is. Dankzij onze uitgebreide voorraad aan materialen kunnen we
                    direct aan de slag. In samenwerking met onze betrouwbare logistieke partners garanderen we een
                    vlotte levering.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-black">Ruime Keuze</h3>
                  <p className="text-black leading-relaxed">
                    Bij ons heeft u de vrijheid om te kiezen uit een breed scala aan materialen, kleuren en afmetingen.
                    Van kunststof tot RVS, van subtiel onverlicht tot opvallend verlicht. Wij realiseren uw visie
                    precies zoals u het voor ogen heeft.
                  </p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-black">Heldere Communicatie</h3>
                  <p className="text-black leading-relaxed">
                    Goede communicatie is de sleutel tot een succesvolle samenwerking. Daarom houden we u gedurende het
                    gehele proces op de hoogte, van schets tot eindmontage. Ons team reageert snel en denkt proactief
                    met u mee.
                  </p>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center bg-neutral-50 p-12 rounded-lg mt-12">
                <h2 className="text-3xl font-bold text-black mb-4">Klaar om te starten?</h2>
                <p className="text-black mb-8 max-w-2xl mx-auto">
                  Neem contact met ons op en ontdek hoe wij uw merk kunnen laten stralen met professionele gevel- en
                  lichtreclame.
                </p>
                <Link href="https://api.whatsapp.com/send/?phone=310625505222">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Neem Contact Op
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
     <Footer />
    </>
  )
}
