"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Flame, Calendar } from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome to SAIL Salem Steel Plant</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-3xl">
          Salem Steel Plant (SSP) is a unit of Steel Authority of India Limited (SAIL) located in Salem, Tamil Nadu. It
          specializes in the production of world-class stainless steel in both hot and cold rolled forms.
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-8" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>About Salem Steel Plant</CardTitle>
                <CardDescription>Key information about our facility</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Salem Steel Plant was commissioned in 1982 and has since been a pioneer in stainless steel production
                  in India. The plant is equipped with state-of-the-art Cold Rolling Mill complex with an annual
                  capacity of 1,86,000 tonnes.
                </p>
                <p>
                  The plant produces cold rolled stainless steel sheets, coils, and strips in various grades, finishes,
                  and sizes to meet diverse customer requirements across industries.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Capabilities</CardTitle>
                <CardDescription>Advanced technology and expertise</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Salem Steel Plant is equipped with modern facilities including a Cold Rolling Mill complex, Annealing
                  and Pickling lines, Blanking facilities, and a Stainless Steel Blanking line.
                </p>
                <p>
                  The plant has the capability to produce stainless steel in various grades including austenitic,
                  ferritic, martensitic, and low-nickel grades with different surface finishes.
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="requirements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Flame className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle>Heat Plan</CardTitle>
                  <CardDescription>Steel production heat planning</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Heat Plan requirement provides detailed planning and monitoring of the steel production process,
                  including temperature control, material composition, and quality parameters.
                </p>
                <Button asChild>
                  <Link href="/requirements/heat-plan">View Heat Plan</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <CardTitle>Days Estimation</CardTitle>
                  <CardDescription>Production and delivery timeline</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  The Days Estimation requirement provides accurate timelines for steel production, processing, and
                  delivery, helping customers plan their projects effectively.
                </p>
                <Button asChild>
                  <Link href="/requirements/days-estimation">View Days Estimation</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
