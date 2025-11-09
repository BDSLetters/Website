export const ralColors = [
  { code: "RAL 9006", name: "Wit Aluminium", hex: "#A5A5A5" },
  { code: "RAL 9005", name: "Gitzwart", hex: "#0A0A0A" },
  { code: "RAL 5002", name: "Ultramarijnblauw", hex: "#20214F" },
  { code: "RAL 1018", name: "Zinkgeel", hex: "#F8F32B" },
  { code: "RAL 3030", name: "Verkeersrood", hex: "#AF2B1E" },
  { code: "RAL 5015", name: "Hemelsblauw", hex: "#2271B3" },
  { code: "RAL 5017", name: "Verkeersblauw", hex: "#063971" },
  { code: "RAL 5022", name: "Nachtblauw", hex: "#252850" },
  { code: "RAL 8015", name: "Kastanjebruin", hex: "#633A34" },
  { code: "RAL 6005", name: "Mosgroen", hex: "#2F4F4F" },
  { code: "RAL 1015", name: "Licht Ivoor", hex: "#E6D690" },
  { code: "RAL 2004", name: "Zuiver Oranje", hex: "#F44611" },
  { code: "RAL 4010", name: "Telemagenta", hex: "#CF3476" },
  { code: "RAL 4008", name: "Signaalviolet", hex: "#924E7D" },
  { code: "RAL 7015", name: "Leigrijs", hex: "#434750" },
  { code: "RAL 3001", name: "Signaalrood", hex: "#A52019" },
  { code: "RAL 3002", name: "Karmijnrood", hex: "#A2231D" },
  { code: "RAL 3020", name: "Verkeersrood", hex: "#CC0605" },
]

export const neonColors = [
  { name: "Warm Wit", description: "Zachte, warme witte glow" },
  { name: "Koud Wit", description: "Helder, koel wit licht" },
  { name: "Rood", description: "Klassiek neon rood" },
  { name: "Blauw", description: "Levendig blauw" },
  { name: "Groen", description: "Fris groen" },
  { name: "Geel", description: "Helder geel" },
  { name: "Oranje", description: "Warm oranje" },
  { name: "Roze", description: "Zacht roze" },
  { name: "Paars", description: "Diep paars" },
  { name: "RGB", description: "Meerdere kleuren programmeerbaar" },
]

export interface Product {
  id: string
  name: string
  description: string
  image: string
  category: string
  price: string
  fullDescription: string
  features: string[]
  technicalSpecs: {
    materiaal: string
    afwerking: string
    diepte: string
    montage: string
    garantie: string
  }
}

