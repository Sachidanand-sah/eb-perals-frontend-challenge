// src/components/Features.jsx
function Features() {
    const features = [
      { title: "Access up to $10,000", desc: "Fund any invoice once approved to collect payments and optimize your cash flow." },
      { title: "You choose invoices to get paid", desc: "Self-serve online portal available 24/7 or connect via CMR or invoicing platforms." },
      { title: "Simple pricing", desc: "Only pay for the use, you don't need us, there are no fees." },
      { title: "Click and quick", desc: "Fund any invoice once approved to collect payment and optimize your cash flow." },
      { title: "Flexible", desc: "Self-serve online portal available 24/7 or connect via CMR or invoicing platforms." },
      { title: "Invest in your business", desc: "Only pay for the use, you don't need us, there are no fees." },
    ];
  
    return (
      <section className="py-12 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-600 mb-8">
          Outsource payment collection
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Faster & flexible way to access cash flow from any of your invoices
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-600">💸</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Features;