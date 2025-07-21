"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Users,
  Building,
  Shield,
  Ban,
  CheckCircle,
  Eye,
  Edit,
} from "lucide-react";

const AdminUsers = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah@example.com",
      role: "creator",
      status: "active",
      joinDate: "2024-01-10",
      lastActive: "2024-01-15",
      followers: 25600,
      completedProjects: 12,
      rating: 4.9,
      earnings: 2450,
      categories: ["Fashion", "Lifestyle"],
      isVerified: true,
    },
    {
      id: 2,
      name: "TechFlow Inc.",
      email: "contact@techflow.com",
      role: "business",
      status: "active",
      joinDate: "2024-01-08",
      lastActive: "2024-01-14",
      industry: "Technology",
      totalSpent: 1200,
      activeProjects: 3,
      completedProjects: 8,
      isVerified: true,
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike@example.com",
      role: "creator",
      status: "pending",
      joinDate: "2024-01-12",
      lastActive: "2024-01-15",
      followers: 45200,
      completedProjects: 0,
      categories: ["Tech", "Gaming"],
      isVerified: false,
    },
    {
      id: 4,
      name: "Fashion Forward",
      email: "hello@fashionforward.com",
      role: "business",
      status: "suspended",
      joinDate: "2024-01-05",
      lastActive: "2024-01-10",
      industry: "Fashion",
      totalSpent: 800,
      activeProjects: 0,
      completedProjects: 5,
      isVerified: true,
      suspensionReason: "Payment disputes",
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      email: "emma@example.com",
      role: "creator",
      status: "active",
      joinDate: "2024-01-03",
      lastActive: "2024-01-15",
      followers: 18900,
      completedProjects: 15,
      rating: 4.9,
      earnings: 1890,
      categories: ["Food", "Health"],
      isVerified: true,
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "suspended":
        return "bg-red-100 text-red-800";
      case "inactive":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "creator":
        return <Users className="h-4 w-4" />;
      case "business":
        return <Building className="h-4 w-4" />;
      case "admin":
        return <Shield className="h-4 w-4" />;
      default:
        return <Users className="h-4 w-4" />;
    }
  };

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab === "all" ||
      user.role === activeTab ||
      user.status === activeTab;

    return matchesSearch && matchesTab;
  });

  const handleStatusChange = (userId, newStatus) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const handleVerifyUser = (userId) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, isVerified: true } : user
      )
    );
  };

  const tabs = [
    { id: "all", label: "All Users", count: users.length },
    {
      id: "creator",
      label: "Creators",
      count: users.filter((u) => u.role === "creator").length,
    },
    {
      id: "business",
      label: "Businesses",
      count: users.filter((u) => u.role === "business").length,
    },
    {
      id: "pending",
      label: "Pending",
      count: users.filter((u) => u.status === "pending").length,
    },
    {
      id: "suspended",
      label: "Suspended",
      count: users.filter((u) => u.status === "suspended").length,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <p className="text-gray-600 mt-2">Manage and moderate platform users</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
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

      {/* Users Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stats
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Join Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <span className="text-sm font-medium text-gray-600">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center">
                          <div className="font-medium text-gray-900">
                            {user.name}
                          </div>
                          {user.isVerified && (
                            <CheckCircle className="h-4 w-4 text-green-500 ml-2" />
                          )}
                        </div>
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getRoleIcon(user.role)}
                      <span className="ml-2 text-sm text-gray-900 capitalize">
                        {user.role}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        user.status
                      )}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {user.role === "creator" ? (
                      <div>
                        <div>{user.followers?.toLocaleString()} followers</div>
                        <div>{user.completedProjects} projects</div>
                        {user.rating && <div>⭐ {user.rating}</div>}
                      </div>
                    ) : (
                      <div>
                        <div>${user.totalSpent} spent</div>
                        <div>{user.completedProjects} projects</div>
                        <div>{user.activeProjects} active</div>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="text-purple-600 hover:text-purple-900"
                      >
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit className="h-4 w-4" />
                      </button>
                      {user.status === "active" ? (
                        <button
                          onClick={() =>
                            handleStatusChange(user.id, "suspended")
                          }
                          className="text-red-600 hover:text-red-900"
                        >
                          <Ban className="h-4 w-4" />
                        </button>
                      ) : user.status === "suspended" ? (
                        <button
                          onClick={() => handleStatusChange(user.id, "active")}
                          className="text-green-600 hover:text-green-900"
                        >
                          <CheckCircle className="h-4 w-4" />
                        </button>
                      ) : null}
                      {!user.isVerified && (
                        <button
                          onClick={() => handleVerifyUser(user.id)}
                          className="text-green-600 hover:text-green-900"
                        >
                          <Shield className="h-4 w-4" />
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

      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {selectedUser.name}
                  </h2>
                  <p className="text-gray-600 capitalize">
                    {selectedUser.role}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedUser(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">{selectedUser.email}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Status</h3>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                      selectedUser.status
                    )}`}
                  >
                    {selectedUser.status}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Join Date</h3>
                  <p className="text-gray-600">
                    {new Date(selectedUser.joinDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">
                    Last Active
                  </h3>
                  <p className="text-gray-600">
                    {new Date(selectedUser.lastActive).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {selectedUser.role === "creator" && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">
                    Creator Stats
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        {selectedUser.followers?.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-600">Followers</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        {selectedUser.completedProjects}
                      </p>
                      <p className="text-xs text-gray-600">Projects</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        {selectedUser.rating}
                      </p>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        ${selectedUser.earnings}
                      </p>
                      <p className="text-xs text-gray-600">Earnings</p>
                    </div>
                  </div>
                  {selectedUser.categories && (
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Categories
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedUser.categories.map((category) => (
                          <span
                            key={category}
                            className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {selectedUser.role === "business" && (
                <div>
                  <h3 className="font-medium text-gray-900 mb-4">
                    Business Stats
                  </h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        ${selectedUser.totalSpent}
                      </p>
                      <p className="text-xs text-gray-600">Total Spent</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        {selectedUser.activeProjects}
                      </p>
                      <p className="text-xs text-gray-600">Active</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">
                        {selectedUser.completedProjects}
                      </p>
                      <p className="text-xs text-gray-600">Completed</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Industry</h4>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      {selectedUser.industry}
                    </span>
                  </div>
                </div>
              )}

              {selectedUser.suspensionReason && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">
                    Suspension Reason
                  </h4>
                  <p className="text-red-700 text-sm">
                    {selectedUser.suspensionReason}
                  </p>
                </div>
              )}

              <div className="flex space-x-4 pt-4 border-t">
                {selectedUser.status === "suspended" ? (
                  <button
                    onClick={() => {
                      handleStatusChange(selectedUser.id, "active");
                      setSelectedUser(null);
                    }}
                    className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 font-medium"
                  >
                    Reactivate User
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      handleStatusChange(selectedUser.id, "suspended");
                      setSelectedUser(null);
                    }}
                    className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 font-medium"
                  >
                    Suspend User
                  </button>
                )}
                {!selectedUser.isVerified && (
                  <button
                    onClick={() => {
                      handleVerifyUser(selectedUser.id);
                      setSelectedUser(null);
                    }}
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Verify User
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
