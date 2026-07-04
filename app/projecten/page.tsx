"use client"

import { Header } from "@/components/header"
import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function ProjectenPage() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; src: string } | null>(null)

  const projects = [
    { id: 1, type: "image", src: "/media/project-01.jpg", span: "" },
    { id: 2, type: "video", src: "/media/project-02.mov", span: "" },
    { id: 3, type: "image", src: "/media/project-03.jpg", span: "md:col-span-2" },
    { id: 4, type: "image", src: "/media/project-04.jpg", span: "md:col-span-2" },
    { id: 5, type: "image", src: "/media/project-05.jpg", span: "md:row-span-2" },
    { id: 6, type: "image", src: "/media/project-06.jpg", span: "" },
    { id: 7, type: "image", src: "/media/project-07.jpg", span: "md:col-span-2" },
    { id: 8, type: "video", src: "/media/project-08.mp4", span: "md:col-span-2" },
    { id: 9, type: "image", src: "/media/project-09.jpg", span: "md:row-span-2" },
    { id: 10, type: "image", src: "/media/project-10.jpg", span: "" },
    { id: 11, type: "image", src: "/media/project-11.jpg", span: "" },
    { id: 12, type: "image", src: "/media/project-12.jpg", span: "md:col-span-2" },
    { id: 13, type: "image", src: "/media/project-13.jpg", span: "" },
    { id: 14, type: "image", src: "/media/project-14.jpg", span: "" },
    { id: 15, type: "image", src: "/media/project-15.jpg", span: "md:row-span-2" },
    { id: 16, type: "image", src: "/media/project-16.jpg", span: "md:col-span-2" },
    { id: 17, type: "image", src: "/media/project-17.jpg", span: "md:row-span-2" },
    { id: 18, type: "image", src: "/media/project-18.jpg", span: "" },
    { id: 19, type: "image", src: "/media/project-19.jpg", span: "md:col-span-2" },
    { id: 20, type: "image", src: "/media/project-20.jpg", span: "" },
    { id: 21, type: "image", src: "/media/project-21.jpg", span: "md:row-span-2" },
    { id: 22, type: "image", src: "/media/project-22.jpg", span: "md:col-span-2" },
    { id: 23, type: "image", src: "/media/project-23.png", span: "" },
    { id: 24, type: "image", src: "/media/project-24.jpg", span: "" },
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
