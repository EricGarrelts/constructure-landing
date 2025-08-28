"use client";

import { useRef } from "react";
import { toPng } from "html-to-image";
import {
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
  Download,
  Trophy,
  Gift,
  Calendar,
  Clock,
} from "lucide-react";

export default function AdsPage() {
  // Refs for each advertisement card
  const linkedinSingleRef = useRef<HTMLDivElement>(null);
  const linkedinSquareRef = useRef<HTMLDivElement>(null);
  const googleMediumRef = useRef<HTMLDivElement>(null);
  const googleLeaderboardRef = useRef<HTMLDivElement>(null);
  const mobileBannerRef = useRef<HTMLDivElement>(null);
  const socialMediaRef = useRef<HTMLDivElement>(null);
  const videoThumbnailRef = useRef<HTMLDivElement>(null);

  // Refs for raffle advertisement cards
  const raffleLinkedinSingleRef = useRef<HTMLDivElement>(null);
  const raffleLinkedinSquareRef = useRef<HTMLDivElement>(null);
  const raffleGoogleMediumRef = useRef<HTMLDivElement>(null);
  const raffleGoogleLeaderboardRef = useRef<HTMLDivElement>(null);
  const raffleMobileBannerRef = useRef<HTMLDivElement>(null);
  const raffleSocialMediaRef = useRef<HTMLDivElement>(null);
  const raffleVideoThumbnailRef = useRef<HTMLDivElement>(null);

  // Function to download a card as PNG
  const downloadCard = async (
    elementRef: React.RefObject<HTMLDivElement | null>,
    filename: string
  ) => {
    if (!elementRef.current) return;

    try {
      const dataUrl = await toPng(elementRef.current, {
        cacheBust: true,
        pixelRatio: 2,
      });

      const link = document.createElement("a");
      link.download = `${filename}.png`;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Error downloading image:", error);
      alert(
        "Download failed. Please try right-clicking the card and selecting 'Save as Image' or take a screenshot."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-slate-900">
          Advertisement Cards
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Different sized advertisement cards optimized for LinkedIn and Google
          Ads. Right-click and "Save as Image" to export as PNG files.
        </p>

        <div className="space-y-16">
          {/* LinkedIn Single Image Ad - 1200x627 */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                LinkedIn Single Image Ad (1200×627)
              </h2>
              <button
                onClick={() =>
                  downloadCard(linkedinSingleRef, "linkedin-single-ad-1200x627")
                }
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
            </div>
            <div
              ref={linkedinSingleRef}
              className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
              style={{ width: "600px", height: "313.5px" }} // Scaled down 50% for display
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Star
                    className="w-5 h-5 text-orange-400 mr-2"
                    fill="currentColor"
                  />
                  <span className="text-sm font-medium">
                    Trusted by 500+ Companies
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-3 leading-tight">
                  Professional Construction
                  <span className="block text-orange-400">
                    Management Software
                  </span>
                </h3>
                <p className="text-gray-300 mb-4 text-lg">
                  Scale your construction business with our all-in-one platform
                </p>
                <div className="flex items-center">
                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 font-semibold text-sm transition-colors">
                    Start Building
                  </button>
                  <ArrowRight className="w-5 h-5 ml-3 text-orange-400" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                constructure.us
              </div>
            </div>
          </section>

          {/* LinkedIn Square Ad - 1080x1080 */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                LinkedIn Square Ad (1080×1080)
              </h2>
              <button
                onClick={() =>
                  downloadCard(
                    linkedinSquareRef,
                    "linkedin-square-ad-1080x1080"
                  )
                }
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
            </div>
            <div
              ref={linkedinSquareRef}
              className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white"
              style={{ width: "400px", height: "400px" }} // Scaled down for display
            >
              <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Build Faster with
                    <span className="block text-orange-400">Constructure</span>
                  </h3>
                </div>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>500+ Projects Delivered</span>
                  </div>
                  <div className="flex items-center justify-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>99.8% Uptime Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    <span>24/7 Professional Support</span>
                  </div>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 font-semibold transition-colors">
                  Start Building
                </button>
                <div className="mt-4 text-xs text-gray-400">
                  constructure.us
                </div>
              </div>
            </div>
          </section>

          {/* Google Ads Medium Rectangle - 300x250 */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                Google Ads Medium Rectangle (300×250)
              </h2>
              <button
                onClick={() =>
                  downloadCard(
                    googleMediumRef,
                    "google-ads-medium-rectangle-300x250"
                  )
                }
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
            </div>
            <div
              ref={googleMediumRef}
              className="relative bg-white border border-gray-200 shadow-lg"
              style={{ width: "300px", height: "250px" }}
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex items-center mb-3">
                  <img
                    src="/LOGO.svg"
                    alt="Constructure"
                    className="w-8 h-8 mr-2"
                  />
                  <span className="font-semibold text-slate-900 text-sm">
                    Constructure
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2 text-lg leading-tight">
                  Construction Management Made Simple
                </h4>
                <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                  Join 500+ construction companies using our enterprise platform
                  for project management, scheduling, and team collaboration.
                </p>
                <div className="mt-auto">
                  <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 text-sm font-semibold transition-colors">
                    Get Custom Solution
                  </button>
                  <div className="text-xs text-gray-500 mt-1 text-center">
                    constructure.us
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Google Ads Leaderboard - 728x90 */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                Google Ads Leaderboard (728×90)
              </h2>
              <button
                onClick={() =>
                  downloadCard(
                    googleLeaderboardRef,
                    "google-ads-leaderboard-728x90"
                  )
                }
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
            </div>
            <div
              ref={googleLeaderboardRef}
              className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white"
              style={{ width: "728px", height: "90px" }}
            >
              <div className="p-4 h-full flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/LOGO.svg"
                    alt="Constructure"
                    className="w-10 h-10 mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-lg">Constructure</h4>
                    <p className="text-gray-300 text-sm">
                      Construction Management Platform
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-orange-400 font-bold text-lg">
                      500+
                    </div>
                    <div className="text-xs text-gray-300">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-orange-400 font-bold text-lg">
                      99.8%
                    </div>
                    <div className="text-xs text-gray-300">Uptime</div>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 font-semibold text-sm transition-colors">
                    Start Building
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile Banner - 320x50 */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                Mobile Banner (320×50)
              </h2>
              <button
                onClick={() =>
                  downloadCard(mobileBannerRef, "mobile-banner-320x50")
                }
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
            </div>
            <div
              ref={mobileBannerRef}
              className="relative bg-slate-900 text-white"
              style={{ width: "320px", height: "50px" }}
            >
              <div className="p-2 h-full flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/LOGO.svg"
                    alt="Constructure"
                    className="w-6 h-6 mr-2"
                  />
                  <div>
                    <div className="font-bold text-sm">Constructure</div>
                    <div className="text-xs text-gray-300">
                      Construction Software
                    </div>
                  </div>
                </div>
                <button className="bg-orange-500 hover:bg-orange-600 px-3 py-1 text-xs font-semibold transition-colors">
                  Get Solution
                </button>
              </div>
            </div>
          </section>

          {/* Social Media Ad - 1200x628 */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                Social Media Ad (1200×628)
              </h2>
              <button
                onClick={() =>
                  downloadCard(socialMediaRef, "social-media-ad-1200x628")
                }
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
            </div>
            <div
              ref={socialMediaRef}
              className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
              style={{ width: "600px", height: "314px" }} // Scaled down 50% for display
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70"></div>
                <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center opacity-10">
                  <Users className="w-32 h-32" />
                </div>
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-orange-400 mr-2" />
                  <span className="font-semibold">
                    Professional Grade Security
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Transform Your Construction
                  <span className="block text-orange-400">Business Today</span>
                </h3>
                <p className="text-gray-300 mb-6 text-lg max-w-md">
                  Join industry leaders using our comprehensive platform for
                  project management, team coordination, and business growth.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 font-semibold transition-colors">
                    Schedule Consultation
                  </button>
                  <span className="text-sm text-gray-400">
                    Custom solutions available
                  </span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                constructure.us
              </div>
            </div>
          </section>

          {/* Video Thumbnail Style - 1920x1080 aspect ratio */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-slate-800">
                Video Thumbnail Style (16:9 ratio)
              </h2>
              <button
                onClick={() =>
                  downloadCard(videoThumbnailRef, "video-thumbnail-16-9")
                }
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                Download PNG
              </button>
            </div>
            <div
              ref={videoThumbnailRef}
              className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden"
              style={{ width: "640px", height: "360px" }} // Scaled down for display
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                  </div>
                  <h3 className="text-4xl font-bold mb-3">
                    See Constructure
                    <span className="block text-orange-400">In Action</span>
                  </h3>
                  <p className="text-gray-300 text-xl mb-6 max-w-md">
                    Watch how leading construction companies are transforming
                    their operations
                  </p>
                </div>
                <div className="flex items-center space-x-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-orange-400">
                      500+
                    </div>
                    <div className="text-sm text-gray-300">Companies</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400">
                      99.8%
                    </div>
                    <div className="text-sm text-gray-300">Uptime</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-400">
                      24/7
                    </div>
                    <div className="text-sm text-gray-300">Support</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 text-sm text-gray-400">
                constructure.us
              </div>
            </div>
          </section>

          {/* RAFFLE CARDS SECTION */}
          <div className="mt-24 mb-16">
            <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">
              Raffle Advertisement Cards
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Promote the Free Software Raffle - Custom construction software
              worth up to $50,000!
            </p>

            {/* Raffle LinkedIn Single Image Ad - 1200x627 */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-slate-800">
                  Raffle LinkedIn Single Image Ad (1200×627)
                </h3>
                <button
                  onClick={() =>
                    downloadCard(
                      raffleLinkedinSingleRef,
                      "raffle-linkedin-single-ad-1200x627"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
              </div>
              <div
                ref={raffleLinkedinSingleRef}
                className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
                style={{ width: "600px", height: "313.5px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-transparent"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <Trophy
                      className="w-6 h-6 text-orange-400 mr-2"
                      fill="currentColor"
                    />
                    <span className="text-sm font-medium">
                      Free Software Raffle
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold mb-3 leading-tight">
                    Win Custom Software
                    <span className="block text-orange-400">Worth $50,000</span>
                  </h3>
                  <p className="text-gray-300 mb-4 text-lg">
                    Enter for your chance to win custom construction management
                    software
                  </p>
                  <div className="flex items-center">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-semibold text-sm transition-colors">
                      Enter Raffle
                    </button>
                    <Calendar className="w-5 h-5 ml-3 text-orange-400" />
                    <span className="ml-1 text-sm text-gray-300">
                      Ends Sept 30, 2025
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                  constructure.us
                </div>
              </div>
            </section>

            {/* Raffle LinkedIn Square Ad - 1080x1080 */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-slate-800">
                  Raffle LinkedIn Square Ad (1080×1080)
                </h3>
                <button
                  onClick={() =>
                    downloadCard(
                      raffleLinkedinSquareRef,
                      "raffle-linkedin-square-ad-1080x1080"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
              </div>
              <div
                ref={raffleLinkedinSquareRef}
                className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white"
                style={{ width: "400px", height: "400px" }}
              >
                <div className="p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Trophy className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      Free Software Raffle
                      <span className="block text-orange-400">
                        Win $50,000 Value
                      </span>
                    </h3>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center text-sm">
                      <Gift className="w-4 h-4 text-orange-400 mr-2" />
                      <span>Custom Construction Software</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Zap className="w-4 h-4 text-orange-400 mr-2" />
                      <span>Built for Your Company</span>
                    </div>
                    <div className="flex items-center justify-center text-sm">
                      <Clock className="w-4 h-4 text-orange-400 mr-2" />
                      <span>Enter Before Sept 30, 2025</span>
                    </div>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition-colors">
                    Enter Now
                  </button>
                  <div className="mt-4 text-xs text-gray-400">
                    constructure.us
                  </div>
                </div>
              </div>
            </section>

            {/* Raffle Google Ads Medium Rectangle - 300x250 */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-slate-800">
                  Raffle Google Ads Medium Rectangle (300×250)
                </h3>
                <button
                  onClick={() =>
                    downloadCard(
                      raffleGoogleMediumRef,
                      "raffle-google-ads-medium-rectangle-300x250"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
              </div>
              <div
                ref={raffleGoogleMediumRef}
                className="relative bg-white border border-gray-200 shadow-lg"
                style={{ width: "300px", height: "250px" }}
              >
                <div className="p-4 h-full flex flex-col">
                  <div className="flex items-center mb-3">
                    <Trophy className="w-8 h-8 text-orange-500 mr-2" />
                    <span className="font-semibold text-orange-600 text-sm">
                      Free Software Raffle
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg leading-tight">
                    Win $50,000 Custom Software
                  </h4>
                  <p className="text-gray-600 text-xs mb-3 leading-relaxed">
                    Enter to win custom construction management software built
                    specifically for your company. No purchase necessary.
                  </p>
                  <div className="mt-auto">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 text-sm font-semibold transition-colors">
                      Enter Raffle
                    </button>
                    <div className="text-xs text-gray-500 mt-1 text-center">
                      constructure.us • Ends Sept 30, 2025
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Raffle Google Ads Leaderboard - 728x90 */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-slate-800">
                  Raffle Google Ads Leaderboard (728×90)
                </h3>
                <button
                  onClick={() =>
                    downloadCard(
                      raffleGoogleLeaderboardRef,
                      "raffle-google-ads-leaderboard-728x90"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
              </div>
              <div
                ref={raffleGoogleLeaderboardRef}
                className="relative bg-gradient-to-r from-slate-900 to-blue-900 text-white"
                style={{ width: "728px", height: "90px" }}
              >
                <div className="p-4 h-full flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="w-10 h-10 text-orange-400 mr-4" />
                    <div>
                      <h4 className="font-bold text-lg">
                        Free Software Raffle
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Win Custom Construction Software
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="text-center">
                      <div className="text-orange-400 font-bold text-lg">
                        $50K
                      </div>
                      <div className="text-xs text-gray-300">Value</div>
                    </div>
                    <div className="text-center">
                      <div className="text-orange-400 font-bold text-lg">
                        Sept 30
                      </div>
                      <div className="text-xs text-gray-300">Deadline</div>
                    </div>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 font-semibold text-sm transition-colors">
                      Enter Now
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Raffle Mobile Banner - 320x50 */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-slate-800">
                  Raffle Mobile Banner (320×50)
                </h3>
                <button
                  onClick={() =>
                    downloadCard(
                      raffleMobileBannerRef,
                      "raffle-mobile-banner-320x50"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
              </div>
              <div
                ref={raffleMobileBannerRef}
                className="relative bg-slate-900 text-white"
                style={{ width: "320px", height: "50px" }}
              >
                <div className="p-2 h-full flex items-center justify-between">
                  <div className="flex items-center">
                    <Trophy className="w-6 h-6 text-orange-400 mr-2" />
                    <div>
                      <div className="font-bold text-sm">Win $50K Software</div>
                      <div className="text-xs text-gray-400">Free Raffle</div>
                    </div>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 text-xs font-semibold transition-colors">
                    Enter
                  </button>
                </div>
              </div>
            </section>

            {/* Raffle Social Media Ad - 1200x628 */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-slate-800">
                  Raffle Social Media Ad (1200×628)
                </h3>
                <button
                  onClick={() =>
                    downloadCard(
                      raffleSocialMediaRef,
                      "raffle-social-media-ad-1200x628"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
              </div>
              <div
                ref={raffleSocialMediaRef}
                className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-hidden"
                style={{ width: "600px", height: "314px" }}
              >
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-900/70"></div>
                  <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center opacity-10">
                    <Trophy className="w-32 h-32 text-white" />
                  </div>
                </div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <Gift className="w-6 h-6 text-orange-400 mr-2" />
                    <span className="font-semibold">Free Software Raffle</span>
                  </div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    Enter to Win Custom
                    <span className="block text-orange-400">
                      Construction Software
                    </span>
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg max-w-md">
                    Win custom construction management software worth up to
                    $50,000, built specifically for your company's needs.
                  </p>
                  <div className="flex items-center space-x-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition-colors">
                      Enter Raffle
                    </button>
                    <span className="text-sm text-gray-400">
                      Ends September 30, 2025
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 text-sm text-gray-400">
                  constructure.us
                </div>
              </div>
            </section>

            {/* Raffle Video Thumbnail Style - 1920x1080 aspect ratio */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-semibold text-slate-800">
                  Raffle Video Thumbnail Style (16:9 ratio)
                </h3>
                <button
                  onClick={() =>
                    downloadCard(
                      raffleVideoThumbnailRef,
                      "raffle-video-thumbnail-16-9"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PNG
                </button>
              </div>
              <div
                ref={raffleVideoThumbnailRef}
                className="relative bg-gradient-to-br from-slate-900 to-blue-900 text-white overflow-hidden"
                style={{ width: "640px", height: "360px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                    </div>
                    <h3 className="text-4xl font-bold mb-3">
                      Win $50,000
                      <span className="block text-orange-400">
                        Software Raffle
                      </span>
                    </h3>
                    <p className="text-gray-300 text-xl mb-6 max-w-md">
                      Watch how you could win custom construction software for
                      your company
                    </p>
                  </div>
                  <div className="flex items-center space-x-8 text-center">
                    <div>
                      <div className="text-3xl font-bold text-orange-400">
                        $50K
                      </div>
                      <div className="text-sm text-gray-300">Value</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-400">
                        FREE
                      </div>
                      <div className="text-sm text-gray-300">To Enter</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-400">
                        Sept 30
                      </div>
                      <div className="text-sm text-gray-300">Deadline</div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-sm text-gray-400">
                  constructure.us
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-16 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-slate-900 mb-3">
            How to Download as PNG:
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">
                Option 1: Download Button (Recommended)
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>
                  Click the blue "Download PNG" button next to any card title
                </li>
                <li>
                  The image will automatically download to your default
                  downloads folder
                </li>
                <li>
                  The downloaded image maintains the actual dimensions for each
                  ad format (2x resolution for crisp quality)
                </li>
              </ol>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">
                Option 2: Right-click Method
              </h4>
              <ol className="list-decimal list-inside space-y-1 text-gray-700 ml-4">
                <li>Right-click on any advertisement card above</li>
                <li>
                  Select "Save as Image" or "Copy Image" from the context menu
                </li>
                <li>Choose your preferred location to save the PNG file</li>
              </ol>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            These cards are optimized for LinkedIn ads, Google Ads, and other
            digital advertising platforms. Each card maintains proper aspect
            ratios and dimensions for their respective ad formats. The download
            button provides higher quality images at 2x resolution. Use the
            regular cards to promote your construction software services, and
            the raffle cards to promote the free software raffle campaign.
          </p>
        </div>
      </div>
    </div>
  );
}
