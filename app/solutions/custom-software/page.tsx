"use client";

import { Code, Lightbulb, Check, ArrowRight, Users, Cog, Rocket, Target, Clock, Award, ChevronRight } from "lucide-react";
import NextLink from "next/link";

const developmentProcess = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We analyze your current workflows, identify pain points, and create a detailed technical roadmap.",
    duration: "1-2 weeks",
    deliverables: ["Requirements Document", "Technical Architecture", "Project Timeline", "Cost Estimate"]
  },
  {
    step: "02", 
    title: "Design & Prototyping",
    description: "Create user interfaces and system designs tailored to your team's workflow and preferences.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX Mockups", "Interactive Prototype", "Database Schema", "API Documentation"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Build your custom solution using industry best practices with regular progress updates.",
    duration: "6-12 weeks",
    deliverables: ["Core Application", "Quality Assurance", "Security Testing", "Performance Optimization"]
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Launch your software with comprehensive team training and ongoing support setup.",
    duration: "1-2 weeks", 
    deliverables: ["Production Deployment", "Team Training", "Documentation", "Support Portal Access"]
  }
];

const customSolutions = [
  {
    title: "Enterprise Project Management",
    description: "Comprehensive project management platform tailored to multi-site construction operations.",
    features: [
      "Multi-project dashboard",
      "Custom reporting engine", 
      "Advanced resource planning",
      "Real-time collaboration",
      "Mobile field apps",
      "Integration APIs"
    ],
    timeline: "10-14 weeks",
    investment: "$75,000 - $150,000",
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Quality Control System",
    description: "Custom inspection and quality assurance platform with automated compliance reporting.",
    features: [
      "Digital inspection forms",
      "Photo documentation",
      "Compliance automation",
      "Audit trail tracking",
      "Regulatory reporting",
      "Mobile inspection apps"
    ],
    timeline: "8-12 weeks",
    investment: "$50,000 - $100,000", 
    icon: <Award className="w-8 h-8" />
  },
  {
    title: "Inventory Management Hub",
    description: "Complete material and equipment tracking system with supplier integration.",
    features: [
      "Real-time inventory tracking",
      "Automated reordering",
      "Supplier portal integration",
      "Cost optimization analytics",
      "Equipment maintenance tracking",
      "Barcode/RFID scanning"
    ],
    timeline: "6-10 weeks",
    investment: "$40,000 - $80,000",
    icon: <Cog className="w-8 h-8" />
  }
];

const benefits = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Perfectly Tailored",
    description: "Every feature designed specifically for your workflows, not generic industry standards."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Dedicated Team",
    description: "Assigned project manager and development team exclusively focused on your success."
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Scalable Architecture",
    description: "Built to grow with your business using enterprise-grade, future-proof technology."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Ongoing Support",
    description: "Comprehensive maintenance, updates, and feature enhancements as your needs evolve."
  }
];

export default function CustomSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Code className="w-5 h-5 text-orange-400 mr-2" />
              Custom Software Development
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Software Built
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Just for You
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              From concept to deployment, we create fully customized construction management solutions 
              that perfectly match your unique business processes and requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:shadow-2xl transform hover:-translate-y-1">
                Start Your Project
              </button>
              <NextLink href="/contact" className="cursor-pointer border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:bg-white/10 text-center">
                Schedule Consultation
              </NextLink>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-9xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-4xl">
              Why Choose Custom Development?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl">
              When off-the-shelf solutions don't fit, custom software gives you the exact functionality you need.
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

      {/* Development Process */}
      <section className="py-20 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-4xl">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl">
              A proven methodology that ensures your custom software is delivered on time, on budget, and exceeds expectations.
            </p>
          </div>
          
          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start bg-white border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-6 lg:mb-0 lg:mr-8">
                  <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 group-hover:bg-orange-500 transition-colors duration-300">
                    {phase.step}
                  </div>
                  <div className="lg:w-48">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {phase.title}
                    </h3>
                    <span className="text-orange-500 font-semibold text-sm">
                      {phase.duration}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Deliverables:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center text-sm text-gray-700">
                          <Check className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-900 transition-colors duration-300 hidden lg:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Solutions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-9xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-4xl">
              Example Custom Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl">
              See examples of custom software we've built for construction companies of all sizes.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {customSolutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-900 hover:border-orange-500 group">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 text-blue-900 group-hover:text-orange-500 transition-all duration-300 mr-4">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {solution.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Timeline:</span>
                    <span className="font-semibold text-gray-900">{solution.timeline}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Investment:</span>
                    <span className="font-semibold text-orange-500">{solution.investment}</span>
                  </div>
                </div>
                
                <button className="cursor-pointer w-full mt-6 bg-blue-900 hover:bg-orange-500 text-white px-6 py-3 font-semibold transition-all duration-200 flex items-center justify-center">
                  Discuss This Solution
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-900 text-white">
        <div className="max-w-9xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 max-w-4xl">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl">
              Let's discuss your unique requirements and create a software solution that gives your 
              construction business a competitive advantage.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:shadow-2xl">
              Start Your Custom Project
            </button>
            <NextLink href="/solutions" className="cursor-pointer border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:bg-white/10 text-center">
              View All Solutions
            </NextLink>
          </div>
        </div>
      </section>
    </div>
  );
}