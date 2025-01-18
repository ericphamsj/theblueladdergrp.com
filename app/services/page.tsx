import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'
import { PageHero } from "@/components/page-hero"

export default function Services() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Comprehensive Solutions for a Greener Future"
        image="/services.jpg"
        imageAlt="Sustainable building practices"
        description="At The Blue Ladder Group, we specialize in CALGreen compliance, business optimization, and sustainable building practices, helping construction professionals achieve sustainability and efficiency."
      />

      {/* CALGreen Services */}
      <section className="bg-muted py-20" id="calgreen">
        <div className="container space-y-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center">Your CALGreen Expert</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "CALGreen Inspections and Plans Examinations",
                description: `The Blue Ladder Group ensures your projects meet all CALGreen Building Code requirements. We streamline the compliance process by crafting and certifying building documents tailored to your municipality's standards and ensuring "FINAL PASS".`
              },
              {
                title: "Construction Waste Management Plans & Green Halo Assistance",
                description: "Streamline your waste tracking and reporting with tailored CWMP solutions to maximize recycling efforts and meet green requirements. Making waste diversion Compliance and reporting easy for your team."
              },
              {
                title: "Green Point Rating",
                description: `The Blue Ladder Group can assess and verify whether your project meets the standards of the "GreenPoint Rated" system.`
              },
              {
                title: "Lidar & 360 Photo Documentation",
                description: `Don’t miss the opportunity to permanently capture MEP placement and eliminate the guesswork of what’s behind the drywall. LiDAR’s immersive photos provide a lasting reference for maintenance and repairs throughout the structure’s lifetime.`
              },
              {
                title: "Green Product Sourcing",
                description: `Identify eco-friendly materials that align with your projects sustainability goals and "Mandatory Measures" requirements.`
              },
              // {
              //   title: "CALGreen Commissioning",
              //   description: "Comprehensive commissioning services to verify that building systems are designed, installed, and performing as intended to meet CALGreen requirements."
              // }
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Building Practices */}
      <section className="bg-muted py-20" id="sustainable-practices">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Sustainable Building Practices</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg">
                We&apos;re committed to promoting sustainable building practices that benefit both the environment and your bottom line. Our expertise includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Energy Efficiency Consulting</h3>
                    <p>Optimize your building&apos;s energy performance and reduce operational costs.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Water Conservation Strategies</h3>
                    <p>Implement effective water-saving measures in your construction projects.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Sustainable Material Selection</h3>
                    <p>Choose eco-friendly materials that meet performance and sustainability criteria.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Indoor Environmental Quality</h3>
                    <p>Ensure healthy indoor spaces through proper ventilation and material choices.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/bulb.png"
                alt="Sustainable building practices"
                fill
                className="object-cover object-center rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">How We Work Together</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {[
            {
              title: "Introduction",
              description: "Send The Blue Ladder Group your construction documents and a brief description of the project. We will immediately follow up with a written proposal."
            },
            {
              title: "Field Inspection",
              description: "Ideally there are three field inspections; Site before demolition, interior before all trades, and final."
            },
            {
              title: "Final Certification",
              description: "Upon completion of the final CALGreen inspection, The Blue Ladder Group will certify and stamp your plans, then prepare all necessary documents for municipal submission on a permanent flash drive."
            }
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="bg-muted text-secondary-foreground py-20">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Who We Serve</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "General Contractors",
                description: "Optimize your operations with EOS and ensure CALGreen compliance for all your projects."
              },
              {
                title: "Architects & Designers",
                description: "Integrate sustainable practices and ensure code compliance from the design phase."
              },
              {
                title: "Homeowners",
                description: "Navigate green building requirements for your new construction or renovation project."
              }
            ].map((audience, index) => (
              <Card key={index} className="bg-background text-foreground">
                <CardHeader>
                  <CardTitle>{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to Build Smarter and Greener?</h2>
          <Button size="lg" asChild className="max-w-[300px] whitespace-normal h-auto py-4">
            <Link href="/contact">Schedule Your Service Consultation Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

