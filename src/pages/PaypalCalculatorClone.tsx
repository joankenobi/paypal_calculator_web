import { useState } from "react"
// import Link from "next/link"
// import { Input } from "@/components/ui/input"
import { ArrowLeft, Calculator } from "lucide-react"

export default function PayPalCalculator() {
  const [amount, setAmount] = useState("")
  const [fee, setFee] = useState(0)
  const [totalAmount, setTotalAmount] = useState(0)

  const calculateFee = (value:string) => {
    const numValue = parseFloat(value)
    if (isNaN(numValue) || numValue <= 0) {
      setFee(0)
      setTotalAmount(0)
    } else {
      // This is a simplified fee calculation and may not reflect actual PayPal fees
      const calculatedFee = Math.min(0.029 * numValue + 0.30, 20)
      setFee(calculatedFee)
      setTotalAmount(numValue + calculatedFee)
    }
  }

  const handleAmountChange = (e:any) => {
    const value = e.target.value
    setAmount(value)
    calculateFee(value)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b">
        <a href="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <ArrowLeft className="w-6 h-6 mr-2" />
          CambiosPay
        </a>
      </header>

      <main className="flex-grow bg-blue-50 py-20 px-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6 flex items-center">
            <Calculator className="w-8 h-8 mr-2 text-blue-600" />
            PayPal Fee Calculator
          </h1>
          <div className="space-y-6">
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                Enter amount:
              </label>
              <input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={handleAmountChange}
              />
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm text-gray-600 mb-2">Estimated PayPal fee:</p>
              <p className="text-2xl font-semibold">${fee.toFixed(2)}</p>
            </div>
            <div className="bg-blue-100 p-4 rounded-md">
              <p className="text-sm text-gray-600 mb-2">Total amount (including fee):</p>
              <p className="text-2xl font-semibold">${totalAmount.toFixed(2)}</p>
            </div>
            <p className="text-xs text-gray-500">
              Note: This is an estimate. Actual fees may vary depending on your PayPal account type and other factors.
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 py-6 px-6 text-center">
        <p className="text-sm text-gray-600">
          © 2024 CambiosPay. All rights reserved.
        </p>
      </footer>
    </div>
  )
}