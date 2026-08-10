// // import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaYoutube,
//   FaInstagram,
//   FaAmazon,
// } from "react-icons/fa";

// import logo from "../Images/logo.png";

// const Footer = () => {
//   return (
//     <footer className="border-t border-gray-200 mt-20">
//       <div className="max-w-7xl mx-auto px-4 py-16">

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

//           {/* Logo */}
//           <div>
//             <img src={logo} alt="logo" className="w-48" />

//             <div className="flex gap-3 mt-8">
//               {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaAmazon].map(
//                 (Icon, index) => (
//                   <div
//                     key={index}
//                     className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center hover:bg-green-600 hover:text-white hover:border-green-600 transition duration-300 cursor-pointer"
//                   >
//                     <Icon size={16} />
//                   </div>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Organic */}
//           <div>
//             <h3 className="text-xl font-bold mb-5">Organic</h3>

//             <ul className="space-y-3 text-gray-600">
//               <li className="hover:text-green-600 cursor-pointer">About Us</li>
//               <li className="hover:text-green-600 cursor-pointer">Conditions</li>
//               <li className="hover:text-green-600 cursor-pointer">Our Journals</li>
//               <li className="hover:text-green-600 cursor-pointer">Careers</li>
//               <li className="hover:text-green-600 cursor-pointer">
//                 Affiliate Programme
//               </li>
//               <li className="hover:text-green-600 cursor-pointer">
//                 Ultras Press
//               </li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-xl font-bold mb-5">Quick Links</h3>

//             <ul className="space-y-3 text-gray-600">
//               <li className="hover:text-green-600 cursor-pointer">Offers</li>
//               <li className="hover:text-green-600 cursor-pointer">
//                 Discount Coupons
//               </li>
//               <li className="hover:text-green-600 cursor-pointer">Stores</li>
//               <li className="hover:text-green-600 cursor-pointer">
//                 Track Order
//               </li>
//               <li className="hover:text-green-600 cursor-pointer">Shop</li>
//               <li className="hover:text-green-600 cursor-pointer">Info</li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div>
//             <h3 className="text-xl font-bold mb-5">Customer Service</h3>

//             <ul className="space-y-3 text-gray-600">
//               <li className="hover:text-green-600 cursor-pointer">FAQ</li>
//               <li className="hover:text-green-600 cursor-pointer">Contact</li>
//               <li className="hover:text-green-600 cursor-pointer">
//                 Privacy Policy
//               </li>
//               <li className="hover:text-green-600 cursor-pointer">
//                 Returns & Refunds
//               </li>
//               <li className="hover:text-green-600 cursor-pointer">
//                 Cookie Guidelines
//               </li>
//               <li className="hover:text-green-600 cursor-pointer">
//                 Delivery Information
//               </li>
//             </ul>
//           </div>

//           {/* Subscribe */}
//           <div>
//             <h3 className="text-xl font-bold mb-5">Subscribe Us</h3>

//             <p className="text-gray-600 leading-7 mb-5">
//               Subscribe to our newsletter to get updates about our grand offers.
//             </p>

//             <div className="flex">
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 className="flex-1 h-11 px-4 bg-gray-100 outline-none border border-gray-200 rounded-l-md"
//               />

//               <button className="bg-black text-white px-5 rounded-r-md hover:bg-green-600 transition duration-300">
//                 Subscribe
//               </button>
//             </div>
//           </div>

//         </div>

//         {/* Bottom */}
//         <div className="border-t border-gray-200 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
//           <p>© 2024 Organic. All rights reserved.</p>

//           <p>
//             HTML Template by{" "}
//             <span className="text-black font-medium">TemplatesJungle</span>{" "}
//             Distributed By{" "}
//             <span className="text-black font-medium">ThemeWagon</span>
//           </p>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaAmazon,
} from "react-icons/fa";

// import logo from "../../../Images/logo.png";

import logo from "../Images/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12">

        {/* Top Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="w-36" />

            <div className="flex gap-3 mt-6">
              {[FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaAmazon].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="w-9 h-9 border border-gray-300 rounded-md flex items-center justify-center text-gray-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition duration-300 cursor-pointer"
                  >
                    <Icon size={14} />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Organic */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Organic</h3>

            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-green-600 cursor-pointer">About Us</li>
              <li className="hover:text-green-600 cursor-pointer">Conditions</li>
              <li className="hover:text-green-600 cursor-pointer">Our Journals</li>
              <li className="hover:text-green-600 cursor-pointer">Careers</li>
              <li className="hover:text-green-600 cursor-pointer">
                Affiliate Programme
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                Ultras Press
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-green-600 cursor-pointer">Offers</li>
              <li className="hover:text-green-600 cursor-pointer">
                Discount Coupons
              </li>
              <li className="hover:text-green-600 cursor-pointer">Stores</li>
              <li className="hover:text-green-600 cursor-pointer">
                Track Order
              </li>
              <li className="hover:text-green-600 cursor-pointer">Shop</li>
              <li className="hover:text-green-600 cursor-pointer">Info</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Customer Service
            </h3>

            <ul className="space-y-2 text-sm text-gray-500">
              <li className="hover:text-green-600 cursor-pointer">FAQ</li>
              <li className="hover:text-green-600 cursor-pointer">Contact</li>
              <li className="hover:text-green-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                Returns & Refunds
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                Cookie Guidelines
              </li>
              <li className="hover:text-green-600 cursor-pointer">
                Delivery Information
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Subscribe Us
            </h3>

            <p className="text-sm text-gray-500 leading-6 mb-4">
              Subscribe to our newsletter to get updates about our latest
              offers.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full h-10 px-3 border border-gray-300 rounded-l-md outline-none text-sm"
              />

              <button className="bg-black hover:bg-green-600 text-white px-4 rounded-r-md text-sm transition duration-300">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-500">

          <p>© 2024 Organic. All rights reserved.</p>

          <p className="text-center md:text-right">
            HTML Template by{" "}
            <span className="font-semibold text-gray-800">
              TemplatesJungle
            </span>{" "}
            | Distributed by{" "}
            <span className="font-semibold text-gray-800">
              ThemeWagon
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;