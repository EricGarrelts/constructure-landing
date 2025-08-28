"use client";

import { BarChart3, CheckCircle, Wrench, Rocket, Check } from "lucide-react";

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
    features: ["Process automation", "Document management", "Quality control"],
  },
  {
    title: "Software Extensions",
    description:
      "Custom integrations and API connections for your existing construction management tools.",
    icon: <Wrench className="w-8 h-8" />,
    features: ["API integrations", "Custom modules", "Data synchronization"],
  },
];

export default function Solutions() {
  return (
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
            From plug-and-play modules to fully customized enterprise platforms,
            we deliver construction software that adapts to your workflow, not
            the other way around.
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
  );
}
