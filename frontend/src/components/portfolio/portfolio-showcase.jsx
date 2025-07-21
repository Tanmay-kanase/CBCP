"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Heart,
  Eye,
  ExternalLink,
  Play,
  FileText,
  ImageIcon,
  Video,
  Palette,
  Camera,
  PenTool,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";
import PortfolioModal from "./portfolio-modal";

const mockPortfolioItems = [
  {
    id: "1",
    title: "Brand Identity for TechFlow",
    description:
      "Complete brand identity design including logo, color palette, and brand guidelines for a fintech startup.",
    category: "Branding",
    type: "image",
    thumbnail:
      "/placeholder.svg?height=400&width=600&text=TechFlow+Brand+Identity",
    media: [
      "/placeholder.svg?height=800&width=1200&text=Logo+Design",
      "/placeholder.svg?height=800&width=1200&text=Brand+Guidelines",
      "/placeholder.svg?height=800&width=1200&text=Business+Cards",
    ],
    tags: ["Logo Design", "Brand Identity", "Fintech", "Startup"],
    likes: 124,
    views: 2340,
    client: "TechFlow Inc.",
    year: 2024,
    featured: true,
    externalLink: "https://techflow.com",
  },
  {
    id: "2",
    title: "Social Media Campaign - EcoLife",
    description:
      "Instagram and TikTok content creation for sustainable lifestyle brand, resulting in 300% engagement increase.",
    category: "Social Media",
    type: "video",
    thumbnail: "/placeholder.svg?height=400&width=600&text=EcoLife+Campaign",
    media: [
      "/placeholder.svg?height=800&width=1200&text=Instagram+Posts",
      "/placeholder.svg?height=800&width=1200&text=TikTok+Videos",
      "/placeholder.svg?height=800&width=1200&text=Story+Templates",
    ],
    tags: [
      "Social Media",
      "Content Creation",
      "Sustainability",
      "Instagram",
      "TikTok",
    ],
    likes: 89,
    views: 1560,
    client: "EcoLife Brand",
    year: 2024,
    featured: true,
  },
  {
    id: "3",
    title: "Product Photography - Luxe Watches",
    description:
      "High-end product photography for luxury watch collection, featuring dramatic lighting and premium styling.",
    category: "Photography",
    type: "image",
    thumbnail:
      "/placeholder.svg?height=400&width=600&text=Luxury+Watch+Photography",
    media: [
      "/placeholder.svg?height=800&width=1200&text=Watch+Hero+Shot",
      "/placeholder.svg?height=800&width=1200&text=Detail+Shots",
      "/placeholder.svg?height=800&width=1200&text=Lifestyle+Photos",
    ],
    tags: ["Product Photography", "Luxury", "Watches", "Commercial"],
    likes: 156,
    views: 2890,
    client: "Luxe Timepieces",
    year: 2023,
    featured: false,
  },
  {
    id: "4",
    title: "Website Redesign Case Study",
    description:
      "Complete UX/UI redesign for e-commerce platform, improving conversion rates by 45% and user satisfaction.",
    category: "Web Design",
    type: "case-study",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Website+Redesign",
    media: [
      "/placeholder.svg?height=800&width=1200&text=Before+After",
      "/placeholder.svg?height=800&width=1200&text=User+Journey",
      "/placeholder.svg?height=800&width=1200&text=Design+System",
    ],
    tags: [
      "UX/UI Design",
      "E-commerce",
      "Conversion Optimization",
      "Web Design",
    ],
    likes: 203,
    views: 3450,
    client: "ShopEasy",
    year: 2023,
    featured: true,
  },
  {
    id: "5",
    title: "Content Strategy Document",
    description:
      "Comprehensive content strategy and editorial calendar for B2B SaaS company, including SEO optimization.",
    category: "Content Strategy",
    type: "document",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Content+Strategy",
    tags: ["Content Strategy", "SEO", "B2B", "SaaS", "Editorial Calendar"],
    likes: 67,
    views: 890,
    client: "DataSync Pro",
    year: 2024,
    featured: false,
  },
  {
    id: "6",
    title: "Animated Logo Collection",
    description:
      "Series of animated logos and motion graphics for various clients, showcasing versatility in animation.",
    category: "Motion Graphics",
    type: "video",
    thumbnail: "/placeholder.svg?height=400&width=600&text=Animated+Logos",
    media: [
      "/placeholder.svg?height=800&width=1200&text=Logo+Animation+1",
      "/placeholder.svg?height=800&width=1200&text=Logo+Animation+2",
      "/placeholder.svg?height=800&width=1200&text=Logo+Animation+3",
    ],
    tags: ["Motion Graphics", "Logo Animation", "After Effects", "Branding"],
    likes: 178,
    views: 2670,
    year: 2023,
    featured: false,
  },
];

