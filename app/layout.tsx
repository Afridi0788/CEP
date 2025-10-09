import type React from "react"
import { GeistSans, GeistMono } from "geist/font"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { AuthProvider } from "@/contexts/auth-context"

export const metadata = {
  title: "CareerPath - Student Career Guidance",
  description: "Find your perfect career path with personalized guidance, tests, and counseling",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        <AuthProvider>
          <Navigation />
          <main>{children}</main>
        </AuthProvider>
      </body>
    </html>
  )
}
