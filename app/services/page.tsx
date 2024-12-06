import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from 'lucide-react'

export default function Services() {
  return (
    <div className="flex flex-col gap-20 py-20 pt-40">
      {/* Introduction */}
      <section className="container">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter">Comprehensive Solutions for a Greener Future</h1>
          <p className="text-lg text-muted-foreground">
            At The Blue Ladder Group, we specialize in CALGreen compliance, business optimization, and sustainable building practices, helping construction professionals achieve sustainability and efficiency.
          </p>
        </div>
      </section>

      {/* CALGreen Services */}
      <section className="bg-muted py-20" id="calgreen">
        <div className="container space-y-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center">Your CALGreen Expert</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Inspections and Plans Examinations",
                description: "Ensure your projects fully comply with California Green Building Standards (CALGreen). We simplify the compliance process, making sure your documentation and construction practices meet the necessary codes."
              },
              {
                title: "Construction Waste Management Plans",
                description: "Streamline your waste tracking and reporting with tailored CWMP solutions to maximize recycling efforts and meet green requirements."
              },
              {
                title: "Green Halo Assistance",
                description: "Leverage our expertise to navigate the Green Halo platform, making waste diversion compliance and reporting easy for your team."
              },
              {
                title: "360° Photo Documentation",
                description: "Gain access to detailed photo documentation at critical construction stages to ensure compliance and quality control."
              },
              {
                title: "Green Product Sourcing",
                description: "Identify eco-friendly building materials that align with your project's sustainability goals."
              },
              {
                title: "CALGreen Commissioning",
                description: "Comprehensive commissioning services to verify that building systems are designed, installed, and performing as intended to meet CALGreen requirements."
              }
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

      {/* EOS Services */}
      <section className="container" id="eos">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold tracking-tighter text-center">Streamline and Scale Your Construction Business</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Process Optimization",
                description: "We analyze your current workflows and streamline operations, reducing inefficiencies and freeing your team to focus on critical tasks."
              },
              {
                title: "Team Building and Alignment",
                description: "With EOS principles, we align your team to work toward shared goals, ensuring the right people are in the right roles."
              },
              {
                title: "Cultural Transformation",
                description: "Build a company culture of clarity, accountability, and excitement. Let your team thrive in an environment designed for success."
              },
              {
                title: "Long-Term Strategy Implementation",
                description: "Partner with us to define a vision and implement scalable strategies for sustainable growth."
              }
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
                We're committed to promoting sustainable building practices that benefit both the environment and your bottom line. Our expertise includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Energy Efficiency Consulting</h3>
                    <p>Optimize your building's energy performance and reduce operational costs.</p>
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
                src="https://placehold.co/800x1000"
                alt="Sustainable building practices"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="container">
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">How We Work Together</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {[
            {
              title: "Initial Consultation",
              description: "A detailed discussion to understand your unique needs—whether it's CALGreen compliance, EOS implementation, or sustainable building practices."
            },
            {
              title: "Customized Plan",
              description: "Develop tailored solutions to meet your goals efficiently and effectively, considering both regulatory requirements and business objectives."
            },
            {
              title: "Ongoing Support",
              description: "Continued guidance to ensure success long after implementation, including regular check-ins and updates on changing regulations."
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
      <section className="bg-secondary text-secondary-foreground py-20">
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
              },
              {
                title: "Municipalities",
                description: "Partner with us to promote and enforce sustainable building practices in your community."
              },
              {
                title: "Commercial Developers",
                description: "Maximize the value and sustainability of your commercial projects."
              },
              {
                title: "Subcontractors",
                description: "Align your services with CALGreen requirements and sustainable building trends."
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
      <section className="container">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">Ready to Build Smarter and Greener?</h2>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Your Service Consultation Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

