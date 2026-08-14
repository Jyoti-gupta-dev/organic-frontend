// // import React from "react";
// // import discountBanner from "../../Images/discountBanner.jpg"

// // const DiscountBanner = () => {
// //   return (
// //     <section className="w-full py-10 px-4">
// //       <div
// //         className="max-w-7xl mx-auto rounded-lg overflow-hidden bg-cover bg-center"
// //         // style={{
// //         //   backgroundImage:
// //         //     "url('https://themewagon.github.io/organic/images/background.jpg')",
// //         // }}
// //       >
// //         <img src={discountBanner} alt="" />
// //         <div className="bg-black/25">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-8 md:px-16 py-14">

// //             {/* Left Content */}
// //             <div className="text-white">
// //               <h2 className="text-3xl md:text-5xl font-light leading-tight">
// //                 Get 25% Discount on
// //                 <br />
// //                 your first purchase
// //               </h2>

// //               <p className="mt-5 text-sm md:text-base font-medium">
// //                 Just Sign Up & Register it now to become member.
// //               </p>
// //             </div>

// //             {/* Right Form */}
// //             <div className="w-full">
// //               <form className="flex flex-col gap-4">
// //                 <input
// //                   type="text"
// //                   placeholder="Name"
// //                   className="h-12 px-4 bg-white outline-none"
// //                 />

// //                 <input
// //                   type="email"
// //                   placeholder="Email Address"
// //                   className="h-12 px-4 bg-white outline-none"
// //                 />

// //                 <button
// //                   type="submit"
// //                   className="h-12 bg-gray-900 hover:bg-black text-white font-semibold transition duration-300"
// //                 >
// //                   Submit
// //                 </button>
// //               </form>
// //             </div>

// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default DiscountBanner;


// import React from "react";
// import discountBanner from "../../Images/discountBanner.jpg";

// const DiscountBanner = () => {
//   return (
//     <section className="py-10 px-4">
//       <div
//         className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-cover bg-center relative"

//       >

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/35"></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-16 gap-12">

//           {/* Left */}
//           <div className="text-white max-w-lg">
//             <h2 className="text-3xl md:text-4xl font-light leading-tight">
//               Get 25% Discount on
//               <br />
//               <span className="font-medium">
//                 your first purchase
//               </span>
//             </h2>

//             <p className="mt-6 text-lg">
//               Just Sign Up & Register it now to become member.
//             </p>
//           </div>

//           {/* Right */}
//           <div className="w-full max-w-md">
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full h-10 px-4 rounded bg-white outline-none"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full h-10 px-4 rounded bg-white outline-none"
//               />

//               <button
//                 className="w-full h-10 bg-gray-900 hover:bg-black text-white font-semibold rounded transition"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// // export default DiscountBanner;import React from "react";
// import discountbanner from "../Images/discountbanner.jpg"

// const DiscountBanner = () => {
//   return (
//     <section className="py-10 px-4">
//       <div
//         className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-cover bg-center relative"
//         style={{
//           backgroundImage: `url(${discountBanner})`,
//         }}
//       >

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/35"></div>

//         {/* Content */}
//         <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-16 gap-12">

//           {/* Left */}
//           <div className="text-white max-w-lg">
//             <h2 className="text-3xl md:text-4xl font-light leading-tight">
//               Get 25% Discount on
//               <br />
//               <span className="font-medium">
//                 your first purchase
//               </span>
//             </h2>

//             <p className="mt-6 text-lg">
//               Just Sign Up & Register it now to become member.
//             </p>
//           </div>

//           {/* Right */}
//           <div className="w-full max-w-md">
//             <form className="space-y-4">

//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full h-10 px-4 rounded bg-white outline-none"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="w-full h-10 px-4 rounded bg-white outline-none"
//               />

//               <button
//                 type="submit"
//                 className="w-full h-10 bg-gray-900 hover:bg-black text-white font-semibold rounded transition"
//               >
//                 Submit
//               </button>

//             </form>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default DiscountBanner;

import React from "react";
// import discountBanner from "../../Images/discountBanner.jpg";

const DiscountBanner = () => {
  return (
    <section className="py-10 px-4">
      <div
        className="max-w-7xl mx-auto rounded-xl overflow-hidden bg-cover bg-center relative"
        // style={{
        //   backgroundImage: `url(${discountBanner})`,
        // }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 md:px-16 py-16 gap-12">

          {/* Left */}
          <div className="text-white max-w-lg">
            <h2 className="text-3xl md:text-4xl font-light leading-tight">
              Get 25% Discount on
              <br />
              <span className="font-medium">
                your first purchase
              </span>
            </h2>

            <p className="mt-6 text-lg">
              Just Sign Up & Register it now to become member.
            </p>
          </div>

          {/* Right */}
          <div className="w-full max-w-md">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full h-10 px-4 rounded bg-white outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-10 px-4 rounded bg-white outline-none"
              />

              <button
                type="submit"
                className="w-full h-10 bg-gray-900 hover:bg-black text-white font-semibold rounded transition"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DiscountBanner;