import { Card, CardContent } from "@/components/ui/card"

export function ReferencesSection() {
  const references = [
    {
      name: "Tech Solutions",
      image: "/abstract-tech-logo.png",
    },
    {
      name: "Retail Group",
      image: "/abstract-retail-logo.png",
    },
    {
      name: "Construction Co",
      image: "/construction-company-logo.png",
    },
    {
      name: "Medical Center",
      image: "/medical-center-logo.png",
    },
    {
      name: "Education Group",
      image: "/education-group-logo.png",
    },
    {
      name: "Finance Corp",
      image: "/finance-company-logo.png",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-foreground mb-4">Referenties</h2>
          <p className="font-open-sans text-lg text-muted max-w-2xl mx-auto text-pretty">
            Wij zijn trots op onze samenwerking met verschillende bedrijven en organisaties.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {references.map((reference, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
              <CardContent className="p-6 flex items-center justify-center h-24">
                <img
                  src={reference.image || "/placeholder.svg"}
                  alt={reference.name}
                  className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
