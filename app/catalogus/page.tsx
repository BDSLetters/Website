"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

const ralColors = [
  { code: "RAL 9006", name: "Wit Aluminium", hex: "#A5A5A5" },
  { code: "RAL 9005", name: "Gitzwart", hex: "#0A0A0A" },
  { code: "RAL 5002", name: "Ultramarijnblauw", hex: "#20214F" },
  { code: "RAL 1018", name: "Zinkgeel", hex: "#F8F32B" },
  { code: "RAL 3030", name: "Verkeersrood", hex: "#AF2B1E" },
  { code: "RAL 5015", name: "Hemelsblauw", hex: "#2271B3" },
  { code: "RAL 5017", name: "Verkeersblauw", hex: "#063971" },
  { code: "RAL 5022", name: "Nachtblauw", hex: "#252850" },
  { code: "RAL 8015", name: "Kastanjebruin", hex: "#633A34" },
  { code: "RAL 6005", name: "Mosgroen", hex: "#2F4F4F" },
  { code: "RAL 1023", name: "Verkeersgeel", hex: "#FAD201" },
  { code: "RAL 1028", name: "Meloengeel", hex: "#F5A300" },
  { code: "RAL 7040", name: "Venstergrijs", hex: "#9DA1AA" },
  { code: "RAL 7035", name: "Lichtgrijs", hex: "#D7D7D7" },
  { code: "RAL 6018", name: "Geelgroen", hex: "#57A639" },
  { code: "RAL 6024", name: "Verkeersgroen", hex: "#308446" },
  { code: "RAL 1015", name: "Licht Ivoor", hex: "#E6D690" },
  { code: "RAL 2004", name: "Zuiver Oranje", hex: "#F44611" },
  { code: "RAL 4010", name: "Telemagenta", hex: "#CF3476" },
  { code: "RAL 4008", name: "Signaalviolet", hex: "#924E7D" },
  { code: "RAL 7015", name: "Leigrijs", hex: "#434750" },
  { code: "RAL 3001", name: "Signaalrood", hex: "#A52019" },
  { code: "RAL 3002", name: "Karmijnrood", hex: "#A2231D" },
  { code: "RAL 3020", name: "Verkeersrood", hex: "#CC0605" },
]

const ledColors = [
  { name: "Warm Wit", description: "2700K - 3000K" },
  { name: "Neutraal Wit", description: "4000K - 4500K" },
  { name: "Koel Wit", description: "5000K - 6500K" },
  { name: "Rood", description: "RGB Rood" },
  { name: "Blauw", description: "RGB Blauw" },
  { name: "Groen", description: "RGB Groen" },
  { name: "Geel", description: "RGB Geel" },
  { name: "Roze", description: "RGB Roze" },
  { name: "Paars", description: "RGB Paars" },
  { name: "Oranje", description: "RGB Oranje" },
]

