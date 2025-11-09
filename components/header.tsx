"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MenuIcon, XIcon, ChevronDownIcon } from "@/components/icons"
import Image from "next/image"
import Link from "next/link"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projecten", href: "/projecten" },
    { label: "Over Ons", href: "/over-ons" },
    { label: "Montage", href: "/montage" },
  ]

  const productCategories = [
    { label: "Luxe Acrylaatletters", href: "/categories/luxe-acrylaatletters" },
    { label: "Doosletters", href: "/categories/doosletters" },
    { label: "RVS", href: "/categories/rvs" },
    { label: "Doosletterframes", href: "/categories/doosletterframes" },
    { label: "LED - Neon Signs", href: "/categories/led-neon" },
    { label: "Speciale Lichtbakken", href: "/categories/lichtbakken" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/50 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/logo-bds-letters.png"
                alt="BDS Letters Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-open-sans text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <button className="font-open-sans text-sm font-medium text-foreground hover:text-accent transition-colors flex items-center gap-1">
                Producten
                <ChevronDownIcon
                  className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isProductsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-56 bg-white/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-100 py-2">
                    {productCategories.map((category) => (
                      <Link
                        key={category.label}
                        href={category.href}
                        className="block px-4 py-2 text-sm font-open-sans text-foreground hover:bg-accent/10 hover:text-accent transition-colors"
                      >
                        {category.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-open-sans font-semibold"
            >
              <a href="https://api.whatsapp.com/send/?phone=310625505222" target="_blank" rel="noopener noreferrer">
                Offerte Aanvragen
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-open-sans text-sm font-medium text-foreground hover:text-accent transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <div className="border-t border-border pt-4">
                <p className="font-open-sans text-sm font-semibold text-foreground mb-2">Producten</p>
                {productCategories.map((category) => (
                  <Link
                    key={category.label}
                    href={category.href}
                    className="block pl-4 py-2 font-open-sans text-sm text-foreground hover:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.label}
                  </Link>
                ))}
              </div>

              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-open-sans font-semibold mt-4"
              >
                <a href="https://api.whatsapp.com/send/?phone=310625505222" target="_blank" rel="noopener noreferrer">
                  Offerte Aanvragen
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
