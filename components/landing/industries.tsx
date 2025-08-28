"use client";

import { useState } from "react";
import {
  Factory,
  Building2,
  Zap,
  Wind,
  Hammer,
  Shield,
  Users,
} from "lucide-react";

const industries = [
  {
    name: "Steel Construction",
    icon: <Factory className="w-8 h-8" />,
    description: "Structural steel fabrication and erection solutions",
    appIdea: {
      title: "Steel Construction Custom Software",
      description:
        "Comprehensive project management and fabrication tracking system for steel construction companies.",
      features: [
        "RFQ and bid management automation",
        "Material procurement and inventory tracking",
        "Production scheduling and capacity planning",
        "Quality assurance workflow management",
        "ERP and accounting system integration",
      ],
      benefits:
        "Reduce administrative time by 40%, improve on-time delivery by 25%",
    },
  },
  {
    name: "General Construction",
    icon: <Building2 className="w-8 h-8" />,
    description: "Full-service commercial and residential projects",
    appIdea: {
      title: "General Construction Custom Software",
      description:
        "Unified construction management platform that connects all stakeholders and streamlines operations.",
      features: [
        "Client portal with project transparency",
        "Subcontractor bidding and management",
        "Change order and variation tracking",
        "Document management and version control",
        "Financial reporting and forecasting",
      ],
      benefits: "Increase profit margins by 15%, reduce project delays by 35%",
    },
  },
  {
    name: "Electrical",
    icon: <Zap className="w-8 h-8" />,
    description: "Commercial and industrial electrical systems",
    appIdea: {
      title: "Electrical Custom Software",
      description:
        "Complete electrical project management platform with design coordination and compliance tracking.",
      features: [
        "Electrical design and specification management",
        "Permitting and inspection tracking",
        "Subcontractor coordination platform",
        "Material ordering and inventory",
        "Code compliance documentation",
      ],
      benefits:
        "Reduce permit delays by 50%, ensure 100% regulatory compliance",
    },
  },
  {
    name: "Plumbing & Mechanical",
    icon: <Wind className="w-8 h-8" />,
    description: "Plumbing, HVAC, and mechanical systems",
    appIdea: {
      title: "Plumbing & Mechanical Custom Software",
      description:
        "Comprehensive mechanical systems management platform for plumbing and HVAC projects.",
      features: [
        "System design and specification tracking",
        "Installation scheduling and sequencing",
        "Equipment procurement and warranty management",
        "Commissioning and testing workflows",
        "Maintenance scheduling and documentation",
      ],
      benefits:
        "Improve system reliability by 30%, reduce warranty claims by 40%",
    },
  },
  {
    name: "Drywall & Interior",
    icon: <Hammer className="w-8 h-8" />,
    description:
      "Drywall installation, interior finishing, and acoustic systems",
    appIdea: {
      title: "Drywall & Interior Custom Software",
      description:
        "Complete interior construction management platform for drywall and finishing contractors.",
      features: [
        "Room-by-room progress tracking",
        "Material estimation and ordering",
        "Crew assignment and scheduling",
        "Quality inspection workflows",
        "Change order management",
      ],
      benefits:
        "Reduce material waste by 25%, improve project completion by 35%",
    },
  },
  {
    name: "Roofing & Waterproofing",
    icon: <Shield className="w-8 h-8" />,
    description:
      "Commercial and residential roofing, waterproofing, and exterior protection",
    appIdea: {
      title: "Roofing & Waterproofing Custom Software",
      description:
        "Advanced roofing project management platform with weather tracking and material optimization.",
      features: [
        "Weather delay monitoring and scheduling",
        "Material inventory and waste tracking",
        "Safety compliance documentation",
        "Subcontractor coordination",
        "Warranty and maintenance tracking",
      ],
      benefits:
        "Reduce weather-related delays by 40%, improve material efficiency by 30%",
    },
  },
  {
    name: "Specialty Construction",
    icon: <Building2 className="w-8 h-8" />,
    description:
      "Elevators, security systems, clean rooms, and other specialty installations",
    appIdea: {
      title: "Specialty Construction Custom Software",
      description:
        "Specialized construction management platform for unique installation requirements and compliance.",
      features: [
        "Regulatory compliance tracking",
        "Equipment specification management",
        "Installation sequencing and dependencies",
        "Quality assurance protocols",
        "Documentation and certification management",
      ],
      benefits:
        "Ensure 100% regulatory compliance, reduce installation errors by 50%",
    },
  },
  {
    name: "Other Industries",
    icon: <Users className="w-8 h-8" />,
    description: "Construction-related businesses not listed above",
    appIdea: {
      title: "What Could Help Your Construction Business?",
      description:
        "Every construction company has unique challenges. Consider what software could help your specific situation.",
      features: [
        "What repetitive tasks take up too much time?",
        "What information do you struggle to track or organize?",
        "What reports do you need that you can't easily generate?",
        "What communication gaps exist between teams?",
        "What compliance or documentation requirements are burdensome?",
      ],
      benefits:
        "Custom software could automate workflows, improve data management, enhance team coordination, ensure compliance, and boost overall efficiency for your specific construction specialty.",
    },
  },
];

export default function Industries() {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  return (
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
                    What This Could Include
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
                <div className="text-blue-100">Project Efficiency Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">
                  60%
                </div>
                <div className="text-blue-100">Reduced Documentation Time</div>
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
  );
}
