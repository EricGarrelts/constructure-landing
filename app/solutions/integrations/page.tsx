"use client";

import { Plug, Zap, Check, ArrowRight, Database, Cloud, Workflow, BarChart, Link, Shield, Clock, Repeat } from "lucide-react";
import NextLink from "next/link";

const integrationTypes = [
  {
    title: "Accounting Software",
    description: "Connect with QuickBooks, Sage, Xero, and other financial systems for automated invoice processing and cost tracking.",
    tools: ["QuickBooks", "Sage 300", "Xero", "NetSuite", "SAP", "Sage Intacct"],
    complexity: "Medium",
    timeline: "2-4 weeks",
    icon: <BarChart className="w-8 h-8" />
  },
  {
    title: "Project Management",
    description: "Integrate with existing PM tools like Procore, PlanGrid, Autodesk, and Microsoft Project for unified workflows.",
    tools: ["Procore", "PlanGrid", "Autodesk BIM 360", "MS Project", "Primavera", "Monday.com"],
    complexity: "High", 
    timeline: "3-6 weeks",
    icon: <Workflow className="w-8 h-8" />
  },
  {
    title: "Communication Platforms",
    description: "Connect with Slack, Microsoft Teams, and email systems for automated notifications and updates.",
    tools: ["Slack", "Microsoft Teams", "Gmail", "Outlook", "Zoom", "Discord"],
    complexity: "Low",
    timeline: "1-2 weeks", 
    icon: <Link className="w-8 h-8" />
  },
  {
    title: "Document Management",
    description: "Integrate with SharePoint, Dropbox, Google Drive, and Box for seamless file sharing and version control.",
    tools: ["SharePoint", "Dropbox", "Google Drive", "Box", "OneDrive", "AWS S3"],
    complexity: "Medium",
    timeline: "2-3 weeks",
    icon: <Database className="w-8 h-8" />
  },
  {
    title: "Field Data Collection",
    description: "Connect mobile apps, IoT sensors, and equipment monitoring systems for real-time data synchronization.",
    tools: ["Fieldwire", "iAuditor", "IoT Sensors", "Equipment APIs", "GPS Tracking", "Mobile Forms"],
    complexity: "High",
    timeline: "4-8 weeks",
    icon: <Cloud className="w-8 h-8" />
  },
  {
    title: "Compliance & Safety",
    description: "Integrate with safety management systems, inspection tools, and regulatory reporting platforms.",
    tools: ["SafetyCulture", "iSight", "OSHA Connect", "Compliance APIs", "Inspection Tools", "Training Platforms"],
    complexity: "Medium",
    timeline: "3-5 weeks",
    icon: <Shield className="w-8 h-8" />
  }
];

