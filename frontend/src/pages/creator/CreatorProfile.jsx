"use client"

import { useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { Camera, Plus, X, Save, Edit, Instagram, Youtube, Twitter, Globe } from "lucide-react"

const CreatorProfile = () => {
  const { user, updateProfile } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    bio: "Passionate content creator specializing in lifestyle and fashion. I love creating authentic content that resonates with my audience.",
    location: "San Francisco, CA",
    categories: ["Fashion", "Lifestyle", "Beauty"],
    socialMedia: {
      instagram: "https://instagram.com/sarahchen",
      youtube: "https://youtube.com/sarahchen",
      twitter: "https://twitter.com/sarahchen",
      website: "https://sarahchen.com",
    },
    pricing: {
      post: 150,
      story: 75,
      video: 300,
      reel: 200,
    },
    portfolio: [
      {
        id: 1,
        type: "image",
        url: "/placeholder.svg?height=300&width=300&text=Portfolio+1",
        title: "Fashion Campaign",
        description: "Summer collection showcase",
      },
      {
        id: 2,
        type: "video",
        url: "/placeholder.svg?height=300&width=300&text=Video+Content",
        title: "Product Review",
        description: "Skincare routine video",
      },
      {
        id: 3,
        type: "image",
        url: "/placeholder.svg?height=300&width=300&text=Portfolio+3",
        title: "Brand Collaboration",
        description: "Tech product launch",
      },
    ],
    stats: {
      followers: 25600,
      avgViews: 15200,
      engagementRate: 8.5,
      completedProjects: 12,
    },
  })

  const categories = [
    "Fashion",
    "Tech",
    "Food",
    "Travel",
    "Fitness",
    "Beauty",
    "Gaming",
    "Music",
    "Art",
    "Education",
    "Business",
    "Lifestyle",
  ]

  const handleSave = () => {
    updateProfile(profileData)
    setIsEditing(false)
  }

  const handleInputChange = (field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNestedInputChange = (parent, field, value) => {
    setProfileData((prev) => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value,
      },
    }))
  }

  const handleCategoryToggle = (category) => {
    setProfileData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }))
  }

  const addPortfolioItem = () => {
    const newItem = {
      id: Date.now(),
      type: "image",
      url: "/placeholder.svg?height=300&width=300&text=New+Item",
      title: "New Portfolio Item",
      description: "Description here",
    }
    setProfileData((prev) => ({
      ...prev,
      portfolio: [...prev.portfolio, newItem],
    }))
  }

  const removePortfolioItem = (id) => {
    setProfileData((prev) => ({
      ...prev,
      portfolio: prev.portfolio.filter((item) => item.id !== id),
    }))
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Creator Profile</h1>
          <p className="text-gray-600 mt-2">Manage your profile and showcase your work</p>
        </div>
        <div className="flex space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
              >
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </button>
          )}
        </div>
      </div>

      <div className="space-y-8">
        {/* Basic Information */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Basic Information</h2>

          <div className="flex items-center space-x-6 mb-6">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                <Camera className="h-8 w-8 text-gray-400" />
              </div>
              {isEditing && (
                <button className="absolute -bottom-2 -right-2 bg-purple-600 text-white rounded-full p-2 hover:bg-purple-700">
                  <Camera className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="flex-1">
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="text-2xl font-bold text-gray-900 border-b-2 border-purple-600 bg-transparent focus:outline-none"
                />
              ) : (
                <h3 className="text-2xl font-bold text-gray-900">{profileData.name}</h3>
              )}
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <span>{profileData.stats.followers.toLocaleString()} followers</span>
                <span>{profileData.stats.avgViews.toLocaleString()} avg views</span>
                <span>{profileData.stats.engagementRate}% engagement</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              {isEditing ? (
                <textarea
                  value={profileData.bio}
                  onChange={(e) => handleInputChange("bio", e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              ) : (
                <p className="text-gray-600">{profileData.bio}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              {isEditing ? (
                <input
                  type="text"
                  value={profileData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              ) : (
                <p className="text-gray-600">{profileData.location}</p>
              )}
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Social Media</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(profileData.socialMedia).map(([platform, url]) => (
              <div key={platform}>
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize flex items-center">
                  {platform === "instagram" && <Instagram className="h-4 w-4 mr-2" />}
                  {platform === "youtube" && <Youtube className="h-4 w-4 mr-2" />}
                  {platform === "twitter" && <Twitter className="h-4 w-4 mr-2" />}
                  {platform === "website" && <Globe className="h-4 w-4 mr-2" />}
                  {platform}
                </label>
                {isEditing ? (
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => handleNestedInputChange("socialMedia", platform, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                ) : (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700"
                  >
                    {url}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Content Categories</h2>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => isEditing && handleCategoryToggle(category)}
                disabled={!isEditing}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  profileData.categories.includes(category)
                    ? "bg-purple-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } ${!isEditing && "cursor-default"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Pricing</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(profileData.pricing).map(([type, price]) => (
              <div key={type}>
                <label className="block text-sm font-medium text-gray-700 mb-2 capitalize">{type} ($)</label>
                {isEditing ? (
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => handleNestedInputChange("pricing", type, Number.parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  />
                ) : (
                  <p className="text-2xl font-bold text-gray-900">${price}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Portfolio</h2>
            {isEditing && (
              <button
                onClick={addPortfolioItem}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {profileData.portfolio.map((item) => (
              <div key={item.id} className="relative group">
                <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                  <img src={item.url || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
                </div>
                {isEditing && (
                  <button
                    onClick={() => removePortfolioItem(item.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
                <div className="mt-3">
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Performance Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">{profileData.stats.followers.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Total Followers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{profileData.stats.avgViews.toLocaleString()}</p>
              <p className="text-sm text-gray-600">Avg Views</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">{profileData.stats.engagementRate}%</p>
              <p className="text-sm text-gray-600">Engagement Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-orange-600">{profileData.stats.completedProjects}</p>
              <p className="text-sm text-gray-600">Completed Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatorProfile
