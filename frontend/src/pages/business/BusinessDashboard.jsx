"use client";

import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Search,
  Users,
  TrendingUp,
  DollarSign,
  Calendar,
  MessageSquare,
  Eye,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";

const BusinessDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    activeRequests: 5,
    completedCampaigns: 8,
    totalSpent: 3200,
    avgResponseTime: "2.5 hours",
  });

  const [recentCampaigns, setRecentCampaigns] = useState([
    {
      id: 1,
      creatorName: "Sarah Chen",
      type: "Instagram Post",
      budget: 150,
      status: "completed",
      completedAt: "2024-01-15",
      performance: { views: 12500, engagement: 8.5 },
    },
    {
      id: 2,
      creatorName: "Mike Johnson",
      type: "Video Content",
      budget: 500,
      status: "in_progress",
      startedAt: "2024-01-14",
    },
    {
      id: 3,
      creatorName: "Emma Rodriguez",
      type: "Story Series",
      budget: 200,
      status: "pending",
      requestedAt: "2024-01-13",
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
          Welcome back, {user?.name}! 🚀
        </h1>
        <p className="text-gray-600 mt-2">
          Manage your creator collaborations and track campaign performance
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
            Awaiting creator response
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Completed Campaigns
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.completedCampaigns}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm text-green-600">
            <TrendingUp className="h-4 w-4 mr-1" />
            <span>+25% this month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">
                ${stats.totalSpent}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">Across all campaigns</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Avg Response Time
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {stats.avgResponseTime}
              </p>
            </div>
            <div className="bg-orange-100 p-3 rounded-full">
              <Users className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-500">From creators</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Campaigns */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Campaigns
              </h2>
            </div>
            <div className="divide-y">
              {recentCampaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-medium text-gray-900">
                          {campaign.creatorName}
                        </h3>
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            campaign.status
                          )}`}
                        >
                          {campaign.status.replace("_", " ")}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {campaign.type}
                      </p>
                      {campaign.status === "completed" &&
                        campaign.performance && (
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {campaign.performance.views.toLocaleString()}{" "}
                              views
                            </span>
                            <span>
                              {campaign.performance.engagement}% engagement
                            </span>
                          </div>
                        )}
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                        ${campaign.budget}
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
              <Link
                to="/business/requests"
                className="text-purple-600 hover:text-purple-700 font-medium text-sm"
              >
                View All Campaigns →
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions & Insights */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Link
                to="/business/search"
                className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors block"
              >
                <div className="font-medium text-gray-900 flex items-center">
                  <Search className="h-4 w-4 mr-2" />
                  Find Creators
                </div>
                <div className="text-sm text-gray-600">
                  Browse and filter creators
                </div>
              </Link>
              <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                <div className="font-medium text-gray-900">Create Campaign</div>
                <div className="text-sm text-gray-600">
                  Start a new collaboration
                </div>
              </button>
              <Link
                to="/business/payments"
                className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors block"
              >
                <div className="font-medium text-gray-900">View Payments</div>
                <div className="text-sm text-gray-600">
                  Track spending & invoices
                </div>
              </Link>
            </div>
          </div>

          {/* Top Performing Creators */}
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Top Performing Creators
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-purple-600">
                      SC
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Sarah Chen</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-500 ml-1">4.9</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    15.2K avg views
                  </p>
                  <p className="text-xs text-gray-500">8.5% engagement</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-blue-600">
                      MJ
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Mike Johnson</p>
                    <div className="flex items-center">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-xs text-gray-500 ml-1">4.8</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">
                    22.1K avg views
                  </p>
                  <p className="text-xs text-gray-500">7.2% engagement</p>
                </div>
              </div>
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
                    Campaign completed by Sarah Chen
                  </p>
                  <p className="text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="text-gray-900">
                    New creator application received
                  </p>
                  <p className="text-gray-500">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div className="text-sm">
                  <p className="text-gray-900">
                    Payment processed for Mike Johnson
                  </p>
                  <p className="text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDashboard;
