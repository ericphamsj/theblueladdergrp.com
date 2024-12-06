import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex flex-col items-center py-4">
        <Link href="/" className="font-bold text-2xl md:text-3xl mb-4 architectural-title text-[#006838]">
          The Blue Ladder Group
        </Link>
        <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4">
          <Link href="/" className="text-sm font-medium hover:text-[#006838] transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-[#006838] transition-colors">
            About
          </Link>
          <Link href="/services" className="text-sm font-medium hover:text-[#006838] transition-colors">
            Services
          </Link>
          <Link href="/eos-for-contractors" className="text-sm font-medium hover:text-[#006838] transition-colors">
            EOS for Contractors
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-[#006838] transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

