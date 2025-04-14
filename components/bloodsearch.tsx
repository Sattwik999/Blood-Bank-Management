"use client"

import type React from "react"

import { useState } from "react"
import { Search, MapPin, Droplet, Clock, Hospital } from "lucide-react"
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
      bloodType: "O+",
      units: 20,
      lastUpdated: "30 minutes ago",
      address: "789 Donation Drive, Eastside",
      contact: "+1 (555) 456-7890",
    },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSearchResults(mockResults)
      setIsLoading(false)
      setSearchPerformed(true)
    }, 1500)
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
          <TabsContent value="search">
            <form onSubmit={handleSearch} className="space-y-4 pt-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="bloodType">Blood Type (Required)</Label>
                  <Select required>
                    <SelectTrigger id="bloodType">
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a-pos">A+</SelectItem>
                      <SelectItem value="a-neg">A-</SelectItem>
                      <SelectItem value="b-pos">B+</SelectItem>
                      <SelectItem value="b-neg">B-</SelectItem>
                      <SelectItem value="ab-pos">AB+</SelectItem>
                      <SelectItem value="ab-neg">AB-</SelectItem>
                      <SelectItem value="o-pos">O+</SelectItem>
                      <SelectItem value="o-neg">O-</SelectItem>
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
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Search Radius</Label>
                  <RadioGroup defaultValue="10" className="flex">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="r1" />
                      <Label htmlFor="r1" className="font-normal">
                        5 km
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10" id="r2" />
                      <Label htmlFor="r2" className="font-normal">
                        10 km
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="25" id="r3" />
                      <Label htmlFor="r3" className="font-normal">
                        25 km
                      </Label>
                    </div>
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
          <TabsContent value="advanced">
            <form onSubmit={handleSearch} className="space-y-4 pt-4">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="bloodType">Blood Type (Required)</Label>
                  <Select required>
                    <SelectTrigger id="bloodType">
                      <SelectValue placeholder="Select blood type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="a-pos">A+</SelectItem>
                      <SelectItem value="a-neg">A-</SelectItem>
                      <SelectItem value="b-pos">B+</SelectItem>
                      <SelectItem value="b-neg">B-</SelectItem>
                      <SelectItem value="ab-pos">AB+</SelectItem>
                      <SelectItem value="ab-neg">AB-</SelectItem>
                      <SelectItem value="o-pos">O+</SelectItem>
                      <SelectItem value="o-neg">O-</SelectItem>
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
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="component">Blood Component</Label>
                  <Select>
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
                  <Select>
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
                  <RadioGroup defaultValue="1" className="flex">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1" id="u1" />
                      <Label htmlFor="u1" className="font-normal">
                        1+
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3" id="u2" />
                      <Label htmlFor="u2" className="font-normal">
                        3+
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5" id="u3" />
                      <Label htmlFor="u3" className="font-normal">
                        5+
                      </Label>
                    </div>
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
        <CardFooter className="flex flex-col">
          <div className="w-full border-t pt-4">
            <h3 className="font-medium text-lg mb-3">Search Results</h3>
            <div className="space-y-3">
              {searchResults.map((result) => (
                <div key={result.id} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{result.hospital}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        <span>{result.distance} away</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center">
                        <Droplet className="h-4 w-4 text-red-600 mr-1" />
                        <span className="font-bold">{result.bloodType}</span>
                      </div>
                      <span className="text-sm font-medium">{result.units} units</span>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-gray-600">
                    <p>{result.address}</p>
                    <p className="font-medium">{result.contact}</p>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-2 border-t border-dashed">
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      <span>Updated {result.lastUpdated}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Hospital className="h-3.5 w-3.5 mr-1" />
                        Details
                      </Button>
                      <Button size="sm" className="bg-red-600 hover:bg-red-700">
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
