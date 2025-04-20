import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calendar } from "lucide-react"

export default function DaysEstimationPage() {
  // Sample days estimation data
  const estimationData = [
    {
      productType: "Cold Rolled Sheets",
      grade: "304",
      thickness: "1.0mm",
      productionDays: 5,
      processingDays: 3,
      deliveryDays: 2,
      totalDays: 10,
    },
    {
      productType: "Hot Rolled Coils",
      grade: "316L",
      thickness: "2.0mm",
      productionDays: 7,
      processingDays: 4,
      deliveryDays: 3,
      totalDays: 14,
    },
    {
      productType: "Stainless Steel Strips",
      grade: "201",
      thickness: "0.5mm",
      productionDays: 4,
      processingDays: 2,
      deliveryDays: 2,
      totalDays: 8,
    },
    {
      productType: "Stainless Steel Plates",
      grade: "430",
      thickness: "3.0mm",
      productionDays: 8,
      processingDays: 5,
      deliveryDays: 3,
      totalDays: 16,
    },
    {
      productType: "Stainless Steel Blanks",
      grade: "409",
      thickness: "1.5mm",
      productionDays: 6,
      processingDays: 3,
      deliveryDays: 2,
      totalDays: 11,
    },
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
        <h1 className="text-3xl font-bold">Days Estimation</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Production Timeline Estimation</CardTitle>
            <CardDescription>
              Accurate estimation of production and delivery timelines for different steel products
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6">
              At Salem Steel Plant, we provide precise timeline estimates for our steel production process. These
              estimates help our customers plan their projects effectively by providing visibility into production
              schedules, processing times, and delivery dates for different types of steel products.
            </p>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Type</TableHead>
                    <TableHead>Grade</TableHead>
                    <TableHead>Thickness</TableHead>
                    <TableHead>Production (Days)</TableHead>
                    <TableHead>Processing (Days)</TableHead>
                    <TableHead>Delivery (Days)</TableHead>
                    <TableHead>Total (Days)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {estimationData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.productType}</TableCell>
                      <TableCell>{item.grade}</TableCell>
                      <TableCell>{item.thickness}</TableCell>
                      <TableCell>{item.productionDays}</TableCell>
                      <TableCell>{item.processingDays}</TableCell>
                      <TableCell>{item.deliveryDays}</TableCell>
                      <TableCell className="font-bold">{item.totalDays}</TableCell>
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
              <CardTitle>Factors Affecting Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Product type and specifications</li>
                <li>Steel grade and composition</li>
                <li>Thickness and dimensions</li>
                <li>Current production capacity and workload</li>
                <li>Special processing requirements</li>
                <li>Quality testing and certification needs</li>
                <li>Shipping distance and logistics</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <CardTitle>Timeline Calculation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Our timeline estimation is calculated based on several key phases:</p>
              <ol className="list-decimal pl-5 space-y-2">
                <li>
                  <strong>Production Days:</strong> Time required for raw material preparation and steel production
                </li>
                <li>
                  <strong>Processing Days:</strong> Time needed for rolling, finishing, and quality control
                </li>
                <li>
                  <strong>Delivery Days:</strong> Time for packaging, shipping, and transportation to destination
                </li>
                <li>
                  <strong>Total Days:</strong> The complete timeline from order placement to delivery
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
