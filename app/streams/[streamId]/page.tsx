"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowLeft,
  GraduationCap,
  Calculator,
  Palette,
  Stethoscope,
  Scale,
  Briefcase,
  Calendar,
  CheckCircle,
  Lightbulb,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const streams = [
    {
    id: "computer-science",
    category: "science",
    title: "Computer Science & Engineering",
    description: "Software development, AI, machine learning, and cutting-edge technology.",
    eligibility: "10+2 with Physics, Chemistry, Mathematics",
    duration: "4 years",
    careers: ["Software Engineer", "Data Scientist", "AI Specialist", "Full Stack Developer", "Cybersecurity Analyst"],
    icon: GraduationCap,
    color: "bg-[hsl(142,71%,45%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Focus on algorithms and data structures.",
      "Explore artificial intelligence and machine learning.",
      "Develop innovative software solutions.",
      "Gain expertise in cybersecurity.",
    ],
  },
  {
    id: "mechanical-engineering",
    category: "science",
    title: "Mechanical Engineering",
    description: "Design, manufacturing, and maintenance of mechanical systems.",
    eligibility: "10+2 with Physics, Chemistry, Mathematics",
    duration: "4 years",
    careers: ["Mechanical Engineer", "Automotive Engineer", "Robotics Engineer", "Design Engineer"],
    icon: GraduationCap,
    color: "bg-[hsl(142,71%,45%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Study thermodynamics and fluid mechanics.",
      "Learn about design and manufacturing processes.",
      "Specialize in robotics and automation.",
      "Contribute to sustainable energy solutions.",
    ],
  },
  {
    id: "chartered-accountancy",
    category: "commerce",
    title: "Chartered Accountancy (CA)",
    description: "Financial accounting, auditing, taxation, and business advisory.",
    eligibility: "10+2 in any stream",
    duration: "4-5 years",
    careers: ["Chartered Accountant", "Tax Consultant", "Financial Advisor", "Auditor"],
    icon: Calculator,
    color: "bg-[hsl(24,95%,53%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Master financial reporting and analysis.",
      "Understand tax laws and regulations.",
      "Perform rigorous audits for businesses.",
      "Provide strategic financial advice.",
    ],
  },
  {
    id: "business-administration",
    category: "commerce",
    title: "Business Administration (BBA/MBA)",
    description: "Management, marketing, finance, and entrepreneurship.",
    eligibility: "10+2 in any stream",
    duration: "3-5 years",
    careers: ["Business Manager", "Marketing Manager", "HR Manager", "Entrepreneur"],
    icon: Calculator,
    color: "bg-[hsl(24,95%,53%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Develop strong leadership and management skills.",
      "Learn marketing strategies and brand management.",
      "Gain expertise in financial management.",
      "Explore entrepreneurial ventures and innovation.",
    ],
  },
  {
    id: "psychology",
    category: "arts",
    title: "Psychology",
    description: "Human behavior, mental health, counseling, and research.",
    eligibility: "10+2 in any stream",
    duration: "3-5 years",
    careers: ["Clinical Psychologist", "Counselor", "HR Specialist", "Researcher"],
    icon: Palette,
    color: "bg-[hsl(0,72%,51%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Study cognitive processes and human development.",
      "Understand mental health conditions and treatments.",
      "Develop counseling and therapeutic techniques.",
      "Conduct research on social and behavioral patterns.",
    ],
  },
  {
    id: "journalism",
    category: "arts",
    title: "Journalism & Mass Communication",
    description: "Media, reporting, content creation, and digital communication.",
    eligibility: "10+2 in any stream",
    duration: "3 years",
    careers: ["Journalist", "Content Writer", "News Anchor", "Digital Marketer"],
    icon: Palette,
    color: "bg-[hsl(0,72%,51%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Master reporting and journalistic ethics.",
      "Learn content creation for various media.",
      "Develop skills in digital communication.",
      "Understand the evolving media landscape.",
    ],
  },
  {
    id: "mbbs",
    category: "medical",
    title: "MBBS (Bachelor of Medicine)",
    description: "Medical practice, patient care, and healthcare services.",
    eligibility: "10+2 with Physics, Chemistry, Biology",
    duration: "5.5 years",
    careers: ["Doctor", "Surgeon", "Medical Officer", "Specialist"],
    icon: Stethoscope,
    color: "bg-[hsl(142,71%,45%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Gain in-depth knowledge of human anatomy and physiology.",
      "Learn patient diagnosis and treatment protocols.",
      "Develop clinical skills through practical training.",
      "Specialize in various medical fields.",
    ],
  },
  {
    id: "pharmacy",
    category: "medical",
    title: "Pharmacy (B.Pharm)",
    description: "Pharmaceutical sciences, drug development, and healthcare.",
    eligibility: "10+2 with Physics, Chemistry, Biology/Mathematics",
    duration: "4 years",
    careers: ["Pharmacist", "Drug Inspector", "Research Scientist", "Medical Representative"],
    icon: Stethoscope,
    color: "bg-[hsl(142,71%,45%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Study pharmacology and medicinal chemistry.",
      "Understand drug formulation and delivery systems.",
      "Learn about pharmaceutical regulations.",
      "Contribute to drug research and development.",
    ],
  },
  {
    id: "law",
    category: "law",
    title: "Law (LLB/BA LLB)",
    description: "Legal practice, advocacy, corporate law, and judiciary.",
    eligibility: "10+2 in any stream",
    duration: "3-5 years",
    careers: ["Lawyer", "Corporate Counsel", "Judge", "Legal Advisor"],
    icon: Scale,
    color: "bg-[hsl(24,95%,53%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Master legal principles and jurisprudence.",
      "Develop strong advocacy and argumentation skills.",
      "Understand various branches of law.",
      "Contribute to justice and legal reforms.",
    ],
  },
  {
    id: "graphic-design",
    category: "design",
    title: "Graphic Design",
    description: "Visual communication, branding, and digital design.",
    eligibility: "10+2 in any stream",
    duration: "3-4 years",
    careers: ["Graphic Designer", "UI/UX Designer", "Brand Designer", "Art Director"],
    icon: Briefcase,
    color: "bg-[hsl(0,72%,51%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Learn visual communication principles.",
      "Master design software and tools.",
      "Develop branding and identity solutions.",
      "Create engaging digital and print media.",
    ],
  },
  {
    id: "architecture",
    category: "design",
    title: "Architecture (B.Arch)",
    description: "Building design, urban planning, and sustainable architecture.",
    eligibility: "10+2 with Physics, Chemistry, Mathematics",
    duration: "5 years",
    careers: ["Architect", "Urban Planner", "Interior Designer", "Landscape Architect"],
    icon: Briefcase,
    color: "bg-[hsl(0,72%,51%)]",
    youtubeVideoId: "nKEupNYjlZk",
    keyHighlights: [
      "Study architectural theory and history.",
      "Learn building design and construction techniques.",
      "Explore urban planning and landscape design.",
      "Focus on sustainable and green architecture.",
    ],
  },
]

