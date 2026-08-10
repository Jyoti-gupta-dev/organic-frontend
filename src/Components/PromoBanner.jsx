// import React from "react";


// function PromoBanner() {
//   const banners = [
//     {
//       key: "sale",
//       title: "Items on SALE",
//       subtitle: "Discounts up to 30%",
//       img: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?auto=format&fit=crop&w=900&q=80",
//       overlay: "bg-black/50",
//       titleColor: "text-white",
//       subtitleColor: "text-fuchsia-300",
//       size: "large",
//     },
//     {
//       key: "combo",
//       title: "Combo offers",
//       subtitle: "Discounts up to 50%",
//       img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80",
//       overlay: "bg-blue-900/40",
//       titleColor: "text-white",
//       subtitleColor: "text-white/90",
//       size: "small",
//     },
//     {
//       key: "coupons",
//       title: "Discount Coupons",
//       subtitle: "Discounts up to 40%",
//       img: "https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&w=700&q=80",
//       overlay: "bg-teal-900/40",
//       titleColor: "text-white",
//       subtitleColor: "text-white/90",
//       size: "small",
//     },
//   ];

//   const Banner = ({ b, className = "" }) => (
//     <div
//       className={`relative rounded-lg overflow-hidden group cursor-pointer ${className}`}
//     >
//       <img
//         src={b.img}
//         alt={b.title}
//         className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//       />
//       <div className={`absolute inset-0 ${b.overlay}`} />

//       <div className="relative z-10 h-full flex flex-col justify-center px-6 sm:px-8 py-6">
//         <h3 className={`text-xl sm:text-2xl font-extrabold mb-2 ${b.titleColor}`}>
//           {b.title}
//         </h3>
//         <p className={`text-sm font-medium mb-4 ${b.subtitleColor}`}>
//           {b.subtitle}
//         </p>
//         <button className="self-start text-white text-xs font-semibold tracking-wide border-b border-white pb-0.5 hover:opacity-80 transition-opacity">
//           SHOP NOW
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <section className="w-full font-sans px-6 sm:px-10 lg:px-12 py-12">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* LEFT: large banner */}
//         <Banner b={banners[0]} className="h-64 sm:h-80 lg:h-full min-h-[280px]" />

//         {/* RIGHT: two stacked banners */}
//         <div className="grid grid-rows-2 gap-6 h-auto lg:h-full">
//           <Banner b={banners[1]} className="h-48 sm:h-56 lg:h-full" />
//           <Banner b={banners[2]} className="h-48 sm:h-56 lg:h-full" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default PromoBanner



import React from "react";

function PromoBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Left Banner */}
        <div className="lg:col-span-2 relative overflow-hidden rounded-xl h-[450px]">
          <img
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=1200"
            alt="Sale"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-white">
            <h2 className="text-3xl font-bold mb-2">
              Items on SALE
            </h2>

            <p className="text-sm mb-5">
              Discounts up to 30%
            </p>

            <button className="font-semibold border-b-2 border-white hover:text-green-400 transition">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-5">

          {/* Top Banner */}
          <div className="relative rounded-xl overflow-hidden h-[212px]">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
              alt="Combo"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/25"></div>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
              <h3 className="text-2xl font-bold">
                Combo offers
              </h3>

              <p className="text-xs mt-1">
                Discounts up to 50%
              </p>

              <button className="mt-3 text-sm font-semibold border-b border-white">
                SHOP NOW
              </button>
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="relative rounded-xl overflow-hidden h-[212px]">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800"
              alt="Coupon"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-green-700/30"></div>

            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white">
              <h3 className="text-2xl font-bold">
                Discount Coupons
              </h3>

              <p className="text-xs mt-1">
                Discounts up to 40%
              </p>

              <button className="mt-3 text-sm font-semibold border-b border-white">
                SHOP NOW
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default PromoBanner;