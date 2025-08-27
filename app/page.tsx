'use client';

import { useState } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const industries = [
    { name: 'Steel Construction', icon: '🏗️', description: 'Structural steel fabrication and erection solutions' },
    { name: 'Wood Framing', icon: '🪵', description: 'Residential and commercial wood frame construction' },
    { name: 'General Construction', icon: '🏢', description: 'Full-service commercial and residential projects' },
    { name: 'Concrete Work', icon: '🏗️', description: 'Foundation, flatwork, and structural concrete' },
    { name: 'Electrical', icon: '⚡', description: 'Commercial and industrial electrical systems' },
  ];

  const solutions = [
    {
      title: 'Project Management',
      description: 'Enterprise-grade project tracking with real-time collaboration, scheduling, and resource management.',
      icon: '📊',
      features: ['Real-time dashboards', 'Resource allocation', 'Timeline tracking']
    },
    {
      title: 'Workflow Automation',
      description: 'Intelligent automation tools that eliminate manual processes and reduce operational overhead.',
      icon: '⚙️',
      features: ['Process automation', 'Document management', 'Quality control']
    },
    {
      title: 'Software Extensions',
      description: 'Custom integrations and API connections for your existing construction management tools.',
      icon: '🔧',
      features: ['API integrations', 'Custom modules', 'Data synchronization']
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '99.8%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Enterprise Clients' }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % industries.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + industries.length) % industries.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navbar */}
      <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 px-6 py-4 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-blue-900 tracking-tight">Constructure</h1>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Solutions</a>
              <a href="#industries" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Industries</a>
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">About</a>
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
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)'
              }}
            ></div>
          </div>
          
          {/* Gradient overlay that creates smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
          
          {/* Additional subtle pattern overlay */}
          <div className="absolute inset-0 opacity-3">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
        </div>
        
        {/* Left-Aligned Hero Content */}
        <div className="relative z-10 text-white w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-0">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 mb-4 sm:mb-6">
                  <span className="text-orange-400 font-medium">✦</span>
                  <span className="ml-2 text-xs sm:text-sm font-medium">Trusted by 500+ Construction Companies</span>
                </div>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-[0.9] tracking-tight">
                Software built for
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                  builders.
                </span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mb-8 sm:mb-12 leading-relaxed">
                Enterprise-grade construction management software that scales with your business. 
                From project planning to completion, we've got you covered.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto sm:min-w-[200px]">
                  Start Building
                </button>
                <button className="border-2 border-white/30 hover:border-white/60 text-white px-6 sm:px-8 py-3 sm:py-4 font-semibold text-base sm:text-lg transition-all duration-200 hover:bg-white/10 w-full sm:w-auto sm:min-w-[200px]">
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
      <section id="solutions" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 font-semibold mb-6">
              <span className="mr-2">🚀</span>
              Solutions That Scale
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
              Ready-to-Deploy &
              <span className="block text-blue-900">Custom Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              From plug-and-play modules to fully customized enterprise platforms, 
              we deliver construction software that adapts to your workflow, not the other way around.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div key={index} className="group bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-blue-900 hover:border-orange-500 transform hover:-translate-y-2">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-900 transition-colors">
                  {solution.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      {feature}
          </li>
                  ))}
                </ul>
                <button className="text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center group-hover:translate-x-2">
                  Learn More
                  <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Left-Aligned CTA Section */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-800 p-12 text-white">
            <div className="max-w-4xl">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Construction Business?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                Join hundreds of construction companies already using Constructure to streamline operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                  Schedule Demo
                </button>
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 font-semibold transition-all duration-200 hover:bg-white/10">
                  View Pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Left-Aligned Industries Section */}
      <section id="industries" className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-900 font-semibold mb-6">
              <span className="mr-2">🏗️</span>
              Industry Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl">
              Built for Every
              <span className="block text-orange-600">Construction Specialty</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Our software adapts to the unique workflows and requirements of different construction sectors.
            </p>
          </div>

          <div className="relative mb-16">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {industries.map((industry, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 p-12 border-t-4 border-orange-500 group">
                      <div className="text-center">
                        <div className="text-8xl mb-8 group-hover:scale-110 transition-transform duration-300">
                          {industry.icon}
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                          {industry.name}
                        </h3>
                        <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
                          {industry.description}
                        </p>
                        <div className="mt-8">
                          <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                            Explore Solutions
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-4 shadow-lg hover:shadow-xl transition-all duration-200 group border"
            >
              <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 text-gray-800 p-4 shadow-lg hover:shadow-xl transition-all duration-200 group border"
            >
              <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Enhanced Dots */}
            <div className="flex justify-center mt-12 space-x-3">
              {industries.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 transition-all duration-200 hover:scale-125 ${
                    index === currentSlide 
                      ? 'bg-orange-500 shadow-lg' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Left-Aligned Industry Stats */}
          <div className="bg-gradient-to-r from-blue-900 to-slate-800 p-12 text-white">
            <div className="max-w-4xl">
              <h3 className="text-3xl font-bold mb-8">Trusted Across Industries</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">85%</div>
                  <div className="text-blue-100">Project Efficiency Increase</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">60%</div>
                  <div className="text-blue-100">Reduced Documentation Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">40%</div>
                  <div className="text-blue-100">Faster Project Completion</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-orange-400 mb-2">95%</div>
                  <div className="text-blue-100">Client Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-900 font-semibold mb-6">
              <span className="mr-2">🔗</span>
              Seamless Integrations
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl">
              Works with Your
              <span className="block text-blue-900">Existing Tools</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl leading-relaxed">
              Constructure integrates seamlessly with the industry-leading software you already use, 
              ensuring a smooth workflow without disrupting your established processes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* First Row */}
            {/* PowerFab Integration */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-blue-900 flex items-center justify-center text-white font-bold text-xl group-hover:bg-blue-800 transition-colors">
                  PF
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    PowerFab Integration
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Direct integration with PowerFab for seamless steel fabrication workflow management. 
                    Sync project data, drawings, and production schedules automatically.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Automated data synchronization
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Real-time production tracking
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Streamlined reporting
                    </li>
                  </ul>
                  <button className="text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center group-hover:translate-x-2">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Tekla Structures Integration */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-red-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-red-700 transition-colors">
                  TS
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    Tekla Structures Integration
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Powerful integration with Tekla Structures for comprehensive 3D modeling and structural design workflow. 
                    Bridge the gap between design and construction management.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      3D model data import/export
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Design change notifications
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Material quantity sync
                    </li>
                  </ul>
                  <button className="text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center group-hover:translate-x-2">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Autodesk AutoCAD Integration */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-red-500 flex items-center justify-center text-white font-bold text-xl group-hover:bg-red-600 transition-colors">
                  AC
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    AutoCAD Integration
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Seamless integration with AutoCAD for comprehensive 2D and 3D design workflows. 
                    Import drawings, sync design changes, and maintain version control across projects.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Drawing import/export
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Version control sync
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Automated markup tracking
                    </li>
                  </ul>
                  <button className="text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center group-hover:translate-x-2">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Procore Integration */}
            <div className="group bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-orange-600 flex items-center justify-center text-white font-bold text-xl group-hover:bg-orange-700 transition-colors">
                  PC
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                    Procore Integration
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Direct integration with Procore construction management platform. 
                    Sync project data, schedules, and documentation for unified project oversight.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Project data synchronization
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Schedule integration
                    </li>
                    <li className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 mr-3 flex-shrink-0"></div>
                      Document management sync
                    </li>
                  </ul>
                  <button className="text-blue-900 hover:text-orange-500 font-semibold transition-colors duration-200 flex items-center group-hover:translate-x-2">
                    Learn More
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Benefits CTA */}
          <div className="bg-gradient-to-r from-slate-50 to-gray-50 p-12 border-l-4 border-blue-900">
            <div className="max-w-4xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Integrate Your Workflow?</h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Connect Constructure with your existing tools and create a unified construction management ecosystem.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1">
                  View All Integrations
                </button>
                <button className="border-2 border-blue-900 hover:border-blue-800 text-blue-900 hover:text-blue-800 px-8 py-4 font-semibold transition-all duration-200 hover:bg-blue-50">
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
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="md:col-span-2">
                <h3 className="text-3xl font-bold mb-6 text-orange-400">Constructure</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-md">
                  Enterprise-grade construction management software that scales with your business. 
                  Built by construction professionals, for construction professionals.
                </p>
                <div className="flex space-x-6">
                  <div className="w-12 h-12 bg-blue-900 hover:bg-blue-800 flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-xl">📧</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-900 hover:bg-blue-800 flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-xl">💼</span>
                  </div>
                  <div className="w-12 h-12 bg-blue-900 hover:bg-blue-800 flex items-center justify-center transition-colors cursor-pointer">
                    <span className="text-xl">🐦</span>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-orange-400">Solutions</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Project Management</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Workflow Automation</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Software Extensions</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Custom Development</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 className="text-xl font-semibold mb-6 text-orange-400">Company</h4>
                <ul className="space-y-4">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
                </ul>
              </div>
            </div>

            {/* Left-Aligned CTA Section in Footer */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/50 to-orange-900/50 border border-blue-800/30">
              <div className="max-w-4xl">
                <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
                <p className="text-gray-300 mb-6 max-w-2xl">
                  Join the hundreds of construction companies already transforming their operations with Constructure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold transition-all duration-200 hover:shadow-lg">
                    Start Free Trial
                  </button>
                  <button className="border border-white/30 hover:border-white text-white px-8 py-3 font-semibold transition-all duration-200 hover:bg-white/10">
                    Request Demo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              <p>&copy; 2024 Constructure. All rights reserved.</p>
            </div>
            <div className="flex space-x-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
