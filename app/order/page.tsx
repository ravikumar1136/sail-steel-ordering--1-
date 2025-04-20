"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { checkStockAvailability, calculateDeliveryTime } from "@/lib/stock-data"
import { Loader2 } from "lucide-react"

interface OrderFormData {
  grade: string
  thickness: number
  width: number
  length: number
  finish: string
  quality: string
  edge: string
  bQuantity: number
  customer: string
  remarks: string
  sspRoId: string
  releaseDate: string
  requiredQuantity: number
  mou: string
}

export default function OrderPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const today = new Date().toISOString().split("T")[0]

  const [formData, setFormData] = useState<OrderFormData>({
    grade: "",
    thickness: 0,
    width: 0,
    length: 0,
    finish: "",
    quality: "",
    edge: "",
    bQuantity: 0,
    customer: "",
    remarks: "",
    sspRoId: "",
    releaseDate: today,
    requiredQuantity: 0,
    mou: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: Number.parseFloat(value) || 0 }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Check stock availability
      const stockItem = checkStockAvailability({
        grade: formData.grade,
        thickness: formData.thickness,
        width: formData.width,
        finish: formData.finish,
        quality: formData.quality,
        edge: formData.edge,
      })

      console.log("Stock check result:", stockItem ? "In stock" : "Not in stock")

      // Calculate delivery time
      const deliveryInfo = calculateDeliveryTime(stockItem)
      console.log("Delivery info:", deliveryInfo)

      // Store the order data in localStorage for the confirmation page
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "orderDetails",
          JSON.stringify({
            inStock: !!stockItem,
            days: deliveryInfo.days,
            date: deliveryInfo.date,
            orderNumber: Math.floor(100000 + Math.random() * 900000),
          }),
        )
      }

      // Simulate API call to backend
      setTimeout(() => {
        setIsLoading(false)
        // Navigate to confirmation page
        router.push("/order/confirmation")
      }, 1500)
    } catch (error) {
      console.error("Error processing order:", error)
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Place Steel Order</CardTitle>
          <CardDescription>Fill in the details below to place your order</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Grade */}
              <div className="space-y-2">
                <Label htmlFor="grade">Grade</Label>
                <Select onValueChange={(value) => handleSelectChange("grade", value)} required>
                  <SelectTrigger id="grade">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="201">201</SelectItem>
                    <SelectItem value="201LN">201LN</SelectItem>
                    <SelectItem value="204CU">204CU</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Thickness */}
              <div className="space-y-2">
                <Label htmlFor="thickness">Thickness (mm)</Label>
                <Input
                  id="thickness"
                  name="thickness"
                  type="number"
                  step="0.1"
                  required
                  value={formData.thickness || ""}
                  onChange={handleNumberChange}
                  disabled={isLoading}
                />
              </div>

              {/* Width */}
              <div className="space-y-2">
                <Label htmlFor="width">Width (mm)</Label>
                <Input
                  id="width"
                  name="width"
                  type="number"
                  required
                  value={formData.width || ""}
                  onChange={handleNumberChange}
                  disabled={isLoading}
                />
              </div>

              {/* Length */}
              <div className="space-y-2">
                <Label htmlFor="length">Length (mm)</Label>
                <Input
                  id="length"
                  name="length"
                  type="number"
                  required
                  value={formData.length || ""}
                  onChange={handleNumberChange}
                  disabled={isLoading}
                />
              </div>

              {/* Finish */}
              <div className="space-y-2">
                <Label htmlFor="finish">Finish</Label>
                <Select onValueChange={(value) => handleSelectChange("finish", value)} required>
                  <SelectTrigger id="finish">
                    <SelectValue placeholder="Select finish" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2D">2D</SelectItem>
                    <SelectItem value="2B">2B</SelectItem>
                    <SelectItem value="NO1">NO1</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Quality */}
              <div className="space-y-2">
                <Label htmlFor="quality">Quality</Label>
                <Select onValueChange={(value) => handleSelectChange("quality", value)} required>
                  <SelectTrigger id="quality">
                    <SelectValue placeholder="Select quality" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="P">P</SelectItem>
                    <SelectItem value="S">S</SelectItem>
                    <SelectItem value="C">C</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Edge */}
              <div className="space-y-2">
                <Label htmlFor="edge">Edge</Label>
                <Select onValueChange={(value) => handleSelectChange("edge", value)} required>
                  <SelectTrigger id="edge">
                    <SelectValue placeholder="Select edge" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="M">M</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* B Quantity */}
              <div className="space-y-2">
                <Label htmlFor="bQuantity">B Quantity</Label>
                <Input
                  id="bQuantity"
                  name="bQuantity"
                  type="number"
                  required
                  value={formData.bQuantity || ""}
                  onChange={handleNumberChange}
                  disabled={isLoading}
                />
              </div>

              {/* Customer */}
              <div className="space-y-2">
                <Label htmlFor="customer">Customer</Label>
                <Input
                  id="customer"
                  name="customer"
                  required
                  value={formData.customer}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              {/* SSP RO ID */}
              <div className="space-y-2">
                <Label htmlFor="sspRoId">SSP RO ID</Label>
                <Input
                  id="sspRoId"
                  name="sspRoId"
                  required
                  value={formData.sspRoId}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              {/* Release Date */}
              <div className="space-y-2">
                <Label htmlFor="releaseDate">Release Date</Label>
                <Input
                  id="releaseDate"
                  name="releaseDate"
                  type="date"
                  required
                  value={formData.releaseDate}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              </div>

              {/* Required Quantity */}
              <div className="space-y-2">
                <Label htmlFor="requiredQuantity">Required Quantity</Label>
                <Input
                  id="requiredQuantity"
                  name="requiredQuantity"
                  type="number"
                  required
                  value={formData.requiredQuantity || ""}
                  onChange={handleNumberChange}
                  disabled={isLoading}
                />
              </div>

              {/* MOU */}
              <div className="space-y-2">
                <Label htmlFor="mou">MOU</Label>
                <Input id="mou" name="mou" required value={formData.mou} onChange={handleChange} disabled={isLoading} />
              </div>
            </div>

            {/* Remarks */}
            <div className="space-y-2">
              <Label htmlFor="remarks">Remarks</Label>
              <Textarea
                id="remarks"
                name="remarks"
                rows={3}
                value={formData.remarks}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Submit Order"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
