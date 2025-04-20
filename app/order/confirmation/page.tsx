"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle2, Clock } from "lucide-react"
import { motion } from "framer-motion"

interface OrderDetails {
  inStock: boolean
  days: string
  date: string
  orderNumber: number
}

export default function ConfirmationPage() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    // Get order details from localStorage
    if (typeof window !== "undefined") {
      const storedDetails = localStorage.getItem("orderDetails")
      if (storedDetails) {
        try {
          const parsedDetails = JSON.parse(storedDetails)
          console.log("Retrieved order details:", parsedDetails)
          setOrderDetails(parsedDetails)
          // Clear the stored details to prevent showing old data on refresh
          localStorage.removeItem("orderDetails")
        } catch (error) {
          console.error("Error parsing order details:", error)
        }
      } else {
        console.log("No order details found in localStorage")
      }
    }

    // Start animation after a short delay
    const timer = setTimeout(() => {
      setShowAnimation(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  // If no order details, show a message
  if (!orderDetails) {
    return (
      <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-16rem)] px-4 py-12">
        <Card className="w-full max-w-md mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">No Order Found</CardTitle>
            <CardDescription>Please place an order first</CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/order">Place an Order</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-[calc(100vh-16rem)] px-4 py-12">
      <Card className="w-full max-w-md mx-auto text-center">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            {showAnimation && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  duration: 1,
                }}
              >
                <CheckCircle2 className="h-24 w-24 text-green-500" />
              </motion.div>
            )}
          </div>
          <CardTitle className="text-2xl font-bold">Order Placed</CardTitle>
          <CardDescription>Your order has been successfully placed</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {orderDetails.inStock ? (
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="font-medium text-green-700 dark:text-green-300">
                Good news! The requested material is in stock.
              </p>
              <p className="text-sm text-green-600 dark:text-green-400 mt-2">
                Your order will be processed immediately.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                <p className="font-medium text-amber-700 dark:text-amber-300">
                  The requested material needs to be manufactured.
                </p>
              </div>

              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Clock className="h-5 w-5" />
                <span>Estimated production time:</span>
              </div>

              <div className="p-4 border rounded-lg">
                <p className="text-xl font-bold">{orderDetails.days} days</p>
                {orderDetails.date && (
                  <p className="text-sm text-muted-foreground mt-1">Expected by: {orderDetails.date}</p>
                )}
              </div>
            </div>
          )}

          <div className="mt-6">
            <p className="text-sm text-muted-foreground">
              A confirmation email has been sent with your order details. Your order reference number is{" "}
              <span className="font-medium">ORD-{orderDetails.orderNumber}</span>
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button asChild className="w-full">
            <Link href="/order">Place Another Order</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Return to Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
