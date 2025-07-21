"use client"

import { useState } from "react"
import { DollarSign, TrendingUp, Calendar, Download, Eye, CreditCard } from "lucide-react"

const CreatorEarnings = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month")

  const [earningsData, setEarningsData] = useState({
    totalEarnings: 2450,
    thisMonth: 650,
    pending: 300,
    available: 2150,
    monthlyGrowth: 15.2,
    avgPerProject: 204,
  })

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      businessName: "TechFlow Inc.",
      type: "Instagram Post",
      amount: 150,
      status: "completed",
      date: "2024-01-15",
      paymentDate: "2024-01-17",
      commission: 30,
    },
    {
      id: 2,
      businessName: "Fashion Forward",
      type: "Story + Post",
      amount: 200,
      status: "pending",
      date: "2024-01-14",
      commission: 40,
    },
    {
      id: 3,
      businessName: "Eco Life Brand",
      type: "Video Content",
      amount: 500,
      status: "in_progress",
      date: "2024-01-12",
      commission: 100,
    },
    {
      id: 4,
      businessName: "Fitness Pro",
      type: "Reel",
      amount: 180,
      status: "completed",
      date: "2024-01-08",
      paymentDate: "2024-01-10",
      commission: 36,
    },
    {
      id: 5,
      businessName: "Beauty Brands",
      type: "Instagram Post",
      amount: 120,
      status: "completed",
      date: "2024-01-05",
      paymentDate: "2024-01-07",
      commission: 24,
    },
  ])

  const [monthlyData, setMonthlyData] = useState([
    { month: "Aug", earnings: 1200 },
    { month: "Sep", earnings: 1450 },
    { month: "Oct", earnings: 1800 },
    { month: "Nov", earnings: 2100 },
    { month: "Dec", earnings: 1950 },
    { month: "Jan", earnings: 2450 },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "in_progress":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const calculateNetAmount = (amount, commission) => {
    return amount - commission
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Earnings</h1>
          <p className="text-gray-600 mt-2">Track your income and payment history</p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Earnings</p>
              <p className="text-2xl font-bold text-gray-900">${earningsData.totalEarnings}</p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+{earningsData.monthlyGrowth}% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-gray-900">${earningsData.thisMonth}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">Avg per project: ${earningsData.avgPerProject}</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-gray-900">${earningsData.pending}</p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Eye className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">Awaiting completion</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Available</p>
              <p className="text-2xl font-bold text-gray-900">${earningsData.available}</p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4">
            <button className="text-sm text-purple-600 hover:text-purple-700 font-medium">Withdraw →</button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Earnings Chart */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Earnings Overview</h2>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={data.month} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-600 w-8">{data.month}</span>
                    <div className="flex-1 bg-gray-200 rounded-full h-2 w-48">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                        style={{ width: `${(data.earnings / 2500) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">${data.earnings}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Methods</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <CreditCard className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Bank Account</p>
                    <p className="text-sm text-gray-500">****1234</p>
                  </div>
                </div>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Primary</span>
              </div>
              <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-purple-300 hover:text-purple-600 transition-colors">
                + Add Payment Method
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Projects Completed</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Rating</span>
                <span className="font-semibold">4.8 ⭐</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Response Rate</span>
                <span className="font-semibold">98%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">On-time Delivery</span>
                <span className="font-semibold">100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Transaction History</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Business
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Commission
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Net Amount
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
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{transaction.businessName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{transaction.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-semibold text-gray-900">${transaction.amount}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-${transaction.commission}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-semibold text-green-600">
                        ${calculateNetAmount(transaction.amount, transaction.commission)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(transaction.status)}`}
                      >
                        {transaction.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {new Date(transaction.date).toLocaleDateString()}
                      {transaction.paymentDate && (
                        <div className="text-xs text-gray-500">
                          Paid: {new Date(transaction.paymentDate).toLocaleDateString()}
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
    </div>
  )
}

export default CreatorEarnings
