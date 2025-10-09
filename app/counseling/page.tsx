"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Video, Clock, CheckCircle2, Star, Award, MessageSquare, ArrowRight, Sparkles } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const counselors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Career Counselor",
    specialization: "Science & Technology",
    experience: "15 years",
    rating: 4.9,
    sessions: 1250,
    image: "/counselor-1.jpg",
    color: "bg-[hsl(142,71%,45%)]",
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Education Consultant",
    specialization: "Commerce & Business",
    experience: "12 years",
    rating: 4.8,
    sessions: 980,
    image: "/counselor-2.jpg",
    color: "bg-[hsl(24,95%,53%)]",
  },
  {
    id: 3,
    name: "Dr. Priya Sharma",
    title: "Career Advisor",
    specialization: "Medical & Healthcare",
    experience: "10 years",
    rating: 4.9,
    sessions: 1100,
    image: "/counselor-3.jpg",
    color: "bg-[hsl(0,72%,51%)]",
  },
]

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"]

export default function CounselingPage() {
  const [selectedCounselor, setSelectedCounselor] = useState<number | null>(null)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [bookingSuccess, setBookingSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  })

  const handleBooking = (counselorId: number) => {
    setSelectedCounselor(counselorId)
    setShowBookingForm(true)
    setBookingSuccess(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate booking
    setBookingSuccess(true)
    setShowBookingForm(false)
    setTimeout(() => {
      setBookingSuccess(false)
      setSelectedCounselor(null)
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        message: "",
      })
    }, 5000)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-[hsl(180,60%,25%)] to-[hsl(180,60%,35%)] px-4 py-12 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-4">
            <Video className="h-10 w-10" />
            <h1 className="text-4xl font-bold">Career Counseling</h1>
          </div>
          <p className="text-pretty text-lg text-white/90">
            Book one-on-one sessions with expert career counselors to get personalized guidance
          </p>
        </div>
      </section>

      {/* Success Message */}
      {bookingSuccess && (
        <div className="sticky top-16 z-40 border-b border-[hsl(142,71%,45%)] bg-[hsl(142,71%,45%)]/10 px-4 py-4">
          <div className="mx-auto flex max-w-7xl items-center gap-3 text-[hsl(142,71%,45%)]">
            <CheckCircle2 className="h-5 w-5" />
            <p className="font-semibold">
              Booking confirmed! You'll receive a confirmation email with the meeting link shortly.
            </p>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {!showBookingForm ? (
            <>
              {/* Features */}
              <div className="mb-12 grid gap-6 sm:grid-cols-3">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(142,71%,45%)]/10">
                      <Video className="h-6 w-6 text-[hsl(142,71%,45%)]" />
                    </div>
                    <h3 className="mb-2 font-semibold">Video Sessions</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect face-to-face with counselors via secure video calls
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(24,95%,53%)]/10">
                      <Award className="h-6 w-6 text-[hsl(24,95%,53%)]" />
                    </div>
                    <h3 className="mb-2 font-semibold">Expert Counselors</h3>
                    <p className="text-sm text-muted-foreground">Certified professionals with years of experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[hsl(0,72%,51%)]/10">
                      <Sparkles className="h-6 w-6 text-[hsl(0,72%,51%)]" />
                    </div>
                    <h3 className="mb-2 font-semibold">Personalized Guidance</h3>
                    <p className="text-sm text-muted-foreground">Tailored advice based on your interests and goals</p>
                  </CardContent>
                </Card>
              </div>

              {/* Counselors */}
              <div className="mb-8">
                <h2 className="mb-6 text-2xl font-bold text-foreground">Meet Our Counselors</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {counselors.map((counselor) => (
                    <Card key={counselor.id} className="overflow-hidden transition-all hover:shadow-lg">
                      <div className={`h-2 ${counselor.color}`} />
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-start gap-4">
                          <img
                            src={counselor.image || "/placeholder.svg"}
                            alt={counselor.name}
                            className="h-16 w-16 rounded-full object-cover"
                          />
                          <div className="flex-1">
                            <h3 className="font-bold text-foreground">{counselor.name}</h3>
                            <p className="text-sm text-muted-foreground">{counselor.title}</p>
                          </div>
                        </div>

                        <div className="mb-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Award className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{counselor.specialization}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{counselor.experience} experience</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MessageSquare className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{counselor.sessions} sessions completed</span>
                          </div>
                        </div>

                        <div className="mb-4 flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-[hsl(24,95%,53%)] text-[hsl(24,95%,53%)]" />
                            <span className="font-semibold">{counselor.rating}</span>
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Top Rated
                          </Badge>
                        </div>

                        <Button
                          onClick={() => handleBooking(counselor.id)}
                          className="w-full bg-[hsl(180,60%,30%)] text-white hover:bg-[hsl(180,60%,25%)]"
                        >
                          Book Session
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="mx-auto max-w-2xl">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Book Your Counseling Session</CardTitle>
                  <p className="text-muted-foreground">
                    Fill in your details to schedule a session with{" "}
                    {counselors.find((c) => c.id === selectedCounselor)?.name}
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          min={new Date().toISOString().split("T")[0]}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time</Label>
                        <Select
                          value={formData.time}
                          onValueChange={(value) => setFormData({ ...formData, time: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((slot) => (
                              <SelectItem key={slot} value={slot}>
                                {slot}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your career goals and what you'd like to discuss..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                      />
                    </div>

                    <div className="rounded-lg bg-muted/50 p-4">
                      <div className="mb-2 flex items-center gap-2">
                        <Video className="h-5 w-5 text-muted-foreground" />
                        <span className="font-semibold">Session Details</span>
                      </div>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Duration: 45 minutes</li>
                        <li>• Platform: Google Meet (link will be sent via email)</li>
                        <li>• You can reschedule up to 24 hours before the session</li>
                      </ul>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowBookingForm(false)}
                        className="flex-1 bg-transparent"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-[hsl(142,71%,45%)] text-white hover:bg-[hsl(142,71%,40%)]"
                      >
                        Confirm Booking
                        <CheckCircle2 className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
