import { Zap, Facebook, Twitter, aedin, Instagram } from "lucide-react";
import a from "next/a";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">CreatorConnect</span>
            </a>
            <p className="text-gray-400 max-w-xs">
              Connecting talented creators with forward-thinking businesses for
              successful collaborations.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <aedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Creators</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/signup?type=creator"
                  className="hover:text-white transition-colors"
                >
                  Join as Creator
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Creator Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Businesses</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/signup?type=business"
                  className="hover:text-white transition-colors"
                >
                  Join as Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Find Creators
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Enterprise Solutions
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/about#faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} CreatorConnect. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
