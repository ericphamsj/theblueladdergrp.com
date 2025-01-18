import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PageHeroProps {
  title: string
  description?: string
  image: string
  imageAlt: string
  ctaButton?: {
    text: string
    href: string
  }
}

export function PageHero({ title, description, image, imageAlt, ctaButton }: PageHeroProps) {
  return (
    <section className="relative flex items-center" style={{ height: 'calc(100vh - 110px)' }}>
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-green-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100" />
      <div className="container relative">
        <div className="max-w-[800px] space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold architectural-title text-white">
            {title}
          </h1>
          {description && (
            <p className="text-xl md:text-2xl text-muted">
              {description}
            </p>
          )}
          {ctaButton && (
            <Button size="lg" asChild>
              <Link href={ctaButton.href}>{ctaButton.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

