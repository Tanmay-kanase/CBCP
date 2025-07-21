"use client";

import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  TrendingUp,
  DollarSign,
  MessageSquare,
  Calendar,
  Star,
  Eye,
} from "lucide-react";

const CreatorDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalEarnings: 2450,
    activeRequests: 3,
    completedProjects: 12,
    profileViews: 1250,
    averageRating: 4.8,
    totalFollowers: 15600,
  });

  const [recentRequests, setRecentRequests] = useState([
    {
      id: 1,
      businessName: "TechFlow Inc.",
      type: "Instagram Post",
      budget: 150,
      status: "pending",
      createdAt: "2024-01-15",
    },
    {
      id: 2,
      businessName: "Fashion Forward",
      type: "Story + Post",
      budget: 200,
      status: "accepted",
      createdAt: "2024-01-14",
    },
    {
      id: 3,
      businessName: "Eco Life Brand",
      type: "Video Content",
      budget: 500,
      status: "in_progress",
      createdAt: "2024-01-12",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "accepted":
        return "bg-green-100 text-green-800";
      case "in_progress":
        return "bg-blue-100 text-blue-800";
      case "completed":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {user?.name}! 👋
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what's happening with your creator profile
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total Earnings
              </p>
              <p className="text-2xl font-bold text-gray-900">
                ${stats.totalEarnings}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+12% from last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Active Requests
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.activeRequests}
              </p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">
            Awaiting your response
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Completed Projects
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.completedProjects}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-gray-500">
            <Star className="h-4 w-4 mr-1 text-yellow-500 fill-current" />
            <span>{stats.averageRating} avg rating</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Profile Views</p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.profileViews}
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Eye className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">This month</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Requests */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Collaboration Requests
              </h2>
            </div>
            <div className="divide-y">
              {recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-gray-900">
                          {request.businessName}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            request.status
                          )}`}
                        >
                          {request.status.replace("_", " ")}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {request.type}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Requested on{" "}
                        {new Date(request.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        ${request.budget}
                      </p>
                      <button className="mt-2 text-sm text-purple-600 hover:text-purple-700 font-medium">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t bg-gray-50">
              <button className="text-purple-600 hover:text-purple-700 font-medium text-sm">
                View All Requests →
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions & Profile Status */}
        <div className="space-y-6">
          {/* Profile Completion */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Profile Completion
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Profile Progress</span>
                <span className="font-medium">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Portfolio uploaded
                </div>
                <div className="flex items-center text-green-600">
                  <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                  Pricing set
                </div>
                <div className="flex items-center text-yellow-600">
                  <div className="w-2 h-2 bg-yellow-600 rounded-full mr-2"></div>
                  Add more work samples
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">
                  Update Portfolio
                </div>
                <div className="text-sm text-gray-600">
                  Add new work samples
                </div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Adjust Pricing</div>
                <div className="text-sm text-gray-600">Update your rates</div>
              </button>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">View Analytics</div>
                <div className="text-sm text-gray-600">
                  See detailed insights
                </div>
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="text-gray-900">
                    Project completed for Fashion Forward
                  </p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="text-gray-900">
                    New collaboration request received
                  </p>
                  <p className="text-gray-500">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="text-gray-900">Profile viewed 15 times</p>
                  <p className="text-gray-500">Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
