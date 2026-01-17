const Hero = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Upgrade Your Style <br />
              <span className="text-indigo-600">Shop the Latest Trends</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Discover premium products curated just for you. 
              Fast delivery, secure payments, and unbeatable prices.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
                Shop Now
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-100 transition">
                View Collection
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f"
              alt="E-commerce Product"
              className="w-full max-w-md rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
