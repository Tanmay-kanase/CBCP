import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  Star,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PortfolioGrid from "../../components/portfolio/portfolio-grid";
import PortfolioStats from "../../components/portfolio/portfolio-stats";

export default function CreatorPortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Creator Header */}
      <section className="py-12 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold">
                    SC
                  </div>

                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h1 className="text-3xl font-bold">Sarah Chen</h1>
                        <Badge className="bg-green-100 text-green-700">
                          ✓ Verified Creator
                        </Badge>
                      </div>
                      <p className="text-xl text-gray-600 mb-3">
                        Brand Designer & Visual Storyteller
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        I help businesses tell their story through compelling
                        visual design. Specializing in brand identity, web
                        design, and creative campaigns that connect with
                        audiences and drive results.
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>San Francisco, CA</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>Member since 2022</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>4.9 (47 reviews)</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {[
                        "Brand Identity",
                        "Web Design",
                        "Logo Design",
                        "UI/UX",
                        "Print Design",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3 w-full md:w-auto">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Contact Sarah
                    </Button>
                    <Button variant="outline" className="bg-transparent">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Website
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <PortfolioStats />
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <PortfolioGrid creatorId="sarah-chen" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
