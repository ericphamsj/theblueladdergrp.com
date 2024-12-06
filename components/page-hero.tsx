import Image from "next/image"

interface PageHeroProps {
  title: string
  description?: string
  image?: string
  children?: React.ReactNode
}

export function PageHero({ title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative py-20 md:py-24 lg:py-32">
      {image && (
        <>
          <Image
            src={image}
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/50" />
        </>
      )}
      <div className="container relative">
        <div className="max-w-[800px] space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold architectural-title">
            {title}
          </h1>
          {description && (
            <p className="text-xl text-muted-foreground">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

