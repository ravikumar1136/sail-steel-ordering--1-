const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api"

export async function placeOrder(orderData: any) {
  try {
    const response = await fetch(`${API_URL}/orders/place`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || "Failed to place order")
    }

    return await response.json()
  } catch (error) {
    console.error("API error:", error)
    throw error
  }
}
