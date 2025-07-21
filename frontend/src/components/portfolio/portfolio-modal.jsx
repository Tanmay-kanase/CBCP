"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  X,
  Heart,
  Eye,
  ExternalLink,
  Share2,
  ChevronLeft,
  ChevronRight,
  Play,
  Download,
  Calendar,
  User,
  Tag,
} from "lucide-react";

export default function PortfolioModal({ item, isOpen, onClose }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const media = item.media || [item.thumbnail];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    // Here you would typically update the like count in your backend
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href,
      });
    } else {
      // Fallback to copying URL to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-hidden p-0">
        <div className="grid lg:grid-cols-2 h-full">
          {/* Media Section */}
          <div className="relative bg-black flex items-center justify-center">
            <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px]">
              <img
                src={media[currentMediaIndex] || "/placeholder.svg"}
                alt={`${item.title} - Image ${currentMediaIndex + 1}`}
                className="w-full h-full object-contain"
              />

              {/* Media Navigation */}
              {media.length > 1 && (
                <>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevMedia}
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextMedia}
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>

                  {/* Media Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {media.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentMediaIndex
                            ? "bg-white"
                            : "bg-white/50"
                        }`}
                        onClick={() => setCurrentMediaIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Play button for videos */}
              {item.type === "video" && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="bg-white/90 text-black hover:bg-white rounded-full p-6"
                  >
                    <Play className="h-8 w-8 fill-current" />
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col h-full">
            <DialogHeader className="p-6 pb-4 border-b">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <DialogTitle className="text-2xl font-bold">
                    {item.title}
                  </DialogTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.year}</span>
                    </div>
                    {item.client && (
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{item.client}</span>
                      </div>
                    )}
                  </div>
                </div>
                <Button size="sm" variant="ghost" onClick={onClose}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className="font-semibold mb-2">About This Project</h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Category */}
              <div>
                <h3 className="font-semibold mb-2">Category</h3>
                <Badge className="bg-purple-100 text-purple-700">
                  {item.category}
                </Badge>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <Tag className="h-4 w-4 mr-1" />
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              {item.type === "case-study" && (
                <div>
                  <h3 className="font-semibold mb-2">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <span className="font-medium text-gray-700">
                          Duration:
                        </span>
                        <p className="text-gray-600">3 months</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Team Size:
                        </span>
                        <p className="text-gray-600">Solo project</p>
                      </div>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">
                        Challenge:
                      </span>
                      <p className="text-gray-600">
                        The client needed a complete brand overhaul to appeal to
                        a younger demographic while maintaining trust and
                        credibility.
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">
                        Solution:
                      </span>
                      <p className="text-gray-600">
                        Created a modern, approachable brand identity with
                        vibrant colors and clean typography that resonated with
                        the target audience.
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">
                        Results:
                      </span>
                      <p className="text-gray-600">
                        45% increase in brand recognition and 30% improvement in
                        customer engagement within 6 months of launch.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action Bar */}
            <div className="border-t p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{item.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart
                      className={`h-4 w-4 ${
                        isLiked ? "fill-red-500 text-red-500" : ""
                      }`}
                    />
                    <span>{item.likes + (isLiked ? 1 : 0)} likes</span>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button
                  size="sm"
                  variant={isLiked ? "default" : "outline"}
                  onClick={handleLike}
                  className={isLiked ? "bg-red-500 hover:bg-red-600" : ""}
                >
                  <Heart
                    className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`}
                  />
                  {isLiked ? "Liked" : "Like"}
                </Button>

                <Button size="sm" variant="outline" onClick={handleShare}>
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>

                {item.externalLink && (
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={item.externalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View Live
                    </a>
                  </Button>
                )}

                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-1" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
