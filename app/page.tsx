import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  GraduationCap,
  Briefcase,
  Palette,
  Scale,
  Stethoscope,
  Calculator,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react"

const careerOptions = [
  {
    title: "Science & Technology",
    description: "Engineering, Research, IT, and Innovation",
    icon: GraduationCap,
    color: "bg-[hsl(142,71%,45%)]",
    href: "/streams?category=science",
  },
  {
    title: "Commerce & Business",
    description: "Finance, Accounting, Management, Economics",
    icon: Calculator,
    color: "bg-[hsl(24,95%,53%)]",
    href: "/streams?category=commerce",
  },
  {
    title: "Arts & Humanities",
    description: "Literature, History, Psychology, Languages",
    icon: Palette,
    color: "bg-[hsl(0,72%,51%)]",
    href: "/streams?category=arts",
  },
  {
    title: "Medical & Healthcare",
    description: "Medicine, Nursing, Pharmacy, Allied Health",
    icon: Stethoscope,
    color: "bg-[hsl(142,71%,45%)]",
    href: "/streams?category=medical",
  },
  {
    title: "Law & Legal Studies",
    description: "Corporate Law, Criminal Law, Legal Practice",
    icon: Scale,
    color: "bg-[hsl(24,95%,53%)]",
    href: "/streams?category=law",
  },
  {
    title: "Design & Creative",
    description: "Graphic Design, Fashion, Architecture, Media",
    icon: Briefcase,
    color: "bg-[hsl(0,72%,51%)]",
    href: "/streams?category=design",
  },
]

const withoutGuidance = [
  "Confused about career options",
  "Following peer pressure",
  "Unclear about strengths",
  "Random course selection",
  "High dropout rates",
]

const withGuidance = [
  "Clear career roadmap",
  "Data-driven decisions",
  "Personalized recommendations",
  "Confidence in choices",
  "Higher success rates",
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(180,60%,25%)] to-[hsl(180,60%,35%)] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[url('/abstract-geometric-pattern.png')] opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                AI-Powered Career Guidance
              </div>
              <h1 className="mb-6 text-balance text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Discover Your Perfect Career Path
              </h1>
              <p className="mb-8 text-pretty text-lg text-white/90 sm:text-xl">
                Get personalized career guidance, take aptitude tests, and connect with expert counselors to make
                informed decisions about your future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/quiz">
                  <Button size="lg" className="bg-[hsl(142,71%,45%)] text-white hover:bg-[hsl(142,71%,40%)]">
                    <Target className="mr-2 h-5 w-5" />
                    Take Interest Quiz
                  </Button>
                </Link>
                <Link href="/streams">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  >
                    Explore Careers
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              {/* <img
                src=""
                alt="Career Success"
                className="h-auto w-full max-w-md rounded-2xl"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Career Options Cards */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Explore Career Streams</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Choose from diverse career paths tailored to your interests and strengths
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careerOptions.map((option) => {
              const Icon = option.icon
              return (
                <Link key={option.title} href={option.href}>
                  <Card className="group h-full transition-all hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="p-6">
                      <div
                        className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${option.color}`}
                      >
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-foreground">{option.title}</h3>
                      <p className="mb-4 text-muted-foreground">{option.description}</p>
                      <div className="flex items-center text-sm font-medium text-[hsl(180,60%,30%)] group-hover:text-[hsl(180,60%,25%)]">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Why Career Guidance Matters</h2>
            <p className="text-pretty text-lg text-muted-foreground">
              See the difference professional guidance makes in your career journey
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Without Guidance */}
            <Card className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                    <XCircle className="h-6 w-6 text-destructive" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Without Guidance</h3>
                </div>
                <ul className="space-y-4">
                  {withoutGuidance.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <XCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* With Guidance */}
            <Card className="border-[hsl(142,71%,45%)]/20 bg-[hsl(142,71%,45%)]/5">
              <CardContent className="p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(142,71%,45%)]/10">
                    <CheckCircle2 className="h-6 w-6 text-[hsl(142,71%,45%)]" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">With CareerPath</h3>
                </div>
                <ul className="space-y-4">
                  {withGuidance.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[hsl(142,71%,45%)]" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border-none bg-gradient-to-br from-[hsl(180,60%,25%)] to-[hsl(180,60%,35%)] text-white">
            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                <TrendingUp className="mx-auto mb-4 h-12 w-12" />
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Ready to Start Your Journey?</h2>
                <p className="mb-8 text-pretty text-lg text-white/90">
                  Join thousands of students who have found their perfect career path with our guidance
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/register">
                    <Button size="lg" className="bg-white text-[hsl(180,60%,30%)] hover:bg-white/90">
                      Get Started Free
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/counseling">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                    >
                      Book Counseling
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
