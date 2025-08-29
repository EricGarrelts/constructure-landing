"use client";

import { useState, useEffect } from "react";
import { Gift, Clock, ChevronDown, Settings, Code, Plug } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface NavbarProps {
  typedText: string;
  showCursor: boolean;
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  isRaffleModalOpen: boolean;
  setIsRaffleModalOpen: (open: boolean) => void;
  isHydrated?: boolean;
}

export default function Navbar({
  typedText,
  showCursor,
  timeLeft,
  isRaffleModalOpen,
  setIsRaffleModalOpen,
  isHydrated = true,
}: NavbarProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null);

  const solutions = [
    {
      id: 'ready-to-deploy',
      name: 'Ready to deploy',
      icon: Settings,
      description: 'Pre-existing software that can be curated to fit your business needs. Quick deployment solutions that get you operational fast.'
    },
    {
      id: 'custom-software',
      name: 'Custom software',
      icon: Code,
      description: 'Tailored software solutions built from the ground up to match your exact requirements and business processes.'
    },
    {
      id: 'integrations',
      name: 'Integrations',
      icon: Plug,
      description: 'Integrate with current systems to automate workflow, streamline operations, and enhance productivity across your organization.'
    }
  ];

  return (
    <nav className="sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="bg-white border-b border-gray-100 px-6 py-4 shadow-sm">
        <div className="max-w-9xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 cursor-pointer">
            <img src="/logo.svg" alt="Constructure Logo" className="w-8 h-8" />
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight relative">
              {/* Invisible text to reserve space */}
              <span className="invisible">Constructure</span>
              {/* Typed text overlay */}
              <span className="absolute inset-0">
                {typedText}
                {showCursor && <span className="text-orange-500">|</span>}
              </span>
            </h1>
          </a>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              {/* Solutions Dropdown */}
              <div className="relative">
                <button
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-900 transition-colors font-medium"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Hover Bridge - small area directly under button */}
                <div
                  className="absolute top-full left-0 w-24 h-2 z-50"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                ></div>

                {/* Dropdown Menu */}
                <div
                  className="absolute top-full left-0 lg:left-0 md:-left-48 w-[600px] max-w-[95vw] z-40 mt-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <div 
                    className={`bg-white border-l-4 border-blue-900 transition-all duration-300 ease-out overflow-hidden ${
                      isDropdownOpen 
                        ? 'max-h-[400px] opacity-100 shadow-lg transform translate-y-0' 
                        : 'max-h-0 opacity-0 shadow-none transform -translate-y-2'
                    }`}
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-blue-900 mb-2">Solutions</h3>
                      <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Enterprise-grade software solutions designed to scale with your construction business, from quick deployments to fully customized platforms.
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {/* Left Column - Navigation Items */}
                        <div className="space-y-0">
                          {solutions.map((solution) => {
                            const IconComponent = solution.icon;
                            return (
                              <a
                                key={solution.id}
                                href={`/solutions/${solution.id}`}
                                className={`flex items-center space-x-3 p-4 cursor-pointer transition-all duration-300 ${
                                  hoveredSolution === solution.id
                                    ? 'bg-blue-50 text-blue-900 border-l-4 border-orange-500'
                                    : 'hover:bg-gray-50 border-l-4 border-transparent'
                                }`}
                                onMouseEnter={() => setHoveredSolution(solution.id)}
                                onMouseLeave={() => setHoveredSolution(null)}
                              >
                                <IconComponent className="w-6 h-6 text-orange-500 flex-shrink-0" />
                                <span className="font-semibold text-sm">{solution.name}</span>
                              </a>
                            );
                          })}
                        </div>

                        {/* Right Column - Description */}
                        <div className="pl-6 border-l border-gray-200">
                          {hoveredSolution ? (
                            <div className="space-y-3">
                              <h4 className="font-bold text-blue-900 text-base">
                                {solutions.find(s => s.id === hoveredSolution)?.name}
                              </h4>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {solutions.find(s => s.id === hoveredSolution)?.description}
                              </p>
                              <a 
                                href={`/solutions/${hoveredSolution}`}
                                className="text-blue-900 hover:text-orange-500 font-semibold text-sm transition-colors duration-200 flex items-center"
                              >
                                Learn More
                                <svg
                                  className="w-4 h-4 ml-2 transition-transform hover:translate-x-1"
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
                              </a>
                            </div>
                          ) : (
                            <div className="text-gray-500 text-sm leading-relaxed">
                              <p className="mb-2 font-medium">Choose a solution to explore:</p>
                              <ul className="space-y-1 text-xs">
                                <li>• Quick deployment options</li>
                                <li>• Custom development services</li>
                                <li>• Seamless system integrations</li>
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#industries"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
              >
                Industries
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
              >
                About
              </a>
            </div>
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-semibold text-sm transition-all duration-200 hover:shadow-lg">
              Start Building
            </button>
          </div>
        </div>
      </div>

      {/* Raffle Announcement Bar - Show if there's time left or if not yet hydrated to prevent layout shift */}
      {(timeLeft.days > 0 ||
        timeLeft.hours > 0 ||
        timeLeft.minutes > 0 ||
        timeLeft.seconds > 0) && (
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 sm:px-6 shadow-md">
          <div className="max-w-9xl mx-auto">
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Gift className="w-5 h-5 text-orange-200 flex-shrink-0" />
                <div className="flex items-center space-x-6">
                  <span className="font-bold text-sm lg:text-base">
                    Free Software! Join Constructure's 1st year raffle for the
                    chance to win free custom software!
                  </span>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-orange-200" />
                    <span className="font-semibold text-sm">
                      Closes in: {timeLeft.days}d {timeLeft.hours}h{" "}
                      {timeLeft.minutes}m {timeLeft.seconds}s
                    </span>
                  </div>
                </div>
              </div>
              <Dialog
                open={isRaffleModalOpen}
                onOpenChange={setIsRaffleModalOpen}
              >
                <DialogTrigger asChild>
                  <button className="cursor-pointer bg-white/20 hover:bg-white/30 text-white px-4 py-2 font-semibold text-sm transition-all duration-200 hover:shadow-lg border border-white/30 flex-shrink-0">
                    Enter for Free
                  </button>
                </DialogTrigger>
              </Dialog>
            </div>

            {/* Mobile Layout */}
            <div className="sm:hidden">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Gift className="w-4 h-4 text-orange-200 flex-shrink-0" />
                  <span className="font-bold text-xs">
                    Free Software Raffle!
                  </span>
                </div>
                <Dialog
                  open={isRaffleModalOpen}
                  onOpenChange={setIsRaffleModalOpen}
                >
                  <DialogTrigger asChild>
                    <button className="cursor-pointer bg-white/20 hover:bg-white/30 text-white px-3 py-1 font-semibold text-xs transition-all duration-200 border border-white/30 flex-shrink-0">
                      Enter Free
                    </button>
                  </DialogTrigger>
                </Dialog>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-orange-100">
                  Win free custom software!
                </span>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3 text-orange-200" />
                  <span className="font-semibold text-xs">
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                    {timeLeft.seconds}s
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
