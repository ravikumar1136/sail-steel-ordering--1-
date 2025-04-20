import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">About Salem Steel Plant</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          A premier unit of Steel Authority of India Limited (SAIL)
        </p>
      </div>

      <div className="grid gap-8">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="/placeholder.svg?height=720&width=1280"
            alt="Salem Steel Plant Aerial View"
            fill
            className="object-cover"
          />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our History</CardTitle>
            <CardDescription>The journey of Salem Steel Plant</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Salem Steel Plant (SSP), a special steels unit of Steel Authority of India Limited (SAIL) was commissioned
              in 1982. Located in Salem, Tamil Nadu, it has been a pioneer in the production of stainless steel in
              India.
            </p>
            <p>
              The plant was established with the aim of producing high-quality stainless steel to meet the growing
              demand in various sectors including automotive, architecture, kitchenware, and industrial applications.
            </p>
            <p>
              Over the years, Salem Steel Plant has evolved with technological advancements and capacity expansions to
              become one of India's premier stainless steel manufacturing facilities.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Facilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Salem Steel Plant is equipped with state-of-the-art facilities including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cold Rolling Mill complex with an annual capacity of 1,86,000 tonnes</li>
                <li>Annealing and Pickling lines</li>
                <li>Blanking facilities</li>
                <li>Stainless Steel Blanking line</li>
                <li>Modern quality control and testing laboratories</li>
                <li>Environmental management systems</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Products</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Salem Steel Plant produces a wide range of stainless steel products including:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Cold rolled stainless steel coils and sheets</li>
                <li>Hot rolled stainless steel coils and sheets</li>
                <li>Stainless steel strips</li>
                <li>Stainless steel blanks</li>
                <li>Special finishes including 2B, 2D, No.4, BA, etc.</li>
                <li>Custom sizes and specifications</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>At Salem Steel Plant, we are committed to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Quality Excellence:</strong> Maintaining the highest standards of product quality
              </li>
              <li>
                <strong>Customer Satisfaction:</strong> Meeting and exceeding customer expectations
              </li>
              <li>
                <strong>Environmental Responsibility:</strong> Sustainable production practices
              </li>
              <li>
                <strong>Safety:</strong> Ensuring a safe working environment for all employees
              </li>
              <li>
                <strong>Innovation:</strong> Continuous improvement in processes and products
              </li>
              <li>
                <strong>Community Development:</strong> Contributing to the growth of the local community
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
