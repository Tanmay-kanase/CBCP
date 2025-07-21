"use client";

import { useState } from "react";
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Calendar,
  Download,
} from "lucide-react";

const AdminAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("month");
  const [selectedMetric, setSelectedMetric] = useState("users");

  const [analyticsData, setAnalyticsData] = useState({
    userGrowth: [
      { month: "Aug", creators: 120, businesses: 45, total: 165 },
      { month: "Sep", creators: 145, businesses: 52, total: 197 },
      { month: "Oct", creators: 180, businesses: 68, total: 248 },
      { month: "Nov", creators: 220, businesses: 85, total: 305 },
      { month: "Dec", creators: 265, businesses: 98, total: 363 },
      { month: "Jan", creators: 310, businesses: 115, total: 425 },
    ],
    revenueData: [
      { month: "Aug", revenue: 8500, transactions: 45 },
      { month: "Sep", revenue: 12300, transactions: 67 },
      { month: "Oct", revenue: 18900, transactions: 89 },
      { month: "Nov", revenue: 25600, transactions: 112 },
      { month: "Dec", revenue: 32400, transactions: 145 },
      { month: "Jan", revenue: 41200, transactions: 178 },
    ],
    topCategories: [
      { name: "Fashion", projects: 45, revenue: 12500 },
      { name: "Tech", projects: 38, revenue: 15600 },
      { name: "Food", projects: 32, revenue: 8900 },
      { name: "Travel", projects: 28, revenue: 7800 },
      { name: "Fitness", projects: 25, revenue: 6500 },
    ],
    platformStats: {
      totalUsers: 1247,
      totalProjects: 342,
      totalRevenue: 125600,
      avgProjectValue: 367,
      completionRate: 94.5,
      userRetention: 78.2,
    },
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Analytics Dashboard
          </h1>
          <p className="text-gray-600 mt-2">
            Platform insights and performance metrics
          </p>
        </div>
        <div className="flex space-x-3">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          >
            <option value="week">Last 7 Days</option>
            <option value="month">Last 30 Days</option>
            <option value="quarter">Last 3 Months</option>
            <option value="year">Last 12 Months</option>
          </select>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {analyticsData.platformStats.totalUsers.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+15.2% growth</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ${analyticsData.platformStats.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+27.3% growth</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Projects
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {analyticsData.platformStats.totalProjects}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Activity className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+18.7% growth</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Avg Project Value
              </p>
              <p className="text-2xl font-bold text-gray-900">
                ${analyticsData.platformStats.avgProjectValue}
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+8.4% growth</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* User Growth Chart */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">User Growth</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedMetric("users")}
                className={`px-3 py-1 text-sm rounded-md ${
                  selectedMetric === "users"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Users
              </button>
              <button
                onClick={() => setSelectedMetric("revenue")}
                className={`px-3 py-1 text-sm rounded-md ${
                  selectedMetric === "revenue"
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Revenue
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {selectedMetric === "users"
              ? analyticsData.userGrowth.map((data, index) => (
                  <div
                    key={data.month}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-600 w-8">
                        {data.month}
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-48">
                        <div
                          className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                          style={{ width: `${(data.total / 450) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900">
                        {data.total}
                      </span>
                      <div className="text-xs text-gray-500">
                        {data.creators}C / {data.businesses}B
                      </div>
                    </div>
                  </div>
                ))
              : analyticsData.revenueData.map((data, index) => (
                  <div
                    key={data.month}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-600 w-8">
                        {data.month}
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-48">
                        <div
                          className="bg-gradient-to-r from-green-600 to-blue-600 h-2 rounded-full"
                          style={{ width: `${(data.revenue / 45000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-semibold text-gray-900">
                        ${data.revenue.toLocaleString()}
                      </span>
                      <div className="text-xs text-gray-500">
                        {data.transactions} transactions
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        {/* Top Categories */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Top Categories
          </h2>
          <div className="space-y-4">
            {analyticsData.topCategories.map((category, index) => (
              <div
                key={category.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-sm font-medium text-gray-500 w-6">
                    #{index + 1}
                  </span>
                  <div>
                    <p className="font-medium text-gray-900">{category.name}</p>
                    <p className="text-sm text-gray-500">
                      {category.projects} projects
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ${category.revenue.toLocaleString()}
                  </p>
                  <div className="w-20 bg-gray-200 rounded-full h-1 mt-1">
                    <div
                      className="bg-purple-600 h-1 rounded-full"
                      style={{ width: `${(category.revenue / 16000) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Platform Performance
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Project Completion Rate
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {analyticsData.platformStats.completionRate}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-green-600 h-2 rounded-full"
                  style={{
                    width: `${analyticsData.platformStats.completionRate}%`,
                  }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  User Retention Rate
                </span>
                <span className="text-sm font-semibold text-gray-900">
                  {analyticsData.platformStats.userRetention}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{
                    width: `${analyticsData.platformStats.userRetention}%`,
                  }}
                ></div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div className="text-center">
                <p className="text-2xl font-bold text-purple-600">856</p>
                <p className="text-sm text-gray-600">Active Creators</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">391</p>
                <p className="text-sm text-gray-600">Active Businesses</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Recent Insights
          </h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center">
                <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                <span className="font-medium text-green-800">
                  Revenue Growth
                </span>
              </div>
              <p className="text-sm text-green-700 mt-1">
                Platform revenue increased by 27% this month, driven by
                higher-value projects.
              </p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center">
                <Users className="h-5 w-5 text-blue-600 mr-2" />
                <span className="font-medium text-blue-800">
                  User Acquisition
                </span>
              </div>
              <p className="text-sm text-blue-700 mt-1">
                62 new users joined this week, with a 70/30 split between
                creators and businesses.
              </p>
            </div>

            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="flex items-center">
                <Activity className="h-5 w-5 text-purple-600 mr-2" />
                <span className="font-medium text-purple-800">
                  Project Activity
                </span>
              </div>
              <p className="text-sm text-purple-700 mt-1">
                Tech and Fashion categories are showing the highest engagement
                rates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
