"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Calculator, BookOpen, Globe, Clock, Users, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

const tests = [
  {
    id: "logical-reasoning",
    title: "Logical Reasoning Test",
    description: "Assess your analytical and problem-solving abilities",
    icon: Brain,
    color: "bg-[hsl(142,71%,45%)]",
    duration: "30 minutes",
    questions: 25,
    difficulty: "Medium",
    participants: "12,450",
  },
  {
    id: "numerical-aptitude",
    title: "Numerical Aptitude Test",
    description: "Evaluate your mathematical and numerical skills",
    icon: Calculator,
    color: "bg-[hsl(24,95%,53%)]",
    duration: "25 minutes",
    questions: 20,
    difficulty: "Medium",
    participants: "10,230",
  },
  {
    id: "verbal-ability",
    title: "Verbal Ability Test",
    description: "Test your language comprehension and communication skills",
    icon: BookOpen,
    color: "bg-[hsl(0,72%,51%)]",
    duration: "20 minutes",
    questions: 20,
    difficulty: "Easy",
    participants: "15,680",
  },
  {
    id: "general-knowledge",
    title: "General Knowledge Test",
    description: "Check your awareness of current affairs and general topics",
    icon: Globe,
    color: "bg-[hsl(142,71%,45%)]",
    duration: "15 minutes",
    questions: 30,
    difficulty: "Easy",
    participants: "18,920",
  },
]

export default function TestsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(180,60%,25%)] to-[hsl(180,60%,35%)] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Live Aptitude Tests</h1>
          </div>
          <p className="text-pretty text-lg text-white/90">
            Take timed aptitude tests to evaluate your skills and get instant performance analytics
          </p>
        </div>
      </section>

      {/* Tests Grid */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {tests.map((test) => {
              const Icon = test.icon
              return (
                <Card key={test.id} className="group transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="mb-4 flex items-start justify-between">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${test.color}`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <Badge
                        variant="secondary"
                        className={
                          test.difficulty === "Easy"
                            ? "bg-[hsl(142,71%,45%)]/10 text-[hsl(142,71%,45%)]"
                            : "bg-[hsl(24,95%,53%)]/10 text-[hsl(24,95%,53%)]"
                        }
                      >
                        {test.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{test.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{test.description}</p>

                    <div className="grid grid-cols-3 gap-4 rounded-lg bg-muted/50 p-4">
                      <div className="text-center">
                        <Clock className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-semibold">{test.duration}</p>
                      </div>
                      <div className="text-center">
                        <BookOpen className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">Questions</p>
                        <p className="text-sm font-semibold">{test.questions}</p>
                      </div>
                      <div className="text-center">
                        <Users className="mx-auto mb-1 h-5 w-5 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">Taken by</p>
                        <p className="text-sm font-semibold">{test.participants}</p>
                      </div>
                    </div>

                    <Link href={`/tests/${test.id}`}>
                      <Button className="w-full bg-[hsl(180,60%,30%)] text-white hover:bg-[hsl(180,60%,25%)]">
                        Start Test
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="border-t border-border bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-2xl font-bold text-foreground">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-3">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(142,71%,45%)]/10">
                  <span className="text-xl font-bold text-[hsl(142,71%,45%)]">1</span>
                </div>
                <h3 className="mb-2 font-semibold">Choose a Test</h3>
                <p className="text-sm text-muted-foreground">
                  Select from various aptitude tests based on your interests
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(24,95%,53%)]/10">
                  <span className="text-xl font-bold text-[hsl(24,95%,53%)]">2</span>
                </div>
                <h3 className="mb-2 font-semibold">Take the Test</h3>
                <p className="text-sm text-muted-foreground">Answer questions within the time limit</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(0,72%,51%)]/10">
                  <span className="text-xl font-bold text-[hsl(0,72%,51%)]">3</span>
                </div>
                <h3 className="mb-2 font-semibold">Get Results</h3>
                <p className="text-sm text-muted-foreground">View instant scores and detailed analytics</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
