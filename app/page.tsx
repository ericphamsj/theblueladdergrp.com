import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[800px] flex items-center" style={{ height: 'calc(100vh - 110px)' }}>
        <Image
          src="/living-room-vertical-green-wall.jpeg"
          alt="Sustainable building project"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/60 to-green-800/60" />
        <div className="container relative">
          <div className="max-w-[900px] space-y-8 text-white text-center mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light architectural-title">
              Elevating Construction Through Sustainability
            </h1>
            <p className="text-xl font-light md:text-2xl">
              Expert CALGreen Inspections, EOS Solutions, and Sustainable Building Practices
            </p>
            <div className="flex items-center justify-center flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative -mt-20 pb-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "CALGreen Expert",
                description: "Certified ICC CALGreen Inspector/Plans Examiner with over 20 years of experience",
                image: "https://placehold.co/600x400"
              },
              {
                title: "Sustainable Building",
                description: "Expert guidance in green building practices and environmental compliance",
                image: "https://placehold.co/600x400"
              },
              {
                title: "EOS Solutions",
                description: "Transform your construction business with proven operational excellence strategies",
                image: "https://placehold.co/600x400"
              }
            ].map((feature, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[600px]">
              <Image
                src="https://placehold.co/800x600"
                alt="Faith Mackarness"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold architectural-title">
                Meet Your Trusted CALGreen and EOS Partner
              </h2>
              <p className="text-lg text-muted-foreground">
                Faith Mackarness brings over 20 years of construction expertise, blending technical knowledge with a passion for sustainable building and operational efficiency.
              </p>
              <div className="grid gap-4">
                {[
                  "Certified Green Building Professional for 16+ years",
                  "ICC Certified Plans Examiner and Inspector",
                  "EOS Masterclass Graduate and Certified Integrator",
                  "Licensed General Contractor since 2010"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-4" size="lg" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold architectural-title mb-4">
              Tailored Solutions for Construction Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive services to help you achieve sustainability and operational excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "CALGreen Services",
                description: "Expert guidance through California's green building standards",
                features: [
                  "CALGreen Inspections",
                  "Plans Examination",
                  "Construction Waste Management",
                  "Green Halo System Support"
                ],
                image: "https://placehold.co/800x600"
              },
              {
                title: "EOS Implementation",
                description: "Transform your construction business operations",
                features: [
                  "Business Process Optimization",
                  "Team Alignment",
                  "Strategic Planning",
                  "Performance Metrics"
                ],
                image: "https://placehold.co/800x600"
              }
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: CALGreen Code Expertise */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold architectural-title text-center mb-12">
            Your CALGreen Code Specialists
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                As ICC Certified CALGreen Special Inspectors / Plans Examiners, we are experts in the California Green Building Standards Code. Our in-depth knowledge helps you:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Understand and navigate complex CALGreen requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Reduce costs associated with your CALGreen permit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Ensure professional and economical permit documents</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Streamline the inspection and commissioning process</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/services#calgreen">Learn More About CALGreen Services</Link>
              </Button>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="https://placehold.co/600x400"
                alt="CALGreen Code Book"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white text-secondary-foreground">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold architectural-title text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                author: "Marcus Aurelius",
                role: "Project Manager"
              },
              {
                quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                author: "Julia Domna",
                role: "Development Director"
              },
              {
                quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
                author: "Lucius Seneca",
                role: "Construction Executive"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background text-foreground">
                <CardContent className="p-6 space-y-4">
                  <p className="italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <Image
          src="https://placehold.co/1920x600"
          alt="Sustainable construction"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
        <div className="container relative">
          <div className="max-w-[600px] mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold architectural-title">
              Let's Build a Sustainable Future Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today to schedule a consultation for CALGreen services or EOS solutions.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

