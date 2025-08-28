"use client";

import { useState, useEffect } from "react";
import { Gift, Clock } from "lucide-react";
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
}

export default function Navbar({
  typedText,
  showCursor,
  timeLeft,
  isRaffleModalOpen,
  setIsRaffleModalOpen,
}: NavbarProps) {
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
              <a
                href="#solutions"
                className="text-gray-700 hover:text-blue-900 transition-colors font-medium"
              >
                Solutions
              </a>
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

      {/* Raffle Announcement Bar */}
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
                <span className="font-bold text-xs">Free Software Raffle!</span>
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
    </nav>
  );
}
