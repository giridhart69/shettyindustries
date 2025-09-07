import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Wheat, Shield, Globe, Award, Users } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white">
            Shetty Industries
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pioneering excellence across technology and agriculture. 
            From cutting-edge automation to premium agricultural exports.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/blazehigh-ai"
              className="inline-flex items-center px-6 py-3 bg-white hover:bg-gray-200 text-black font-medium text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore AI Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/blazehigh-farms"
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discover Our Farms
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Our Products
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Discover our innovative solutions spanning automation technology and sustainable agriculture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* BlazeHigh.AI Card */}
            <div className="group bg-black border border-gray-600 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-gray-500">
              <div 
                className="h-48 bg-gray-800 bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative p-6 h-full flex items-center justify-center">
                  <Bot className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  BlazeHigh.AI
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  Advanced automation solutions for both software and industrial applications. 
                  Streamline your operations with cutting-edge AI technology.
                </p>
                <Link
                  to="/blazehigh-ai"
                  className="inline-flex items-center text-gray-400 hover:text-white font-medium text-sm group-hover:translate-x-2 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* BlazeHigh Farms Card */}
            <div className="group bg-black border border-gray-600 rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:border-gray-500">
              <div 
                className="h-48 bg-gray-800 bg-cover bg-center relative"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative p-6 h-full flex items-center justify-center">
                  <Wheat className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                  BlazeHigh Farms
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  Premium export-quality vegetables grown in Mahabalipuram, Chennai. 
                  Supplying fresh produce to UAE, Thailand, Malaysia, and beyond.
                </p>
                <Link
                  to="/blazehigh-farms"
                  className="inline-flex items-center text-gray-400 hover:text-white font-medium text-sm group-hover:translate-x-2 transition-all duration-300"
                >
                  Explore Farms
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              About Shetty Industries
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Building tomorrow's solutions today through innovation, quality, and sustainable practices
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center group">
              <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Global Reach</h3>
              <p className="text-gray-300 text-sm">
                Serving clients and markets across multiple continents with reliable, high-quality solutions.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Excellence</h3>
              <p className="text-gray-300 text-sm">
                Committed to delivering exceptional quality in everything we do, from technology to agriculture.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-700 transition-colors duration-300">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Innovation</h3>
              <p className="text-gray-300 text-sm">
                Pioneering new approaches and technologies to solve complex challenges across industries.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-600 rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-medium text-white mb-4">
                  Our Story
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  Shetty Industries was founded with a vision to bridge the gap between cutting-edge technology 
                  and sustainable agriculture. We believe in creating solutions that not only drive business 
                  growth but also contribute to a better world.
                </p>
                <p className="text-gray-300 leading-relaxed text-sm">
                  From our headquarters, we operate two distinct yet complementary divisions: BlazeHigh.AI 
                  for automation solutions and BlazeHigh Farms for premium agricultural exports. Together, 
                  they represent our commitment to innovation and quality.
                </p>
              </div>
              <div 
                className="h-48 md:h-64 bg-cover bg-center rounded-lg shadow-lg"
                style={{
                  backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section id="privacy-policy" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Shield className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-light text-white mb-4">
              Privacy Policy
            </h2>
            <p className="text-base text-gray-300">
              Your privacy and data security are our top priorities
            </p>
          </div>

          <div className="bg-black border border-gray-600 rounded-xl shadow-lg p-6 md:p-8">
            <div className="space-y-5">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">Information We Collect</h3>
                <p className="text-gray-300 text-sm">
                  We collect information you provide directly to us, such as when you contact us for 
                  business inquiries or request information about our products and services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-2">How We Use Your Information</h3>
                <p className="text-gray-300 text-sm">
                  We use the information we collect to provide, maintain, and improve our services, 
                  respond to your inquiries, and communicate with you about our products and services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-2">Information Security</h3>
                <p className="text-gray-300 text-sm">
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-2">Contact Us</h3>
                <p className="text-gray-300 text-sm">
                  If you have any questions about this Privacy Policy or our practices, please contact 
                  us through our official channels. We are committed to addressing your concerns promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;