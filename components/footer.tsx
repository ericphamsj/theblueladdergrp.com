import Link from "next/link"
import { Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#006838] text-white">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold architectural-title">The Blue Ladder Group</h3>
            <p className="text-sm opacity-90">
              Expert CALGreen Inspections and EOS Solutions for Construction Businesses
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://www.linkedin.com/in/FaithMackarness/" target="_blank" className="hover:text-[#8DC63F] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 opacity-90">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm opacity-75 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm opacity-75 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-sm opacity-75 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-sm opacity-75 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                Contact
              </Link>

            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4 opacity-90">Services</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-sm opacity-75 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                CALGreen Services
              </Link>
              <Link href="/eos-for-contractors" className="text-sm opacity-75 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                EOS Solutions
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="font-semibold mb-4 opacity-90">Contact</h4>
            <div className="space-y-2 text-sm opacity-75">
              <p>Monday – Friday</p>
              <p>9 AM – 5 PM PST</p>
              <p className="hover:text-[#8DC63F] transition-colors">
                <a href="mailto:Faith@TheBlueLadderGrp.com">Faith@TheBlueLadderGrp.com</a>
              </p>
              <p className="hover:text-[#8DC63F] transition-colors">
                <a href="tel:+14087282287">(408) 728-2287</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-60">
              © {new Date().getFullYear()} The Blue Ladder Group. All rights reserved.
            </p>
            {/* <nav className="flex gap-6">
              <Link href="/privacy" className="text-sm opacity-60 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm opacity-60 hover:opacity-100 hover:text-[#8DC63F] transition-colors">
                Terms of Service
              </Link>
            </nav> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

