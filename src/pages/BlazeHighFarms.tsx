import React from 'react';
import { ExternalLink, Wheat, Truck, Globe2, Leaf, MapPin, Award } from 'lucide-react';

const BlazeHighFarms = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wheat className="h-8 w-8 text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-white">
            BlazeHigh Farms
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Premium export-quality vegetables grown with sustainable practices in Mahabalipuram, Chennai. 
            Delivering fresh excellence to international markets.
          </p>
          
          {/* Visit Website Button */}
          <div className="flex justify-center">
            <button className="group relative inline-flex items-center px-8 py-4 bg-white hover:bg-gray-200 text-black font-medium text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="relative z-10 flex items-center">
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              About BlazeHigh Farms
            </h2>
            <p className="text-base text-gray-300 leading-relaxed">
              Located in the fertile lands near Mahabalipuram, Chennai, BlazeHigh Farms specializes in cultivating 
              export-quality vegetables using sustainable and modern farming practices. We're proud to supply fresh, 
              premium produce to international markets including UAE, Thailand, Malaysia, and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div 
              className="h-64 bg-cover bg-center rounded-lg shadow-xl"
              style={{
                backgroundImage: "url('https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
              }}
            ></div>
            <div>
              <h3 className="text-2xl font-medium text-white mb-4">
                Our Heritage
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                Our farms are strategically located in Mahabalipuram, Chennai, benefiting from the region's favorable 
                climate and rich soil conditions. This prime location allows us to grow vegetables that meet the 
                highest international quality standards.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm">
                We combine traditional farming wisdom with modern agricultural techniques to ensure consistent 
                quality, optimal yields, and sustainable practices that protect our environment for future generations.
              </p>
            </div>
          </div>

          {/* Location & Export Markets */}
          <div className="bg-black border border-gray-600 rounded-xl p-6 md:p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-xl font-medium text-white">Our Location</h3>
                </div>
                <p className="text-gray-300 mb-3 text-sm">
                  <strong>Mahabalipuram, Chennai</strong> - Our farms are situated in one of Tamil Nadu's most 
                  agriculturally productive regions, known for its coastal climate and fertile alluvial soil.
                </p>
                <p className="text-gray-300 text-sm">
                  This strategic location provides ideal growing conditions for vegetables while ensuring easy 
                  access to Chennai's major export infrastructure.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Globe2 className="h-6 w-6 text-white mr-3" />
                  <h3 className="text-xl font-medium text-white">Export Markets</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    United Arab Emirates (UAE)
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    Thailand
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    Malaysia
                  </div>
                  <div className="flex items-center text-gray-300 text-sm">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    Other Southeast Asian Markets
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black border border-gray-600 p-6 rounded-lg hover:shadow-lg hover:border-gray-500 transition-all duration-300 group">
              <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Export Quality</h3>
              <p className="text-gray-300 text-sm">
                All our vegetables meet international export standards with rigorous quality control at every stage of production.
              </p>
            </div>

            <div className="bg-black border border-gray-600 p-6 rounded-lg hover:shadow-lg hover:border-gray-500 transition-all duration-300 group">
              <div className="bg-gray-700 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Sustainable Practices</h3>
              <p className="text-gray-300 text-sm">
                Eco-friendly farming methods that preserve soil health and minimize environmental impact.
              </p>
            </div>

            <div className="bg-black border border-gray-600 p-6 rounded-lg hover:shadow-lg hover:border-gray-500 transition-all duration-300 group">
              <div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-5 w-5 text-black" />
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Reliable Supply Chain</h3>
              <p className="text-gray-300 text-sm">
                Advanced logistics and cold chain management ensuring fresh produce reaches global markets efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Our Premium Vegetables
            </h2>
            <p className="text-base text-gray-300 max-w-3xl mx-auto">
              Fresh, nutritious, and export-quality vegetables grown with care and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Premium Tomatoes",
                description: "Fresh, juicy tomatoes with perfect ripeness and exceptional flavor profile."
              },
              {
                image: "https://images.pexels.com/photos/1435735/pexels-photo-1435735.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Fresh Cucumbers",
                description: "Crisp cucumbers with optimal texture and natural sweetness."
              },
              {
                image: "https://images.pexels.com/photos/1508666/pexels-photo-1508666.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Green Peppers",
                description: "Vibrant bell peppers rich in nutrients and perfect for international cuisine."
              },
              {
                image: "https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Fresh Onions",
                description: "High-quality onions with excellent storage life and pungent flavor."
              },
              {
                image: "https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Leafy Greens",
                description: "Nutritious leafy vegetables packed with vitamins and minerals."
              },
              {
                image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Root Vegetables",
                description: "Fresh carrots, radishes, and other root vegetables with exceptional quality."
              }
            ].map((product, index) => (
              <div key={index} className="group bg-gray-900 border border-gray-600 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border-gray-500 transition-all duration-300 transform hover:scale-105">
                <div 
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-gray-200 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
            Partner With Us
          </h2>
          <p className="text-base text-gray-600 mb-6 max-w-2xl mx-auto">
            Join our network of international partners and experience the quality and reliability of BlazeHigh Farms produce.
          </p>
          <button className="group inline-flex items-center px-6 py-3 bg-black text-white hover:bg-gray-800 font-medium text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Contact Us Today
            <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlazeHighFarms;