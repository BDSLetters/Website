"use client"

import Image from "next/image"
import { ArrowLeftIcon, CheckIcon, XIcon } from "@/components/icons"
import { notFound } from "next/navigation"
import { useState } from "react"
import { ralColors } from "@/lib/products-data"

interface Product {
  id: string
  name: string
  description: string
  fullDescription: string
  category: string
  image: string
  features: string[]
  technicalSpecs: { [key: string]: string }
}

interface ProductDetailPageClientProps {
  product: Product | undefined
}

export default function ProductDetailClient({ product }: ProductDetailPageClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRalColor, setSelectedRalColor] = useState<string>("")
  const [messageText, setMessageText] = useState<string>("")

  if (!product) {
    notFound()
  }

  const isNeonProduct = product.category.includes("LED Neon") || product.category.includes("Neon")
  const isDoosletterProduct =
    product.category.includes("TMS") ||
    product.category.includes("Profiel") ||
    product.category.includes("Luxe Acrylaatletters") ||
    product.category.includes("Doosletters") ||
    product.category.includes("Lichtbakken") ||
    product.category.includes("Doosletterframes") ||
    product.category.includes("LED Neon") ||
    product.category.includes("Neon")

  const handleOpenModal = () => {
    const initialMessage = `Hallo, ik heb een vraag over de ${product.name}${selectedRalColor ? ` met de RAL kleur: ${selectedRalColor}` : ""}`
    setMessageText(initialMessage)
    setIsModalOpen(true)
  }

  const handleRalColorSelect = (colorCode: string, colorName: string) => {
    const ralColorText = `${colorCode} (${colorName})`
    setSelectedRalColor(ralColorText)
    setMessageText(`Hallo, ik heb een vraag over de ${product.name} met de RAL kleur: ${ralColorText}`)
  }

  const handleSendWhatsApp = () => {
    const encodedMessage = encodeURIComponent(messageText)
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=310625505222&text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-white/50 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span className="font-inter font-medium">Terug</span>
          </button>
        </div>
      </div>

      {/* Product Detail Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover rounded-2xl"
                  priority
                />
              </div>
              <div className="mt-6 flex items-center justify-center gap-4">
                <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {product.category}
                </span>
                <span className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  Op voorraad
                </span>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-8">
            <div>
              <h1 className="font-inter font-light text-4xl md:text-5xl text-gray-900 mb-4 text-balance">
                {product.name}
              </h1>
              <p className="font-inter text-xl text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h2 className="font-inter font-medium text-2xl text-gray-900 mb-4">Productbeschrijving</h2>
              <p className="font-inter text-gray-600 leading-relaxed">{product.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="font-inter font-medium text-2xl text-gray-900 mb-6">Kenmerken</h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Specifications */}
            <div className="border-t border-gray-200 pt-8">
              <h2 className="font-inter font-medium text-2xl text-gray-900 mb-6">Technische Specificaties</h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                {Object.entries(product.technicalSpecs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="font-inter font-medium text-gray-700 capitalize">{key}:</span>
                    <span className="font-inter text-gray-600 text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {isDoosletterProduct && (
              <div className="border-t border-gray-200 pt-8">
                <h2 className="font-inter font-medium text-2xl text-gray-900 mb-6">Beschikbare RAL Kleuren</h2>
                <div className="bg-gray-50 rounded-xl p-6">
                  <p className="font-inter text-sm text-gray-600 mb-4">
                    Alle producten kunnen worden geleverd in de volgende RAL kleuren:
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {ralColors.map((color, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg p-3 border border-gray-200 hover:shadow-md transition-shadow"
                      >
                        <div
                          className="w-full h-12 rounded-md mb-2 border border-gray-300"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="font-inter font-medium text-sm text-gray-900">{color.code}</div>
                        <div className="font-inter text-xs text-gray-600">{color.name}</div>
                      </div>
                    ))}
                  </div>
                  <p className="font-inter text-sm text-gray-500 mt-4">
                    * Andere RAL kleuren zijn mogelijk op aanvraag. Neem contact met ons op voor meer informatie.
                  </p>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="border-t border-gray-200 pt-8 space-y-4">
              <button
                onClick={handleOpenModal}
                className="w-full bg-red-600 text-white py-4 px-8 rounded-lg hover:bg-red-700 transition-colors duration-200 font-inter font-medium text-lg shadow-lg hover:shadow-xl"
              >
                Offerte Aanvragen
              </button>
            </div>

            {/* Additional Info */}
            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="font-inter font-medium text-lg text-gray-900 mb-2">Heeft u vragen?</h3>
              <p className="font-inter text-gray-600 mb-4">
                Onze specialisten helpen u graag bij het kiezen van de juiste doosletter voor uw project.
              </p>
              <a href="#contact" className="font-inter font-medium text-red-600 hover:text-red-700 transition-colors">
                Neem contact op →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Quote Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="font-inter font-medium text-2xl text-gray-900">Offerte Aanvragen</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <XIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-h-[calc(90vh-180px)] overflow-y-auto">
              {/* Left Side - Message Preview */}
              <div className="space-y-4">
                <div>
                  <label className="font-inter font-medium text-sm text-gray-700 mb-2 block">
                    Uw Bericht (bewerk indien gewenst)
                  </label>
                  <textarea
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent font-inter text-gray-900 resize-none"
                    placeholder="Typ uw bericht hier..."
                  />
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-inter text-sm text-gray-600 mb-2">
                    <strong>Product:</strong> {product.name}
                  </p>
                  {selectedRalColor && (
                    <p className="font-inter text-sm text-gray-600">
                      <strong>Geselecteerde RAL kleur:</strong> {selectedRalColor}
                    </p>
                  )}
                </div>
              </div>

              {/* Right Side - RAL Color Selection */}
              <div className="space-y-4">
                <div>
                  <label className="font-inter font-medium text-sm text-gray-700 mb-2 block">
                    Selecteer een RAL Kleur (optioneel)
                  </label>
                  <div className="max-h-[400px] overflow-y-auto space-y-2 pr-2">
                    {ralColors.map((color, index) => (
                      <button
                        key={index}
                        onClick={() => handleRalColorSelect(color.code, color.name)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg border-2 transition-all hover:shadow-md ${
                          selectedRalColor === `${color.code} (${color.name})`
                            ? "border-red-600 bg-red-50"
                            : "border-gray-200 bg-white hover:border-gray-300"
                        }`}
                      >
                        <div
                          className="w-12 h-12 rounded-md border border-gray-300 flex-shrink-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        <div className="text-left flex-1">
                          <div className="font-inter font-medium text-sm text-gray-900">{color.code}</div>
                          <div className="font-inter text-xs text-gray-600">{color.name}</div>
                        </div>
                        {selectedRalColor === `${color.code} (${color.name})` && (
                          <CheckIcon className="w-5 h-5 text-red-600 flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-4 p-6 border-t border-gray-200">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-3 border border-gray-300 rounded-lg font-inter font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Annuleren
              </button>
              <button
                onClick={handleSendWhatsApp}
                className="px-6 py-3 bg-green-600 text-white rounded-lg font-inter font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Verstuur via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
