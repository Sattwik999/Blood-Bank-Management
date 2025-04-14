"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Droplet, Moon, MoreVertical, Plus, Search, Sun } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function InventoryPage() {
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
          <Button variant="ghost" size="sm" asChild>
            <Link href="/donors">Donors</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/recipients">Recipients</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
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
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Blood Inventory</h1>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Inventory
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Card className="bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">A+ Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">124 units</div>
              <div className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1"></div>
                Sufficient
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">O+ Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">98 units</div>
              <div className="flex items-center text-xs text-green-600 dark:text-green-400 mt-1">
                <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-1"></div>
                Sufficient
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">B+ Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76 units</div>
              <div className="flex items-center text-xs text-yellow-600 dark:text-yellow-400 mt-1">
                <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 mr-1"></div>
                Moderate
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 shadow-sm transition-all hover:shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">O- Inventory</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12 units</div>
              <div className="flex items-center text-xs text-red-600 dark:text-red-400 font-medium mt-1">
                <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-1"></div>
                Critical - Low Supply
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="current" className="space-y-4">
          <TabsList className="bg-muted/50 dark:bg-gray-800">
            <TabsTrigger value="current" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              Current Inventory
            </TabsTrigger>
            <TabsTrigger value="expiring" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              Expiring Soon
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
              Inventory History
            </TabsTrigger>
          </TabsList>
          <TabsContent value="current" className="space-y-4">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader className="px-6 py-4">
                <CardTitle>Blood Units Inventory</CardTitle>
                <CardDescription>Manage and track all blood units in storage</CardDescription>
              </CardHeader>
              <CardContent className="p-0 overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/50 dark:hover:bg-gray-700/50">
                      <TableHead>Unit ID</TableHead>
                      <TableHead>Blood Type</TableHead>
                      <TableHead>Collection Date</TableHead>
                      <TableHead>Expiration Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "BU-2025-0412",
                        bloodType: "A+",
                        collectionDate: "Apr 12, 2025",
                        expirationDate: "May 10, 2025",
                        status: "Available",
                      },
                      {
                        id: "BU-2025-0411",
                        bloodType: "O-",
                        collectionDate: "Apr 11, 2025",
                        expirationDate: "May 9, 2025",
                        status: "Available",
                      },
                      {
                        id: "BU-2025-0410",
                        bloodType: "B+",
                        collectionDate: "Apr 10, 2025",
                        expirationDate: "May 8, 2025",
                        status: "Available",
                      },
                      {
                        id: "BU-2025-0409",
                        bloodType: "AB+",
                        collectionDate: "Apr 9, 2025",
                        expirationDate: "May 7, 2025",
                        status: "Reserved",
                      },
                      {
                        id: "BU-2025-0408",
                        bloodType: "O+",
                        collectionDate: "Apr 8, 2025",
                        expirationDate: "May 6, 2025",
                        status: "Available",
                      },
                      {
                        id: "BU-2025-0407",
                        bloodType: "A-",
                        collectionDate: "Apr 7, 2025",
                        expirationDate: "May 5, 2025",
                        status: "Available",
                      },
                      {
                        id: "BU-2025-0406",
                        bloodType: "B-",
                        collectionDate: "Apr 6, 2025",
                        expirationDate: "May 4, 2025",
                        status: "Reserved",
                      },
                      {
                        id: "BU-2025-0405",
                        bloodType: "AB-",
                        collectionDate: "Apr 5, 2025",
                        expirationDate: "May 3, 2025",
                        status: "Available",
                      },
                      {
                        id: "BU-2025-0404",
                        bloodType: "A+",
                        collectionDate: "Apr 4, 2025",
                        expirationDate: "May 2, 2025",
                        status: "Available",
                      },
                    ].map((unit, index) => (
                      <TableRow key={index} className="hover:bg-muted/50 dark:hover:bg-gray-700/50">
                        <TableCell className="font-medium">{unit.id}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                          >
                            {unit.bloodType}
                          </Badge>
                        </TableCell>
                        <TableCell>{unit.collectionDate}</TableCell>
                        <TableCell>{unit.expirationDate}</TableCell>
                        <TableCell>
                          <div
                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                              unit.status === "Available"
                                ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                                : "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                            }`}
                          >
                            {unit.status}
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
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Update Status</DropdownMenuItem>
                              <DropdownMenuItem>Assign to Request</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Used</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="expiring" className="space-y-4">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Expiring Blood Units</CardTitle>
                <CardDescription>Blood units expiring within the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="hover:bg-muted/50 dark:hover:bg-gray-700/50">
                      <TableHead>Unit ID</TableHead>
                      <TableHead>Blood Type</TableHead>
                      <TableHead>Collection Date</TableHead>
                      <TableHead>Expiration Date</TableHead>
                      <TableHead>Days Left</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      {
                        id: "BU-2025-0320",
                        bloodType: "A+",
                        collectionDate: "Mar 20, 2025",
                        expirationDate: "Apr 17, 2025",
                        daysLeft: 3,
                      },
                      {
                        id: "BU-2025-0321",
                        bloodType: "O-",
                        collectionDate: "Mar 21, 2025",
                        expirationDate: "Apr 18, 2025",
                        daysLeft: 4,
                      },
                      {
                        id: "BU-2025-0322",
                        bloodType: "B+",
                        collectionDate: "Mar 22, 2025",
                        expirationDate: "Apr 19, 2025",
                        daysLeft: 5,
                      },
                    ].map((unit, index) => (
                      <TableRow key={index} className="hover:bg-muted/50 dark:hover:bg-gray-700/50">
                        <TableCell className="font-medium">{unit.id}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800"
                          >
                            {unit.bloodType}
                          </Badge>
                        </TableCell>
                        <TableCell>{unit.collectionDate}</TableCell>
                        <TableCell>{unit.expirationDate}</TableCell>
                        <TableCell>
                          <Badge
                            variant="outline"
                            className="bg-red-50 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800"
                          >
                            {unit.daysLeft} days
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            Prioritize
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history" className="space-y-4">
            <Card className="bg-white dark:bg-gray-800 shadow-sm">
              <CardHeader>
                <CardTitle>Inventory History</CardTitle>
                <CardDescription>Track changes to blood inventory over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center h-40">
                  <p className="text-muted-foreground">Historical inventory data visualization will appear here.</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
