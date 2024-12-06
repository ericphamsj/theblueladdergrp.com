import type { Metadata } from 'next'
import { Nunito_Sans } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const nunitoSans = Nunito_Sans({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito-sans',
})

export const metadata: Metadata = {
  title: 'The Blue Ladder Group',
  description: 'Expert CALGreen Inspections and EOS Solutions for Construction Businesses',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

