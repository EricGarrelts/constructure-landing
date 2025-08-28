"use client";

import { Mail, Briefcase, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Company Info */}
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
                with your business. Built by construction professionals, for
                construction professionals.
              </p>
              <div className="flex space-x-6">
                <div className="w-12 h-12 bg-blue-900 hover:bg-blue-800 flex items-center justify-center transition-colors cursor-pointer">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-900 hover:bg-blue-800 flex items-center justify-center transition-colors cursor-pointer">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div className="w-12 h-12 bg-blue-900 hover:bg-blue-800 flex items-center justify-center transition-colors cursor-pointer">
                  <Twitter className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-orange-400">
                Solutions
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Project Management
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Workflow Automation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Software Extensions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Custom Development
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
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
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Left-Aligned CTA Section in Footer */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/50 to-orange-900/50 border border-blue-800/30">
            <div className="max-w-4xl">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Join the hundreds of construction companies already transforming
                their operations with Constructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition-all duration-200 hover:shadow-lg">
                  Start Free Trial
                </button>
                <button className="cursor-pointer border border-white/30 hover:border-white text-white px-8 py-3 font-semibold transition-all duration-200 hover:bg-white/10">
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-9xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>&copy; 2025 Constructure. All rights reserved.</p>
          </div>
          <div className="flex space-x-8 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
