"use client"

import { Header } from "@/components/header"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function ProjectenPage() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; src: string } | null>(null)

  const projects = [
    {
      id: 7,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251024-WA0007-EBGouR0dVt06uQGfonSA864SozAhLk.mp4",
      span: "",
    },
    {
      id: 8,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251024-WA0006-2W2jDl0HYBRT0IgQSGhnaOTSVbdzvV.mp4",
      span: "",
    },
    {
      id: 9,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20251024-WA0012-Mk1Kr5YLbfjYKqQSsTf5WuXnrSFBIA.mp4",
      span: "md:col-span-2",
    },
    {
      id: 15,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-24%20at%2014.45.42_50a1deaf-BmnhqXJ1lBXBuKYixnwMu0ck0V4mOn.jpg",
      span: "md:col-span-2",
    },
    {
      id: 16,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-24%20at%2014.45.42_113cd7ac-GTgyC0aLI0PabRQKO5PpBypDlMPYGr.jpg",
      span: "md:row-span-2",
    },
    {
      id: 17,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-24%20at%2014.45.42_5eb5d548-NBPmPgCYjAEPyeLDsYOp7VVClkyaPK.jpg",
      span: "",
    },
    {
      id: 19,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-24%20at%2014.45.42_e3dac349-ouocA1JaaXEpO3R0JPMj7DSaDu3mU4.jpg",
      span: "md:col-span-2",
    },
    {
      id: 22,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251024-WA0059-qOc8obDcIVfKjgO1wGCQYmWOmcK05h.jpg",
      span: "md:col-span-2",
    },

    {
      id: 27,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251024-WA0058-L0ENIkYvOL86tJ8HZNfL87Kuh6nP7F.jpg",
      span: "md:row-span-2",
    },
    {
      id: 28,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251024-WA0060-CkOzdPonnv8bknpx213wLcY7e0NghL.jpg",
      span: "",
    },
    {
      id: 29,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251024-WA0062-eYh1rkipjWCCpUiX1RtM1COWFrUU6B.jpg",
      span: "",
    },
    {
      id: 30,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251024-WA0061-dwcYmMz826ISSxXqYndAPCe4la7oUh.jpg",
      span: "md:col-span-2",
    },
    {
      id: 33,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251024-WA0046-5aCeBcvjXlAbvnBTeRg6szELhTolLw.jpg",
      span: "",
    },
    {
      id: 35,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251024-WA0048-e2iUVqLl7o7cSbfD2xv2WqPrAAaWoe.jpg",
      span: "",
    },
    {
      id: 38,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251024-WA0047-T5KcJFJNI9yPRJwEisIGgKwUziF1t1.jpg",
      span: "md:row-span-2",
    },
    {
      id: 42,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251027-WA0010-GVh1RK1oV9vreGyAjkkMwxNsRIAyPC.jpg",
      span: "md:col-span-2",
    },
    {
      id: 43,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-10-27%20at%2020.36.22_c74da5fd-hmRGn7W9h1EYectZUxyIk1d76SWspy.jpg",
      span: "md:row-span-2",
    },
    {
      id: 44,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-27%20at%2020.45.04_f80773aa-J3KvQuRjbHYEpRRGUYM4eF2iPU2HdO.mp4",
      span: "",
    },
    {
      id: 45,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251027-WA0013-tLSdcm084CO9NizLgPIOhBPVCtBhrE.jpg",
      span: "md:col-span-2",
    },
    {
      id: 46,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251027-WA0011-HWvny6cnOq4k8WW3q24EWssn9Pwea3.jpg",
      span: "",
    },
    {
      id: 47,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251027-WA0008-qgdxiruDP5uaadbHCDu4SHoUu9DhWR.jpg",
      span: "md:row-span-2",
    },
    {
      id: 48,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-27%20at%2020.42.34_9d669b17-JJEQzrnq3OubMrUefphnj6UP6nyytk.mp4",
      span: "md:col-span-2",
    },
    {
      id: 49,
      type: "image",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20251027-WA0012-45RLlHgBZjdWiaAvTVA3UtxOxUFzqI.jpg",
      span: "",
    },
    {
      id: 50,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-29%20at%2020.27.00_41e52b8e-SX48uUm89XCsZVvn1fhXdXK99PSFW4.mp4",
      span: "",
    },
    {
      id: 51,
      type: "video",
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202025-10-29%20at%2020.27.01_2f7903f6-EPS6h8dA5AMfmvSXcCaO0wuVRrlCIR.mp4",
      span: "md:col-span-2",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Onze Projecten</h1>
              <p className="text-xl text-white/90">
                Ontdek onze gerealiseerde projecten en laat u inspireren door de mogelijkheden van BDS Letters. Van
                doosletters tot LED-neon signs, elk project is met zorg en vakmanschap uitgevoerd.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className={`relative overflow-hidden rounded-lg group cursor-pointer ${project.span}`}
                  onClick={() => setSelectedMedia({ type: project.type, src: project.src })}
                >
                  {project.type === "video" ? (
                    <video
                      src={project.src}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <Image
                      src={project.src || "/placeholder.svg"}
                      alt={`Project ${project.id}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Klaar om uw project te realiseren?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Neem contact met ons op en ontdek wat BDS Letters voor u kan betekenen.
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=310625505222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Neem Contact Op
            </a>
          </div>
        </section>
      </main>

      {/* Lightbox modal for enlarged view */}
      {selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedMedia(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {/* Media content */}
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === "video" ? (
              <video src={selectedMedia.src} autoPlay loop controls className="max-w-full max-h-full rounded-lg" />
            ) : (
              <img
                src={selectedMedia.src || "/placeholder.svg"}
                alt="Enlarged project"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  )
}
