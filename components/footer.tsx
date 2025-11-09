import { Button } from "@/components/ui/button"
import { MailIcon, PhoneIcon, MessageCircleIcon } from "@/components/icons"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-black text-lg font-montserrat">B</span>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-black text-lg leading-none">BDS</span>
                <span className="font-montserrat font-semibold text-sm opacity-80 leading-none">LETTERS</span>
              </div>
            </div>
            <p className="font-open-sans text-sm opacity-80 mb-4 text-pretty">
              Professionele letterdiensten voor al uw zakelijke en persoonlijke behoeften. Kwaliteit en service staan
              bij ons voorop.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 hover:bg-accent/20" asChild>
                <a
                  href="https://api.whatsapp.com/send/?phone=310625505222&text=Hallo,%20ik%20heb%20een%20vraag"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact via WhatsApp"
                >
                  <MessageCircleIcon className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Producten</h3>
            <ul className="space-y-2 font-open-sans text-sm">
              <li>
                <Link
                  href="/categories/luxe-acrylaatletters"
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Luxe Acrylaatletters
                </Link>
              </li>
              <li>
                <Link href="/categories/doosletters" className="opacity-80 hover:opacity-100 transition-opacity">
                  Doosletters
                </Link>
              </li>
              <li>
                <Link href="/categories/rvs" className="opacity-80 hover:opacity-100 transition-opacity">
                  RVS
                </Link>
              </li>
              <li>
                <Link href="/categories/doosletterframes" className="opacity-80 hover:opacity-100 transition-opacity">
                  Doosletterframes
                </Link>
              </li>
              <li>
                <Link href="/categories/led-neon" className="opacity-80 hover:opacity-100 transition-opacity">
                  LED - Neon Signs
                </Link>
              </li>
              <li>
                <Link href="/categories/lichtbakken" className="opacity-80 hover:opacity-100 transition-opacity">
                  Speciale Lichtbakken
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Over Ons</h3>
            <ul className="space-y-2 font-open-sans text-sm">
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Projecten
                </a>
              </li>
              <li>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/leveringsvoorwaarden"
                  className="text-primary-foreground opacity-80 hover:opacity-100 transition-opacity"
                >
                  Leveringsvoorwaarden
                </a>
              </li>
              <li>
                <a
                  href="/rvs"
                  className="text-primary-foreground opacity-80 hover:opacity-100 transition-opacity"
                >
                  RVS letters
                </a>
              </li>
              <li>
                <a
                  href="/montage"
                  className="text-primary-foreground opacity-80 hover:opacity-100 transition-opacity"
                >
                  Montage
                </a>
              </li>
              <li>
                <a
                  href="/garantievoorwaarden"
                  className="text-primary-foreground opacity-80 hover:opacity-100 transition-opacity"
                >
                  Garantievoorwaarden
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 font-open-sans text-sm">
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 opacity-60" />
                <span className="opacity-80">+31 6 2550 5222</span>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 opacity-60" />
                <span className="opacity-80">info@bdsletters.nl</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-80">KVK: 96080140</span>
                <span className="opacity-80">BTW-registratienummer: NL005187479826</span>
                <span className="opacity-80">BIC/SWIFT-code: INGBNL2A</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="opacity-80">Ma t/m Vri 08:30 tot 18:00
                  Za 10:00 tot 14:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="font-open-sans text-sm opacity-60">Copyright 2025 © BDS Letters. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  )
}
