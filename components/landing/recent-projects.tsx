"use client";

import { Rocket, ArrowUpRight } from "lucide-react";

export default function RecentProjects() {
  return (
    <section className="pt-8 pb-12 px-6 bg-white overflow-hidden">
      <div className="max-w-9xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-100 to-blue-100 text-blue-900 font-semibold mb-6">
            <Rocket className="w-5 h-5 mr-2 text-orange-600" />
            Recent Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
            Real Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-900">
              Real Problems
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
            See how we've transformed construction workflows with custom
            software solutions tailored to specific industry needs.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {/* FabGo Project */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 transform group-hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-orange-500 flex items-center justify-center text-white font-bold text-xl mr-4">
                  FG
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    FabGo
                  </h3>
                  <p className="text-sm text-orange-600 font-semibold">
                    Mobile Integration
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A mobile integration of PowerFab which brings the power of
                PowerFab Office and Go to your mobile phone, enabling field
                teams to stay connected with real-time project data.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Live Project
                </div>
                <ArrowUpRight className="w-5 h-5 text-orange-500 group-hover:text-orange-600 transition-colors" />
              </div>
            </div>
          </div>

          {/* Proposal & Bid Management */}
          <div className="group relative lg:mt-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 transform -rotate-2 group-hover:-rotate-4 transition-transform duration-300"></div>
            <div className="relative bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 transform group-hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                  PB
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    Proposal & Bid Management
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold">
                    Contract Tracking
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive software to track proposals for projects including
                change orders and proposal documents. Also tracks contracts and
                which proposals made it to contract with full document
                management.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Live Project
                </div>
                <ArrowUpRight className="w-5 h-5 text-blue-600 group-hover:text-blue-700 transition-colors" />
              </div>
            </div>
          </div>

          {/* AutoStair */}
          <div className="group relative lg:mt-4">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-blue-500/20 transform rotate-1 group-hover:rotate-3 transition-transform duration-300"></div>
            <div className="relative bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-gradient-to-b border-orange-500 transform group-hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl mr-4">
                  AS
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    AutoStair
                  </h3>
                  <p className="text-sm text-orange-600 font-semibold">
                    Tekla Automation
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A Tekla Structures application that automatically creates
                stairs, specifically for multi-family apartments. Fully
                configurable with component-based architecture and streamlined
                UI.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Live Project
                </div>
                <ArrowUpRight className="w-5 h-5 text-orange-500 group-hover:text-orange-600 transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
