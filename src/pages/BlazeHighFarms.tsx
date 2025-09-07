import React from 'react';
import { ExternalLink, Wheat, Truck, Globe2, Leaf, MapPin, Award } from 'lucide-react';

const BlazeHighFarms = () => {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-green-900/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop')"
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-700">
            <Wheat className="h-8 w-8 text-amber-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-6 text-amber-100">
            BlazeHigh Farms
          </h1>
          <p className="text-lg md:text-xl text-amber-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Premium export-quality vegetables grown with sustainable practices in Mahabalipuram, Chennai. 
            Delivering fresh excellence to international markets.
          </p>
          
          {/* Visit Website Button */}
          <div className="flex justify-center">
            <button className="group relative inline-flex items-center px-8 py-4 bg-amber-700 hover:bg-amber-800 text-white font-medium text-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              <span className="relative z-10 flex items-center">
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-green-900 mb-4">
              About BlazeHigh Farms
            </h2>
            <p className="text-base text-green-800 leading-relaxed">
              Located in the fertile lands near Mahabalipuram, Chennai, BlazeHigh Farms specializes in cultivating 
              export-quality vegetables using sustainable and modern farming practices. We're proud to supply fresh, 
              premium produce to international markets including UAE, Thailand, Malaysia, and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div 
              className="h-64 bg-cover bg-center rounded-lg shadow-xl border-4 border-green-700"
              style={{
                backgroundImage: "url('https://www.theigc.org/sites/default/files/styles/max_1640x922/public/2021/02/India_Farming.webp?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop')"
              }}
            ></div>
            <div>
              <h3 className="text-2xl font-medium text-green-900 mb-4">
                Our Heritage
              </h3>
              <p className="text-green-800 mb-4 leading-relaxed text-sm">
                Our farms are strategically located in Mahabalipuram, Chennai, benefiting from the region's favorable 
                climate and rich soil conditions. This prime location allows us to grow vegetables that meet the 
                highest international quality standards.
              </p>
              <p className="text-green-800 leading-relaxed text-sm">
                We combine traditional farming wisdom with modern agricultural techniques to ensure consistent 
                quality, optimal yields, and sustainable practices that protect our environment for future generations.
              </p>
            </div>
          </div>

          {/* Location & Export Markets */}
          <div className="bg-emerald-900 border border-green-700 rounded-xl p-6 md:p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-amber-200 mr-3" />
                  <h3 className="text-xl font-medium text-white">Our Location</h3>
                </div>
                <p className="text-amber-100 mb-3 text-sm">
                  <strong>Mahabalipuram, Chennai</strong> - Our farms are situated in one of Tamil Nadu's most 
                  agriculturally productive regions, known for its coastal climate and fertile alluvial soil.
                </p>
                <p className="text-amber-100 text-sm">
                  This strategic location provides ideal growing conditions for vegetables while ensuring easy 
                  access to Chennai's major export infrastructure.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Globe2 className="h-6 w-6 text-amber-200 mr-3" />
                  <h3 className="text-xl font-medium text-white">Export Markets</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-amber-100 text-sm">
                    <div className="w-3 h-3 bg-amber-200 rounded-full mr-3"></div>
                    United Arab Emirates (UAE)
                  </div>
                  <div className="flex items-center text-amber-100 text-sm">
                    <div className="w-3 h-3 bg-amber-200 rounded-full mr-3"></div>
                    Thailand
                  </div>
                  <div className="flex items-center text-amber-100 text-sm">
                    <div className="w-3 h-3 bg-amber-200 rounded-full mr-3"></div>
                    Malaysia
                  </div>
                  <div className="flex items-center text-amber-100 text-sm">
                    <div className="w-3 h-3 bg-amber-200 rounded-full mr-3"></div>
                    Other Southeast Asian Markets
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-100 border border-green-700 p-6 rounded-lg hover:shadow-lg hover:border-amber-700 transition-all duration-300 group">
              <div className="bg-amber-200 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="text-lg font-medium text-green-900 mb-3">Export Quality</h3>
              <p className="text-green-800 text-sm">
                All our vegetables meet international export standards with rigorous quality control at every stage of production.
              </p>
            </div>

            <div className="bg-green-100 border border-green-700 p-6 rounded-lg hover:shadow-lg hover:border-amber-700 transition-all duration-300 group">
              <div className="bg-green-700 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-5 w-5 text-amber-200" />
              </div>
              <h3 className="text-lg font-medium text-green-900 mb-3">Sustainable Practices</h3>
              <p className="text-green-800 text-sm">
                Eco-friendly farming methods that preserve soil health and minimize environmental impact.
              </p>
            </div>

            <div className="bg-green-100 border border-green-700 p-6 rounded-lg hover:shadow-lg hover:border-amber-700 transition-all duration-300 group">
              <div className="bg-amber-200 w-10 h-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Truck className="h-5 w-5 text-amber-700" />
              </div>
              <h3 className="text-lg font-medium text-green-900 mb-3">Reliable Supply Chain</h3>
              <p className="text-green-800 text-sm">
                Advanced logistics and cold chain management ensuring fresh produce reaches global markets efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-green-900 mb-4">
              Our Premium Vegetables
            </h2>
            <p className="text-base text-green-800 max-w-3xl mx-auto">
              Fresh, nutritious, and export-quality vegetables grown with care and precision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "San Marzano Tomatoes",
                description: "Cultivated for High Solids and Concentrated Pastes."
              },
              {
                image: "https://images.pexels.com/photos/33653570/pexels-photo-33653570.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Russet Burbank Potato",
                description: "Sourced for High-Starch Content and Golden Fries."
              },
              {
                image: "https://images.pexels.com/photos/533342/pexels-photo-533342.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Southport Globe Onion",
                description: "Chosen for Pungency and Superior Dehydration Yield."
              },
              {
                image: "https://images.pexels.com/photos/2920402/pexels-photo-2920402.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "California Early Garlic",
                description: "The Processor's Choice for Uniformity and Long Shelf Life."
              },
              {
                image: "https://images.pexels.com/photos/1374651/pexels-photo-1374651.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Anaheim Chili Pepper",
                description: "The Capsicum Cultivar for Global Sauce Production."
              },
              {
                image: "https://images.pexels.com/photos/2775838/pexels-photo-2775838.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
                title: "Kirby Cucumber",
                description: "Bred for Firmness, Crunch, and Pickling Excellence."
              }
            ].map((product, index) => (
              <div key={index} className="group bg-green-100 border border-green-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border-amber-700 transition-all duration-300 transform hover:scale-105">
                <div 
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url('${product.image}')` }}
                ></div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-green-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-green-800 text-sm">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Partner With Us
          </h2>
          <p className="text-base text-amber-100 mb-6 max-w-2xl mx-auto">
            Join our network of international partners and experience the quality and reliability of BlazeHigh Farms produce.
          </p>
          <button className="group inline-flex items-center px-6 py-3 bg-green-900 text-white hover:bg-green-800 font-medium text-sm rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Contact Us Today
            <ExternalLink className="ml-2 h-4 w-4 text-white group-hover:rotate-12 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlazeHighFarms;