"use client"

import { Header } from "@/components/header"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function ProjectenPage() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; src: string } | null>(null)

  const projects = [
    { id: 1, type: "image", src: "/media/177678b2-6fc1-41bc-bdcb-bdc7eac214a1.JPG", span: "" },
    { id: 2, type: "video", src: "/media/395E8C89-886C-4651-92A2-A81D73C01404.mov", span: "" },
    { id: 3, type: "image", src: "/media/4fbdf63f-f228-4543-b5c5-113a4804fdd2.JPG", span: "md:col-span-2" },
    { id: 4, type: "image", src: "/media/6b08cfa8-283b-41de-86e8-da093a7d6eb7.JPG", span: "md:col-span-2" },
    { id: 5, type: "image", src: "/media/6e5a73f4-cbca-4bc9-b411-dd6645e0685e.JPG", span: "md:row-span-2" },
    { id: 6, type: "image", src: "/media/80bfc8a5-aeb1-4a50-a93c-defae702904f.JPG", span: "" },
    { id: 7, type: "image", src: "/media/98eb723d-084c-48ef-a82a-0ed2f7e2ebe9.JPG", span: "md:col-span-2" },
    { id: 8, type: "video", src: "/media/FireFly%20-%20Samples%20%28logo%29.mp4", span: "md:col-span-2" },
    { id: 9, type: "image", src: "/media/image0-23.jpeg", span: "md:row-span-2" },
    { id: 10, type: "image", src: "/media/image0-26.jpeg", span: "" },
    { id: 11, type: "image", src: "/media/image1-15.jpeg", span: "" },
    { id: 12, type: "image", src: "/media/image3-4.jpeg", span: "md:col-span-2" },
    { id: 13, type: "image", src: "/media/IMG_0537.jpg", span: "" },
    { id: 14, type: "image", src: "/media/IMG_0538.jpg", span: "" },
    { id: 15, type: "image", src: "/media/IMG_0807.jpeg", span: "md:row-span-2" },
    { id: 16, type: "image", src: "/media/IMG_0808.jpeg", span: "md:col-span-2" },
    { id: 17, type: "image", src: "/media/IMG_8939.jpeg", span: "md:row-span-2" },
    { id: 18, type: "image", src: "/media/Naamlooseeee.jpeg", span: "" },
    { id: 19, type: "image", src: "/media/Naamlooseeefaef.jpeg", span: "md:col-span-2" },
    { id: 20, type: "image", src: "/media/PHOTO-2025-12-04-13-59-57.jpg", span: "" },
    { id: 21, type: "image", src: "/media/PHOTO-2026-02-18-21-35-07.jpg", span: "md:row-span-2" },
    { id: 22, type: "image", src: "/media/PHOTO-2026-06-21-15-53-43.jpg", span: "md:col-span-2" },
    { id: 23, type: "image", src: "/media/Schermafbeelding%202026-06-18%20om%2010.43.49.png", span: "" },
    { id: 24, type: "image", src: "/media/WhatsApp%20Image%202025-12-11%20at%2019.25.40%20%281%29.jpeg", span: "" },
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
