"use client";

import { useState, useEffect } from "react";
import { Settings, Clock, Check, ArrowRight, Download, Shield, Zap, Globe, Users, TrendingUp } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import Footer from "@/components/landing/footer";
import RaffleModal from "@/components/landing/raffle-modal";

const solutions = [
  {
    name: "Project Timeline Manager",
    description: "Pre-built scheduling and milestone tracking system with Gantt charts, resource allocation, and automated notifications.",
    price: "Starting at $299/month",
    deploymentTime: "24-48 hours",
    features: [
      "Gantt chart visualization",
      "Resource allocation tracking",
      "Automated milestone alerts",
      "Team collaboration tools",
      "Progress reporting dashboard",
      "Mobile app included"
    ],
    icon: <Clock className="w-8 h-8" />,
  },
  {
    name: "Document Management Hub",
    description: "Complete document workflow system with version control, digital signatures, and compliance tracking.",
    price: "Starting at $199/month", 
    deploymentTime: "12-24 hours",
    features: [
      "Version control system",
      "Digital signature integration",
      "Compliance audit trails",
      "Automated backup",
      "Search & categorization",
      "Access control management"
    ],
    icon: <Shield className="w-8 h-8" />,
  },
  {
    name: "Team Communication Portal",
    description: "Unified communication platform with real-time messaging, file sharing, and project announcements.",
    price: "Starting at $149/month",
    deploymentTime: "6-12 hours",
    features: [
      "Real-time messaging",
      "File sharing & storage",
      "Project announcements",
      "Video conferencing",
      "Task assignment",
      "Activity feed"
    ],
    icon: <Users className="w-8 h-8" />,
  },
  {
    name: "Financial Dashboard",
    description: "Complete financial tracking with budget management, cost analysis, and automated reporting.",
    price: "Starting at $399/month",
    deploymentTime: "48-72 hours", 
    features: [
      "Budget tracking & alerts",
      "Cost analysis tools",
      "Automated financial reports",
      "Invoice management",
      "Profit/loss tracking",
      "Tax compliance tools"
    ],
    icon: <TrendingUp className="w-8 h-8" />,
  }
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Rapid Deployment",
    description: "Get up and running in hours, not months. Our pre-built solutions are tested and ready to deploy."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC 2 compliance, encryption, and regular security audits."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Cloud-Based",
    description: "Access your software from anywhere with 99.9% uptime guarantee and automatic updates."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Customizable",
    description: "Tailor the interface and workflows to match your company's specific needs and branding."
  }
];

export default function ReadyToDeployPage() {
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

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}

      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Settings className="w-5 h-5 text-orange-400 mr-2" />
              Ready to Deploy Solutions
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Pre-Built Software
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Ready Today
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Skip the development time with our battle-tested, pre-built construction management solutions. 
              Customizable, secure, and deployable within hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:shadow-2xl transform hover:-translate-y-1">
                View Solutions
              </button>
              <Link href="/contact" className="cursor-pointer border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:bg-white/10 text-center">
                Talk to Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-9xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Ready-to-Deploy?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get enterprise-grade functionality without the enterprise development timeline.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-100 group-hover:text-orange-500 transition-all duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Available Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our library of proven construction management tools, each designed for rapid deployment.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 text-blue-900 group-hover:text-orange-500 transition-all duration-300 mr-4">
                      {solution.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {solution.name}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-orange-500 font-semibold">
                          {solution.price}
                        </span>
                        <span className="text-gray-500">
                          Deploy in {solution.deploymentTime}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Download className="w-5 h-5 text-gray-400 group-hover:text-blue-900 transition-colors" />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="cursor-pointer flex-1 bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 font-semibold transition-all duration-200 flex items-center justify-center">
                    Deploy Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="cursor-pointer border border-gray-300 hover:border-blue-900 text-gray-700 hover:text-blue-900 px-6 py-3 font-semibold transition-all duration-200">
                    Demo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-9xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Our solutions team can help you choose the right pre-built tools for your construction business 
            and have you operational within 24 hours.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:shadow-2xl">
              Schedule Consultation
            </button>
            <Link href="/solutions" className="cursor-pointer border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:bg-white/10 text-center">
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Raffle Modal */}
      <RaffleModal
        isRaffleModalOpen={isRaffleModalOpen}
        setIsRaffleModalOpen={setIsRaffleModalOpen}
        raffleForm={raffleForm}
        handleFormChange={handleFormChange}
        handleRaffleSubmit={handleRaffleSubmit}
      />
    </div>
  );
}