export const allProducts: Product[] = [
  // Luxe Acrylaatletters
  {
    id: "luxe-1",
    name: "Luxe 1",
    description: "Direct verlichte acrylaatletter met LED-verlichting",
    image: "/products/luxe-1.jpg",
    category: "Luxe Acrylaatletters",
    price: "Op aanvraag",
    fullDescription:
      "De luxe acrylaatletter 1 is een direct verlichte acrylaatletter en wordt standaard geleverd in 30mm. De letter wordt bewerkt tot een uitgediepte letter, die wordt voorzien van LED-verlichting. De achterzijde en de zijkanten van de letter worden gespoten in een RAL-kleur naar wens. Ook wordt de letter geleverd met een 1:1 montagetekening en draadeinden.",
    features: [
      "Ledsverlichting varierend van koel tot warmlicht",
      "De letter is verkrijgbaar in elke afmeting",
      "Direct verlichte LED-verlichting",
      "Hoogwaardige acrylaatafwerking",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Eenvoudige montage",
    ],
    technicalSpecs: {
      materiaal: "Acrylaat met LED-verlichting",
      afwerking: "Wit, matte finish",
      diepte: "30mm standaard",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "luxe-2",
    name: "Luxe 2",
    description: "Indirect verlichte acrylaatletter met LED-verlichting",
    image: "/products/luxe-2.jpg",
    category: "Luxe Acrylaatletters",
    price: "Op aanvraag",
    fullDescription:
      "De luxe acrylaatletter 2 is een indirect verlichte acrylaatletter en wordt standaard geleverd in 30mm. De letter wordt bewerkt tot een uitgediepte letter, die wordt voorzien van LED-verlichting. De voorzijde en de zijkanten van de letter worden gespoten in een RAL-kleur naar wens. Ook wordt de letter geleverd met een 1:1 montagetekening en draadeinden.",
    features: [
      "Ledsverlichting varierend van koel tot warmlicht",
      "De letter is verkrijgbaar in elke afmeting",
      "Indirect verlichte LED-verlichting",
      "Hoogwaardige acrylaatafwerking",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Eenvoudige montage",
    ],
    technicalSpecs: {
      materiaal: "Acrylaat met LED-verlichting",
      afwerking: "Oranje, matte finish",
      diepte: "30mm standaard",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "luxe-3",
    name: "Luxe 3",
    description: "Achter- en zijkanten verlichte acrylaatletter",
    image: "/products/luxe-3.jpg",
    category: "Luxe Acrylaatletters",
    price: "Op aanvraag",
    fullDescription:
      "De luxe acrylaatletter 3 is een aan achter- en zijkanten verlichte acrylaatletter en wordt standaard geleverd in 30mm. De letter wordt bewerkt tot een uitgediepte letter, die wordt voorzien van LED-verlichting. De voorkant van de letter wordt gespoten in een RAL-kleur naar wens. Ook wordt de letter geleverd met een 1:1 montagetekening en draadeinden.",
    features: [
      "Ledsverlichting varierend van koel tot warmlicht",
      "De letter is verkrijgbaar in elke afmeting",
      "Achter- en zijkanten verlichte LED-verlichting",
      "Hoogwaardige acrylaatafwerking",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Eenvoudige montage",
    ],
    technicalSpecs: {
      materiaal: "Acrylaat met LED-verlichting",
      afwerking: "Zwart met witte zijkanten",
      diepte: "30mm standaard",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "luxe-4",
    name: "Luxe 4",
    description: "Voor- en zijkanten verlichte acrylaatletter",
    image: "/products/luxe-4.jpg",
    category: "Luxe Acrylaatletters",
    price: "Op aanvraag",
    fullDescription:
      "De luxe acrylaatletter 4 is een aan voor- en zijkanten verlichte acrylaatletter en wordt standaard geleverd in 30mm. De letter wordt bewerkt tot een uitgediepte letter, die wordt voorzien van LED-verlichting. De achterkant van de letter wordt gespoten. Ook wordt de letter geleverd met een 1:1 montagetekening en draadeinden.",
    features: [
      "Ledsverlichting varierend van koel tot warmlicht",
      "De letter is verkrijgbaar in elke afmeting",
      "Voor- en zijkanten verlichte LED-verlichting",
      "Hoogwaardige acrylaatafwerking",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Eenvoudige montage",
    ],
    technicalSpecs: {
      materiaal: "Acrylaat met LED-verlichting",
      afwerking: "Rood met witte zijkanten",
      diepte: "30mm standaard",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "luxe-5",
    name: "Luxe 5",
    description: "Vanaf het midden verlichte acrylaatletter",
    image: "/products/luxe-5.jpg",
    category: "Luxe Acrylaatletters",
    price: "Op aanvraag",
    fullDescription:
      "De luxe acrylaatletter 5 is een vanaf het midden verlichte acrylaatletter en wordt standaard geleverd in 30mm. De letter wordt bewerkt tot een uitgediepte letter, die wordt voorzien van LED-verlichting. De achter- en voorkant van de letter wordt gespoten in een RAL-kleur naar wens. Ook wordt de letter geleverd met een 1:1 montagetekening en draadeinden.",
    features: [
      "Ledsverlichting varierend van koel tot warmlicht",
      "Vanaf het midden verlichte LED-verlichting",
      "Hoogwaardige acrylaatafwerking",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Eenvoudige montage",
    ],
    technicalSpecs: {
      materiaal: "Acrylaat met LED-verlichting",
      afwerking: "Zwart met oranje zijkanten",
      diepte: "30mm standaard",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "luxe-6",
    name: "Luxe 6",
    description: "Direct/indirect/zijkanten verlichte 3D-acrylaatletter",
    image: "/products/luxe-6.jpg",
    category: "Luxe Acrylaatletters",
    price: "Op aanvraag",
    fullDescription:
      "De luxe acrylaatletter 6 is een direct- en indirect, of aan de zijkanten verlichte 3D-acrylaatletter, die standaard wordt geleverd in 30mm. De voor- zij- en achterkant van de letter worden gespoten in een RAL-kleur naar wens. Ook wordt de letter geleverd met een 1:1 montagetekening en draadeinden.",
    features: [
      "Ledsverlichting varierend van koel tot warmlicht",
      "Direct/indirect/zijkanten verlichte LED-verlichting",
      "Hoogwaardige acrylaatafwerking",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Geleverd met 1:1 montagetekening en draadeinden",
    ],
    technicalSpecs: {
      materiaal: "Acrylaat met LED-verlichting",
      afwerking: "RAL-kleur naar wens",
      diepte: "30mm standaard",
      montage: "Wandmontage met draadeinden",
      garantie: "2 jaar",
    },
  },
  // RVS
  // {
  //   id: "rvs",
  //   name: "Profiel 1 Doosletter",
  //   description: "Onverlichte aluminium doosletter met forex bodem",
  //   image: "/products/profiel-1.png",
  //   category: "Doosletters",
  //   price: "Op aanvraag",
  //   fullDescription:
  //     "Profiel 1 is een onverlichte aluminium doosletter met forex in de bodem. De letter kan worden gecoat in elke RAL-kleur.",
  //   features: [
  //     "Onverlichte aluminium constructie",
  //     "Forex in de bodem",
  //     "Verkrijgbaar in elke RAL-kleur",
  //     "Duurzame constructie",
  //     "Geschikt voor binnen- en buitengebruik",
  //   ],
  //   technicalSpecs: {
  //     materiaal: "Aluminium met forex bodem",
  //     afwerking: "RAL-kleur naar wens",
  //     diepte: "40-60mm",
  //     montage: "Wandmontage met verborgen bevestiging",
  //     garantie: "2 jaar",
  //   },
  // },
  
  
  // Doosletters
  {
    id: "profiel-1",
    name: "Profiel 1 Doosletter",
    description: "Onverlichte aluminium doosletter met forex bodem",
    image: "/products/profiel-1.png",
    category: "Doosletters",
    price: "Op aanvraag",
    fullDescription:
      "Profiel 1 is een onverlichte aluminium doosletter met forex in de bodem. De letter kan worden gecoat in elke RAL-kleur.",
    features: [
      "Onverlichte aluminium constructie",
      "Forex in de bodem",
      "Verkrijgbaar in elke RAL-kleur",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
    ],
    technicalSpecs: {
      materiaal: "Aluminium met forex bodem",
      afwerking: "RAL-kleur naar wens",
      diepte: "40-60mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "profiel-3",
    name: "Profiel 3 Doosletter",
    description: "Indirect verlichte aluminium doosletter met 5mm acrylaat",
    image: "/products/profiel-3.jpg",
    category: "Doosletters",
    price: "Op aanvraag",
    fullDescription:
      "Profiel 3 is een indirect verlichte aluminium doosletter. In de bodem van de letter bevindt zich 5mm acrylaat. De letter kan worden gecoat in elke RAL-kleur.",
    features: [
      "Indirect verlichte LED-verlichting",
      "5mm acrylaat in de bodem",
      "Verkrijgbaar in elke RAL-kleur",
      "Aluminium constructie",
      "Geschikt voor binnen- en buitengebruik",
    ],
    technicalSpecs: {
      materiaal: "Aluminium",
      afwerking: "Zwart, matte finish",
      diepte: "40-60mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "profiel-3-luxe",
    name: "Profiel 3 Luxe LED",
    description: "Indirect verlichte aluminium doosletter met 10mm acrylaat",
    image: "/products/profiel-3-luxe-doosletter.png",
    category: "Doosletters",
    price: "Op aanvraag",
    fullDescription:
      "Profiel 3 Luxe LED - Profiel 3 Luxe LED is een indirect verlichte aluminium doosletter. In de bodem van de letter bevindt zich 10mm acrylaat, die tot 10mm kan uitsteken. De letter kan worden gecoat in elke RAL-kleur.",
    features: [
      "Indirect verlichte LED-verlichting",
      "10mm acrylaat in de bodem",
      "Acrylaat kan tot 10mm uitsteken",
      "Verkrijgbaar in elke RAL-kleur",
      "Aluminium constructie",
    ],
    technicalSpecs: {
      materiaal: "Aluminium met LED-verlichting",
      afwerking: "RAL-kleur naar wens",
      diepte: "40-60mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "profiel-4",
    name: "Profiel 4 Doosletter",
    description: "Direct verlichte aluminium doosletter met kaderlijst",
    image: "/products/profiel-4-ao-doosletter.png",
    category: "Doosletters",
    price: "Op aanvraag",
    fullDescription:
      "Profiel 4 is een direct verlichte aluminium doosletter. In de voorzijde van de letter bevindt zich een kaderlijst, waar de acrylaatplaat omheen valt. De acrylaatplaat wordt verlijmd aan de aluminium kaderlijst. De letter kan worden gecoat in elke RAL-kleur.",
    features: [
      "Direct verlichte LED-verlichting",
      "Kaderlijst in de voorzijde",
      "Acrylaatplaat verlijmd aan kaderlijst",
      "Verkrijgbaar in elke RAL-kleur",
      "Aluminium constructie",
    ],
    technicalSpecs: {
      materiaal: "Aluminium",
      afwerking: "Wit-geel, matte finish",
      diepte: "40-60mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "profiel-5",
    name: "Profiel 5 Doosletter",
    description: "Direct verlichte aluminium doosletter met 5mm acrylaat",
    image: "/products/profiel-6-doosletter.png",
    category: "Doosletters",
    price: "Op aanvraag",
    fullDescription:
      "Profiel 5 is een direct verlichte aluminium doosletter. De voorkant van de letter wordt voorzien van 5mm acrylaat. De zijkanten en de achterzijde van de letter kunnen worden gecoat in elke RAL-kleur.",
    features: [
      "Direct verlichte LED-verlichting",
      "5mm acrylaat in de voorkant",
      "Zijkanten en achterzijde in RAL-kleur",
      "Aluminium constructie",
      "Geschikt voor binnen- en buitengebruik",
    ],
    technicalSpecs: {
      materiaal: "Aluminium",
      afwerking: "Wit, matte finish",
      diepte: "40-60mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "profiel-5-deluxe",
    name: "Profiel 5 Deluxe Doosletter",
    description: "Direct verlichte aluminium doosletter met 10mm acrylaat",
    image: "/products/profiel-5-deluxe.jpg",
    category: "Doosletters",
    price: "Op aanvraag",
    fullDescription:
      "Profiel 5 Deluxe is een direct verlichte aluminium doosletter. De voorkant van de letter wordt voorzien van 10mm acrylaat. De zijkanten en de achterzijde van de letter kunnen worden gecoat in elke RAL-kleur.",
    features: [
      "Direct verlichte LED-verlichting",
      "10mm acrylaat in de voorkant",
      "Zijkanten en achterzijde in RAL-kleur",
      "Aluminium constructie",
      "Premium afwerking",
    ],
    technicalSpecs: {
      materiaal: "Aluminium",
      afwerking: "Rood, matte finish",
      diepte: "40-60mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  // Doosletterframes
  {
    id: "doosletter-oranje-trim",
    name: "Ladderframe",
    description: "Aluminium ladderframe voor stabiele montage",
    image: "/products/ladderframe.jpg",
    category: "Doosletterframes",
    price: "Op aanvraag",
    fullDescription:
      "Het ladderframe is een van aluminium profiel geproduceerde frame. Hoe dik het aluminium moet worden, wordt bepaald op basis van de ingediende aanvraag. Ook wordt op basis van de ingediende aanvraag bepaald, wat de RAL-kleur is van het frame.",
    features: [
      "Aluminium profiel constructie",
      "Dikte bepaald op basis van aanvraag",
      "RAL-kleur naar wens",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
    ],
    technicalSpecs: {
      materiaal: "Aluminium profiel",
      afwerking: "RAL-kleur naar wens",
      diepte: "Variabel",
      montage: "Wandmontage",
      garantie: "2 jaar",
    },
  },
  {
    id: "doosletter-blauw-vrijstaand",
    name: "Dakinstallatie",
    description: "Aluminium dakconstructie met letterframe of ladderframe",
    image: "/products/dakinstallatie.jpg",
    category: "Doosletterframes",
    price: "Op aanvraag",
    fullDescription:
      "Een dakinstallatie is een van aluminium profiel geproduceerde dakconstructie. De dakconstructie bestaat ofwel uit een letterframe, ofwel uit een ladderframe, die wordt ondersteund met daksteunen. De dikte van het aluminium en de gewenste RAL-kleur worden bepaald op basis van de ingediende aanvraag. Bovendien worden de doosletters eerst op een aluminium montageframe gemonteerd, dat vervolgens met daksteunen aan het dak wordt bevestigd. Dit creëert een stevig, samenhangend geheel dat met een hijskraan gehesen kan worden en op het dak geassembleerd en geplaatst wordt. De kabels worden zoveel mogelijk uit het zicht verbonden op het frame, wat zorgt voor een nette afwerking.",
    features: [
      "Aluminium profiel dakconstructie",
      "Letterframe of ladderframe met daksteunen",
      "Dikte en RAL-kleur op basis van aanvraag",
      "Montageframe met daksteunen",
      "Hijskraan-vriendelijk ontwerp",
      "Verborgen kabelverbindingen",
    ],
    technicalSpecs: {
      materiaal: "Aluminium profiel",
      afwerking: "RAL-kleur naar wens",
      diepte: "Variabel",
      montage: "Dakmontage met daksteunen",
      garantie: "2 jaar",
    },
  },
  // LED Neon
  {
    id: "neon-letter-s",
    name: "LED Neon Letter",
    description: "Witte LED neon letter met zachte glow effect",
    image: "/products/neon-letter.png",
    category: "LED Neon",
    price: "Op aanvraag",
    fullDescription:
      "LED neon letter met zachte glow effect. Perfect voor moderne interieurs en gevels. Verkrijgbaar in verschillende kleuren.",
    features: [
      "Zachte glow effect",
      "LED neon verlichting",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Eenvoudige montage",
    ],
    technicalSpecs: {
      materiaal: "LED neon",
      afwerking: "Verschillende kleuren beschikbaar",
      diepte: "20-30mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "neon-sign-bds",
    name: "LED Neon Sign",
    description: "Custom LED neon sign met script lettering en glow effect",
    image: "/products/neon-sign.png",
    category: "LED Neon",
    price: "Op aanvraag",
    fullDescription:
      "Custom LED neon sign met script lettering en glow effect. Perfect voor moderne interieurs en gevels. Verkrijgbaar in verschillende kleuren.",
    features: [
      "Custom script lettering",
      "Glow effect",
      "LED neon verlichting",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
    ],
    technicalSpecs: {
      materiaal: "LED neon",
      afwerking: "Verschillende kleuren beschikbaar",
      diepte: "20-30mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  // Lichtbakken
  {
    id: "lichtbak-rood",
    name: "Type 1",
    description: "Opvallende rode transparante lichtbak met LED-verlichting",
    image: "/products/lichtbak-type-1.jpg",
    category: "Lichtbakken",
    price: "Op aanvraag",
    fullDescription:
      "Opvallende rode transparante lichtbak met LED-verlichting. Perfect voor moderne gevels en interieurs.",
    features: [
      "Rode transparante afwerking",
      "LED-verlichting",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Eenvoudige montage",
    ],
    technicalSpecs: {
      materiaal: "Aluminium met acrylaat",
      afwerking: "Rood transparant",
      diepte: "80-120mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "lichtbak-transparant",
    name: "Type 2",
    description: "Transparante lichtbak met warm wit LED-licht en 3D effect",
    image: "/products/lichtbak-type-2.png",
    category: "Lichtbakken",
    price: "Op aanvraag",
    fullDescription:
      "Transparante lichtbak met warm wit LED-licht en 3D effect. Perfect voor moderne gevels en interieurs.",
    features: [
      "Transparante afwerking",
      "Warm wit LED-licht",
      "3D effect",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
    ],
    technicalSpecs: {
      materiaal: "Aluminium met acrylaat",
      afwerking: "Transparant",
      diepte: "80-120mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "lichtbak-klassiek",
    name: "Type 3",
    description: "Klassieke rechthoekige lichtbak met heldere backlit verlichting",
    image: "/products/lichtbak-type-3.png",
    category: "Lichtbakken",
    price: "Op aanvraag",
    fullDescription:
      "Klassieke rechthoekige lichtbak met heldere backlit verlichting. Perfect voor moderne gevels en interieurs.",
    features: [
      "Klassiek rechthoekig design",
      "Heldere backlit verlichting",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
      "Eenvoudige montage",
    ],
    technicalSpecs: {
      materiaal: "Aluminium met acrylaat",
      afwerking: "Wit",
      diepte: "80-120mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "lichtbak-textuur",
    name: "Type 4",
    description: "Lichtbak met ijskristal textuur voor premium uitstraling",
    image: "/products/lichtbak-type-4.png",
    category: "Lichtbakken",
    price: "Op aanvraag",
    fullDescription:
      "Lichtbak met ijskristal textuur voor premium uitstraling. Perfect voor moderne gevels en interieurs.",
    features: [
      "IJskristal textuur",
      "Premium uitstraling",
      "LED-verlichting",
      "Duurzame constructie",
      "Geschikt voor binnen- en buitengebruik",
    ],
    technicalSpecs: {
      materiaal: "Aluminium met acrylaat",
      afwerking: "IJskristal textuur",
      diepte: "80-120mm",
      montage: "Wandmontage met verborgen bevestiging",
      garantie: "2 jaar",
    },
  },
  {
    id: "lichtbak-plafond",
    name: "Type 5",
    description: "Getextureerde lichtbak met plafondmontage en ambient lighting",
    image: "/products/lichtbak-type-5.png",
    category: "Lichtbakken",
    price: "Op aanvraag",
    fullDescription: "Getextureerde lichtbak met plafondmontage en ambient lighting. Perfect voor moderne interieurs.",
    features: [
      "Getextureerde afwerking",
      "Plafondmontage",
      "Ambient lighting",
      "Duurzame constructie",
      "Geschikt voor binnengebruik",
    ],
    technicalSpecs: {
      materiaal: "Aluminium met acrylaat",
      afwerking: "Getextureerd",
      diepte: "80-120mm",
      montage: "Plafondmontage",
      garantie: "2 jaar",
    },
  },
]