export default function PortfolioShowcase({
  items = mockPortfolioItems,
  creatorName = "Sarah Chen",
  showStats = true,
  layout = "grid",
}) {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewLayout, setViewLayout] = useState(layout);

  const categories = [
    "all",
    ...Array.from(new Set(items.map((item) => item.category))),
  ];
  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const featuredItems = items.filter((item) => item.featured);

  const getTypeIcon = (type) => {
    switch (type) {
      case "image":
        return <ImageIcon className="h-4 w-4" />;
      case "video":
        return <Video className="h-4 w-4" />;
      case "document":
        return <FileText className="h-4 w-4" />;
      case "case-study":
        return <PenTool className="h-4 w-4" />;
      default:
        return <ImageIcon className="h-4 w-4" />;
    }
  };

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "branding":
        return <Palette className="h-4 w-4" />;
      case "photography":
        return <Camera className="h-4 w-4" />;
      case "social media":
        return <Heart className="h-4 w-4" />;
      case "web design":
        return <PenTool className="h-4 w-4" />;
      default:
        return <ImageIcon className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-8">
      {/* Portfolio Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Portfolio</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore {creatorName}'s creative work and see how they bring brands to
          life through innovative design and strategic thinking.
        </p>

        {showStats && (
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <ImageIcon className="h-4 w-4" />
              <span>{items.length} Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>
                {items.reduce((sum, item) => sum + item.likes, 0)} Likes
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>
                {items
                  .reduce((sum, item) => sum + item.views, 0)
                  .toLocaleString()}{" "}
                Views
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Featured Work */}
      {featuredItems.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <Badge className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700">
              ⭐ Featured Work
            </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredItems.slice(0, 2).map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Type indicator */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-gray-700">
                      {getTypeIcon(item.type)}
                      <span className="ml-1 capitalize">{item.type}</span>
                    </Badge>
                  </div>

                  {/* Play button for videos */}
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="h-8 w-8 text-purple-600 fill-current" />
                      </div>
                    </div>
                  )}

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 right-4 flex space-x-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-1 text-sm">
                      <Heart className="h-4 w-4" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-sm">
                      <Eye className="h-4 w-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold text-lg group-hover:text-purple-600 transition-colors">
                        {item.title}
                      </h3>
                      {item.externalLink && (
                        <Button
                          size="sm"
                          variant="ghost"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    <p className="text-gray-600 text-sm line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getCategoryIcon(item.category)}
                        <span className="text-sm text-gray-500">
                          {item.category}
                        </span>
                      </div>
                      {item.client && (
                        <span className="text-sm text-gray-500">
                          {item.client}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {item.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{item.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Portfolio Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        {/* Category Filter */}
        <Tabs
          value={selectedCategory}
          onValueChange={setSelectedCategory}
          className="w-full sm:w-auto"
        >
          <TabsList className="grid grid-cols-3 sm:flex sm:grid-cols-none w-full sm:w-auto">
            {categories.slice(0, 6).map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize text-xs sm:text-sm"
              >
                {category === "all" ? (
                  <>
                    <Filter className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                    All
                  </>
                ) : (
                  <>
                    {getCategoryIcon(category)}
                    <span className="ml-1 hidden sm:inline">{category}</span>
                  </>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Layout Toggle */}
        <div className="flex items-center space-x-2">
          <Button
            size="sm"
            variant={viewLayout === "grid" ? "default" : "outline"}
            onClick={() => setViewLayout("grid")}
            className="p-2"
          >
            <Grid3X3 className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            variant={viewLayout === "list" ? "default" : "outline"}
            onClick={() => setViewLayout("list")}
            className="p-2"
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div
        className={`
        ${
          viewLayout === "grid"
            ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "space-y-6"
        }
      `}
      >
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className={`
              group cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden
              ${viewLayout === "list" ? "flex flex-col sm:flex-row" : ""}
            `}
            onClick={() => setSelectedItem(item)}
          >
            <div
              className={`
              relative overflow-hidden
              ${
                viewLayout === "list"
                  ? "aspect-[4/3] sm:aspect-square sm:w-48 flex-shrink-0"
                  : "aspect-[4/3]"
              }
            `}
            >
              <img
                src={item.thumbnail || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Type indicator */}
              <div className="absolute top-3 left-3">
                <Badge className="bg-white/90 text-gray-700 text-xs">
                  {getTypeIcon(item.type)}
                  <span className="ml-1 capitalize hidden sm:inline">
                    {item.type}
                  </span>
                </Badge>
              </div>

              {/* Play button for videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3">
                    <Play className="h-6 w-6 text-purple-600 fill-current" />
                  </div>
                </div>
              )}
            </div>

            <CardContent
              className={`
              p-4 flex-1
              ${viewLayout === "list" ? "flex flex-col justify-between" : ""}
            `}
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold group-hover:text-purple-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <span className="text-xs text-gray-500 ml-2">
                    {item.year}
                  </span>
                </div>

                <p className="text-gray-600 text-sm line-clamp-2">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    {getCategoryIcon(item.category)}
                    <span className="text-gray-500">{item.category}</span>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {item.tags
                    .slice(0, viewLayout === "list" ? 4 : 2)
                    .map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  {item.tags.length > (viewLayout === "list" ? 4 : 2) && (
                    <Badge variant="secondary" className="text-xs">
                      +{item.tags.length - (viewLayout === "list" ? 4 : 2)}
                    </Badge>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More Button */}
      {filteredItems.length > 9 && (
        <div className="text-center">
          <Button variant="outline" className="bg-transparent">
            Load More Projects
          </Button>
        </div>
      )}

      {/* Portfolio Modal */}
      {selectedItem && (
        <PortfolioModal
          item={selectedItem}
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
}
