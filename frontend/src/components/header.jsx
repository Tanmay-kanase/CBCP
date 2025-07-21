import { Button } from "@/components/ui/button";
import { Zap, Menu } from "lucide-react";
import a from "next/a";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <a href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">CreatorConnect</span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="/about"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            How It Works
          </a>
          <a
            href="/about#faq"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            FAQ
          </a>
          <a
            href="/contact"
            className="text-sm font-medium hover:text-purple-600 transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <a href="/login">
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
          </a>
          <a href="/signup">
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Get Started
            </Button>
          </a>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
}
