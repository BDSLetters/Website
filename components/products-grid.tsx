import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "TMS 1 Mini",
    description: "Compacte witte doosletter met strakke afwerking. Perfect voor moderne interieurs.",
    image: "/products/tms-1-mini.jpg",
    category: "TMS Mini",
    specs: "Wit, compacte uitvoering, moderne vormgeving",
  },
  {
    id: 2,
    name: "TMS 2 Mini",
    description: "Rode mini doosletter met hoogwaardige afwerking voor opvallende signage.",
    image: "/products/tms-2-mini.jpg",
    category: "TMS Mini",
    specs: "Rood, compacte uitvoering, opvallend design",
  },
  {
    id: 3,
    name: "Profiel 3 Doosletter",
    description: "Geschuurde voorzijde met acrylaat bodem. Matte zwarte afwerking.",
    image: "/products/profiel-3-doosletter.png",
    category: "Profiel 3",
    specs: "Aluminium + acrylaat, 80-120mm, matte finish",
  },
  {
    id: 4,
    name: "Profiel 3 Luxe Doosletter",
    description: "Premium uitvoering met LED backlighting in oranje/geel voor maximale zichtbaarheid.",
    image: "/products/profiel-3-luxe-doosletter.png",
    category: "Profiel 3 Luxe",
    specs: "Geborsteld aluminium, LED backlighting",
  },
  {
    id: 5,
    name: "Profiel 4 Doosletter",
    description: "Aluminium kaderlijst constructie met twee-kleurige afwerking (wit/geel).",
    image: "/products/profiel-4-doosletter.png",
    category: "Profiel 4",
    specs: "Aluminium kader, twee-kleurig, LED verlichting",
  },
  {
    id: 6,
    name: "Profiel 4 AO Doosletter",
    description: "Speciale AO uitvoering met opvallende kleurencombinatie (groen/blauw).",
    image: "/products/profiel-4-ao-doosletter.png",
    category: "Profiel 4 AO",
    specs: "Versterkte constructie, multi-color design",
  },
  {
    id: 7,
    name: "Profiel 6 Doosletter",
    description: "Robuuste witte constructie voor zware toepassingen en grote letters.",
    image: "/products/profiel-6-doosletter.png",
    category: "Profiel 6",
    specs: "Extra sterke constructie, witte afwerking",
  },
  {
    id: 8,
    name: "Profiel 7 Doosletter",
    description: "Moderne rode uitvoering met strakke lijnen en perfecte afwerking.",
    image: "/products/profiel-7-doosletter.png",
    category: "Profiel 7",
    specs: "Rode afwerking, hoogwaardige kwaliteit",
  },
]

export function ProductsGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-light text-4xl md:text-5xl text-gray-900 mb-6">Onze Doosletters Collectie</h2>
          <p className="font-inter font-light text-xl text-gray-600 max-w-3xl mx-auto">
            Ontdek onze uitgebreide collectie van hoogwaardige 3D doosletters. Elk profiel heeft zijn eigen unieke
            eigenschappen en toepassingen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-inter font-medium text-lg text-gray-900 mb-2">{product.name}</h3>
                <p className="font-inter text-gray-600 text-sm mb-3">{product.description}</p>
                <p className="font-inter text-gray-500 text-xs mb-4 italic">{product.specs}</p>
                <span className="block w-full bg-red-600 text-white py-2 px-4 rounded-lg group-hover:bg-red-700 transition-colors duration-200 font-medium text-center">
                  Meer Informatie
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="font-inter font-medium text-2xl text-gray-900 mb-4">Kleuropties Beschikbaar</h3>
            <p className="font-inter text-gray-600 mb-6 max-w-2xl mx-auto">
              Onze doosletters zijn beschikbaar in verschillende kleuren. Populaire opties zijn wit, rood, oranje, groen
              en blauw. Elk profiel kan aangepast worden aan uw specifieke wensen.
            </p>
            <button className="bg-red-600 text-white py-3 px-8 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium">
              Contact Opnemen
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
