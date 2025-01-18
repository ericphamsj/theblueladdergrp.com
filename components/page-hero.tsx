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
    <section className="relative flex items-center h-[500px] min-h-[550px] lg:min-h-[650px] lg:min-h-[650px]">
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/50 to-green-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100" />
      <div className="container relative mx-auto">
        <div className="space-y-8 text-center text-white max-w-4xl mx-auto">
          <h1 className="mx-auto text-5xl md:text-6xl font-light architectural-title">
            {title}
          </h1>
          {description && (
            <p className="mx-auto text-xl font-light md:text-2xl">
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

