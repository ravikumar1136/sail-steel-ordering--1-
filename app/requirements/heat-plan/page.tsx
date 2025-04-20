import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function HeatPlanPage() {
  // Sample heat plan data
  const heatPlanData = [
    { id: "HP001", grade: "304", temperature: "1450°C", duration: "45 min", status: "Completed" },
    { id: "HP002", grade: "316L", temperature: "1480°C", duration: "50 min", status: "In Progress" },
    { id: "HP003", grade: "201", temperature: "1420°C", duration: "40 min", status: "Scheduled" },
    { id: "HP004", grade: "430", temperature: "1400°C", duration: "35 min", status: "Scheduled" },
    { id: "HP005", grade: "409", temperature: "1380°C", duration: "30 min", status: "Pending" },
  ]

  return (
    <div className="container py-10">
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/dashboard">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">Heat Plan</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Heat Plan Overview</CardTitle>
            <CardDescription>
              Comprehensive planning and monitoring of the steel production heating process
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              The Heat Plan is a critical component of steel production at Salem Steel Plant. It involves precise
              temperature control, timing, and material composition to ensure the highest quality stainless steel
              products. Our advanced heat planning system optimizes energy usage while maintaining strict quality
              standards.
            </p>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Heat Plan ID</TableHead>
                    <TableHead>Steel Grade</TableHead>
                    <TableHead>Temperature</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {heatPlanData.map((plan) => (
                    <TableRow key={plan.id}>
                      <TableCell className="font-medium">{plan.id}</TableCell>
                      <TableCell>{plan.grade}</TableCell>
                      <TableCell>{plan.temperature}</TableCell>
                      <TableCell>{plan.duration}</TableCell>
                      <TableCell>
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            plan.status === "Completed"
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                              : plan.status === "In Progress"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : plan.status === "Scheduled"
                                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          }`}
                        >
                          {plan.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Heat Plan Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Precise temperature control for optimal steel properties</li>
                <li>Efficient energy utilization during production</li>
                <li>Consistent quality across production batches</li>
                <li>Reduced production time and costs</li>
                <li>Enhanced product performance and durability</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Heat Plan Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2">
                <li>Material selection and preparation</li>
                <li>Heat plan scheduling and optimization</li>
                <li>Furnace preparation and temperature calibration</li>
                <li>Heating process with precise temperature control</li>
                <li>Cooling and quality inspection</li>
                <li>Documentation and reporting</li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
