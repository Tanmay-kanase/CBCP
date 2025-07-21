import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Heart, Eye, Star, Award } from "lucide-react";

export default function PortfolioStats({
  totalProjects = 24,
  totalLikes = 1847,
  totalViews = 23450,
  averageRating = 4.9,
  completedProjects = 22,
  repeatClients = 8,
  topCategories = [
    { name: "Branding", count: 8 },
    { name: "Web Design", count: 6 },
    { name: "Photography", count: 5 },
  ],
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Total Projects
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-purple-600">
            {totalProjects}
          </div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>+3 this month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-red-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
            <Heart className="h-4 w-4 mr-2" />
            Total Likes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-red-500">
            {totalLikes.toLocaleString()}
          </div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>+127 this week</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
            <Eye className="h-4 w-4 mr-2" />
            Total Views
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-500">
            {totalViews.toLocaleString()}
          </div>
          <div className="flex items-center text-sm text-green-600 mt-1">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>+1.2k this week</span>
          </div>
        </CardContent>
      </Card>

      <Card className="border-l-4 border-l-yellow-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
            <Star className="h-4 w-4 mr-2" />
            Average Rating
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-yellow-500">
            {averageRating}
          </div>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-3 w-3 ${
                    i < Math.floor(averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-1">({completedProjects} reviews)</span>
          </div>
        </CardContent>
      </Card>

      {/* Additional Stats Row */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">Performance Highlights</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {completedProjects}
              </div>
              <div className="text-sm text-green-700">Projects Completed</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {repeatClients}
              </div>
              <div className="text-sm text-blue-700">Repeat Clients</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle className="text-lg">Top Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {topCategories.map((category, index) => (
              <div
                key={category.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-2">
                  <Badge
                    variant="secondary"
                    className="w-6 h-6 rounded-full p-0 flex items-center justify-center text-xs"
                  >
                    {index + 1}
                  </Badge>
                  <span className="font-medium">{category.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{
                        width: `${(category.count / totalProjects) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-gray-600 w-8">
                    {category.count}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
