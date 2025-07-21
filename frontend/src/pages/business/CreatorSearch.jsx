"use client"

import { useState } from "react"
import { Search, Filter, MapPin, Users, Star, Heart, MessageSquare } from "lucide-react"

const CreatorSearch = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    platform: "",
    minFollowers: "",
    maxBudget: "",
    location: "",
    rating: "",
  })
  const [showFilters, setShowFilters] = useState(false)
  const [selectedCreator, setSelectedCreator] = useState(null)

  const [creators, setCreators] = useState([
    {
      id: 1,
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=80&width=80&text=SC",
      bio: "Fashion & lifestyle content creator passionate about sustainable fashion",
      location: "San Francisco, CA",
      categories: ["Fashion", "Lifestyle", "Beauty"],
      followers: 25600,
      avgViews: 15200,
      engagementRate: 8.5,
      rating: 4.9,
      reviewCount: 47,
      pricing: {
        post: 150,
        story: 75,
        video: 300,
        reel: 200,
      },
      platforms: ["Instagram", "TikTok", "YouTube"],
      portfolio: [
        "/placeholder.svg?height=200&width=200&text=Portfolio+1",
        "/placeholder.svg?height=200&width=200&text=Portfolio+2",
        "/placeholder.svg?height=200&width=200&text=Portfolio+3",
      ],
      completedProjects: 12,
      responseTime: "2 hours",
    },
    {
      id: 2,
      name: "Mike Johnson",
      avatar: "/placeholder.svg?height=80&width=80&text=MJ",
      bio: "Tech reviewer and gadget enthusiast creating engaging video content",
      location: "Austin, TX",
      categories: ["Tech", "Gaming", "Reviews"],
      followers: 45200,
      avgViews: 28500,
      engagementRate: 7.2,
      rating: 4.8,
      reviewCount: 32,
      pricing: {
        post: 200,
        story: 100,
        video: 500,
        reel: 250,
      },
      platforms: ["YouTube", "Instagram", "Twitter"],
      portfolio: [
        "/placeholder.svg?height=200&width=200&text=Tech+1",
        "/placeholder.svg?height=200&width=200&text=Tech+2",
        "/placeholder.svg?height=200&width=200&text=Tech+3",
      ],
      completedProjects: 18,
      responseTime: "1 hour",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=80&width=80&text=ER",
      bio: "Food blogger and recipe creator sharing delicious and healthy meals",
      location: "Miami, FL",
      categories: ["Food", "Health", "Lifestyle"],
      followers: 18900,
      avgViews: 12800,
      engagementRate: 9.1,
      rating: 4.9,
      reviewCount: 28,
      pricing: {
        post: 120,
        story: 60,
        video: 250,
        reel: 180,
      },
      platforms: ["Instagram", "TikTok", "Pinterest"],
      portfolio: [
        "/placeholder.svg?height=200&width=200&text=Food+1",
        "/placeholder.svg?height=200&width=200&text=Food+2",
        "/placeholder.svg?height=200&width=200&text=Food+3",
      ],
      completedProjects: 15,
      responseTime: "3 hours",
    },
  ])

  const categories = ["Fashion", "Tech", "Food", "Travel", "Fitness", "Beauty", "Gaming", "Music", "Art", "Education"]
  const platforms = ["Instagram", "YouTube", "TikTok", "Twitter", "Pinterest"]

  const filteredCreators = creators.filter((creator) => {
    const matchesSearch =
      creator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.bio.toLowerCase().includes(searchQuery.toLowerCase()) ||
      creator.categories.some((cat) => cat.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = !filters.category || creator.categories.includes(filters.category)
    const matchesPlatform = !filters.platform || creator.platforms.includes(filters.platform)
    const matchesFollowers = !filters.minFollowers || creator.followers >= Number.parseInt(filters.minFollowers)
    const matchesBudget = !filters.maxBudget || creator.pricing.post <= Number.parseInt(filters.maxBudget)
    const matchesLocation = !filters.location || creator.location.toLowerCase().includes(filters.location.toLowerCase())
    const matchesRating = !filters.rating || creator.rating >= Number.parseFloat(filters.rating)

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPlatform &&
      matchesFollowers &&
      matchesBudget &&
      matchesLocation &&
      matchesRating
    )
  })

  const handleSendRequest = (creatorId) => {
    // This would open a modal to send collaboration request
    console.log("Sending request to creator:", creatorId)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Find Creators</h1>
        <p className="text-gray-600 mt-2">Discover and connect with talented creators for your campaigns</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search creators by name, category, or keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
              <select
                value={filters.platform}
                onChange={(e) => setFilters({ ...filters, platform: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">All Platforms</option>
                {platforms.map((platform) => (
                  <option key={platform} value={platform}>
                    {platform}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Followers</label>
              <input
                type="number"
                placeholder="10000"
                value={filters.minFollowers}
                onChange={(e) => setFilters({ ...filters, minFollowers: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Max Budget</label>
              <input
                type="number"
                placeholder="500"
                value={filters.maxBudget}
                onChange={(e) => setFilters({ ...filters, maxBudget: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                placeholder="City, State"
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Min Rating</label>
              <select
                value={filters.rating}
                onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="">Any Rating</option>
                <option value="4.5">4.5+ Stars</option>
                <option value="4.0">4.0+ Stars</option>
                <option value="3.5">3.5+ Stars</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="mb-4 flex justify-between items-center">
        <p className="text-gray-600">{filteredCreators.length} creators found</p>
        <select className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500">
          <option>Sort by Relevance</option>
          <option>Sort by Rating</option>
          <option>Sort by Followers</option>
          <option>Sort by Price (Low to High)</option>
          <option>Sort by Price (High to Low)</option>
        </select>
      </div>

      {/* Creator Cards */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCreators.map((creator) => (
          <div key={creator.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
            <div className="p-6">
              {/* Creator Header */}
              <div className="flex items-start space-x-4 mb-4">
                <img
                  src={creator.avatar || "/placeholder.svg"}
                  alt={creator.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{creator.name}</h3>
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{creator.rating}</span>
                    <span className="text-sm text-gray-500">({creator.reviewCount})</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {creator.location}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-sm mb-4">{creator.bio}</p>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-4">
                {creator.categories.map((category) => (
                  <span
                    key={category}
                    className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-1">
                    <Users className="h-4 w-4 mr-1" />
                    Followers
                  </div>
                  <p className="font-semibold text-gray-900">{creator.followers.toLocaleString()}</p>
                </div>
                <div>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-1">
                    <Heart className="h-4 w-4 mr-1" />
                    Engagement
                  </div>
                  <p className="font-semibold text-gray-900">{creator.engagementRate}%</p>
                </div>
                <div>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-1">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Response
                  </div>
                  <p className="font-semibold text-gray-900">{creator.responseTime}</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gray-50 rounded-lg p-3 mb-4">
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Post:</span>
                    <span className="font-medium">${creator.pricing.post}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Story:</span>
                    <span className="font-medium">${creator.pricing.story}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Video:</span>
                    <span className="font-medium">${creator.pricing.video}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Reel:</span>
                    <span className="font-medium">${creator.pricing.reel}</span>
                  </div>
                </div>
              </div>

              {/* Portfolio Preview */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {creator.portfolio.slice(0, 3).map((image, index) => (
                  <img
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg"
                  />
                ))}
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <button
                  onClick={() => setSelectedCreator(creator)}
                  className="flex-1 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 font-medium"
                >
                  View Profile
                </button>
                <button
                  onClick={() => handleSendRequest(creator.id)}
                  className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-medium"
                >
                  Send Request
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredCreators.length === 0 && (
        <div className="text-center py-12">
          <Search className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No creators found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or filters</p>
        </div>
      )}

      {/* Creator Profile Modal */}
      {selectedCreator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-4">
                  <img
                    src={selectedCreator.avatar || "/placeholder.svg"}
                    alt={selectedCreator.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedCreator.name}</h2>
                    <div className="flex items-center space-x-2 mt-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{selectedCreator.rating}</span>
                      <span className="text-gray-500">({selectedCreator.reviewCount} reviews)</span>
                    </div>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {selectedCreator.location}
                    </div>
                  </div>
                </div>
                <button onClick={() => setSelectedCreator(null)} className="text-gray-400 hover:text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Bio */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-600">{selectedCreator.bio}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple-600">{selectedCreator.followers.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Followers</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-blue-600">{selectedCreator.avgViews.toLocaleString()}</p>
                  <p className="text-sm text-gray-600">Avg Views</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-green-600">{selectedCreator.engagementRate}%</p>
                  <p className="text-sm text-gray-600">Engagement</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-orange-600">{selectedCreator.completedProjects}</p>
                  <p className="text-sm text-gray-600">Projects</p>
                </div>
              </div>

              {/* Portfolio */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Portfolio</h3>
                <div className="grid grid-cols-3 gap-4">
                  {selectedCreator.portfolio.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Pricing</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {Object.entries(selectedCreator.pricing).map(([type, price]) => (
                    <div key={type} className="text-center p-4 border rounded-lg">
                      <p className="text-lg font-bold text-gray-900">${price}</p>
                      <p className="text-sm text-gray-600 capitalize">{type}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4 border-t">
                <button
                  onClick={() => handleSendRequest(selectedCreator.id)}
                  className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 font-medium"
                >
                  Send Collaboration Request
                </button>
                <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                  Save Creator
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CreatorSearch
