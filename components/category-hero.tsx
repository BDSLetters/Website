import Image from "next/image"

export function CategoryHero({
  title,
  description,
  category,
}: { title: string; description: string; category: string }) {
  return (
    <section className="relative py-32">
      <div className="absolute inset-0">
        <Image
          src="/products/bds-lichtdoos-1.png"
          alt="BDS Letters background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="text-sm font-medium text-accent mb-4 tracking-wide uppercase">{category}</div>
          <h1 className="font-inter font-bold text-5xl lg:text-6xl text-white mb-6 text-balance">{title}</h1>
          <p className="text-xl text-gray-300 text-pretty">{description}</p>
        </div>
      </div>
    </section>
  )
}
