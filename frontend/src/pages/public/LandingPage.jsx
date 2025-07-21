import { Link } from "react-router-dom";
import { Users, Building, Shield, ArrowRight, CheckCircle } from "lucide-react";

const LandingPage = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "For Creators",
      description:
        "Showcase your talent, connect with brands, and monetize your content",
      benefits: [
        "Build your portfolio",
        "Set your rates",
        "Secure payments",
        "No direct contact hassle",
      ],
    },
    {
      icon: <Building className="h-8 w-8 text-blue-600" />,
      title: "For Businesses",
      description:
        "Find the perfect creators for your brand campaigns and promotions",
      benefits: [
        "Filter by niche & budget",
        "View creator portfolios",
        "Secure collaboration",
        "Track campaign success",
      ],
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "Secure Platform",
      description:
        "All communications and payments handled securely through our platform",
      benefits: [
        "Escrow payments",
        "Admin oversight",
        "Dispute resolution",
        "Privacy protection",
      ],
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Creators" },
    { number: "2K+", label: "Businesses" },
    { number: "$2M+", label: "Creator Earnings" },
    { number: "50K+", label: "Successful Campaigns" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Where
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Creators
              </span>
              <br />
              Meet
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                Businesses
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The ultimate platform connecting talented creators with
              forward-thinking businesses. Streamline collaborations, manage
              projects, and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center justify-center"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/login"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for Both Sides of Collaboration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a creator looking for opportunities or a business
              seeking talent, we've got everything you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to start your collaboration journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Creators */}
            <div>
              <h3 className="text-2xl font-bold text-purple-600 mb-6 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                For Creators
              </h3>
              <div className="space-y-6">
                {[
                  "Create your profile with portfolio and pricing",
                  "Get discovered by businesses looking for your skills",
                  "Receive collaboration requests in your dashboard",
                  "Complete projects and get paid securely",
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* For Businesses */}
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center">
                <Building className="h-6 w-6 mr-2" />
                For Businesses
              </h3>
              <div className="space-y-6">
                {[
                  "Search and filter creators by niche, budget, and location",
                  "View detailed creator profiles and portfolios",
                  "Send collaboration requests with project details",
                  "Track progress and approve completed work",
                ].map((step, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join thousands of creators and businesses who are already building
            amazing things together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              Join as Creator
            </Link>
            <Link
              to="/signup"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              Join as Business
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CC</span>
                </div>
                <span className="text-xl font-bold">CreatorConnect</span>
              </div>
              <p className="text-gray-400">
                Connecting talented creators with forward-thinking businesses.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Creators</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/signup" className="hover:text-white">
                    Join as Creator
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Success Stories
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Businesses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="/signup" className="hover:text-white">
                    Join as Business
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link to="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CreatorConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
