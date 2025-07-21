"use client";

import { useState } from "react";
import {
  Users,
  Building,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Eye,
} from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 1247,
    totalCreators: 856,
    totalBusinesses: 391,
    totalRevenue: 45600,
    monthlyGrowth: 12.5,
    activeProjects: 89,
    pendingApprovals: 23,
    disputesOpen: 5,
  });

  const [recentActivity, setRecentActivity] = useState([
    {
      id: 1,
      type: "user_signup",
      message: "New creator Sarah Johnson signed up",
      timestamp: "2024-01-15T10:30:00Z",
      status: "info",
    },
    {
      id: 2,
      type: "payment_processed",
      message: "Payment of $150 processed for TechFlow campaign",
      timestamp: "2024-01-15T09:15:00Z",
      status: "success",
    },
    {
      id: 3,
      type: "dispute_opened",
      message: "Dispute opened for Fashion Forward campaign",
      timestamp: "2024-01-15T08:45:00Z",
      status: "warning",
    },
    {
      id: 4,
      type: "creator_verified",
      message: "Creator Mike Chen profile verified",
      timestamp: "2024-01-14T16:20:00Z",
      status: "success",
    },
    {
      id: 5,
      type: "business_signup",
      message: "New business EcoLife Brand joined",
      timestamp: "2024-01-14T14:10:00Z",
      status: "info",
    },
  ]);

  const [topCreators, setTopCreators] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40&text=SC",
      followers: 25600,
      completedProjects: 12,
      rating: 4.9,
      earnings: 2450,
    },
    {
      id: 2,
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=MJ",
      followers: 45200,
      completedProjects: 18,
      rating: 4.8,
      earnings: 3200,
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40&text=ER",
      followers: 18900,
      completedProjects: 15,
      rating: 4.9,
      earnings: 1890,
    },
  ]);

  const [pendingApprovals, setPendingApprovals] = useState([
    {
      id: 1,
      type: "creator_verification",
      name: "Alex Kim",
      submittedAt: "2024-01-15T08:00:00Z",
      category: "Tech",
    },
    {
      id: 2,
      type: "business_verification",
      name: "Green Tech Solutions",
      submittedAt: "2024-01-14T15:30:00Z",
      industry: "Technology",
    },
    {
      id: 3,
      type: "content_review",
      name: "Fashion Campaign Content",
      submittedAt: "2024-01-14T12:00:00Z",
      creator: "Lisa Park",
    },
  ]);

  const getActivityIcon = (type) => {
    switch (type) {
      case "user_signup":
      case "business_signup":
        return <Users className="h-4 w-4" />;
      case "payment_processed":
        return <DollarSign className="h-4 w-4" />;
      case "dispute_opened":
        return <AlertTriangle className="h-4 w-4" />;
      case "creator_verified":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getActivityColor = (status) => {
    switch (status) {
      case "success":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-yellow-600 bg-yellow-100";
      case "error":
        return "text-red-600 bg-red-100";
      default:
        return "text-blue-600 bg-blue-100";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Platform overview and management</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Users</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.totalUsers.toLocaleString()}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+{stats.monthlyGrowth}% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">
                ${stats.totalRevenue.toLocaleString()}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Platform commission earned
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Active Projects
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.activeProjects}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Building className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Currently in progress
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Pending Approvals
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.pendingApprovals}
              </p>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">Require admin action</div>
        </div>
      </div>

      {/* User Breakdown */}
      <div className="grid lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            User Breakdown
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-gray-600">Creators</span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-gray-900">
                  {stats.totalCreators}
                </span>
                <div className="text-xs text-gray-500">
                  {((stats.totalCreators / stats.totalUsers) * 100).toFixed(1)}%
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-gray-600">Businesses</span>
              </div>
              <div className="text-right">
                <span className="font-semibold text-gray-900">
                  {stats.totalBusinesses}
                </span>
                <div className="text-xs text-gray-500">
                  {((stats.totalBusinesses / stats.totalUsers) * 100).toFixed(
                    1
                  )}
                  %
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                style={{
                  width: `${(stats.totalCreators / stats.totalUsers) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Top Performing Creators
            </h3>
            <div className="space-y-4">
              {topCreators.map((creator, index) => (
                <div
                  key={creator.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-500 w-6">
                      #{index + 1}
                    </span>
                    <img
                      src={creator.avatar || "/placeholder.svg"}
                      alt={creator.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900">
                        {creator.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {creator.followers.toLocaleString()} followers
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">
                      ${creator.earnings}
                    </p>
                    <p className="text-sm text-gray-500">
                      {creator.completedProjects} projects
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div
                    className={`p-2 rounded-full ${getActivityColor(
                      activity.status
                    )}`}
                  >
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(activity.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="p-6 border-b">
            <h2 className="text-lg font-semibold text-gray-900">
              Pending Approvals
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {pendingApprovals.map((approval) => (
                <div
                  key={approval.id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  <div>
                    <p className="font-medium text-gray-900">{approval.name}</p>
                    <p className="text-sm text-gray-600 capitalize">
                      {approval.type.replace("_", " ")}
                      {approval.category && ` - ${approval.category}`}
                      {approval.industry && ` - ${approval.industry}`}
                      {approval.creator && ` by ${approval.creator}`}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {new Date(approval.submittedAt).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                      Reject
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                View All Approvals →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Manage Users</p>
                  <p className="text-sm text-gray-600">
                    View and moderate users
                  </p>
                </div>
              </div>
            </button>

            <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Payment Reports</p>
                  <p className="text-sm text-gray-600">View financial data</p>
                </div>
              </div>
            </button>

            <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Handle Disputes</p>
                  <p className="text-sm text-gray-600">
                    Resolve user conflicts
                  </p>
                </div>
              </div>
            </button>

            <button className="p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Eye className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Platform Analytics
                  </p>
                  <p className="text-sm text-gray-600">
                    View detailed insights
                  </p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
