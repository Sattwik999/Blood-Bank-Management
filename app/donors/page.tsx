"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Droplet, Moon, MoreVertical, Plus, Search, Sun, User } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function DonorsPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={`flex min-h-screen w-full flex-col ${darkMode ? "dark" : ""}`}>
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Droplet className="h-6 w-6 text-blue-600" />
          <span className="text-lg font-semibold">Cloud Blood Bank</span>
        </div>

        <div className="relative ml-4 flex-1 max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search..." className="w-full bg-background pl-8" />
        </div>

        <nav className="ml-auto hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
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

          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Donor Management</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Donor
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search donors..." className="w-full bg-background pl-8" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Filter by Blood Type</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem>All Blood Types</DropdownMenuItem>
              <DropdownMenuItem>A+</DropdownMenuItem>
              <DropdownMenuItem>A-</DropdownMenuItem>
              <DropdownMenuItem>B+</DropdownMenuItem>
              <DropdownMenuItem>B-</DropdownMenuItem>
              <DropdownMenuItem>AB+</DropdownMenuItem>
              <DropdownMenuItem>AB-</DropdownMenuItem>
              <DropdownMenuItem>O+</DropdownMenuItem>
              <DropdownMenuItem>O-</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Card className="bg-white dark:bg-gray-800 shadow-sm">
          <CardHeader className="px-6 py-4">
            <CardTitle>Donor Database</CardTitle>
            <CardDescription>Manage and view all registered blood donors</CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-muted/50 dark:hover:bg-gray-700/50">
                  <TableHead>Name</TableHead>
                  <TableHead>Blood Type</TableHead>
                  <TableHead>Contact</TableHead>
                  <TableHead>Last Donation</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    name: "John Smith",
                    bloodType: "A+",
                    contact: "+1 (555) 123-4567",
                    lastDonation: "Apr 14, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "Sarah Johnson",
                    bloodType: "O-",
                    contact: "+1 (555) 234-5678",
                    lastDonation: "Apr 14, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "Michael Brown",
                    bloodType: "B+",
                    contact: "+1 (555) 345-6789",
                    lastDonation: "Apr 13, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "Emily Davis",
                    bloodType: "AB+",
                    contact: "+1 (555) 456-7890",
                    lastDonation: "Apr 13, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "Robert Wilson",
                    bloodType: "O+",
                    contact: "+1 (555) 567-8901",
                    lastDonation: "Apr 13, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "Jennifer Taylor",
                    bloodType: "A-",
                    contact: "+1 (555) 678-9012",
                    lastDonation: "Mar 30, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "David Anderson",
                    bloodType: "B-",
                    contact: "+1 (555) 789-0123",
                    lastDonation: "Mar 15, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "Lisa Martinez",
                    bloodType: "AB-",
                    contact: "+1 (555) 890-1234",
                    lastDonation: "Feb 28, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "James Thompson",
                    bloodType: "A+",
                    contact: "+1 (555) 901-2345",
                    lastDonation: "Feb 10, 2025",
                    status: "Eligible",
                  },
                  {
                    name: "Patricia Garcia",
                    bloodType: "O+",
                    contact: "+1 (555) 012-3456",
                    lastDonation: "Jan 25, 2025",
                    status: "Ineligible",
                  },
                ].map((donor, index) => (
                  <TableRow key={index} className="hover:bg-muted/50 dark:hover:bg-gray-700/50">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                            {donor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {donor.name}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                      >
                        {donor.bloodType}
                      </Badge>
                    </TableCell>
                    <TableCell>{donor.contact}</TableCell>
                    <TableCell>{donor.lastDonation}</TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          donor.status === "Eligible"
                            ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                            : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                      >
                        {donor.status}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <User className="mr-2 h-4 w-4" />
                            <span>View Details</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Edit Donor</DropdownMenuItem>
                          <DropdownMenuItem>Record Donation</DropdownMenuItem>
                          <DropdownMenuItem>Donation History</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
