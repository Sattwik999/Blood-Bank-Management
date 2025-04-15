"use client"

import { useState } from "react"
import { Search, MapPin, Phone, Hospital } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BloodResult {
  id: string
  hospital: string
  distance: string
  bloodType: string
  units: number
  lastUpdated: string
  address: string
  contact: string
}

export function BloodSearchForm() {
  const [searchResults, setSearchResults] = useState<BloodResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [searchPerformed, setSearchPerformed] = useState(false)

  const [bloodType, setBloodType] = useState("")
  const [pinCode, setPinCode] = useState("")
  const [radius, setRadius] = useState("10")
  const [component, setComponent] = useState("")
  const [facility, setFacility] = useState("")
  const [minUnits, setMinUnits] = useState("1")

  const mockResults: BloodResult[] = [
    {
      id: "1",
      hospital: "City General Hospital",
      distance: "2.3 km",
      bloodType: "O+",
      units: 12,
      lastUpdated: "10 minutes ago",
      address: "123 Medical Center Blvd, City Center",
      contact: "+1 (555) 123-4567",
    },
    {
      id: "2",
      hospital: "Memorial Medical Center",
      distance: "4.1 km",
      bloodType: "O+",
      units: 8,
      lastUpdated: "1 hour ago",
      address: "456 Healthcare Ave, Westside",
      contact: "+1 (555) 987-6543",
    },
    {
      id: "3",
      hospital: "Community Blood Bank",
      distance: "5.7 km",
      bloodType: "A+",
      units: 4,
      lastUpdated: "30 minutes ago",
      address: "789 Donation Drive, Eastside",
      contact: "+1 (555) 456-7890",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      const filtered = mockResults.filter(
        (result) =>
          result.bloodType.toLowerCase() === bloodType.toLowerCase() &&
          result.units >= parseInt(minUnits)
      )
      setSearchResults(filtered)
      setIsLoading(false)
      setSearchPerformed(true)
    }, 1000)
  }

  return (
    <Card className="w-full shadow-lg border-red-100">
      <CardHeader>
        <CardTitle className="text-2xl">Blood Availability Search</CardTitle>
        <CardDescription>Find blood units available at hospitals and blood banks near you</CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="search" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="search">Quick Search</TabsTrigger>
            <TabsTrigger value="advanced">Advanced Options</TabsTrigger>
          </TabsList>

          {/* Quick Search */}
          <TabsContent value="search">
            <form onSubmit={handleSearch} className="space-y-4 pt-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="bloodType">Blood Type (Required)</Label>
                  <Select onValueChange={setBloodType} required>
                    <SelectTrigger id="bloodType">
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="pincode">PIN Code (Required)</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      id="pincode"
                      placeholder="Enter your PIN code"
                      className="pl-10"
                      required
                      pattern="[0-9]{5,6}"
                      onChange={(e) => setPinCode(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label>Search Radius</Label>
                  <RadioGroup defaultValue="10" className="flex" onValueChange={setRadius}>
                    {["5", "10", "25"].map((r) => (
                      <div key={r} className="flex items-center space-x-2">
                        <RadioGroupItem value={r} id={`r${r}`} />
                        <Label htmlFor={`r${r}`} className="font-normal">{r} km</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    <span>Find Blood</span>
                  </div>
                )}
              </Button>
            </form>
          </TabsContent>

          {/* Advanced Search */}
          <TabsContent value="advanced">
            <form onSubmit={handleSearch} className="space-y-4 pt-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="component">Blood Component</Label>
                  <Select onValueChange={setComponent}>
                    <SelectTrigger id="component">
                      <SelectValue placeholder="Select component" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="whole">Whole Blood</SelectItem>
                      <SelectItem value="rbc">Red Blood Cells</SelectItem>
                      <SelectItem value="platelets">Platelets</SelectItem>
                      <SelectItem value="plasma">Plasma</SelectItem>
                      <SelectItem value="cryo">Cryoprecipitate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="facility">Facility Type</Label>
                  <Select onValueChange={setFacility}>
                    <SelectTrigger id="facility">
                      <SelectValue placeholder="All facilities" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Facilities</SelectItem>
                      <SelectItem value="hospital">Hospitals Only</SelectItem>
                      <SelectItem value="bank">Blood Banks Only</SelectItem>
                      <SelectItem value="donation">Donation Centers</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label>Minimum Units Required</Label>
                  <RadioGroup defaultValue="1" className="flex" onValueChange={setMinUnits}>
                    {["1", "3", "5"].map((u) => (
                      <div key={u} className="flex items-center space-x-2">
                        <RadioGroupItem value={u} id={`u${u}`} />
                        <Label htmlFor={`u${u}`} className="font-normal">{u}+</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>

              <Button type="submit" className="w-full bg-red-600 hover:bg-red-700" disabled={isLoading}>
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    <span>Find Blood</span>
                  </div>
                )}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </CardContent>

      {searchPerformed && (
        <CardFooter className="flex flex-col items-start gap-4 mt-6">
          {searchResults.length === 0 ? (
            <p className="text-muted-foreground">No matching results found.</p>
          ) : (
            <div className="w-full space-y-4">
              {searchResults.map((result) => (
                <Card key={result.id} className="border border-red-200 bg-white shadow-md p-4">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Hospital className="h-5 w-5 text-red-500" />
                      {result.hospital}
                    </CardTitle>
                    <CardDescription>{result.distance} away · {result.lastUpdated}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm space-y-1">
                    <p><strong>Blood Type:</strong> {result.bloodType}</p>
                    <p><strong>Units Available:</strong> {result.units}</p>
                    <p><strong>Address:</strong> {result.address}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="flex gap-2 items-center">
                      <Phone className="h-4 w-4" />
                      {result.contact}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </CardFooter>
      )}
    </Card>
  )
}
