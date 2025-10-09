"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Clock, AlertCircle, CheckCircle2, XCircle, TrendingUp, Award } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

const testQuestions: Record<string, any[]> = {
  "logical-reasoning": [
    {
      id: 1,
      question: "If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely Lazzies?",
      options: ["True", "False", "Cannot be determined", "Insufficient data"],
      correct: 0,
    },
    {
      id: 2,
      question: "What comes next in the sequence: 2, 6, 12, 20, 30, ?",
      options: ["40", "42", "44", "46"],
      correct: 1,
    },
    {
      id: 3,
      question: "If A is taller than B, and B is taller than C, who is the shortest?",
      options: ["A", "B", "C", "Cannot be determined"],
      correct: 2,
    },
  ],
  "numerical-aptitude": [
    {
      id: 1,
      question: "What is 15% of 200?",
      options: ["25", "30", "35", "40"],
      correct: 1,
    },
    {
      id: 2,
      question: "If a product costs $80 after a 20% discount, what was the original price?",
      options: ["$96", "$100", "$104", "$110"],
      correct: 1,
    },
    {
      id: 3,
      question: "What is the average of 12, 18, 24, and 30?",
      options: ["18", "21", "24", "27"],
      correct: 1,
    },
  ],
  "verbal-ability": [
    {
      id: 1,
      question: "Choose the synonym for 'Eloquent':",
      options: ["Articulate", "Silent", "Confused", "Boring"],
      correct: 0,
    },
    {
      id: 2,
      question: "Identify the antonym of 'Abundant':",
      options: ["Plentiful", "Scarce", "Numerous", "Ample"],
      correct: 1,
    },
    {
      id: 3,
      question: "Complete the analogy: Book is to Reading as Fork is to ?",
      options: ["Drawing", "Writing", "Eating", "Cooking"],
      correct: 2,
    },
  ],
  "general-knowledge": [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2,
    },
    {
      id: 2,
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correct: 1,
    },
    {
      id: 3,
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2,
    },
  ],
}

export default function TestPage() {
  const params = useParams()
  const router = useRouter()
  const testId = params.testId as string

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [timeLeft, setTimeLeft] = useState(600) // 10 minutes in seconds
  const [showResults, setShowResults] = useState(false)
  const [testStarted, setTestStarted] = useState(false)

  const questions = testQuestions[testId] || []

  useEffect(() => {
    if (testStarted && timeLeft > 0 && !showResults) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(timer)
    } else if (timeLeft === 0 && !showResults) {
      handleSubmit()
    }
  }, [testStarted, timeLeft, showResults])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const handleNext = () => {
    if (selectedAnswer !== null) {
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedAnswer })
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(answers[questions[currentQuestion + 1]?.id] ?? null)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[questions[currentQuestion - 1].id] ?? null)
    }
  }

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedAnswer })
    }
    setShowResults(true)
  }

  const calculateScore = () => {
    let correct = 0
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        correct++
      }
    })
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
    }
  }

  if (questions.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <AlertCircle className="mx-auto mb-4 h-12 w-12 text-destructive" />
            <h2 className="mb-2 text-xl font-bold">Test Not Found</h2>
            <p className="mb-4 text-muted-foreground">The test you're looking for doesn't exist.</p>
            <Link href="/tests">
              <Button>Back to Tests</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (!testStarted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <Card className="max-w-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Ready to Start?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted/50 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Test Duration: {formatTime(timeLeft)}</span>
              </div>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-muted-foreground" />
                <span className="font-semibold">Total Questions: {questions.length}</span>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• Once started, the timer cannot be paused</p>
              <p>• You can navigate between questions</p>
              <p>• Submit before time runs out to save your answers</p>
            </div>
            <Button
              onClick={() => setTestStarted(true)}
              className="w-full bg-[hsl(180,60%,30%)] text-white hover:bg-[hsl(180,60%,25%)]"
            >
              Start Test
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    return (
      <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="overflow-hidden border-none shadow-xl">
            <CardHeader
              className={`text-white ${
                score.percentage >= 70
                  ? "bg-[hsl(142,71%,45%)]"
                  : score.percentage >= 50
                    ? "bg-[hsl(24,95%,53%)]"
                    : "bg-[hsl(0,72%,51%)]"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Award className="h-8 w-8" />
                </div>
                <div>
                  <Badge className="mb-2 bg-white/20 text-white backdrop-blur-sm">Test Completed</Badge>
                  <CardTitle className="text-2xl">Your Score: {score.percentage}%</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="mb-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-lg border border-border p-4 text-center">
                  <CheckCircle2 className="mx-auto mb-2 h-8 w-8 text-[hsl(142,71%,45%)]" />
                  <p className="text-2xl font-bold">{score.correct}</p>
                  <p className="text-sm text-muted-foreground">Correct</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-center">
                  <XCircle className="mx-auto mb-2 h-8 w-8 text-[hsl(0,72%,51%)]" />
                  <p className="text-2xl font-bold">{score.total - score.correct}</p>
                  <p className="text-sm text-muted-foreground">Incorrect</p>
                </div>
                <div className="rounded-lg border border-border p-4 text-center">
                  <TrendingUp className="mx-auto mb-2 h-8 w-8 text-[hsl(24,95%,53%)]" />
                  <p className="text-2xl font-bold">{score.percentage}%</p>
                  <p className="text-sm text-muted-foreground">Accuracy</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold">Performance Analysis</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Your Score</span>
                    <span className="font-semibold">{score.percentage}%</span>
                  </div>
                  <Progress value={score.percentage} className="h-2" />
                  <p className="text-sm text-muted-foreground">
                    {score.percentage >= 70
                      ? "Excellent performance! You have strong aptitude in this area."
                      : score.percentage >= 50
                        ? "Good effort! With more practice, you can improve further."
                        : "Keep practicing! Review the concepts and try again."}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/tests" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Back to Tests
                  </Button>
                </Link>
                <Link href="/dashboard" className="flex-1">
                  <Button className="w-full bg-[hsl(180,60%,30%)] text-white hover:bg-[hsl(180,60%,25%)]">
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background">
      {/* Timer Bar */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-medium">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className={`text-sm font-semibold ${timeLeft < 60 ? "text-destructive" : ""}`}>
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={selectedAnswer?.toString()}
                onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
                className="space-y-3"
              >
                {question.options.map((option: string, index: number) => (
                  <div key={index} className="relative">
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} className="peer sr-only" />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex cursor-pointer items-center gap-4 rounded-lg border-2 border-border p-4 transition-all hover:border-[hsl(180,60%,30%)] hover:bg-muted/50 peer-data-[state=checked]:border-[hsl(180,60%,30%)] peer-data-[state=checked]:bg-[hsl(180,60%,30%)]/5"
                    >
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-muted font-semibold">
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-sm font-medium">{option}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="mt-8 flex gap-3">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="bg-transparent"
                >
                  Previous
                </Button>
                <div className="flex-1" />
                {currentQuestion === questions.length - 1 ? (
                  <Button
                    onClick={handleSubmit}
                    className="bg-[hsl(142,71%,45%)] text-white hover:bg-[hsl(142,71%,40%)]"
                  >
                    Submit Test
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    disabled={selectedAnswer === null}
                    className="bg-[hsl(180,60%,30%)] text-white hover:bg-[hsl(180,60%,25%)]"
                  >
                    Next
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
