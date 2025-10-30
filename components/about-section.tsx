import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Users, Zap, Target, TrendingUp, Award } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Opvallende Uitstraling",
      description: "Dankzij ons doorontwikkelde 3D-letters die veel worden gebruikt in reclameborden en signage.",
    },
    {
      icon: Users,
      title: "Professionele en Moderne Esthetiek",
      description: "Doosletters versterken de professionele uitstraling van een bedrijf of locatie.",
    },
    {
      icon: Zap,
      title: "Flexibiliteit en Veelzijdigheid",
      description:
        "Doosletters kunnen op verschillende manieren worden gemaakt in verschillende materialen, kleuren en afmetingen.",
    },
    {
      icon: Target,
      title: "Energiezuinig",
      description: "Het gebruik van LED technologie voor verlichting vermindert het energieverbruik.",
    },
    {
      icon: TrendingUp,
      title: "Rendement op Investering (ROI)",
      description: "Een goede investering biedt de aandacht van potentiële klanten.",
    },
    {
      icon: Award,
      title: "Duurzaamheid",
      description: "Doosletters worden vaak gemaakt van duurzame materialen zoals roestvrij staal of aluminium.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-foreground mb-6">BDS Letters</h2>
            <p className="font-open-sans text-lg text-muted mb-8 text-pretty">
              Een groothandel in doos en acrylaatletters
            </p>
            <div className="mb-8">
              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-open-sans font-semibold"
              >
                <a href="https://api.whatsapp.com/send/?phone=310625505222" target="_blank" rel="noopener noreferrer">
                  Vraag een Prijsopgave Aan
                </a>
              </Button>
            </div>
          </div>

          <div className="lg:order-first">
            <img
              src="/products/bds-doosletters.png"
              alt="BDS dimensional letters showing depth and construction"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-bold text-sm mb-2">{feature.title}</h3>
                    <p className="font-open-sans text-xs text-muted text-pretty">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