const automationScenarios = [
  {
    title: "Automated Invoice Processing",
    description: "Automatically sync project costs from your construction management software to your accounting system.",
    workflow: [
      "Project costs logged in field app",
      "Data validated and categorized", 
      "Invoice created in accounting system",
      "Approval workflow triggered",
      "Stakeholders notified via email/Slack"
    ],
    timeSaved: "15 hours/week",
    errorReduction: "95%"
  },
  {
    title: "Real-time Progress Reporting",
    description: "Automatically update project dashboards with data from multiple construction management tools.",
    workflow: [
      "Field data collected via mobile apps",
      "Progress photos uploaded to cloud storage",
      "Timeline updated in PM software",
      "Dashboard metrics refreshed",
      "Client reports generated automatically"
    ],
    timeSaved: "20 hours/week", 
    errorReduction: "90%"
  },
  {
    title: "Material Ordering Workflow",
    description: "Automatically reorder materials when inventory levels drop below specified thresholds.",
    workflow: [
      "Inventory levels monitored in real-time",
      "Automatic reorder triggered at threshold",
      "Purchase orders sent to suppliers",
      "Delivery scheduled and tracked",
      "Inventory system updated on delivery"
    ],
    timeSaved: "10 hours/week",
    errorReduction: "85%"
  }
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Eliminate Manual Work",
    description: "Automate repetitive tasks and data entry between your existing construction software tools."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Unified Data View", 
    description: "Get a single source of truth by connecting all your project data in one centralized dashboard."
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Real-time Sync",
    description: "Keep all your systems updated instantly without manual data transfer or duplicate entry."
  },
  {
    icon: <Repeat className="w-6 h-6" />,
    title: "Improved Accuracy",
    description: "Reduce errors by eliminating manual data transfer and ensuring consistency across all platforms."
  }
];

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <Plug className="w-5 h-5 text-orange-400 mr-2" />
              System Integrations
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Connect Everything
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                Seamlessly
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl">
              Bridge the gaps between your existing construction software with custom integrations 
              that automate workflows and eliminate manual data entry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:shadow-2xl transform hover:-translate-y-1">
                Plan Integration
              </button>
              <NextLink href="/contact" className="cursor-pointer border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:bg-white/10 text-center">
                Discuss Your Setup
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
              Why Integrate Your Systems?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl">
              Stop wasting time on manual data entry and start focusing on what matters - building great projects.
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

      {/* Integration Types */}
      <section className="py-20 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-4xl">
              Popular Integration Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl">
              We specialize in connecting the construction software tools you already use and love.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {integrationTypes.map((integration, index) => (
              <div key={index} className="bg-white border border-gray-200 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 text-blue-900 group-hover:text-orange-500 transition-all duration-300 mr-4">
                      {integration.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {integration.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-orange-500 font-semibold">
                          {integration.complexity} Complexity
                        </span>
                        <span className="text-gray-500">
                          {integration.timeline}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {integration.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Supported Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {integration.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-3 py-1 bg-blue-50 text-blue-900 text-sm font-medium border border-blue-200">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="cursor-pointer w-full bg-blue-900 hover:bg-orange-500 text-white px-6 py-3 font-semibold transition-all duration-200 flex items-center justify-center">
                  Discuss Integration
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Examples */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-9xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-4xl">
              Automation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl">
              See how we've helped construction companies automate their most time-consuming workflows.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {automationScenarios.map((scenario, index) => (
              <div key={index} className="bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-900 hover:border-orange-500">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {scenario.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {scenario.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Workflow Steps:</h4>
                  <ol className="space-y-2">
                    {scenario.workflow.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start text-sm text-gray-700">
                        <span className="w-6 h-6 bg-orange-100 text-orange-500 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                          {stepIndex + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Time Saved:</span>
                    <span className="font-semibold text-green-600">{scenario.timeSaved}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Error Reduction:</span>
                    <span className="font-semibold text-green-600">{scenario.errorReduction}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-6">
        <div className="max-w-9xl mx-auto">
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 max-w-4xl">
              How We Handle Integrations
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl">
              Our proven process ensures smooth, secure connections between all your construction software tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "System Analysis",
                description: "We audit your current software stack and identify integration opportunities.",
                duration: "1 week"
              },
              {
                step: "02", 
                title: "Integration Design",
                description: "Create a detailed technical plan for connecting your systems securely.",
                duration: "1-2 weeks"
              },
              {
                step: "03",
                title: "Development & Testing",
                description: "Build and thoroughly test the integration in a safe staging environment.",
                duration: "2-6 weeks"
              },
              {
                step: "04",
                title: "Deployment & Monitoring", 
                description: "Launch the integration with ongoing monitoring and support.",
                duration: "1 week"
              }
            ].map((phase, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4 group-hover:bg-orange-500 transition-colors duration-300">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 mb-2 leading-relaxed">
                  {phase.description}
                </p>
                <span className="text-orange-500 font-semibold text-sm">
                  {phase.duration}
                </span>
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
              Ready to Connect Your Systems?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-4xl">
              Let's discuss your current software setup and identify opportunities to automate 
              workflows and eliminate manual processes.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold text-lg transition-all duration-200 hover:shadow-2xl">
              Schedule Integration Audit
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