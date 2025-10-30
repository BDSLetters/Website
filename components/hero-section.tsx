"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToServices = () => {
    const servicesSection = document.querySelector("#services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="home" className="min-h-screen relative">
      <div className="absolute inset-0">
        <Image
          src="/products/bds-lichtdoos.png"
          alt="BDS Letters red lightbox signage"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/30"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        {/* Left side - Content */}
        <div className="flex items-center justify-start p-8 lg:p-16 min-h-screen">
          <div className="max-w-lg bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">OVER ONS</div>
            <h1 className="font-inter font-bold text-4xl lg:text-5xl text-gray-900 mb-6 text-balance">
               <span className="text-accent">BDS</span> Letters groothandel in doos- en acrylaatletters
            </h1>

            <p className="font-inter text-lg text-gray-600 mb-8 leading-relaxed">
              BDS Letters is een fabrikant van reclameletters in Nederland. Wij produceren doosletters, verlichte én
              onverlichte letters, acrylaatletters, acrylaat 3D-letters en speciale transparante lichtbakken.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-700">Al bijna 20 jaar ervaring</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-700">De nieuwste technologieën</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span className="text-gray-700">Snelle leveringen</span>
              </div>
            </div>

            <Button
              size="lg"
              onClick={scrollToServices}
              className="bg-accent hover:bg-accent/90 text-white font-inter font-medium px-8"
            >
              Lees verder
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
