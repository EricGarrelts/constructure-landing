"use client";

import { Link, Check } from "lucide-react";

export default function Integrations() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-9xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 font-semibold mb-6">
            <Link className="w-5 h-5 mr-2 text-blue-900" />
            Seamless Integrations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
            Works with Your
            <span className="block text-blue-900">Existing Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
            Constructure integrates seamlessly with the industry-leading
            software you already use, ensuring a smooth workflow without
            disrupting your established processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* First Row */}
          {/* PowerFab Integration */}
          <div className="group bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            {/* Header with logo and title */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-blue-900 flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-800 transition-colors">
                PF
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                PowerFab Integration
              </h3>
            </div>

            {/* Content spanning full width */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Direct integration with PowerFab for seamless steel fabrication
              workflow management. Sync project data, drawings, and production
              schedules automatically.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Automated data synchronization
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Real-time production tracking
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Streamlined reporting
              </li>
            </ul>
            <button className="cursor-pointer text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Tekla Structures Integration */}
          <div className="group bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            {/* Header with logo and title */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-red-700 transition-colors">
                TS
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                Tekla Structures Integration
              </h3>
            </div>

            {/* Content spanning full width */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Powerful integration with Tekla Structures for comprehensive 3D
              modeling and structural design workflow. Bridge the gap between
              design and construction management.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                3D model data import/export
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Design change notifications
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Material quantity sync
              </li>
            </ul>
            <button className="cursor-pointer text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Autodesk AutoCAD Integration */}
          <div className="group bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            {/* Header with logo and title */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white font-bold text-xl group-hover:bg-red-600 transition-colors">
                AC
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                AutoCAD Integration
              </h3>
            </div>

            {/* Content spanning full width */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Seamless integration with AutoCAD for comprehensive 2D and 3D
              design workflows. Import drawings, sync design changes, and
              maintain version control across projects.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Drawing import/export
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Version control sync
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Automated markup tracking
              </li>
            </ul>
            <button className="cursor-pointer text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Procore Integration */}
          <div className="group bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
            {/* Header with logo and title */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-orange-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-orange-700 transition-colors">
                PC
              </div>
              <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                Procore Integration
              </h3>
            </div>

            {/* Content spanning full width */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Direct integration with Procore construction management platform.
              Sync project data, schedules, and documentation for unified
              project oversight.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Project data synchronization
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Schedule integration
              </li>
              <li className="flex items-center text-sm text-gray-700">
                <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                Document management sync
              </li>
            </ul>
            <button className="cursor-pointer text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center">
              Learn More
              <svg
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Integration Benefits CTA */}
        <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-12 border-l-4 border-blue-900">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Integrate Your Workflow?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Connect Constructure with your existing tools and create a unified
              construction management ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                View All Integrations
              </button>
              <button className="cursor-pointer border-2 border-blue-900 hover:border-blue-800 text-blue-900 hover:text-blue-800 px-8 py-4 font-semibold transition-all duration-200 hover:bg-blue-50">
                Request Custom Integration
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
