import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import { PageHero } from "@/components/page-hero"

export default function About() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Faith Mackarness: A Leader in Green Construction"
        description="Third-generation builder committed to sustainable construction and business excellence"
        image="https://placehold.co/1920x1080"
        imageAlt="Sustainable construction project"
      />

      {/* Background */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold architectural-title">
                A Journey in Sustainable Building
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Faith&apos;s journey began as a third-generation builder, focusing on alternative building methods and off-grid construction.
                </p>
                <p>
                  Her expertise spans high-end residential projects, heavy civil construction, and commercial tenant improvements.
                </p>
                <p>
                  Faith&apos;s passion lies in saving the planet one project at a time and transforming businesses into efficient, sustainable enterprises.
                </p>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 italic text-xl">
                &quot;I am deeply committed to finding solutions to the most complicated building and code issues.&quot;
              </blockquote>
            </div>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://placehold.co/800x600"
                alt="Faith Mackarness at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl font-bold architectural-title text-center mb-12">
            Certifications and Expertise
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "CGBP Certified",
                description: "Certified Green Building Professional with 16+ years of experience"
              },
              {
                title: "ICC Certified",
                description: "Plans Examiner and Inspector with comprehensive code knowledge"
              },
              {
                title: "EOS Expert",
                description: "Masterclass Graduate and Certified Integrator"
              },
              {
                title: "Licensed Contractor",
                description: "General Contractor since 2010 with hands-on experience"
              }
            ].map((cert, index) => (
              <Card key={index} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                <CardContent className="p-6 space-y-2">
                  <h3 className="font-bold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold architectural-title">
                Building a Sustainable Future, One Step at a Time
              </h2>
              <p className="text-lg text-muted-foreground">
                At The Blue Ladder Group, we believe in making sustainable building practices accessible and efficient for everyone.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplifying Compliance",
                  description: "Making CALGreen requirements clear and achievable"
                },
                {
                  title: "Business Excellence",
                  description: "Helping construction businesses scale with EOS"
                },
                {
                  title: "Innovation",
                  description: "Fostering sustainable and efficient practices"
                }
              ].map((value, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-muted text-secondary-foreground">
        <div className="container">
          <h2 className="text-3xl font-bold architectural-title text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Direct Communication",
                description: "Faith answers your calls and provides clear, actionable solutions"
              },
              {
                title: "Expert Network",
                description: "Access to an extensive network of ethical, qualified subcontractors and providers"
              },
              {
                title: "Passionate Advocacy",
                description: "Making green building and business success accessible to everyone"
              }
            ].map((point, index) => (
              <Card key={index} className="bg-background text-foreground">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-bold mb-2">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <Image
          src="https://placehold.co/1920x600"
          alt="Sustainable construction project"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80" />
        <div className="container relative">
          <div className="max-w-[600px] mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold architectural-title">
              Discover How We Can Help You
            </h2>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
