"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Droplet, ArrowLeft, Calendar } from "lucide-react"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { format } from "date-fns"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function DonorFormPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    bloodType: "",
    birthDate: null as Date | null,
    address: "",
    city: "",
    state: "",
    zipCode: "",
    hasRecentIllness: false,
    hasTattoo: false,
    hasPreviousDonation: false,
    lastDonationDate: null as Date | null,
    additionalNotes: "",
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.gender) newErrors.gender = "Gender is required"
    if (!formData.bloodType) newErrors.bloodType = "Blood type is required"
    if (!formData.birthDate) newErrors.birthDate = "Birth date is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        alert("Donor information saved successfully!")
        // Redirect or show success message
      }, 1500)
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Droplet className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">Cloud Blood Bank</span>
        </div>

        <nav className="ml-auto hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/donors">Donors</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/recipients">Recipients</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/inventory">Inventory</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/reports">Reports</Link>
          </Button>
        </nav>

        <Avatar className="h-8 w-8">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon" asChild>
            <Link href="/donors">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back</span>
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">Add New Donor</h1>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Donor Registration Form</CardTitle>
            <CardDescription>Enter the donor's personal information and medical history</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Personal Information</h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="lastName">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">
                      Phone Number <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="gender">
                      Gender <span className="text-red-500">*</span>
                    </Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => handleChange("gender", value)}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                    {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bloodType">
                      Blood Type <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.bloodType} onValueChange={(value) => handleChange("bloodType", value)}>
                      <SelectTrigger className={errors.bloodType ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select blood type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.bloodType && <p className="text-sm text-red-500">{errors.bloodType}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">
                      Date of Birth <span className="text-red-500">*</span>
                    </Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal ${
                            !formData.birthDate ? "text-muted-foreground" : ""
                          } ${errors.birthDate ? "border-red-500" : ""}`}
                        >
                          <Calendar className="mr-2 h-4 w-4" />
                          {formData.birthDate ? format(formData.birthDate, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <CalendarComponent
                          mode="single"
                          selected={formData.birthDate || undefined}
                          onSelect={(date) => handleChange("birthDate", date)}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {errors.birthDate && <p className="text-sm text-red-500">{errors.birthDate}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" value={formData.city} onChange={(e) => handleChange("city", e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input id="state" value={formData.state} onChange={(e) => handleChange("state", e.target.value)} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="zipCode">Zip Code</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleChange("zipCode", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Medical History</h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasRecentIllness"
                      checked={formData.hasRecentIllness}
                      onCheckedChange={(checked) => handleChange("hasRecentIllness", Boolean(checked))}
                    />
                    <Label htmlFor="hasRecentIllness">Has had illness in the past 6 months</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasTattoo"
                      checked={formData.hasTattoo}
                      onCheckedChange={(checked) => handleChange("hasTattoo", Boolean(checked))}
                    />
                    <Label htmlFor="hasTattoo">Has tattoo or piercing in the past 12 months</Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasPreviousDonation"
                      checked={formData.hasPreviousDonation}
                      onCheckedChange={(checked) => handleChange("hasPreviousDonation", Boolean(checked))}
                    />
                    <Label htmlFor="hasPreviousDonation">Has donated blood before</Label>
                  </div>

                  {formData.hasPreviousDonation && (
                    <div className="ml-6 space-y-2">
                      <Label htmlFor="lastDonationDate">Last Donation Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <Calendar className="mr-2 h-4 w-4" />
                            {formData.lastDonationDate ? (
                              format(formData.lastDonationDate, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <CalendarComponent
                            mode="single"
                            selected={formData.lastDonationDate || undefined}
                            onSelect={(date) => handleChange("lastDonationDate", date)}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Notes</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => handleChange("additionalNotes", e.target.value)}
                    placeholder="Any additional information about the donor"
                    className="min-h-[100px]"
                  />
                </div>
              </div>

              <CardFooter className="flex justify-between px-0">
                <Button variant="outline" type="button" asChild>
                  <Link href="/donors">Cancel</Link>
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                  {isSubmitting ? "Saving..." : "Save Donor"}
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
