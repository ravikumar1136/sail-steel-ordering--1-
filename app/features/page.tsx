import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "Advanced Steel Production",
      description: "State-of-the-art facilities for producing high-quality stainless steel",
      benefits: [
        "Cold rolling mill with precision thickness control",
        "Annealing and pickling lines for superior surface finish",
        "Advanced quality control systems",
        "Customized steel grades and specifications",
      ],
    },
    {
      title: "Product Diversity",
      description: "Wide range of stainless steel products for various applications",
      benefits: [
        "Stainless steel coils and sheets in various grades",
        "Multiple surface finishes including 2B, 2D, No.4, BA",
        "Custom dimensions and thicknesses",
        "Special steel grades for specific applications",
      ],
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality control measures",
      benefits: [
        "ISO 9001:2015 certified quality management system",
        "Advanced testing laboratories",
        "100% inspection of critical parameters",
        "Strict adherence to international standards",
      ],
    },
    {
      title: "Customer Service",
      description: "Dedicated support for all customer needs",
      benefits: [
        "Technical consultation for material selection",
        "Order tracking and delivery updates",
        "After-sales support and problem resolution",
        "Regular customer feedback and improvement",
      ],
    },
    {
      title: "Sustainability",
      description: "Environmentally responsible production practices",
      benefits: [
        "Energy-efficient manufacturing processes",
        "Waste reduction and recycling initiatives",
        "Water conservation and treatment",
        "ISO 14001:2015 certified environmental management system",
      ],
    },
    {
      title: "Innovation",
      description: "Continuous improvement and technological advancement",
      benefits: [
        "Research and development for new steel grades",
        "Process optimization for better efficiency",
        "Adoption of latest industry technologies",
        "Collaboration with research institutions",
      ],
    },
  ]

  return (
    <div className="container py-10">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Our Features</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Discover what makes Salem Steel Plant a leader in stainless steel production
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
