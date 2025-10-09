"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  Calculator,
  Palette,
  Stethoscope,
  Scale,
  Briefcase,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const questions = [
  {
    id: 1,
    question: "What type of activities do you enjoy the most?",
    options: [
      { value: "science", label: "Solving complex problems and experimenting", icon: GraduationCap },
      { value: "commerce", label: "Managing finances and business planning", icon: Calculator },
      { value: "arts", label: "Creative expression and communication", icon: Palette },
      { value: "medical", label: "Helping people and healthcare", icon: Stethoscope },
      { value: "law", label: "Debating and understanding legal systems", icon: Scale },
      { value: "design", label: "Creating visual designs and aesthetics", icon: Briefcase },
    ],
  },
  {
    id: 2,
    question: "Which subject interests you the most?",
    options: [
      { value: "science", label: "Mathematics, Physics, Chemistry", icon: GraduationCap },
      { value: "commerce", label: "Economics, Accounting, Business Studies", icon: Calculator },
      { value: "arts", label: "Literature, History, Psychology", icon: Palette },
      { value: "medical", label: "Biology, Anatomy, Health Sciences", icon: Stethoscope },
      { value: "law", label: "Political Science, Legal Studies", icon: Scale },
      { value: "design", label: "Art, Design, Architecture", icon: Briefcase },
    ],
  },
  {
    id: 3,
    question: "What kind of work environment appeals to you?",
    options: [
      { value: "science", label: "Research labs and tech companies", icon: GraduationCap },
      { value: "commerce", label: "Corporate offices and financial institutions", icon: Calculator },
      { value: "arts", label: "Creative studios and media houses", icon: Palette },
      { value: "medical", label: "Hospitals and healthcare facilities", icon: Stethoscope },
      { value: "law", label: "Courts and law firms", icon: Scale },
      { value: "design", label: "Design studios and creative agencies", icon: Briefcase },
    ],
  },
  {
    id: 4,
    question: "What are your natural strengths?",
    options: [
      { value: "science", label: "Analytical thinking and problem-solving", icon: GraduationCap },
      { value: "commerce", label: "Numerical ability and strategic planning", icon: Calculator },
      { value: "arts", label: "Communication and creativity", icon: Palette },
      { value: "medical", label: "Empathy and attention to detail", icon: Stethoscope },
      { value: "law", label: "Critical thinking and argumentation", icon: Scale },
      { value: "design", label: "Visual thinking and innovation", icon: Briefcase },
    ],
  },
  {
    id: 5,
    question: "What motivates you in your career?",
    options: [
      { value: "science", label: "Innovation and technological advancement", icon: GraduationCap },
      { value: "commerce", label: "Financial success and business growth", icon: Calculator },
      { value: "arts", label: "Self-expression and cultural impact", icon: Palette },
      { value: "medical", label: "Helping others and saving lives", icon: Stethoscope },
      { value: "law", label: "Justice and social change", icon: Scale },
      { value: "design", label: "Creating beautiful and functional designs", icon: Briefcase },
    ],
  },
]

