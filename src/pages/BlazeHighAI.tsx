import React from 'react';
import { ExternalLink, Bot, Cpu, Zap, Settings, Workflow, BarChart3 } from 'lucide-react';

const BlazeHighAI = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border border-white">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white">
            BlazeHigh.AI
          </h1>
          <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing industries through intelligent automation solutions. 
            From software optimization to industrial process enhancement.
          </p>
          
          {/* Visit Website Button */}
          <div className="flex justify-center">
            <button className="group relative inline-flex items-center px-8 py-4 bg-black hover:bg-gray-900 text-white font-medium text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl border border-white">
              <span className="relative z-10 flex items-center">
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              About BlazeHigh.AI
            </h2>
            <p className="text-base text-white leading-relaxed">
              BlazeHigh.AI is a cutting-edge automation company specializing in both software and industrial automation solutions. 
              We leverage advanced artificial intelligence and machine learning technologies to streamline operations, 
              reduce costs, and enhance productivity across various industries.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h3 className="text-2xl font-medium text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white mb-4 leading-relaxed text-sm">
                We're dedicated to transforming businesses through intelligent automation. Our small but highly skilled 
                organization focuses on delivering personalized solutions that address specific challenges faced by our clients.
              </p>
              <p className="text-white leading-relaxed text-sm">
                From robotic process automation to smart manufacturing systems, we provide end-to-end automation services 
                that drive efficiency and innovation across diverse sectors.
              </p>
            </div>
            <div 
              className="h-64 bg-cover bg-center rounded-lg shadow-xl border border-white"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
              }}
            ></div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black border border-white p-6 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
              <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Software Automation</h3>
              <p className="text-white text-sm">
                Custom software solutions that automate repetitive tasks, optimize workflows, and integrate systems seamlessly.
              </p>
            </div>

            <div className="bg-black border border-white p-6 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
              <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white group-hover:scale-110 transition-transform duration-300">
                <Settings className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Industrial Automation</h3>
              <p className="text-white text-sm">
                Smart manufacturing solutions including IoT integration, predictive maintenance, and process optimization.
              </p>
            </div>

            <div className="bg-black border border-white p-6 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
              <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white group-hover:scale-110 transition-transform duration-300">
                <Workflow className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Process Optimization</h3>
              <p className="text-white text-sm">
                AI-driven analytics and optimization to improve efficiency, reduce waste, and maximize output quality.
              </p>
            </div>

            <div className="bg-black border border-white p-6 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
              <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">AI Integration</h3>
              <p className="text-white text-sm">
                Machine learning models and AI algorithms integrated into existing systems for intelligent decision-making.
              </p>
            </div>

            <div className="bg-black border border-white p-6 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
              <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Data Analytics</h3>
              <p className="text-white text-sm">
                Advanced analytics dashboards and reporting tools for data-driven insights and strategic planning.
              </p>
            </div>

            <div className="bg-black border border-white p-6 rounded-lg hover:shadow-lg hover:border-gray-300 transition-all duration-300 group">
              <div className="bg-black w-10 h-10 rounded-lg flex items-center justify-center mb-4 border border-white group-hover:scale-110 transition-transform duration-300">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Robotic Solutions</h3>
              <p className="text-white text-sm">
                Design and implementation of robotic systems for manufacturing, logistics, and service applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Ready to Automate Your Future?
          </h2>
          <p className="text-base text-white mb-6 max-w-2xl mx-auto">
            Let's discuss how our automation solutions can transform your business operations and drive growth.
          </p>
          <button className="group inline-flex items-center px-6 py-3 bg-black text-white hover:bg-gray-900 font-medium text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl border border-white">
            Get Started Today
            <ExternalLink className="ml-2 h-4 w-4 text-white group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlazeHighAI;