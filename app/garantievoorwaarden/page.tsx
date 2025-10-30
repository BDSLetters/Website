import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GarantievoorwaardenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Garantievoorwaarden</h1>
            <p className="text-lg text-gray-700 max-w-2xl">Garantiebepalingen voor producten van BDS Letters</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {/* Section 1 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">1. Garantieperiode</h2>
                <p className="text-gray-700 leading-relaxed">
                  Wij bieden een garantie van 2 jaar op onze doosletters en constructies, te rekenen vanaf de datum van
                  levering.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">2. Gedekte Gebreken</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                  <li>Fabricagefouten zoals onjuiste assemblage of scheuren in laswerk</li>
                  <li>Loslaten van poedercoating of ernstige verkleuring van coating</li>
                  <li>Defecten in LED-verlichting: uitval, verminderde lichtsterkte en uitval van LED</li>
                  <li>Onze transformatoren hebben eveneens een garantietermijn van 2 jaar</li>
                  <li>
                    Na de periode van 2 jaar geven wij nog 3 jaar systeemgarantie op onze LED-modules. Binnen deze
                    periode ontvangt u kosteloos LED-modules bij storing of uitval
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">3. Garantie Folie</h2>
                <p className="text-gray-700 leading-relaxed">
                  De garanties voor folie gelden volgens voorwaarden van leveranciers van diverse merken waaronder o.a.
                  3M, Oracal, Avery, etc.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">4. Onderhoudsvereisten</h2>
                <p className="text-gray-700 leading-relaxed">
                  Om aanspraak te kunnen maken op onze garantie moeten de doosletters regelmatig worden onderhouden. Dit
                  omvat jaarlijks onderhoud en schoonmaak, en het periodiek controleren van elektrische elementen. Wij
                  adviseren om bij of na de verkoop een onderhoudscontract bij uw klant aan te bieden.
                </p>
              </div>

              {/* Section 5 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">5. Uitsluitingen</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
                  <li>Onjuist gebruik of installatie door de klant of een derde partij</li>
                  <li>Vandalisme, natuurrampen of andere externe factoren buiten onze controle</li>
                  <li>Normale slijtage of veroudering van materialen</li>
                  <li>Onjuist of nalatig onderhoud</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">6. Beperkte Aansprakelijkheid</h2>
                <p className="text-gray-700 leading-relaxed">
                  Onze aansprakelijkheid is beperkt tot het repareren en vervangen van doosletters. Wij zijn niet
                  aansprakelijk voor enige bijkomende schade, kosten of verliezen voortvloeiend uit het gebruik van
                  defecte producten.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">7. Melding voor Garantie</h2>
                <p className="text-gray-700 leading-relaxed">
                  Gelieve garantieclaims te mailen naar{" "}
                  <a href="mailto:info@bdsletters.nl" className="text-accent hover:underline">
                    info@bdsletters.nl
                  </a>{" "}
                  met een beschrijving van de klacht en eventuele foto's.
                </p>
              </div>

              {/* Section 8 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">8. Afhandeling</h2>
                <p className="text-gray-700 leading-relaxed">
                  Na ontvangst van uw mail zullen wij uw melding beoordelen en beantwoorden. Uiteraard is het ook
                  mogelijk dat wij telefonisch contact met u opnemen. Gezien de locatie van de installatie en o.a.
                  hoogte en bereikbaarheid met inzet van hoogwerker of kraan voor ons niet bekend is, sluiten we deze
                  kosten vooralsnog uit. Als deze kosten redelijk en te overzien zijn, worden deze door ons vergoed of
                  in overleg deels gecompenseerd.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Gezien wij werken met hoogwaardige producten, moderne machines en gedreven vakmanschap, hopen wij dat
                  u geen gebruik hoeft te maken van onze garantievoorwaarden.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
     <Footer />
    </>
  )
}
