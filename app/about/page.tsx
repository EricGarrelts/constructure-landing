"use client";

import {
  Building2,
  Users,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Rocket,
  Shield,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 px-6 py-4 shadow-sm">
        <div className="max-w-9xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 cursor-pointer">
            <img src="/logo.svg" alt="Constructure Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight">
              Constructure
            </h1>
          </a>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/#solutions"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
              >
                Solutions
              </a>
              <a
                href="/#industries"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
              >
                Industries
              </a>
              <a href="/about" className="text-blue-900 font-semibold">
                About
              </a>
            </div>
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-semibold text-sm transition-all duration-200 hover:shadow-lg">
              Start Building
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-9xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Building2 className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-sm font-medium">About Constructure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Construction Software
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              We're a dedicated team of construction professionals and software
              engineers passionate about transforming how the construction
              industry operates through innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-9xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 font-semibold mb-6">
                <Rocket className="w-5 h-5 mr-2" />
                Our Story
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Born from Real Construction Challenges
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Constructure was founded by industry veterans who experienced
                firsthand the inefficiencies and pain points of traditional
                construction management. After years of working with outdated
                systems and manual processes, we decided to build the solution
                we wished we had.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="flex items-center text-orange-600">
                <span className="font-semibold mr-2">Est. 2024</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 border-l-4 border-orange-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To empower construction companies with intelligent software
                solutions that streamline operations, reduce waste, and
                accelerate project delivery.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">
                    Industry-first automation tools
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">
                    Real-time project visibility
                  </span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-orange-500 mr-3" />
                  <span className="text-gray-700">
                    Seamless team collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-9xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-900 font-semibold mb-6">
              <Target className="w-5 h-5 mr-2" />
              Our Values
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-l-4 border-blue-900 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-900 text-white flex items-center justify-center mb-6">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Reliability
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build software that construction professionals can depend on,
                with 99.8% uptime and enterprise-grade security measures.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-orange-500 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-white p-8 border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Continuously pushing the boundaries of what's possible in
                construction technology through cutting-edge research and
                development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-9xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 font-semibold mb-6">
              <Users className="w-5 h-5 mr-2" />
              Our Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meet the Builders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              A diverse team of construction industry veterans, software
              engineers, and product designers working together to revolutionize
              construction management.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-900 to-blue-700 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                JD
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">John Doe</h3>
              <p className="text-orange-600 font-semibold mb-3">
                CEO & Co-Founder
              </p>
              <p className="text-gray-600 text-sm">
                20+ years in construction management, former project director at
                major commercial construction firm.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                JS
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Jane Smith
              </h3>
              <p className="text-orange-600 font-semibold mb-3">
                CTO & Co-Founder
              </p>
              <p className="text-gray-600 text-sm">
                Former senior engineer at leading tech companies, specializing
                in enterprise software architecture and scalable systems.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                MB
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Mike Brown
              </h3>
              <p className="text-orange-600 font-semibold mb-3">
                Head of Product
              </p>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-slate-800 p-12 text-white">
            <div className="max-w-4xl">
              <h3 className="text-3xl font-bold mb-4">Join Our Growing Team</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                We're always looking for talented individuals who share our
                passion for transforming the construction industry through
                technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold transition-all duration-200 hover:shadow-lg">
                  View Open Positions
                </button>
                <button className="cursor-pointer border-2 border-white/30 hover:border-white text-white px-8 py-4 font-semibold transition-all duration-200 hover:bg-white/10">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-9xl mx-auto">
          <div className="mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-900 font-semibold mb-6">
              <Award className="w-5 h-5 mr-2" />
              By the Numbers
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Impact in Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-medium">
                Projects Delivered
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                50+
              </div>
              <div className="text-gray-600 font-medium">
                Enterprise Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2">
                99.8%
              </div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-9xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Construction Operations?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mb-12">
            Join hundreds of construction companies already using Constructure
            to streamline their operations and accelerate project delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:shadow-lg">
              Start Building Today
            </button>
            <button className="cursor-pointer border-2 border-blue-900 hover:border-blue-800 text-blue-900 hover:text-blue-800 px-8 py-4 font-semibold text-lg transition-all duration-200 hover:bg-blue-50">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-16 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="/logo.svg"
                  alt="Constructure Logo"
                  className="w-10 h-10"
                />
                <h3 className="text-3xl font-bold text-orange-400">
                  Constructure
                </h3>
              </div>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                Enterprise-grade construction management software that scales
                with your business.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-400">
                Solutions
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Project Management
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Workflow Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Software Extensions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-400">
                Company
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                <p>&copy; 2025 Constructure. All rights reserved.</p>
              </div>
              <div className="flex space-x-8 text-sm">
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
