"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Calculator,
  Palette,
  Stethoscope,
  Scale,
  Briefcase,
  ChevronRight,
  Filter,
  Search,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const streams = [
  {
    id: "computer-science",
    category: "science",
    title: "Computer Science & Engineering",
    description: "Software development, AI, machine learning, and cutting-edge technology",
    eligibility: "10+2 with Physics, Chemistry, Mathematics",
    duration: "4 years",
    careers: ["Software Engineer", "Data Scientist", "AI Specialist", "Full Stack Developer"],
    icon: GraduationCap,
    color: "bg-[hsl(142,71%,45%)]",
  },
  {
    id: "mechanical-engineering",
    category: "science",
    title: "Mechanical Engineering",
    description: "Design, manufacturing, and maintenance of mechanical systems",
    eligibility: "10+2 with Physics, Chemistry, Mathematics",
    duration: "4 years",
    careers: ["Mechanical Engineer", "Automotive Engineer", "Robotics Engineer", "Design Engineer"],
    icon: GraduationCap,
    color: "bg-[hsl(142,71%,45%)]",
  },
  {
    id: "chartered-accountancy",
    category: "commerce",
    title: "Chartered Accountancy (CA)",
    description: "Financial accounting, auditing, taxation, and business advisory",
    eligibility: "10+2 in any stream",
    duration: "4-5 years",
    careers: ["Chartered Accountant", "Tax Consultant", "Financial Advisor", "Auditor"],
    icon: Calculator,
    color: "bg-[hsl(24,95%,53%)]",
  },
  {
    id: "business-administration",
    category: "commerce",
    title: "Business Administration (BBA/MBA)",
    description: "Management, marketing, finance, and entrepreneurship",
    eligibility: "10+2 in any stream",
    duration: "3-5 years",
    careers: ["Business Manager", "Marketing Manager", "HR Manager", "Entrepreneur"],
    icon: Calculator,
    color: "bg-[hsl(24,95%,53%)]",
  },
  {
    id: "psychology",
    category: "arts",
    title: "Psychology",
    description: "Human behavior, mental health, counseling, and research",
    eligibility: "10+2 in any stream",
    duration: "3-5 years",
    careers: ["Clinical Psychologist", "Counselor", "HR Specialist", "Researcher"],
    icon: Palette,
    color: "bg-[hsl(0,72%,51%)]",
  },
  {
    id: "journalism",
    category: "arts",
    title: "Journalism & Mass Communication",
    description: "Media, reporting, content creation, and digital communication",
    eligibility: "10+2 in any stream",
    duration: "3 years",
    careers: ["Journalist", "Content Writer", "News Anchor", "Digital Marketer"],
    icon: Palette,
    color: "bg-[hsl(0,72%,51%)]",
  },
  {
    id: "mbbs",
    category: "medical",
    title: "MBBS (Bachelor of Medicine)",
    description: "Medical practice, patient care, and healthcare services",
    eligibility: "10+2 with Physics, Chemistry, Biology",
    duration: "5.5 years",
    careers: ["Doctor", "Surgeon", "Medical Officer", "Specialist"],
    icon: Stethoscope,
    color: "bg-[hsl(142,71%,45%)]",
  },
  {
    id: "pharmacy",
    category: "medical",
    title: "Pharmacy (B.Pharm)",
    description: "Pharmaceutical sciences, drug development, and healthcare",
    eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics",
    duration: "4 years",
    careers: ["Pharmacist", "Drug Inspector", "Research Scientist", "Medical Representative"],
    icon: Stethoscope,
    color: "bg-[hsl(142,71%,45%)]",
  },
  {
    id: "law",
    category: "law",
    title: "Law (LLB/BA LLB)",
    description: "Legal practice, advocacy, corporate law, and judiciary",
    eligibility: "10+2 in any stream",
    duration: "3-5 years",
    careers: ["Lawyer", "Corporate Counsel", "Judge", "Legal Advisor"],
    icon: Scale,
    color: "bg-[hsl(24,95%,53%)]",
  },
  {
    id: "graphic-design",
    category: "design",
    title: "Graphic Design",
    description: "Visual communication, branding, and digital design",
    eligibility: "10+2 in any stream",
    duration: "3-4 years",
    careers: ["Graphic Designer", "UI/UX Designer", "Brand Designer", "Art Director"],
    icon: Briefcase,
    color: "bg-[hsl(0,72%,51%)]",
  },
  {
    id: "architecture",
    category: "design",
    title: "Architecture (B.Arch)",
    description: "Building design, urban planning, and sustainable architecture",
    eligibility: "10+2 with Physics, Chemistry, Mathematics",
    duration: "5 years",
    careers: ["Architect", "Urban Planner", "Interior Designer", "Landscape Architect"],
    icon: Briefcase,
    color: "bg-[hsl(0,72%,51%)]",
  },
]

const categories = [
  { id: "all", label: "All Streams" },
  { id: "science", label: "Science & Technology" },
  { id: "commerce", label: "Commerce & Business" },
  { id: "arts", label: "Arts & Humanities" },
  { id: "medical", label: "Medical & Healthcare" },
  { id: "law", label: "Law & Legal" },
  { id: "design", label: "Design & Creative" },
]

export default function StreamsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredStreams = streams.filter((stream) => {
    const matchesCategory = selectedCategory === "all" || stream.category === selectedCategory
    const matchesSearch =
      searchQuery === "" ||
      stream.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stream.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(180,60%,25%)] to-[hsl(180,60%,35%)] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-4 text-4xl font-bold">Career Streams</h1>
          <p className="text-pretty text-lg text-white/90">
            Explore detailed information about various career paths and find the perfect fit for your future
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative flex-1 lg:max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search streams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={
                    selectedCategory === category.id
                      ? "bg-[hsl(180,60%,30%)] text-white hover:bg-[hsl(180,60%,25%)]"
                      : ""
                  }
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Streams Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {filteredStreams.length === 0 ? (
            <div className="py-12 text-center">
              <p className="text-lg text-muted-foreground">No streams found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredStreams.map((stream) => {
                const Icon = stream.icon
                return (
                  <Card key={stream.id} className="group transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-4 flex items-start justify-between">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stream.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <Badge variant="secondary">{stream.duration}</Badge>
                      </div>
                      <CardTitle className="text-xl">{stream.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{stream.description}</p>

                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">Eligibility</h4>
                        <p className="text-sm text-muted-foreground">{stream.eligibility}</p>
                      </div>

                      <div>
                        <h4 className="mb-2 text-sm font-semibold text-foreground">Career Opportunities</h4>
                        <div className="flex flex-wrap gap-2">
                          {stream.careers.map((career) => (
                            <Badge key={career} variant="outline" className="text-xs">
                              {career}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button
                        variant="ghost"
                        className="w-full justify-between text-[hsl(180,60%,30%)] hover:bg-[hsl(180,60%,30%)]/10 hover:text-[hsl(180,60%,25%)]"
                      >
                        View Details
                        <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Still Confused About Your Career?</h2>
          <p className="mb-6 text-muted-foreground">
            Take our personalized interest finder quiz to get tailored recommendations
          </p>
          <Link href="/quiz">
            <Button size="lg" className="bg-[hsl(142,71%,45%)] text-white hover:bg-[hsl(142,71%,40%)]">
              Take Interest Quiz
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
