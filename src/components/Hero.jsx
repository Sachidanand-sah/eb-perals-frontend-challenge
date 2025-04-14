
function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-[50vh] md:h-[70vh] flex items-center"
      style={{ backgroundImage: "url('/Frame.png')" }}
    >
      
      <div className="absolute inset-0 bg-black opacity-50"></div>

      
      <div className="relative z-10 text-white ml-12 md:ml-24 px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-md">
          Get instant cash flow with invoice factoring
        </h1>
        <p className="text-xl md:text-2xl mb-6 max-w-md">
          Why wait? Get same-day funding and a faster, more flexible way to access cash flow.
        </p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-100 mb-6">
          Get Started
        </button>

        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-purple-600"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;