const allProducts = [
  // Freesletters
  {
    id: "profiel-3", // Simplified ID from "profiel-3-gevel" to "profiel-3"
    name: "Profiel 3 Doosletter",
    category: "Freesletters",
    image: "/products/profiel-3-doosletter.png",
    description:
      "Klassieke doosletter met strakke afwerking. Perfect voor professionele uitstraling aan uw gevel. Verkrijgbaar in verschillende kleuren en maten.",
    specifications: ["Materiaal: Aluminium", "Afwerking: Poedercoating", "Verlichting: Optioneel LED"],
    colorOptions: "ral",
  },
  {
    id: "profiel-5", // Changed ID from "profiel-6-gevel" to "profiel-5"
    name: "Profiel 5 Doosletter", // Changed name from "Profiel 6" to "Profiel 5"
    category: "Freesletters",
    image: "/products/profiel-6-doosletter.png",
    description:
      "Witte freesletters met moderne uitstraling. Ideaal voor een strakke en eigentijdse look. Duurzaam en weerbestendig.",
    specifications: ["Materiaal: Aluminium", "Kleur: Wit RAL 9010", "Montage: Wandmontage"],
    colorOptions: "ral",
  },
  {
    id: "profiel-5-deluxe", // Changed ID from "profiel-7-gevel" to "profiel-5-deluxe"
    name: "Profiel 5 Deluxe Doosletter", // Changed name from "Profiel 7" to "Profiel 5 Deluxe"
    category: "Freesletters",
    image: "/products/profiel-7-doosletter.png",
    description:
      "Rode freesletters met opvallende kleur. Trekt direct de aandacht en zorgt voor maximale zichtbaarheid van uw bedrijfsnaam.",
    specifications: ["Materiaal: Aluminium", "Kleur: Rood RAL 3020", "Diepte: 80mm"],
    colorOptions: "ral",
  },
  // Doosletters
  {
    id: "profiel-3-zwart", // Changed ID from "profiel-3-doos" to "profiel-3-zwart" for uniqueness
    name: "Profiel 3 Doosletter Zwart",
    category: "Doosletters",
    image: "/products/profiel-3-doosletter.png",
    description:
      "Zwarte doosletter met matte afwerking. Elegante en tijdloze uitstraling. Perfect voor luxe uitstraling.",
    specifications: ["Materiaal: Aluminium", "Kleur: Zwart mat", "Diepte: 60mm"],
    colorOptions: "ral",
  },
  {
    id: "profiel-4", // Simplified ID from "profiel-4-doos" to "profiel-4"
    name: "Profiel 4 Doosletter",
    category: "Doosletters",
    image: "/products/profiel-4-doosletter.png",
    description:
      "Wit-gele doosletter met twee-kleurig design. Unieke combinatie voor opvallende branding. Maatwerk mogelijk.",
    specifications: ["Materiaal: Aluminium", "Kleuren: Wit/Geel", "Design: Twee-kleurig"],
    colorOptions: "ral",
  },
  {
    id: "profiel-5-wit", // Changed ID from "profiel-6-doos" to "profiel-5-wit" for uniqueness
    name: "Profiel 5 Doosletter Wit", // Changed name from "Profiel 6" to "Profiel 5"
    category: "Doosletters",
    image: "/products/profiel-6-doosletter.png",
    description:
      "Witte doosletter met strakke lijnen. Moderne en professionele uitstraling. Geschikt voor binnen en buiten.",
    specifications: ["Materiaal: Aluminium", "Kleur: Wit", "Toepassing: Binnen/Buiten"],
    colorOptions: "ral",
  },
  {
    id: "profiel-5-deluxe-rood", // Changed ID from "profiel-7-doos" to "profiel-5-deluxe-rood" for uniqueness
    name: "Profiel 5 Deluxe Doosletter Rood", // Changed name from "Profiel 7" to "Profiel 5 Deluxe"
    category: "Doosletters",
    image: "/products/profiel-7-doosletter.png",
    description:
      "Rode doosletter met premium afwerking. Hoogwaardige kwaliteit en duurzame materialen. Opvallend en professioneel.",
    specifications: ["Materiaal: Aluminium", "Kleur: Rood", "Afwerking: Premium"],
    colorOptions: "ral",
  },
  {
    id: "profiel-3-luxe", // Simplified ID from "profiel-3-luxe-led" to "profiel-3-luxe"
    name: "Profiel 3 Luxe LED",
    category: "Doosletters",
    image: "/products/profiel-3-luxe-doosletter.png",
    description:
      "LED verlichte doosletter met oranje glow. Energiezuinige LED verlichting voor maximale zichtbaarheid. Dag en nacht opvallend.",
    specifications: ["Verlichting: LED", "Kleur: Oranje glow", "Energieverbruik: Laag"],
    colorOptions: "ral",
  },
  {
    id: "profiel-4-ao", // Simplified ID from "profiel-4-ao-led" to "profiel-4-ao"
    name: "Profiel 4 AO LED",
    category: "Doosletters",
    image: "/products/profiel-4-ao-doosletter.png",
    description:
      "Groen-blauwe LED doosletter met kleuraccenten. Moderne LED technologie met lange levensduur. Opvallende kleurcombinatie.",
    specifications: ["Verlichting: LED RGB", "Kleuren: Groen/Blauw", "Levensduur: 50.000+ uur"],
    colorOptions: "ral",
  },
  // LED-Neon Signs
  {
    id: "neon-letter-s",
    name: "LED Neon Letter",
    category: "LED-Neon Signs",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DUqVmLSqRNZjyijqkOVPBVMc4nx2fj.png",
    description:
      "Witte LED neon letter met zachte glow effect. Moderne neon technologie met laag energieverbruik. Perfect voor sfeervolle verlichting en branding. Verkrijgbaar in alle letters en vormen.",
    specifications: ["Type: LED Neon", "Kleur: Wit met glow", "Energieverbruik: Zeer laag", "Levensduur: 100.000+ uur"],
    colorOptions: "led",
  },
  // Vormen
  {
    id: "custom-vorm",
    name: "Op Maat Gemaakte Vormen",
    category: "Vormen",
    image: "/products/profiel-8-doosletter.png",
    description:
      "Aangepaste vormen volgens uw specificaties. Elk gewenst logo of vorm is mogelijk. Van ontwerp tot realisatie volledig op maat.",
    specifications: ["Type: Maatwerk", "Materiaal: Naar keuze", "Design: Volledig aangepast"],
  },
  // Plaatmateriaal
  {
    id: "tms-1-plaat",
    name: "TMS 1 Mini",
    category: "Plaatmateriaal",
    image: "/products/tms-1-mini.jpg",
    description:
      "Wit plaatmateriaal voor diverse toepassingen. Hoogwaardig materiaal geschikt voor binnen- en buitengebruik. Duurzaam en onderhoudsarm.",
    specifications: ["Materiaal: Kunststof", "Kleur: Wit", "Toepassing: Universeel"],
  },
  {
    id: "tms-2-plaat",
    name: "TMS 2 Mini",
    category: "Plaatmateriaal",
    image: "/products/tms-2-mini.jpg",
    description:
      "Rood plaatmateriaal met hoogwaardige afwerking. Perfect voor opvallende signalisatie. Weerbestendig en kleurvast.",
    specifications: ["Materiaal: Kunststof", "Kleur: Rood", "Eigenschappen: Weerbestendig"],
  },
  // Lichtbakken
  {
    id: "lichtbak-special",
    name: "Speciale Lichtbak Type 1",
    category: "Speciale Lichtbakken",
    image: "/products/profiel-3-luxe-doosletter.png",
    description:
      "Verlichte lichtbak met LED technologie. Energiezuinig en onderhoudsvriendelijk. Perfect voor 24/7 zichtbaarheid van uw bedrijf.",
    specifications: ["Verlichting: LED", "Type: Dubbelzijdig", "Montage: Gevel/Vrijstaand"],
  },
]

