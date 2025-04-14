import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, Droplet, LineChart, PieChart } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Droplet className="h-6 w-6 text-red-500" />
          <span className="text-lg font-semibold">BloodBank Cloud</span>
        </div>
        <nav className="ml-auto flex gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/donors">Donors</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/inventory">Inventory</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/requests">Requests</Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link href="/reports">Reports</Link>
          </Button>
        </nav>
        <Button variant="outline" size="sm">
          Log out
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Reports & Analytics</h1>
          <div className="flex items-center gap-2">
            <Select defaultValue="april2025">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="april2025">April 2025</SelectItem>
                <SelectItem value="march2025">March 2025</SelectItem>
                <SelectItem value="february2025">February 2025</SelectItem>
                <SelectItem value="january2025">January 2025</SelectItem>
                <SelectItem value="q12025">Q1 2025</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">Export</Button>
          </div>
        </div>

        <Tabs defaultValue="donations" className="space-y-4">
          <TabsList>
            <TabsTrigger value="donations">Donations</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="requests">Requests</TabsTrigger>
            <TabsTrigger value="utilization">Utilization</TabsTrigger>
          </TabsList>

          <TabsContent value="donations" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Total Donations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">248</div>
                  <div className="text-xs text-muted-foreground mt-1">+12% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">New Donors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">64</div>
                  <div className="text-xs text-muted-foreground mt-1">+8% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Repeat Donors</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">184</div>
                  <div className="text-xs text-muted-foreground mt-1">+15% from last month</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">Donation Success Rate</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">96.4%</div>
                  <div className="text-xs text-muted-foreground mt-1">+1.2% from last month</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Donation Trends</CardTitle>
                  <CardDescription>Monthly donation volume over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <LineChart className="h-8 w-8 text-muted" />
                    <span className="ml-2 text-sm text-muted-foreground">Donation trend visualization</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="col-span-1">
                <CardHeader>
                  <CardTitle>Donation by Blood Type</CardTitle>
                  <CardDescription>Distribution of donations by blood type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                    <PieChart className="h-8 w-8 text-muted" />
                    <span className="ml-2 text-sm text-muted-foreground">Blood type distribution</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="inventory" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Levels</CardTitle>
                <CardDescription>Blood inventory levels over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Inventory level visualization</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="requests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Request Analytics</CardTitle>
                <CardDescription>Blood request patterns and fulfillment rates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <LineChart className="h-8 w-8 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Request analytics visualization</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="utilization" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Blood Utilization</CardTitle>
                <CardDescription>How collected blood is being utilized</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full bg-muted/20 rounded-md flex items-center justify-center">
                  <PieChart className="h-8 w-8 text-muted" />
                  <span className="ml-2 text-sm text-muted-foreground">Utilization visualization</span>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
