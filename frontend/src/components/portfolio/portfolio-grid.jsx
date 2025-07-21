"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";
import PortfolioShowcase from "./portfolio-showcase";

export default function PortfolioGrid({
  creatorId,
  showFilters = true,
  showSearch = true,
  layout = "grid",
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("recent");
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      {(showSearch || showFilters) && (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {showSearch && (
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          )}

          {showFilters && (
            <div className="flex items-center space-x-3">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="liked">Most Liked</SelectItem>
                  <SelectItem value="viewed">Most Viewed</SelectItem>
                  <SelectItem value="alphabetical">A-Z</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              >
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Advanced Filters */}
      {showAdvancedFilters && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 p-4 bg-gray-50 rounded-lg">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Project Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="image">Images</SelectItem>
              <SelectItem value="video">Videos</SelectItem>
              <SelectItem value="document">Documents</SelectItem>
              <SelectItem value="case-study">Case Studies</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Years</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="older">Older</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Client Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Clients</SelectItem>
              <SelectItem value="startup">Startups</SelectItem>
              <SelectItem value="enterprise">Enterprise</SelectItem>
              <SelectItem value="agency">Agencies</SelectItem>
              <SelectItem value="personal">Personal</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 bg-transparent"
            >
              Reset
            </Button>
            <Button size="sm" className="flex-1">
              Apply
            </Button>
          </div>
        </div>
      )}

      {/* Portfolio Showcase */}
      <PortfolioShowcase layout={layout} />
    </div>
  );
}
