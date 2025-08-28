"use client";

import { useState, useEffect } from "react";
import {
  BarChart3,
  CheckCircle,
  Wrench,
  Star,
  Rocket,
  Mail,
  Briefcase,
  Twitter,
  Building2,
  Check,
  ArrowRight,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Factory,
  Trees,
  Hammer,
  Zap,
  Wind,
  Gift,
  Trophy,
  Link,
  ArrowUpRight,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [isRaffleModalOpen, setIsRaffleModalOpen] = useState(false);
  const [raffleForm, setRaffleForm] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    softwareDescription: "",
  });

  // Calculate countdown to September 30th, 2025 1:00 PM Eastern Time
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-09-30T13:00:00-04:00"); // 1 PM Eastern Time
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Typewriter effect for "Constructure"
  useEffect(() => {
    const text = "Constructure";
    let currentIndex = 0;

    const typeTimer = setInterval(() => {
      if (currentIndex <= text.length) {
        setTypedText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeTimer);

        // After typing is complete, blink twice then hide cursor
        let blinkCount = 0;
        const blinkTimer = setInterval(() => {
          setShowCursor((prev) => !prev);
          blinkCount++;

          // After 6 blinks (3 complete cycles), hide cursor permanently
          if (blinkCount >= 6) {
            clearInterval(blinkTimer);
            setShowCursor(false);
          }
        }, 500); // 500ms per blink
      }
    }, 100); // Adjust speed as needed (100ms per character)

    return () => clearInterval(typeTimer);
  }, []);

  // Handle form input changes
  const handleFormChange = (field: string, value: string) => {
    setRaffleForm((prev) => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleRaffleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    console.log("Raffle form submitted:", raffleForm);
    setIsRaffleModalOpen(false);
    // Reset form
    setRaffleForm({
      name: "",
      email: "",
      company: "",
      industry: "",
      softwareDescription: "",
    });
  };

  const industries = [
    {
      name: "Steel Construction",
      icon: <Factory className="w-8 h-8" />,
      description: "Structural steel fabrication and erection solutions",
      appIdea: {
        title: "SteelTrack Pro",
        description:
          "Advanced steel fabrication and project management platform designed specifically for structural steel contractors.",
        features: [
          "3D steel modeling and visualization",
          "Real-time production tracking",
          "Material optimization algorithms",
          "Quality control checkpoints",
          "Integration with cutting equipment",
        ],
        benefits: "Reduce material waste by 15%, improve delivery times by 30%",
      },
    },
    {
      name: "Wood Framing",
      icon: <Trees className="w-8 h-8" />,
      description: "Residential and commercial wood frame construction",
      appIdea: {
        title: "FrameMaster",
        description:
          "Comprehensive wood framing management system for residential and commercial projects.",
        features: [
          "Automated lumber takeoff calculations",
          "Crew scheduling and task assignments",
          "Progress photo documentation",
          "Building code compliance checker",
          "Waste tracking and optimization",
        ],
        benefits: "Increase framing speed by 25%, reduce lumber waste by 20%",
      },
    },
    {
      name: "General Construction",
      icon: <Building2 className="w-8 h-8" />,
      description: "Full-service commercial and residential projects",
      appIdea: {
        title: "BuildSync Enterprise",
        description:
          "All-in-one project management platform for general contractors handling multiple project types.",
        features: [
          "Multi-project dashboard",
          "Subcontractor management portal",
          "Budget and cost tracking",
          "Document version control",
          "Client communication hub",
        ],
        benefits:
          "Manage 40% more projects simultaneously, improve client satisfaction by 35%",
      },
    },
    {
      name: "Concrete Work",
      icon: <Hammer className="w-8 h-8" />,
      description: "Foundation, flatwork, and structural concrete",
      appIdea: {
        title: "ConcreteFlow",
        description:
          "Specialized concrete management system for tracking pours, curing, and quality control.",
        features: [
          "Pour scheduling and weather monitoring",
          "Mix design and batch tracking",
          "Strength test management",
          "Curing time calculations",
          "Equipment utilization tracking",
        ],
        benefits: "Reduce concrete waste by 18%, improve pour quality by 95%",
      },
    },
    {
      name: "Electrical",
      icon: <Zap className="w-8 h-8" />,
      description: "Commercial and industrial electrical systems",
      appIdea: {
        title: "ElectriPlan Pro",
        description:
          "Advanced electrical project management with circuit design and code compliance features.",
        features: [
          "Electrical load calculations",
          "Wire and conduit routing optimization",
          "Code compliance verification",
          "Panel schedule generation",
          "Safety inspection checklists",
        ],
        benefits:
          "Reduce installation time by 22%, ensure 100% code compliance",
      },
    },
    {
      name: "HVAC Systems",
      icon: <Wind className="w-8 h-8" />,
      description: "Heating, ventilation, and air conditioning systems",
      appIdea: {
        title: "HVACMaster",
        description:
          "Complete HVAC project management with load calculations and system design tools.",
        features: [
          "Heating and cooling load calculations",
          "Ductwork design and optimization",
          "Equipment specification library",
          "Energy efficiency modeling",
          "Commissioning checklists",
        ],
        benefits:
          "Improve system efficiency by 28%, reduce installation errors by 40%",
      },
    },
  ];

  const solutions = [
    {
      title: "Project Management",
      description:
        "Enterprise-grade project tracking with real-time collaboration, scheduling, and resource management.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Real-time dashboards",
        "Resource allocation",
        "Timeline tracking",
      ],
    },
    {
      title: "Workflow Automation",
      description:
        "Intelligent automation tools that eliminate manual processes and reduce operational overhead.",
      icon: <CheckCircle className="w-8 h-8" />,
      features: [
        "Process automation",
        "Document management",
        "Quality control",
      ],
    },
    {
      title: "Software Extensions",
      description:
        "Custom integrations and API connections for your existing construction management tools.",
      icon: <Wrench className="w-8 h-8" />,
      features: ["API integrations", "Custom modules", "Data synchronization"],
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "99.8%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Enterprise Clients" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navbar with Raffle Bar */}
      <nav className="sticky top-0 z-50">
        {/* Main Navbar */}
        <div className="bg-white border-b border-gray-100 px-6 py-4 shadow-sm">
          <div className="max-w-9xl mx-auto flex items-center justify-between">
            <a href="/" className="flex items-center space-x-3 cursor-pointer">
              <img
                src="/logo.svg"
                alt="Constructure Logo"
                className="w-8 h-8"
              />
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
      </nav>

      {/* Left-Aligned Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* Background with Hero Image */}
        <div className="absolute inset-0">
          {/* Hero software screenshot on the right side */}
          <div className="absolute inset-0">
            <div
              className="absolute right-0 top-0 w-3/5 h-full bg-cover bg-center bg-no-repeat"
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
                  <Star
                    className="w-4 h-4 text-orange-400"
                    fill="currentColor"
                  />
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
                Enterprise-grade construction management software that scales
                with your business. From project planning to completion, we've
                got you covered.
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

      {/* Left-Aligned Solutions Section */}
      <section
        id="solutions"
        className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-9xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 font-semibold mb-6">
              <Rocket className="w-5 h-5 mr-2 text-blue-900" />
              Solutions That Scale
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
              Ready-to-Deploy &
              <span className="block text-blue-900">Custom Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              From plug-and-play modules to fully customized enterprise
              platforms, we deliver construction software that adapts to your
              workflow, not the other way around.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-900 hover:border-orange-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 text-blue-900 group-hover:text-orange-500 group-hover:scale-110 transition-all duration-300 mr-3 flex-shrink-0 flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <Check className="w-4 h-4 text-orange-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
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
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Showcase */}
      <section className="pt-8 pb-24 px-6 bg-white overflow-hidden">
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
                  Comprehensive software to track proposals for projects
                  including change orders and proposal documents. Also tracks
                  contracts and which proposals made it to contract with full
                  document management.
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

      {/* Industries Section with Sidebar */}
      <section id="industries" className="pt-8 pb-24 px-6 bg-slate-50">
        <div className="max-w-9xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-900 font-semibold mb-6">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
              </svg>
              Industry Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl">
              Built for Every
              <span className="block text-orange-600">
                Construction Specialty
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Our software adapts to the unique workflows and requirements of
              different construction sectors. Explore custom app solutions for
              your industry.
            </p>
          </div>

          {/* Sidebar + Main Content Layout */}
          <div className="bg-white shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
              {/* Sidebar */}
              <div className="lg:w-1/3 bg-gradient-to-b from-blue-900 to-blue-800">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">
                    Select Industry
                  </h3>
                  <div className="space-y-2">
                    {industries.map((industry, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedIndustry(index)}
                        className={`cursor-pointer w-full text-left p-4 transition-all duration-200 border-l-4 group ${
                          index === selectedIndustry
                            ? "bg-white/20 border-orange-500 text-white"
                            : "bg-transparent border-transparent text-blue-100 hover:bg-white/10 hover:border-white/30 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div
                            className={`flex-shrink-0 transition-colors ${
                              index === selectedIndustry
                                ? "text-orange-400"
                                : "text-blue-300 group-hover:text-white"
                            }`}
                          >
                            {industry.icon}
                          </div>
                          <div>
                            <div
                              className={`font-semibold mb-1 ${
                                index === selectedIndustry
                                  ? "text-white"
                                  : "text-blue-100 group-hover:text-white"
                              }`}
                            >
                              {industry.name}
                            </div>
                            <div
                              className={`text-sm ${
                                index === selectedIndustry
                                  ? "text-blue-100"
                                  : "text-blue-300 group-hover:text-blue-100"
                              }`}
                            >
                              {industry.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="h-full flex flex-col">
                  {/* App Idea Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-blue-900">
                        {industries[selectedIndustry].icon}
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">
                          {industries[selectedIndustry].appIdea.title}
                        </h3>
                        <div className="text-lg text-gray-600">
                          {industries[selectedIndustry].name} Solution
                        </div>
                      </div>
                    </div>
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {industries[selectedIndustry].appIdea.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="mb-8 flex-grow">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">
                      Key Features
                    </h4>
                    <div className="grid gap-4">
                      {industries[selectedIndustry].appIdea.features.map(
                        (feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center space-x-3 p-3 bg-gray-50 border-l-4 border-orange-500"
                          >
                            <div className="w-3 h-3 bg-orange-500 flex-shrink-0"></div>
                            <span className="text-gray-700 font-medium">
                              {feature}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-6 border-l-4 border-orange-500 mb-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Expected Benefits
                    </h4>
                    <p className="text-gray-700 font-medium">
                      {industries[selectedIndustry].appIdea.benefits}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                      Request Demo
                    </button>
                    <button className="cursor-pointer border-2 border-blue-900 hover:border-blue-800 text-blue-900 hover:text-blue-800 px-8 py-4 font-semibold transition-all duration-200 hover:bg-blue-50">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Left-Aligned Industry Stats */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-800 p-12 text-white mt-16">
            <div className="max-w-4xl">
              <h3 className="text-3xl font-bold mb-8">
                Trusted Across Industries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    85%
                  </div>
                  <div className="text-blue-100">
                    Project Efficiency Increase
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    60%
                  </div>
                  <div className="text-blue-100">
                    Reduced Documentation Time
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    40%
                  </div>
                  <div className="text-blue-100">Faster Project Completion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    95%
                  </div>
                  <div className="text-blue-100">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
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
                Direct integration with Procore construction management
                platform. Sync project data, schedules, and documentation for
                unified project oversight.
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
                Connect Constructure with your existing tools and create a
                unified construction management ecosystem.
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

      {/* Enhanced Footer */}
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
                <h4 className="text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-300 mb-6 max-w-2xl">
                  Join the hundreds of construction companies already
                  transforming their operations with Constructure.
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

      {/* Raffle Modal */}
      <Dialog open={isRaffleModalOpen} onOpenChange={setIsRaffleModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white border-0 rounded-none">
          <DialogHeader className="text-left pb-4">
            <div className="mb-0">
              <DialogTitle className="text-2xl font-bold text-gray-900 mb-1">
                Join the Free Software Raffle
              </DialogTitle>
              <DialogDescription className="text-gray-600">
                Enter for your chance to win custom construction software
              </DialogDescription>
            </div>
          </DialogHeader>

          <form onSubmit={handleRaffleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-gray-900"
                >
                  Your Name *
                </label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={raffleForm.name}
                  onChange={(e) => handleFormChange("name", e.target.value)}
                  required
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-semibold text-gray-900"
                >
                  Company Name *
                </label>
                <Input
                  id="company"
                  placeholder="Enter your company name"
                  value={raffleForm.company}
                  onChange={(e) => handleFormChange("company", e.target.value)}
                  required
                  className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-900"
              >
                Email Address *
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={raffleForm.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="industry"
                className="text-sm font-semibold text-gray-900"
              >
                Industry *
              </label>
              <Input
                id="industry"
                placeholder="e.g., Steel Construction, General Contracting, Electrical"
                value={raffleForm.industry}
                onChange={(e) => handleFormChange("industry", e.target.value)}
                required
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="software"
                className="text-sm font-semibold text-gray-900"
              >
                Describe the software you would want built if you won *
              </label>
              <Textarea
                id="software"
                placeholder="Tell us about the construction software solution you need. What challenges would it solve? What features would be most important?"
                value={raffleForm.softwareDescription}
                onChange={(e) =>
                  handleFormChange("softwareDescription", e.target.value)
                }
                required
                rows={4}
                className="border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
              />
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 border-l-4 border-orange-500">
              <div className="flex items-start space-x-3">
                <Trophy className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    What You Could Win
                  </h4>
                  <p className="text-sm text-gray-700">
                    Custom construction management software worth up to $50,000,
                    built specifically for your company's needs by our expert
                    team.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 transition-all duration-200 hover:shadow-lg"
              >
                Enter Raffle
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsRaffleModalOpen(false)}
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold py-3 px-6"
              >
                Cancel
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center">
              By entering, you agree to our terms and conditions. Winner will be
              announced on September 30th, 2025.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
