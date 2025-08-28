"use client";

import { Star } from "lucide-react";

const stats = [
  { number: "500+", label: "Projects Delivered" },
  { number: "99.8%", label: "Uptime Guarantee" },
  { number: "24/7", label: "Support Available" },
  { number: "50+", label: "Enterprise Clients" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background with Hero Image */}
      <div className="absolute inset-0">
        {/* Hero software screenshot on the right side */}
        <div className="absolute inset-0">
          <div
            className="absolute right-0 top-0 w-3/5 h-full bg-cover bg-[-600px] md:bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/hero.png')`,
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)",
            }}
          ></div>
        </div>

        {/* Gradient overlay that creates smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 via-slate-900/80 to-slate-900/40"></div>

        {/* Additional subtle pattern overlay */}
        <div className="absolute inset-0 opacity-3">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
      </div>

      {/* Left-Aligned Hero Content */}
      <div className="relative z-10 text-white w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
        <div className="max-w-9xl mx-auto">
          <div className="max-w-4xl">
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
                <Star className="w-4 h-4 text-orange-400" fill="currentColor" />
                <span className="ml-2 text-xs sm:text-sm font-medium">
                  Trusted by 500+ Construction Companies
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-[0.9] tracking-tight">
              Software built for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                builders.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-8 sm:mb-12 leading-relaxed">
              Enterprise-grade construction management software that scales with
              your business. From project planning to completion, we've got you
              covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto sm:min-w-[200px]">
                Start Building
              </button>
              <button className="cursor-pointer border-2 border-white/30 hover:border-white/60 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-white/10 w-full sm:w-auto sm:min-w-[200px]">
                See Our Projects
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-400 mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