type StreamDetailPageProps = {
  params: {
    streamId: string
  }
}

export default function StreamDetailPage({ params }: StreamDetailPageProps) {
  const stream = streams.find((s) => s.id === params.streamId)

  if (!stream) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
        <h1 className="mb-4 text-4xl font-bold">404 - Stream Not Found</h1>
        <p className="mb-8 text-muted-foreground">Sorry, we couldn't find the stream you were looking for.</p>
        <Link href="/streams">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Streams
          </Button>
        </Link>
      </div>
    )
  }

  const Icon = stream.icon

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className={`px-4 py-12 text-white sm:px-6 lg:px-8 ${stream.color}`}>
        <div className="mx-auto max-w-5xl">
          <div className="mb-6">
            <Link href="/streams">
              <Button variant="ghost" className="bg-white/10 text-white hover:bg-white/20 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Streams
              </Button>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-white/20">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">{stream.title}</h1>
              <p className="mt-1 text-pretty text-lg text-white/90">{stream.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Left Column (Video and Highlights) */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle>Stream Overview</CardTitle>
              </CardHeader>
              <CardContent>
                {/* --- CHANGE HERE --- */}
                {/* Replaced 'aspect-w-16 aspect-h-9' with 'aspect-square' for a 1:1 ratio */}
                <div className="aspect-square overflow-hidden rounded-lg border">
                  <iframe
                    src={`https://www.youtube.com/embed/${stream.youtubeVideoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  ></iframe>
                </div>
              </CardContent>
            </Card>

            {/* Key Highlights Card */}
            {stream.keyHighlights && stream.keyHighlights.length > 0 && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
                    Key Highlights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    {stream.keyHighlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {stream.careers.map((career) => (
                    <Badge key={career} variant="secondary" className="px-3 py-1 text-sm">
                      {career}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column (Details) */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Key Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <div>
                    <h4 className="font-semibold">Eligibility</h4>
                    <p className="text-sm text-muted-foreground">{stream.eligibility}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Calendar className="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
                  <div>
                    <h4 className="font-semibold">Duration</h4>
                    <p className="text-sm text-muted-foreground">{stream.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}