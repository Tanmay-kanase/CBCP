"use client"

import { useState } from "react"
import { Calendar, DollarSign, MessageSquare, Eye, Clock, CheckCircle, X, TrendingUp } from "lucide-react"

const BusinessRequests = () => {
  const [activeTab, setActiveTab] = useState("active")
  const [selectedRequest, setSelectedRequest] = useState(null)

  const [requests, setRequests] = useState([
    {
      id: 1,
      creatorName: "Sarah Chen",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=SC",
      type: "Instagram Post",
      description: "Promote our new mobile app launch with engaging content",
      budget: 150,
      deadline: "2024-01-25",
      status: "pending",
      createdAt: "2024-01-15",
      requirements: [
        "1 Instagram feed post",
        "Include app screenshots",
        "Use hashtag #TechFlowApp",
        "Tag @techflow_official",
      ],
    },
    {
      id: 2,
      creatorName: "Mike Johnson",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=MJ",
      type: "Video Review",
      description: "Create a detailed review video of our new tech product",
      budget: 500,
      deadline: "2024-01-28",
      status: "accepted",
      createdAt: "2024-01-14",
      acceptedAt: "2024-01-15",
    },
    {
      id: 3,
      creatorName: "Emma Rodriguez",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=ER",
      type: "Story Series",
      description: "Showcase our healthy meal prep service through Instagram stories",
      budget: 200,
      deadline: "2024-01-30",
      status: "in_progress",
      createdAt: "2024-01-12",
      acceptedAt: "2024-01-13",
    },
    {
      id: 4,
      creatorName: "Alex Kim",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=AK",
      type: "Instagram Reel",
      description: "Create an engaging reel featuring our fitness equipment",
      budget: 180,
      deadline: "2024-01-20",
      status: "completed",
      createdAt: "2024-01-08",
      completedAt: "2024-01-18",
      performance: {
        views: 25600,
        likes: 2100,
        comments: 150,
        shares: 89,
        engagementRate: 8.2,
      },
    },
    {
      id: 5,
      creatorName: "Lisa Park",
      creatorAvatar: "/placeholder.svg?height=40&width=40&text=LP",
      type: "Instagram Post",
      description: "Feature our skincare products in a morning routine post",
      budget: 120,
      deadline: "2024-01-15",
      status: "rejected",
      createdAt: "2024-01-10",
      rejectedAt: "2024-01-12",
      rejectionReason: "Schedule conflict with existing commitments",
    },
  ])

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "accepted":
        return "bg-green-100 text-green-800"
      case "in_progress":
        return "bg-blue-100 text-blue-800"
      case "completed":
        return "bg-purple-100 text-purple-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <Clock className="h-4 w-4" />
      case "accepted":
      case "completed":
        return <CheckCircle className="h-4 w-4" />
      case "in_progress":
        return <MessageSquare className="h-4 w-4" />
      case "rejected":
        return <X className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const filteredRequests = requests.filter((req) => {
    if (activeTab === "all") return true
    if (activeTab === "active") return ["pending", "accepted", "in_progress"].includes(req.status)
    return req.status === activeTab
  })

  const tabs = [
    {
      id: "active",
      label: "Active",
      count: requests.filter((r) => ["pending", "accepted", "in_progress"].includes(r.status)).length,
    },
    { id: "pending", label: "Pending", count: requests.filter((r) => r.status === "pending").length },
    { id: "in_progress", label: "In Progress", count: requests.filter((r) => r.status === "in_progress").length },
    { id: "completed", label: "Completed", count: requests.filter((r) => r.status === "completed").length },
    { id: "all", label: "All", count: requests.length },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Requests</h1>
        <p className="text-gray-600 mt-2">Track and manage your collaboration requests</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Requests</p>
              <p className="text-2xl font-bold text-gray-900">{requests.length}</p>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active</p>
              <p className="text-2xl font-bold text-gray-900">
                {requests.filter((r) => ["pending", "accepted", "in_progress"].includes(r.status)).length}
              </p>
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
              <p className="text-2xl font-bold text-gray-900">
                {requests.filter((r) => r.status === "completed").length}
              </p>
            </div>
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">
                ${requests.filter((r) => r.status === "completed").reduce((sum, r) => sum + r.budget, 0)}
              </p>
            </div>
            <div className="bg-purple-100 p-3 rounded-full">
              <DollarSign className="h-6 w-6 text-purple-600" />
            </div>
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
              {tab.count > 0 && (
                <span
                  className={`ml-2 py-0.5 px-2 rounded-full text-xs ${
                    activeTab === tab.id ? "bg-purple-100 text-purple-600" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Requests List */}
      <div className="space-y-6">
        {filteredRequests.map((request) => (
          <div key={request.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <img
                    src={request.creatorAvatar || "/placeholder.svg"}
                    alt={request.creatorName}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{request.creatorName}</h3>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full flex items-center ${getStatusColor(request.status)}`}
                      >
                        {getStatusIcon(request.status)}
                        <span className="ml-1 capitalize">{request.status.replace("_", " ")}</span>
                      </span>
                    </div>
                    <p className="text-purple-600 font-medium mb-2">{request.type}</p>
                    <p className="text-gray-600 mb-4">{request.description}</p>

                    <div className="flex items-center space-x-6 text-sm text-gray-500">
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        <span className="font-medium text-gray-900">${request.budget}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>Due: {new Date(request.deadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Created: {new Date(request.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Rejection Reason */}
                    {request.status === "rejected" && request.rejectionReason && (
                      <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>Rejection Reason:</strong> {request.rejectionReason}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col space-y-2 ml-4">
                  <button
                    onClick={() => setSelectedRequest(request)}
                    className="px-4 py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 text-sm font-medium"
                  >
                    <Eye className="h-4 w-4 mr-1 inline" />
                    View Details
                  </button>

                  {request.status === "completed" && (
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm font-medium">
                      View Results
                    </button>
                  )}
                </div>
              </div>

              {/* Performance metrics for completed requests */}
              {request.status === "completed" && request.performance && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-medium text-gray-900">Campaign Performance</h4>
                    <div className="flex items-center text-sm text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span>{request.performance.engagementRate}% engagement rate</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        {request.performance.views.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">Views</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        {request.performance.likes.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">Likes</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">{request.performance.comments}</p>
                      <p className="text-xs text-gray-500">Comments</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">{request.performance.shares}</p>
                      <p className="text-xs text-gray-500">Shares</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredRequests.length === 0 && (
          <div className="text-center py-12">
            <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No requests found</h3>
            <p className="text-gray-600">
              {activeTab === "active"
                ? "You don't have any active requests at the moment."
                : `No ${activeTab} requests to show.`}
            </p>
          </div>
        )}
      </div>

      {/* Request Details Modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{selectedRequest.creatorName}</h2>
                  <p className="text-purple-600 font-medium">{selectedRequest.type}</p>
                </div>
                <button onClick={() => setSelectedRequest(null)} className="text-gray-400 hover:text-gray-600">
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600">{selectedRequest.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Budget</h3>
                  <p className="text-2xl font-bold text-green-600">${selectedRequest.budget}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Deadline</h3>
                  <p className="text-gray-600">{new Date(selectedRequest.deadline).toLocaleDateString()}</p>
                </div>
              </div>

              {selectedRequest.requirements && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Requirements</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {selectedRequest.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedRequest.performance && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">Performance Results</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">
                        {selectedRequest.performance.views.toLocaleString()}
                      </p>
                      <p className="text-sm text-gray-600">Total Views</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">{selectedRequest.performance.engagementRate}%</p>
                      <p className="text-sm text-gray-600">Engagement Rate</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex space-x-4 pt-4 border-t">
                <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 font-medium">
                  Message Creator
                </button>
                {selectedRequest.status === "completed" && (
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 font-medium">
                    Download Report
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BusinessRequests
