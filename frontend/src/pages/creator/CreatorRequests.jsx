"use client"

import { useState } from "react"
import { Calendar, DollarSign, MessageSquare, Eye, CheckCircle, X, Clock } from "lucide-react"

const CreatorRequests = () => {
  const [activeTab, setActiveTab] = useState("pending")
  const [selectedRequest, setSelectedRequest] = useState(null)

  const [requests, setRequests] = useState([
    {
      id: 1,
      businessName: "TechFlow Inc.",
      businessLogo: "/placeholder.svg?height=40&width=40&text=TF",
      type: "Instagram Post",
      description:
        "We're launching our new mobile app and need a creator to showcase its features through an engaging Instagram post.",
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
      deliverables: ["High-quality image or carousel", "Engaging caption", "Post within 48 hours of approval"],
    },
    {
      id: 2,
      businessName: "Fashion Forward",
      businessLogo: "/placeholder.svg?height=40&width=40&text=FF",
      type: "Story + Post",
      description: "Promote our new summer collection with a story series and a main feed post.",
      budget: 200,
      deadline: "2024-01-28",
      status: "accepted",
      createdAt: "2024-01-14",
      acceptedAt: "2024-01-15",
      requirements: ["3-5 Instagram stories", "1 Instagram feed post", "Feature 2-3 products", "Include swipe-up link"],
    },
    {
      id: 3,
      businessName: "Eco Life Brand",
      businessLogo: "/placeholder.svg?height=40&width=40&text=EL",
      type: "Video Content",
      description: "Create a 60-second video showcasing our eco-friendly products and their benefits.",
      budget: 500,
      deadline: "2024-02-01",
      status: "in_progress",
      createdAt: "2024-01-12",
      acceptedAt: "2024-01-13",
      requirements: ["60-second video", "Show product usage", "Include brand message", "High-quality production"],
    },
    {
      id: 4,
      businessName: "Fitness Pro",
      businessLogo: "/placeholder.svg?height=40&width=40&text=FP",
      type: "Reel",
      description: "Create an engaging fitness reel featuring our new workout equipment.",
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
      },
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

  const handleAcceptRequest = (requestId) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId ? { ...req, status: "accepted", acceptedAt: new Date().toISOString() } : req,
      ),
    )
  }

  const handleRejectRequest = (requestId) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId ? { ...req, status: "rejected", rejectedAt: new Date().toISOString() } : req,
      ),
    )
  }

  const filteredRequests = requests.filter((req) => {
    if (activeTab === "all") return true
    return req.status === activeTab
  })

  const tabs = [
    { id: "pending", label: "Pending", count: requests.filter((r) => r.status === "pending").length },
    { id: "accepted", label: "Accepted", count: requests.filter((r) => r.status === "accepted").length },
    { id: "in_progress", label: "In Progress", count: requests.filter((r) => r.status === "in_progress").length },
    { id: "completed", label: "Completed", count: requests.filter((r) => r.status === "completed").length },
    { id: "all", label: "All", count: requests.length },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Collaboration Requests</h1>
        <p className="text-gray-600 mt-2">Manage your collaboration requests from businesses</p>
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
                    src={request.businessLogo || "/placeholder.svg"}
                    alt={request.businessName}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{request.businessName}</h3>
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
                        <span>Requested: {new Date(request.createdAt).toLocaleDateString()}</span>
                      </div>
                    </div>
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

                  {request.status === "pending" && (
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleAcceptRequest(request.id)}
                        className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleRejectRequest(request.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded text-sm hover:bg-red-700"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Performance metrics for completed requests */}
              {request.status === "completed" && request.performance && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Performance</h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">
                        {request.performance.views.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">Views</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">
                        {request.performance.likes.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">Likes</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900">{request.performance.comments}</p>
                      <p className="text-xs text-gray-500">Comments</p>
                    </div>
                    <div className="text-center">
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
              {activeTab === "pending"
                ? "You don't have any pending requests at the moment."
                : `No ${activeTab.replace("_", " ")} requests to show.`}
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
                  <h2 className="text-xl font-semibold text-gray-900">{selectedRequest.businessName}</h2>
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

              {selectedRequest.deliverables && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Deliverables</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {selectedRequest.deliverables.map((deliverable, index) => (
                      <li key={index}>{deliverable}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedRequest.status === "pending" && (
                <div className="flex space-x-4 pt-4 border-t">
                  <button
                    onClick={() => {
                      handleAcceptRequest(selectedRequest.id)
                      setSelectedRequest(null)
                    }}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 font-medium"
                  >
                    Accept Request
                  </button>
                  <button
                    onClick={() => {
                      handleRejectRequest(selectedRequest.id)
                      setSelectedRequest(null)
                    }}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 font-medium"
                  >
                    Reject Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreatorRequests
