"use client"

import { useState } from "react"
import { DollarSign, CreditCard, Download, Calendar, CheckCircle, Clock, AlertCircle } from "lucide-react"

const BusinessPayments = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const [paymentStats, setPaymentStats] = useState({
    totalSpent: 3200,
    thisMonth: 850,
    pending: 500,
    completed: 2700,
    avgPerProject: 267,
  })

  const [payments, setPayments] = useState([
    {
      id: 1,
      creatorName: "Sarah Chen",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=SC",
      projectType: "Instagram Post",
      amount: 150,
      platformFee: 30,
      totalAmount: 180,
      status: "completed",
      paymentDate: "2024-01-17",
      createdDate: "2024-01-15",
      paymentMethod: "Credit Card",
      transactionId: "TXN-001-2024",
    },
    {
      id: 2,
      creatorName: "Mike Johnson",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=MJ",
      projectType: "Video Review",
      amount: 500,
      platformFee: 100,
      totalAmount: 600,
      status: "pending",
      createdDate: "2024-01-14",
      paymentMethod: "Credit Card",
      transactionId: "TXN-002-2024",
    },
    {
      id: 3,
      creatorName: "Emma Rodriguez",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=ER",
      projectType: "Story Series",
      amount: 200,
      platformFee: 40,
      totalAmount: 240,
      status: "processing",
      createdDate: "2024-01-12",
      paymentMethod: "Bank Transfer",
      transactionId: "TXN-003-2024",
    },
    {
      id: 4,
      creatorName: "Alex Kim",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=AK",
      projectType: "Instagram Reel",
      amount: 180,
      platformFee: 36,
      totalAmount: 216,
      status: "completed",
      paymentDate: "2024-01-10",
      createdDate: "2024-01-08",
      paymentMethod: "Credit Card",
      transactionId: "TXN-004-2024",
    },
    {
      id: 5,
      creatorName: "Lisa Park",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=LP",
      projectType: "Instagram Post",
      amount: 120,
      platformFee: 24,
      totalAmount: 144,
      status: "refunded",
      paymentDate: "2024-01-05",
      refundDate: "2024-01-12",
      createdDate: "2024-01-03",
      paymentMethod: "Credit Card",
      transactionId: "TXN-005-2024",
    },
  ])

  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Credit Card",
      last4: "4242",
      brand: "Visa",
      isDefault: true,
      expiryMonth: 12,
      expiryYear: 2025,
    },
    {
      id: 2,
      type: "Bank Account",
      last4: "1234",
      bank: "Chase Bank",
      isDefault: false,
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "refunded":
        return "bg-red-100 text-red-800"
      case "failed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "pending":
      case "processing":
        return <Clock className="h-4 w-4" />
      case "refunded":
      case "failed":
        return <AlertCircle className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Payments</h1>
          <p className="text-gray-600 mt-2">Track your spending and payment history</p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="quarter">This Quarter</option>
            <option value="year">This Year</option>
          </select>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">${paymentStats.totalSpent}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">${paymentStats.thisMonth}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">${paymentStats.pending}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900">${paymentStats.completed}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg/Project</p>
              <p className="text-2xl font-bold text-gray-900">${paymentStats.avgPerProject}</p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Payment History */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">Payment History</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Creator
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {payments.map((payment) => (
                    <tr key={payment.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            src={payment.creatorAvatar || "/placeholder.svg"}
                            alt={payment.creatorName}
                            className="w-8 h-8 rounded-full mr-3"
                          />
                          <div className="font-medium text-gray-900">{payment.creatorName}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{payment.projectType}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm">
                          <div className="font-semibold text-gray-900">${payment.totalAmount}</div>
                          <div className="text-gray-500">
                            ${payment.amount} + ${payment.platformFee} fee
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full flex items-center w-fit ${getStatusColor(payment.status)}`}
                        >
                          {getStatusIcon(payment.status)}
                          <span className="ml-1 capitalize">{payment.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {payment.paymentDate
                          ? new Date(payment.paymentDate).toLocaleDateString()
                          : new Date(payment.createdDate).toLocaleDateString()}
                        {payment.refundDate && (
                          <div className="text-xs text-red-600">
                            Refunded: {new Date(payment.refundDate).toLocaleDateString()}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Payment Methods & Summary */}
        <div className="space-y-6">
          {/* Payment Methods */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                      <CreditCard className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {method.type} {method.brand && `(${method.brand})`}
                      </p>
                      <p className="text-sm text-gray-500">****{method.last4}</p>
                      {method.expiryMonth && method.expiryYear && (
                        <p className="text-xs text-gray-400">
                          Expires {method.expiryMonth}/{method.expiryYear}
                        </p>
                      )}
                    </div>
                  </div>
                  {method.isDefault && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Default</span>
                  )}
                </div>
              ))}
              <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
                + Add Payment Method
              </button>
            </div>
          </div>

          {/* Spending Summary */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Spending Breakdown</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Creator Payments</span>
                <span className="font-semibold">${paymentStats.totalSpent - paymentStats.totalSpent * 0.2}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Platform Fees (20%)</span>
                <span className="font-semibold">${paymentStats.totalSpent * 0.2}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between items-center font-semibold">
                  <span>Total Spent</span>
                  <span>${paymentStats.totalSpent}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Download Invoice</div>
                <div className="text-sm text-gray-600">Get detailed payment records</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Set Budget Alerts</div>
                <div className="text-sm text-gray-600">Get notified about spending</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Payment Settings</div>
                <div className="text-sm text-gray-600">Manage payment preferences</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessPayments
