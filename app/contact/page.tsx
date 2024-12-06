import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, Clock, MapPin, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <div className="flex flex-col gap-20 py-20">
      {/* Header */}
      <section className="container">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tighter">We're Here to Help You Succeed</h1>
          <p className="text-lg text-muted-foreground">
            Whether you're navigating CALGreen requirements or looking to optimize your business with EOS, our team is ready to assist. Reach out to start your journey toward sustainability and efficiency.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container">
        <div className="grid lg:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
          {/* Form */}
          <Card>
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <Textarea id="message" required />
                </div>
                <Button type="submit" className="w-full">Submit Your Inquiry</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Reach Us Directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>contact@blueladdergroup.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>(555) 123-4567</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p>Monday – Friday, 9 AM – 5 PM PST</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <p>Supporting architects, general contractors, homeowners, and municipalities with CALGreen and EOS services tailored to their needs across California.</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stay Connected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <p>Follow us on LinkedIn for updates on green construction innovations and business strategies.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter">Let's Build Something Amazing Together</h2>
          <Button size="lg" asChild>
            <a href="#contact-form">Contact Us Now</a>
          </Button>
        </div>
      </section>
    </div>
  )
}

