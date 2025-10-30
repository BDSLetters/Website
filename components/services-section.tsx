import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <div>
            <div className="text-sm font-medium text-gray-800 mb-4 tracking-wide uppercase">ONZE EXPERTISE IN</div>
            <h2 className="font-inter font-bold text-4xl lg:text-5xl text-gray-900 mb-8 text-balance">
              Gevel- en lichtreclame <span className="block">voor de signindustrie</span>
            </h2>

            <div className="grid grid-cols-2 gap-4 text-sm font-medium text-gray-800">
              <Link
                href="/categories/luxe-acrylaatletters"
                className="flex items-center justify-between border-b border-gray-800/20 pb-2 hover:text-gray-900 transition-colors"
              >
                <span>LUXE ACRYLAATLETTERS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/categories/doosletters"
                className="flex items-center justify-between border-b border-gray-800/20 pb-2 hover:text-gray-900 transition-colors"
              >
                <span>DOOSLETTERS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/categories/led-neon"
                className="flex items-center justify-between border-b border-gray-800/20 pb-2 hover:text-gray-900 transition-colors"
              >
                <span>LED - NEON SIGNS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/categories/lichtbakken"
                className="flex items-center justify-between border-b border-gray-800/20 pb-2 hover:text-gray-900 transition-colors"
              >
                <span>SPECIALE LICHTBAKKEN</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/categories/doosletterframes"
                className="flex items-center justify-between border-b border-gray-800/20 pb-2 hover:text-gray-900 transition-colors"
              >
                <span>DOOSLETTERFRAMES</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link href="/categories/luxe-acrylaatletters" className="group block">
              <div className="bg-gray-900 rounded-lg overflow-hidden aspect-square relative">
                <img
                  src="/products/profiel-6-doosletter.png"
                  alt="Luxe Acrylaatletters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3">
                  <div className="text-white font-medium text-xs">LUXE ACRYLAATLETTERS</div>
                  <ArrowRight className="h-3 w-3 text-white mt-1" />
                </div>
              </div>
            </Link>

            <Link href="/categories/doosletters" className="group block">
              <div className="bg-gray-900 rounded-lg overflow-hidden aspect-square relative">
                <img
                  src="/products/profiel-7-doosletter.png"
                  alt="Doosletters"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3">
                  <div className="text-white font-medium text-xs">DOOSLETTERS</div>
                  <ArrowRight className="h-3 w-3 text-white mt-1" />
                </div>
              </div>
            </Link>

            <Link href="/categories/led-neon" className="group block col-span-2">
              <div className="bg-gray-900 rounded-lg overflow-hidden aspect-[2/1] relative">
                <img
                  src="/products/neon-sign.png"
                  alt="LED Neon Signs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3">
                  <div className="text-white font-medium text-xs">LED - NEON SIGNS</div>
                  <ArrowRight className="h-3 w-3 text-white mt-1" />
                </div>
              </div>
            </Link>

            <Link href="/categories/lichtbakken" className="group block col-span-2">
              <div className="bg-gray-900 rounded-lg overflow-hidden aspect-[2/1] relative">
                <img
                  src="/products/bds-lichtdoos.png"
                  alt="Speciale Lichtbakken"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-3 left-3">
                  <div className="text-white font-medium text-xs">SPECIALE LICHTBAKKEN</div>
                  <ArrowRight className="h-3 w-3 text-white mt-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
