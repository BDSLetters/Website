import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RvsLettersPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">RVS-letters</h1>
              <p className="text-lg text-black max-w-2xl mx-auto">
                Wij produceren RVS-letters die bestemd zijn voor zowel binnen- als buitengebruik. De RVS-letters kunnen
                worden geproduceerd en geleverd in alle soorten en maten.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">Waarom zou u kiezen voor RVS-letters?</h2>
              <p className="text-black leading-relaxed">
                RVS-letters geven de gevel een chique en kwaliteitsvolle uitstraling. Vooral als het gaat om indirect
                verlichte letters: de verlichting wordt in dat geval achter de letters geplaatst, wat een exclusieve
                uitstraling geeft aan de gevel.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">Wat voor soort RVS-letters bieden wij aan?</h2>
              <p className="text-black leading-relaxed">
                Bij RVS-letters kunt u denken aan: RVS 2D-letters, RVS 3D-letters en RVS-letters met LED-verlichting.
              </p>
              <p className="text-black leading-relaxed">
                Als u ervoor kiest om RVS-letters te nemen die worden verlicht door middel van ledverlichting, dan brengt
                dat voordelen met zich mee. Immers:
              </p>
              <ul className="list-disc list-inside text-black leading-relaxed space-y-2">
                <li>LED-verlichting is momenteel de meest duurzame vorm van verlichting en heeft een langere levensduur.</li>
                <li>LED-verlichting geeft minimale warmte af.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">Algemene kenmerken</h2>
              <ul className="list-disc list-inside text-black leading-relaxed space-y-2">
                <li><strong>Duurzaamheid:</strong> RVS-letters zijn zeer robuust en bestand tegen roest en corrosie, waardoor ze lang meegaan en geschikt zijn voor binnen en buiten.</li>
                <li><strong>Esthetiek:</strong> RVS-letters hebben een exclusieve, tijdloze uitstraling. Het oppervlak kan geborsteld of gepolijst worden geleverd.</li>
                <li><strong>Weerbestendigheid:</strong> Bestand tegen extreme weersomstandigheden; de letters roesten of breken niet.</li>
                <li><strong>Onderhoud:</strong> Onderhoudsarm — RVS-letters roesten niet en blijven lang mooi.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">Beschikbaarheid en aanpassing</h2>
              <ul className="list-disc list-inside text-black leading-relaxed space-y-2">
                <li><strong>Afmetingen en vormen:</strong> Verkrijgbaar in vrijwel alle vormen en maten.</li>
                <li><strong>Afwerkingen:</strong> Naast geborsteld en gepolijst ook bewerkingen zoals parelstralen (mat en egaal grijs).</li>
                <li><strong>Soorten RVS:</strong> Voor zware omstandigheden kan RVS 316 worden gebruikt (betere corrosiebestendigheid dan RVS 304, ideaal voor kustregio’s).</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-black">Montage en verlichting</h2>
              <ul className="list-disc list-inside text-black leading-relaxed space-y-2">
                <li><strong>Montage:</strong> Eenvoudig te monteren, o.a. op afstand met draadeindes.</li>
                <li><strong>Verlichting:</strong> Optioneel met LED-verlichting (backlit of andere technieken).</li>
              </ul>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/products/rvs-letters.jpg"
                alt="RVS letters voorbeeld"
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center bg-neutral-50 p-12 rounded-lg mt-12">
              <h2 className="text-3xl font-bold text-black mb-4">Interesse in RVS-letters?</h2>
              <p className="text-black mb-8 max-w-2xl mx-auto">
                Neem contact met ons op voor meer informatie of een offerte op maat.
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
