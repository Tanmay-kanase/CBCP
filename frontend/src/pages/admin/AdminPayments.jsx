"use client";

import { useState } from "react";
import {
  DollarSign,
  TrendingUp,
  Download,
  CheckCircle,
  Clock,
  AlertTriangle,
  CreditCard,
} from "lucide-react";

const AdminPayments = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [activeTab, setActiveTab] = useState("all");

  const [paymentStats, setPaymentStats] = useState({
    totalVolume: 125600,
    platformRevenue: 25120,
    creatorPayouts: 100480,
    pendingPayments: 8500,
    monthlyGrowth: 18.5,
    transactionCount: 342,
  });

  const [transactions, setTransactions] = useState([
    {
      id: 1,
      type: "creator_payout",
      creatorName: "Sarah Chen",
      businessName: "TechFlow Inc.",
      projectType: "Instagram Post",
      amount: 150,
      platformFee: 30,
      creatorPayout: 120,
      status: "completed",
      date: "2024-01-15",
      transactionId: "TXN-001-2024",
    },
    {
      id: 2,
      type: "business_payment",
      businessName: "Fashion Forward",
      creatorName: "Mike Johnson",
      projectType: "Video Review",
      amount: 500,
      platformFee: 100,
      creatorPayout: 400,
      status: "pending",
      date: "2024-01-14",
      transactionId: "TXN-002-2024",
    },
    {
      id: 3,
      type: "refund",
      businessName: "Eco Life Brand",
      creatorName: "Emma Rodriguez",
      projectType: "Story Series",
      amount: 200,
      platformFee: 40,
      refundAmount: 200,
      status: "processing",
      date: "2024-01-13",
      transactionId: "TXN-003-2024",
    },
    {
      id: 4,
      type: "creator_payout",
      creatorName: "Alex Kim",
      businessName: "Fitness Pro",
      projectType: "Instagram Reel",
      amount: 180,
      platformFee: 36,
      creatorPayout: 144,
      status: "completed",
      date: "2024-01-12",
      transactionId: "TXN-004-2024",
    },
    {
      id: 5,
      type: "dispute_hold",
      businessName: "Beauty Brands",
      creatorName: "Lisa Park",
      projectType: "Instagram Post",
      amount: 120,
      platformFee: 24,
      status: "on_hold",
      date: "2024-01-11",
      transactionId: "TXN-005-2024",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "processing":
        return "bg-blue-100 text-blue-800";
      case "on_hold":
        return "bg-red-100 text-red-800";
      case "failed":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4" />;
      case "pending":
      case "processing":
        return <Clock className="h-4 w-4" />;
      case "on_hold":
      case "failed":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "creator_payout":
        return "bg-purple-100 text-purple-800";
      case "business_payment":
        return "bg-blue-100 text-blue-800";
      case "refund":
        return "bg-orange-100 text-orange-800";
      case "dispute_hold":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredTransactions = transactions.filter((transaction) => {
    if (activeTab === "all") return true;
    return transaction.status === activeTab || transaction.type === activeTab;
  });

  const tabs = [
    { id: "all", label: "All Transactions", count: transactions.length },
    {
      id: "completed",
      label: "Completed",
      count: transactions.filter((t) => t.status === "completed").length,
    },
    {
      id: "pending",
      label: "Pending",
      count: transactions.filter((t) => t.status === "pending").length,
    },
    {
      id: "on_hold",
      label: "On Hold",
      count: transactions.filter((t) => t.status === "on_hold").length,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Payment Management
          </h1>
          <p className="text-gray-600 mt-2">
            Monitor and manage platform payments
          </p>
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
            Export Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Volume</p>
              <p className="text-2xl font-bold text-gray-900">
                ${paymentStats.totalVolume.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+{paymentStats.monthlyGrowth}% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Platform Revenue
              </p>
              <p className="text-2xl font-bold text-gray-900">
                ${paymentStats.platformRevenue.toLocaleString()}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">20% commission rate</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Creator Payouts
              </p>
              <p className="text-2xl font-bold text-gray-900">
                ${paymentStats.creatorPayouts.toLocaleString()}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <CreditCard className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">80% to creators</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Pending Payments
              </p>
              <p className="text-2xl font-bold text-gray-900">
                ${paymentStats.pendingPayments.toLocaleString()}
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">Awaiting processing</div>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Revenue Overview
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Platform Revenue
            </span>
            <span className="text-sm font-semibold text-gray-900">
              ${paymentStats.platformRevenue.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full"
              style={{
                width: `${
                  (paymentStats.platformRevenue / paymentStats.totalVolume) *
                  100
                }%`,
              }}
            ></div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              Creator Payouts
            </span>
            <span className="text-sm font-semibold text-gray-900">
              ${paymentStats.creatorPayouts.toLocaleString()}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full"
              style={{
                width: `${
                  (paymentStats.creatorPayouts / paymentStats.totalVolume) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.id
                  ? "border-purple-500 text-purple-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                  activeTab === tab.id
                    ? "bg-purple-100 text-purple-600"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Transactions Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Parties
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="font-medium text-gray-900">
                        {transaction.transactionId}
                      </div>
                      <div className="text-sm text-gray-500">
                        {transaction.projectType}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(
                        transaction.type
                      )}`}
                    >
                      {transaction.type.replace("_", " ")}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div>
                      <div className="font-medium">
                        {transaction.businessName}
                      </div>
                      <div className="text-gray-500">
                        → {transaction.creatorName}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm">
                      <div className="font-semibold text-gray-900">
                        ${transaction.amount}
                      </div>
                      {transaction.platformFee && (
                        <div className="text-gray-500">
                          Fee: ${transaction.platformFee}
                        </div>
                      )}
                      {transaction.creatorPayout && (
                        <div className="text-green-600">
                          Payout: ${transaction.creatorPayout}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full flex items-center w-fit ${getStatusColor(
                        transaction.status
                      )}`}
                    >
                      {getStatusIcon(transaction.status)}
                      <span className="ml-1 capitalize">
                        {transaction.status.replace("_", " ")}
                      </span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(transaction.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-purple-600 hover:text-purple-900">
                        View
                      </button>
                      {transaction.status === "pending" && (
                        <button className="text-green-600 hover:text-green-900">
                          Approve
                        </button>
                      )}
                      {transaction.status === "on_hold" && (
                        <button className="text-blue-600 hover:text-blue-900">
                          Release
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPayments;