export default function CatalogusPage() {
  const productsByCategory = allProducts.reduce(
    (acc, product, index) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }
      acc[product.category].push({ ...product, pageNumber: index + 2 })
      return acc
    },
    {} as Record<string, Array<(typeof allProducts)[0] & { pageNumber: number }>>,
  )

  const handleDownload = () => {
    window.print()
  }

  return (
    <>
      <Header />

      <div className="fixed bottom-8 right-8 z-50 no-print">
        <Button onClick={handleDownload} size="lg" className="bg-accent hover:bg-accent/90 shadow-lg">
          <Download className="mr-2 h-5 w-5" />
          Download PDF
        </Button>
      </div>

      <main className="bg-white">
        {/* Cover Page */}
        <div className="catalog-page flex flex-col bg-white print:break-after-page">
          {/* Logo and Title */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Image
                src="/logo-bds-letters.png"
                alt="BDS Letters Logo"
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Productcatalogus 2025</h1>
            <p className="text-xl text-gray-600">Freesletters • 3D Letters • LED Verlichting • Maatwerk</p>
          </div>

          {/* Table of Contents */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-4 border-b-2 border-accent">Inhoudsopgave</h2>

            <div className="space-y-8">
              {Object.entries(productsByCategory).map(([category, products]) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-accent mb-3">{category}</h3>
                  <div className="space-y-2">
                    {products.map((product) => (
                      <div key={product.id} className="flex justify-between items-center border-b border-gray-200 pb-2">
                        <span className="text-gray-700">{product.name}</span>
                        <span className="text-gray-900 font-semibold">Pagina {product.pageNumber}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-2">
              <strong>Contact:</strong> +31 6 2550 5222 | info@bdsletters.nl
            </p>
            <p className="text-gray-600">www.bdsletters.nl</p>
          </div>
        </div>

        {/* Product Pages */}
        {allProducts.map((product, index) => (
          <div key={product.id} className="catalog-page print:break-after-page">
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="border-b-2 border-accent pb-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                    <p className="text-accent font-semibold mt-1">{product.category}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">BDS Letters</p>
                    <p className="text-sm text-gray-600">Catalogus 2025</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image */}
                <div className="flex items-center justify-center bg-gray-50 rounded-2xl p-8">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain rounded-xl"
                    />
                  </div>
                </div>

                {/* Details */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Productomschrijving</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Specificaties</h3>
                  <ul className="space-y-2 mb-6">
                    {product.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>

                  {product.colorOptions === "ral" && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Beschikbare Kleuren</h3>
                      <div className="grid grid-cols-4 gap-2">
                        {ralColors.slice(0, 12).map((color) => (
                          <div key={color.code} className="text-center">
                            <div
                              className="w-full aspect-square rounded border border-gray-300 mb-1"
                              style={{ backgroundColor: color.hex }}
                            />
                            <p className="text-xs text-gray-600">{color.code}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">En 12 andere RAL kleuren beschikbaar</p>
                    </div>
                  )}

                  {product.colorOptions === "led" && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Beschikbare LED Kleuren</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {ledColors.slice(0, 6).map((color) => (
                          <div key={color.name} className="text-sm">
                            <span className="text-accent mr-1">•</span>
                            <span className="text-gray-700">{color.name}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-2">En 4 andere LED kleuren beschikbaar</p>
                    </div>
                  )}

                  <div className="mt-auto p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Prijs:</strong> Op aanvraag
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      <strong>Contact:</strong> +31 6 2550 5222
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Email:</strong> info@bdsletters.nl
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 pt-4 mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Pagina {index + 2} van {allProducts.length + 1} | www.bdsletters.nl
                </p>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          .catalog-page {
            width: 210mm;
            height: 297mm;
            padding: 20mm;
            margin: 0;
            box-sizing: border-box;
            page-break-after: always;
          }
          
          header, footer, .no-print {
            display: none !important;
          }
        }

        @media screen {
          .catalog-page {
            width: 210mm;
            min-height: 297mm;
            padding: 20mm;
            margin: 20px auto;
            background: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
        }
      `}</style>
    </>
  )
}
