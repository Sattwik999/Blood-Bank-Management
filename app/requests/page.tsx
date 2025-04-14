import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Droplet, MoreVertical, Plus } from "lucide-react"

export default function RequestsPage() {
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
          <Button variant="default" size="sm" asChild>
            <Link href="/requests">Requests</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/reports">Reports</Link>
          </Button>
        </nav>
        <Button variant="outline" size="sm">
          Log out
        </Button>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Blood Requests</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> New Request
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Pending Requests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <div className="text-xs text-muted-foreground mt-1">5 high priority</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <div className="text-xs text-muted-foreground mt-1">3 dispatching today</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <div className="text-xs text-muted-foreground mt-1">This month</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="px-6 py-4">
            <CardTitle>Blood Requests</CardTitle>
            <CardDescription>Manage and process blood requests from hospitals</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Hospital</TableHead>
                  <TableHead>Blood Type</TableHead>
                  <TableHead>Units</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    id: "REQ-2025-0414-01",
                    hospital: "City General Hospital",
                    bloodType: "O-",
                    units: 3,
                    date: "Apr 14, 2025",
                    status: "Pending",
                    priority: "High",
                  },
                  {
                    id: "REQ-2025-0414-02",
                    hospital: "Memorial Medical Center",
                    bloodType: "AB-",
                    units: 2,
                    date: "Apr 14, 2025",
                    status: "Pending",
                    priority: "High",
                  },
                  {
                    id: "REQ-2025-0413-01",
                    hospital: "University Hospital",
                    bloodType: "B+",
                    units: 5,
                    date: "Apr 13, 2025",
                    status: "Processing",
                    priority: "Medium",
                  },
                  {
                    id: "REQ-2025-0413-02",
                    hospital: "St. Mary's Hospital",
                    bloodType: "A+",
                    units: 4,
                    date: "Apr 13, 2025",
                    status: "Processing",
                    priority: "Medium",
                  },
                  {
                    id: "REQ-2025-0412-01",
                    hospital: "County Medical Center",
                    bloodType: "O+",
                    units: 6,
                    date: "Apr 12, 2025",
                    status: "Processing",
                    priority: "Low",
                  },
                  {
                    id: "REQ-2025-0412-02",
                    hospital: "Children's Hospital",
                    bloodType: "A-",
                    units: 3,
                    date: "Apr 12, 2025",
                    status: "Completed",
                    priority: "High",
                  },
                  {
                    id: "REQ-2025-0411-01",
                    hospital: "Veterans Medical Center",
                    bloodType: "B-",
                    units: 2,
                    date: "Apr 11, 2025",
                    status: "Completed",
                    priority: "Medium",
                  },
                  {
                    id: "REQ-2025-0411-02",
                    hospital: "Community Hospital",
                    bloodType: "AB+",
                    units: 1,
                    date: "Apr 11, 2025",
                    status: "Completed",
                    priority: "Low",
                  },
                  {
                    id: "REQ-2025-0410-01",
                    hospital: "Regional Medical Center",
                    bloodType: "A+",
                    units: 5,
                    date: "Apr 10, 2025",
                    status: "Completed",
                    priority: "Medium",
                  },
                  {
                    id: "REQ-2025-0410-02",
                    hospital: "Mercy Hospital",
                    bloodType: "O+",
                    units: 4,
                    date: "Apr 10, 2025",
                    status: "Completed",
                    priority: "Medium",
                  },
                ].map((request, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.hospital}</TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                        {request.bloodType}
                      </div>
                    </TableCell>
                    <TableCell>{request.units}</TableCell>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${
                          request.status === "Pending"
                            ? "border-yellow-500 text-yellow-700"
                            : request.status === "Processing"
                              ? "border-blue-500 text-blue-700"
                              : "border-green-500 text-green-700"
                        }`}
                      >
                        {request.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                          request.priority === "High"
                            ? "bg-red-50 text-red-700"
                            : request.priority === "Medium"
                              ? "bg-yellow-50 text-yellow-700"
                              : "bg-green-50 text-green-700"
                        }`}
                      >
                        {request.priority}
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Open menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Process Request</DropdownMenuItem>
                          <DropdownMenuItem>Assign Units</DropdownMenuItem>
                          <DropdownMenuItem>Update Status</DropdownMenuItem>
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
