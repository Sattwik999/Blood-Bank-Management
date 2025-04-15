"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Calendar, Droplet, Heart, LineChart, Moon, Search, Settings, Sun, User, Users } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Switch } from "@/components/ui/switch"
import { BloodTypeChart } from "@/components/blood-type-chart"
import { DonationTrendsChart } from "@/components/donation-trends-chart"
import { RecentDonations } from "@/components/recent-donations"
import { PendingRequests } from "@/components/pending-requests"
import { BloodSearchForm } from "@/components/bloodsearch"
import { HeroSection } from "@/components/herosection"

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`flex min-h-screen w-full flex-col ${darkMode ? "dark" : ""}`}>
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Droplet className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">Seva Blood Bank</span>
        </div>

        <div className="relative ml-4 flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full bg-background pl-8" />
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

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch checked={darkMode} onCheckedChange={setDarkMode} aria-label="Toggle dark mode" />
            {darkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Dr. Johnson</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              April 14, 2025
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Donors</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,284</div>
              <div className="flex items-center text-xs text-green-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
                <span>+12% from last month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blood Units Available</CardTitle>
              <Droplet className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">432</div>
              <div className="flex items-center text-xs text-green-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
                <span>+4% from last week</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
              <Heart className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <div className="flex items-center text-xs text-red-500 mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <path d="m19 12-7 7-7-7" />
                  <path d="M12 5v16" />
                </svg>
                <span>-8% from yesterday</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Critical Inventory</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-600"
              >
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <div className="flex flex-wrap gap-1 mt-1">
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  O-
                </Badge>
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  AB-
                </Badge>
                <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  B-
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        <HeroSection/>
        <section id="find-blood" className="py-12 md:py-16 bg-slate-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">
                  Emergency Blood Search
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Find Blood Near You</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Quickly locate available blood units at hospitals and blood banks near you. Enter your blood type and
                  location to find matches.
                </p>
              </div >
            
              <BloodSearchForm />
              
            </div>
          </div>
        </section>
    
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList className="bg-muted/50 dark:bg-gray-800">
            <TabsTrigger value="overview" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="inventory"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
            >
              Inventory
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4 bg-white dark:bg-gray-800 shadow-sm">
                <CardHeader>
                  <CardTitle>Blood Collection Overview</CardTitle>
                  <CardDescription>Monthly donation trends</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <DonationTrendsChart />
                </CardContent>
              </Card>

              <Card className="col-span-3 bg-white dark:bg-gray-800 shadow-sm">
                <CardHeader>
                  <CardTitle>Blood Type Distribution</CardTitle>
                  <CardDescription>Current inventory by blood type</CardDescription>
                </CardHeader>
                <CardContent>
                  <BloodTypeChart />
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="col-span-1 bg-white dark:bg-gray-800 shadow-sm">
                <CardHeader>
                  <CardTitle>Recent Donors</CardTitle>
                  <CardDescription>Last 5 blood donations</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentDonations />
                </CardContent>
                <div className="px-6 pb-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View all donors
                  </Button>
                </div>
              </Card>

              <Card className="col-span-1 bg-white dark:bg-gray-800 shadow-sm">
                <CardHeader>
                  <CardTitle>Pending Requests</CardTitle>
                  <CardDescription>Hospital blood requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <PendingRequests />
                </CardContent>
                <div className="px-6 pb-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View all requests
                  </Button>
                </div>
              </Card>

              <Card className="col-span-1 bg-white dark:bg-gray-800 shadow-sm">
                <CardHeader>
                  <CardTitle>Upcoming Drives</CardTitle>
                  <CardDescription>Scheduled blood donation drives</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { location: "Community Center", date: "Apr 20, 2025", slots: 45, filled: 12 },
                      { location: "University Campus", date: "Apr 25, 2025", slots: 60, filled: 28 },
                      { location: "Corporate Office", date: "May 2, 2025", slots: 30, filled: 5 },
                      { location: "Shopping Mall", date: "May 10, 2025", slots: 50, filled: 0 },
                      { location: "Public Library", date: "May 15, 2025", slots: 35, filled: 0 },
                    ].map((drive, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-9 h-9 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                          <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{drive.location}</p>
                          <p className="text-xs text-muted-foreground">{drive.date}</p>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {drive.filled}/{drive.slots}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="px-6 pb-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View all drives
                  </Button>
                </div>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Blood Inventory Status</CardTitle>
                <CardDescription>Current blood units by type and expiration</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-sm text-muted-foreground">Inventory visualization</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Donation Analytics</CardTitle>
                <CardDescription>Trends and patterns in blood donation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full rounded-md flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-muted-foreground" />
                  <span className="ml-2 text-sm text-muted-foreground">Analytics visualization</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
