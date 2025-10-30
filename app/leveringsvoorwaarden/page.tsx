import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function LeveringsvoorwaardenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-neutral-50 to-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Leveringsvoorwaarden</h1>
            <p className="text-lg text-gray-700 max-w-2xl">Algemene voorwaarden van BDS Letters</p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-8">
              {/* Artikel 1 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 1: Toepasselijkheid</h2>
                <p className="text-gray-700 leading-relaxed">
                  Deze voorwaarden gelden voor iedere aanbieding en overeenkomst tussen BDS Letters (hierna: BDS
                  Letters) en haar wederpartij/koper. BDS Letters stelt deze voorwaarden ter beschikking aan al haar
                  relaties en vermeldt de toepasselijkheid in haar communicatie.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  1.2 Bij strijdigheid met voorwaarden van een opdrachtgever of derde, prevaleren de voorwaarden van BDS
                  Letters.
                </p>
              </div>

              {/* Artikel 2 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 2: Aanbieding</h2>
                <p className="text-gray-700 leading-relaxed">
                  2.1 Alle aanbiedingen van BDS Letters zijn vrijblijvend en geldig gedurende twee maanden, tenzij
                  anders aangegeven.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2.2 In offertes, prijslijsten en andere documentatie opgenomen gegevens zoals afbeeldingen, tekeningen
                  en specificaties zijn niet bindend.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  2.3 Technisch onvermijdelijke of handelstechnisch gebruikelijke afwijkingen in kwaliteit, kleur,
                  afwerking, maat en gewicht worden voorbehouden.
                </p>
              </div>

              {/* Artikel 3 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 3: Prijs</h2>
                <p className="text-gray-700 leading-relaxed">
                  3.1 Alle prijzen zijn vermeld af magazijn, inclusief verpakking en exclusief BTW, tenzij schriftelijk
                  anders overeengekomen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  3.2 Indien na totstandkoming van de overeenkomst kostprijsbepalende factoren wijzigen, heeft BDS
                  Letters het recht de prijzen dienovereenkomstig aan te passen.
                </p>
              </div>

              {/* Artikel 4 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 4: Levering</h2>
                <p className="text-gray-700 leading-relaxed">
                  4.1 Levering vindt plaats af magazijn, tenzij anders overeengekomen. Bij levering voetstoots heeft de
                  koper geen aanspraak op dwaling of non-conformiteit.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  4.2 BDS Letters is gerechtigd verkochte zaken in gedeelten te leveren en elk gedeelte afzonderlijk te
                  factureren.
                </p>
              </div>

              {/* Artikel 5 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 5: Levertijd</h2>
                <p className="text-gray-700 leading-relaxed">
                  5.1 Overeengekomen levertijden zijn indicatief en geen fatale termijnen. Bij vertraging is BDS Letters
                  niet aansprakelijk voor eventuele schade.
                </p>
              </div>

              {/* Artikel 6 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 6: Eigendomsvoorbehoud</h2>
                <p className="text-gray-700 leading-relaxed">
                  6.1 Alle door BDS Letters geleverde zaken blijven eigendom van BDS Letters totdat de koper aan alle
                  betalings- en contractuele verplichtingen heeft voldaan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  6.2 Goederen onder eigendomsvoorbehoud mogen uitsluitend in het kader van normale bedrijfsvoering
                  worden doorverkocht.
                </p>
              </div>

              {/* Artikel 7 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 7: Gebreken en Garantie</h2>
                <p className="text-gray-700 leading-relaxed">
                  7.1 De koper dient de geleverde zaken bij ontvangst te controleren. Zichtbare gebreken dienen binnen 8
                  dagen schriftelijk te worden gemeld.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  7.2 Niet-zichtbare gebreken moeten binnen 8 dagen na constatering, maar uiterlijk binnen 1 jaar na
                  levering, schriftelijk worden gemeld.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  7.3 Garantieaanspraken vervallen bij onjuiste behandeling, externe schade of andere oorzaken buiten de
                  controle van BDS Letters.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Garantievoorwaarden</h2>
                <h3 className="text-xl font-semibold text-gray-900">2. Gedekte Gebreken</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 leading-relaxed">
                  <li>Fabricagefouten, zoals, onjuiste assemblage of scheuren in laswerk.</li>
                  <li>Loslaten van poedercoating, of ernstige verkleuring van coating.</li>
                  <li>Defecten in LED-verlichting: uitval, verminderde lichtsterkte en uitval van LED.</li>
                  <li>Onze transformatoren hebben eveneens een garantietermijn van 2 jaar.</li>
                  <li>
                    Na de periode van 2 jaar geven wij nog 3 jaar systeemgarantie op onze LED-modules. Binnen deze
                    periode ontvangt u kosteloos LED-modules bij storing of uitval.
                  </li>
                </ul>
              </div>

              {/* Artikel 8 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 8: Betaling</h2>
                <p className="text-gray-700 leading-relaxed">
                  8.1 Betaling dient plaats te vinden binnen 30 dagen na factuurdatum zonder verrekening of opschorting.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  8.2 Bij overschrijding van de betalingstermijn is de koper wettelijke rente plus 2% verschuldigd.
                </p>
              </div>

              {/* Artikel 9 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 9: Incassokosten</h2>
                <p className="text-gray-700 leading-relaxed">
                  9.1 Alle buitengerechtelijke incassokosten komen voor rekening van de koper, berekend volgens
                  wettelijke staffels.
                </p>
              </div>

              {/* Artikel 10 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 10: Overmacht</h2>
                <p className="text-gray-700 leading-relaxed">
                  10.1 Onder overmacht worden omstandigheden verstaan die de nakoming van verplichtingen verhinderen en
                  niet aan BDS Letters kunnen worden toegerekend, zoals natuurrampen, stakingen of transportproblemen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  10.2 Tijdens overmacht worden verplichtingen opgeschort. Bij een periode langer dan drie maanden zijn
                  beide partijen bevoegd de overeenkomst te ontbinden zonder schadevergoeding.
                </p>
              </div>

              {/* Artikel 11 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 11: Geschillen</h2>
                <p className="text-gray-700 leading-relaxed">
                  11.1 Alle geschillen worden voorgelegd aan de bevoegde rechtbank in het arrondissement waar BDS
                  Letters is gevestigd, tenzij de wet anders voorschrijft.
                </p>
              </div>

              {/* Artikel 12 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 12: Toepasselijk recht</h2>
                <p className="text-gray-700 leading-relaxed">
                  12.1 Op alle overeenkomsten is Nederlands recht van toepassing. Het CISG-verdrag is uitgesloten.
                </p>
              </div>

              {/* Artikel 13 */}
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-gray-900">Artikel 13: Wijzigingen</h2>
                <p className="text-gray-700 leading-relaxed">
                  13.1 BDS Letters behoudt zich het recht voor deze voorwaarden te wijzigen. Gewijzigde voorwaarden
                  worden tijdig aan de wederpartij gecommuniceerd en zijn van toepassing vanaf de aangekondigde
                  ingangsdatum.
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
