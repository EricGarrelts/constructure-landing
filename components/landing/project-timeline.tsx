"use client";

import { Clock, Shield, Rocket } from "lucide-react";

export default function ProjectTimeline() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-9xl mx-auto">
        <div className="mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-900 font-semibold mb-6">
            <Clock className="w-5 h-5 mr-2 text-orange-900" />
            Lightning Fast Delivery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
            From Idea to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-blue-900">
              MVP in Record Time
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
            Our streamlined development process gets your custom construction
            software from concept to deployment faster than traditional
            development cycles.
          </p>
        </div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-blue-600 to-orange-500 transform -translate-y-1/2 hidden lg:block"></div>

          {/* Timeline Steps */}
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6 items-stretch">
            {/* Brainstorming */}
            <div className="group relative">
              <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 transform hover:-translate-y-2 lg:border-l-0 lg:border-t-4 h-96 flex flex-col">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 text-orange-500 mb-8 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-full h-full"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    Brainstorming
                  </h3>
                  <div className="flex-grow flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Deep dive into your construction workflows, identify pain
                      points, and design the perfect software solution for your
                      needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Development */}
            <div className="group relative">
              <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 transform hover:-translate-y-2 lg:border-l-0 lg:border-t-4 h-96 flex flex-col">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-full h-full"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Development
                  </h3>
                  <div className="flex-grow flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Rapid prototyping and agile development cycles to build
                      your MVP with core features that deliver immediate value.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Testing */}
            <div className="group relative">
              <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-500 transform hover:-translate-y-2 lg:border-l-0 lg:border-t-4 h-96 flex flex-col">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 text-orange-500 mb-8 group-hover:scale-110 transition-transform">
                    <Shield className="w-full h-full" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    Testing
                  </h3>
                  <div className="flex-grow flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Comprehensive testing with your team to ensure the
                      software works perfectly with your existing construction
                      processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Adoption */}
            <div className="group relative">
              <div className="bg-white p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-600 transform hover:-translate-y-2 lg:border-l-0 lg:border-t-4 h-96 flex flex-col">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                    <Rocket className="w-full h-full" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    Adoption
                  </h3>
                  <div className="flex-grow flex items-center">
                    <p className="text-gray-600 leading-relaxed">
                      Full deployment with training and ongoing support to
                      ensure seamless integration into your daily operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-800 p-12 text-white mt-16">
          <div className="max-w-4xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Build Your Custom Solution?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl">
              From mobile integrations to specialized automation tools, we
              create software that fits your exact workflow requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                Start Your Project
              </button>
              <button className="cursor-pointer border-2 border-white/30 hover:border-white text-white px-8 py-4 font-semibold transition-all duration-200 hover:bg-white/10">
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
