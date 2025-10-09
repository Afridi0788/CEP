"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/auth-context"
import {
  User,
  Trophy,
  Target,
  TrendingUp,
  Calendar,
  BookOpen,
  Brain,
  Calculator,
  Globe,
  ArrowRight,
  Award,
} from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

const mockTestHistory = [
  {
    id: 1,
    name: "Logical Reasoning Test",
    date: "2025-01-15",
    score: 85,
    total: 100,
    icon: Brain,
    color: "bg-[hsl(142,71%,45%)]",
  },
  {
    id: 2,
    name: "Numerical Aptitude Test",
    date: "2025-01-10",
    score: 78,
    total: 100,
    icon: Calculator,
    color: "bg-[hsl(24,95%,53%)]",
  },
  {
    id: 3,
    name: "General Knowledge Test",
    date: "2025-01-05",
    score: 92,
    total: 100,
    icon: Globe,
    color: "bg-[hsl(142,71%,45%)]",
  },
]

export default function DashboardPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  const averageScore = Math.round(
    mockTestHistory.reduce((acc, test) => acc + (test.score / test.total) * 100, 0) / mockTestHistory.length,
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(180,60%,25%)] to-[hsl(180,60%,35%)] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
              <p className="text-white/90">{user.email}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Stats Grid */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tests Taken</p>
                    <p className="text-3xl font-bold">{mockTestHistory.length}</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(142,71%,45%)]/10">
                    <Trophy className="h-6 w-6 text-[hsl(142,71%,45%)]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Average Score</p>
                    <p className="text-3xl font-bold">{averageScore}%</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(24,95%,53%)]/10">
                    <TrendingUp className="h-6 w-6 text-[hsl(24,95%,53%)]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Quiz Completed</p>
                    <p className="text-3xl font-bold">1</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(0,72%,51%)]/10">
                    <Target className="h-6 w-6 text-[hsl(0,72%,51%)]" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Counseling Sessions</p>
                    <p className="text-3xl font-bold">0</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(142,71%,45%)]/10">
                    <Calendar className="h-6 w-6 text-[hsl(142,71%,45%)]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column */}
            <div className="space-y-6 lg:col-span-2">
              {/* Recommended Stream */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-[hsl(142,71%,45%)]" />
                    Your Recommended Career Path
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-gradient-to-br from-[hsl(180,60%,25%)] to-[hsl(180,60%,35%)] p-6 text-white">
                    <Badge className="mb-3 bg-white/20 text-white backdrop-blur-sm">Based on Interest Quiz</Badge>
                    <h3 className="mb-2 text-2xl font-bold">Science & Technology</h3>
                    <p className="mb-4 text-white/90">
                      You have a strong aptitude for analytical thinking and problem-solving. Consider careers in
                      engineering, computer science, or research.
                    </p>
                    <Link href="/streams?category=science">
                      <Button className="bg-white text-[hsl(180,60%,30%)] hover:bg-white/90">
                        Explore Streams
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Test History */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Test History</CardTitle>
                    <Link href="/tests">
                      <Button variant="ghost" size="sm">
                        View All
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockTestHistory.map((test) => {
                      const Icon = test.icon
                      const percentage = (test.score / test.total) * 100
                      return (
                        <div key={test.id} className="rounded-lg border border-border p-4">
                          <div className="mb-3 flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${test.color}`}>
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{test.name}</h4>
                                <p className="text-sm text-muted-foreground">{test.date}</p>
                              </div>
                            </div>
                            <Badge
                              variant="secondary"
                              className={
                                percentage >= 80
                                  ? "bg-[hsl(142,71%,45%)]/10 text-[hsl(142,71%,45%)]"
                                  : percentage >= 60
                                    ? "bg-[hsl(24,95%,53%)]/10 text-[hsl(24,95%,53%)]"
                                    : "bg-[hsl(0,72%,51%)]/10 text-[hsl(0,72%,51%)]"
                              }
                            >
                              {percentage}%
                            </Badge>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-muted-foreground">Score</span>
                              <span className="font-semibold">
                                {test.score}/{test.total}
                              </span>
                            </div>
                            <Progress value={percentage} className="h-2" />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link href="/quiz">
                    <Button className="w-full justify-start bg-[hsl(142,71%,45%)] text-white hover:bg-[hsl(142,71%,40%)]">
                      <Target className="mr-2 h-4 w-4" />
                      Retake Interest Quiz
                    </Button>
                  </Link>
                  <Link href="/tests">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent hover:bg-[hsl(24,95%,53%)]/10 hover:text-[hsl(24,95%,53%)]"
                    >
                      <Trophy className="mr-2 h-4 w-4" />
                      Take New Test
                    </Button>
                  </Link>
                  <Link href="/counseling">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-transparent hover:bg-[hsl(0,72%,51%)]/10 hover:text-[hsl(0,72%,51%)]"
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      Book Counseling
                    </Button>
                  </Link>
                  <Link href="/streams">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Browse Careers
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Profile Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Name</p>
                    <p className="font-semibold">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Role</p>
                    <Badge variant="secondary" className="capitalize">
                      {user.role}
                    </Badge>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