const streamResults = {
  science: {
    title: "Science & Technology",
    description:
      "You have a strong aptitude for analytical thinking and problem-solving. Consider careers in engineering, computer science, research, or technology.",
    icon: GraduationCap,
    color: "bg-[hsl(142,71%,45%)]",
    careers: ["Software Engineer", "Data Scientist", "Research Scientist", "Mechanical Engineer"],
  },
  commerce: {
    title: "Commerce & Business",
    description:
      "You excel in numerical ability and strategic thinking. Explore careers in finance, accounting, business management, or entrepreneurship.",
    icon: Calculator,
    color: "bg-[hsl(24,95%,53%)]",
    careers: ["Chartered Accountant", "Business Analyst", "Financial Advisor", "Entrepreneur"],
  },
  arts: {
    title: "Arts & Humanities",
    description:
      "You have strong communication and creative skills. Consider careers in literature, psychology, journalism, or social sciences.",
    icon: Palette,
    color: "bg-[hsl(0,72%,51%)]",
    careers: ["Psychologist", "Journalist", "Content Writer", "Social Worker"],
  },
  medical: {
    title: "Medical & Healthcare",
    description:
      "You show empathy and dedication to helping others. Explore careers in medicine, nursing, pharmacy, or allied health sciences.",
    icon: Stethoscope,
    color: "bg-[hsl(142,71%,45%)]",
    careers: ["Doctor", "Nurse", "Pharmacist", "Physical Therapist"],
  },
  law: {
    title: "Law & Legal Studies",
    description:
      "You have strong critical thinking and argumentation skills. Consider careers in legal practice, corporate law, or judiciary.",
    icon: Scale,
    color: "bg-[hsl(24,95%,53%)]",
    careers: ["Lawyer", "Corporate Counsel", "Legal Advisor", "Judge"],
  },
  design: {
    title: "Design & Creative",
    description:
      "You excel in visual thinking and innovation. Explore careers in graphic design, architecture, fashion, or digital media.",
    icon: Briefcase,
    color: "bg-[hsl(0,72%,51%)]",
    careers: ["Graphic Designer", "Architect", "UI/UX Designer", "Fashion Designer"],
  },
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string>("")

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers({ ...answers, [questions[currentQuestion].id]: selectedAnswer })
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(answers[questions[currentQuestion + 1]?.id] || "")
      } else {
        setShowResults(true)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(answers[questions[currentQuestion - 1].id] || "")
    }
  }

  const calculateResult = () => {
    const scores: Record<string, number> = {}
    Object.values(answers).forEach((answer) => {
      scores[answer] = (scores[answer] || 0) + 1
    })
    const topStream = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0]
    return topStream as keyof typeof streamResults
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
    setSelectedAnswer("")
  }

  if (showResults) {
    const result = calculateResult()
    const streamData = streamResults[result]
    const Icon = streamData.icon

    return (
      <div className="min-h-screen bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card className="overflow-hidden border-none shadow-xl">
            <CardHeader className={`${streamData.color} text-white`}>
              <div className="flex items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <Badge className="mb-2 bg-white/20 text-white backdrop-blur-sm">Your Result</Badge>
                  <CardTitle className="text-2xl">{streamData.title}</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-2 text-[hsl(142,71%,45%)]">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-semibold">Quiz Completed!</span>
              </div>

              <p className="mb-6 text-lg text-muted-foreground">{streamData.description}</p>

              <div className="mb-8">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Recommended Career Paths</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {streamData.careers.map((career) => (
                    <div key={career} className="flex items-center gap-2 rounded-lg border border-border p-3">
                      <Sparkles className="h-4 w-4 text-[hsl(142,71%,45%)]" />
                      <span className="text-sm font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/streams" className="flex-1">
                  <Button className="w-full bg-[hsl(180,60%,30%)] text-white hover:bg-[hsl(180,60%,25%)]">
                    Explore Career Streams
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/counseling" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    Book Counseling Session
                  </Button>
                </Link>
              </div>

              <Button variant="ghost" onClick={resetQuiz} className="mt-4 w-full">
                Retake Quiz
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(180,60%,25%)] to-[hsl(180,60%,35%)] px-4 py-8 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-3xl font-bold">Interest Finder Quiz</h1>
          <p className="text-white/90">Answer a few questions to discover your ideal career path</p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="font-medium text-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-muted-foreground">{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Quiz Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} className="space-y-3">
                {question.options.map((option) => {
                  const OptionIcon = option.icon
                  return (
                    <div key={option.value} className="relative">
                      <RadioGroupItem value={option.value} id={option.value} className="peer sr-only" />
                      <Label
                        htmlFor={option.value}
                        className="flex cursor-pointer items-center gap-4 rounded-lg border-2 border-border p-4 transition-all hover:border-[hsl(180,60%,30%)] hover:bg-muted/50 peer-data-[state=checked]:border-[hsl(180,60%,30%)] peer-data-[state=checked]:bg-[hsl(180,60%,30%)]/5"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                          <OptionIcon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <span className="text-sm font-medium">{option.label}</span>
                      </Label>
                    </div>
                  )
                })}
              </RadioGroup>

              <div className="mt-8 flex gap-3">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex-1 sm:flex-none bg-transparent"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className="flex-1 bg-[hsl(180,60%,30%)] text-white hover:bg-[hsl(180,60%,25%)] sm:flex-none sm:ml-auto"
                >
                  {currentQuestion === questions.length - 1 ? "View Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
