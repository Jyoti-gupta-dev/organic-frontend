
// import React, { useState } from "react";
// import {
//   Menu,
//   X,
//   ChevronDown,
//   Search,
//   User,
//   Bookmark,
//   ShoppingBasket,
// } from "lucide-react";

// import logo from "../Images/logo.png";
// import { Link } from "react-router-dom";

// function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [pagesOpen, setPagesOpen] = useState(false);

//   const closeMenus = () => {
//     setMobileOpen(false);
//     setPagesOpen(false);
//   };

//   return (
//     <header className="relative z-50 bg-white">
//       {/* Main Navbar */}
//       <div className="flex min-h-[80px] items-center justify-between gap-4 px-4 py-3 lg:px-8">

//         {/* Logo + Hamburger */}
//         <div className="flex shrink-0 items-center">
//           <Link
//             to="/"
//             onClick={closeMenus}
//             className="flex items-center"
//           >
//             <img
//               src={logo}
//               alt="Organic Logo"
//               className="h-16 w-16 object-contain"
//             />

//             <span className="text-2xl font-semibold tracking-tight text-gray-900">
//               Organic
//             </span>
//           </Link>

//           {/* Mobile Hamburger */}
//           <button
//             className="ml-3 text-gray-600 lg:hidden"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             aria-label="Toggle menu"
//           >
//             {mobileOpen ? <X size={22} /> : <Menu size={22} />}
//           </button>
//         </div>

//         {/* Desktop Search */}
//         <div className="hidden max-w-xl flex-1 items-center rounded-full bg-gray-50 md:flex">
//           <button className="flex shrink-0 items-center gap-1 py-2.5 pl-5 pr-2 text-sm text-gray-400 hover:text-gray-600">
//             All Categories
//             <ChevronDown size={14} />
//           </button>

//           <span className="h-4 w-px bg-gray-200" />

//           <input
//             type="text"
//             placeholder="Search for more than 20,000 products"
//             className="w-full bg-transparent px-4 py-2.5 text-sm text-gray-500 placeholder:text-gray-400 focus:outline-none"
//           />

//           <button
//             className="shrink-0 pl-2 pr-5 text-gray-500 hover:text-gray-700"
//             aria-label="Search"
//           >
//             <Search size={18} />
//           </button>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden items-center gap-7 lg:flex">

//           {/* Home */}
//           <Link
//             to="/"
//             className="text-[15px] font-semibold uppercase tracking-wide text-gray-900 hover:text-green-600"
//           >
//             Home
//           </Link>

//           {/* Pages */}
//           <div className="relative">
//             <button
//               className="flex items-center gap-1 text-[15px] font-semibold uppercase tracking-wide text-gray-900 hover:text-green-600"
//               onClick={() => setPagesOpen(!pagesOpen)}
//             >
//               Pages

//               <ChevronDown
//                 size={14}
//                 className={
//                   pagesOpen
//                     ? "rotate-180 transition-transform"
//                     : "transition-transform"
//                 }
//               />
//             </button>

//             {/* Desktop Dropdown */}
//             {pagesOpen && (
//               <div className="absolute right-0 top-full z-[99999] mt-3 w-52 rounded-md border border-gray-100 bg-white py-2 shadow-xl">

//                 <Link
//                   to="/Aboutus"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   ABOUT US
//                 </Link>

//                 <Link
//                   to="/shop"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   SHOP
//                 </Link>

//                 <Link
//                   to="/single-product"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   SINGLE PRODUCT
//                 </Link>

//                 <Link
//                   to="/cart"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   CART
//                 </Link>

//                 <Link
//                   to="/checkout"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   CHECKOUT
//                 </Link>

//                 <Link
//                   to="/blog"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   BLOG
//                 </Link>

//                 <Link
//                   to="/single-post"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   SINGLE POST
//                 </Link>

//                 <Link
//                   to="/styles"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   STYLES
//                 </Link>

//                 <Link
//                   to="/contact"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   CONTACT
//                 </Link>

//                 <Link
//                   to="/thank-you"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   THANK YOU
//                 </Link>

//                 <Link
//                   to="/my-account"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   MY ACCOUNT
//                 </Link>

//                 <Link
//                   to="/404"
//                   onClick={closeMenus}
//                   className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
//                 >
//                   404 ERROR
//                 </Link>

//               </div>
//             )}
//           </div>
//         </nav>

//         {/* Right Icons */}
//         <div className="flex shrink-0 items-center gap-4 pl-4 lg:border-l lg:border-gray-200">

//           {/* Account */}
//           <Link
//             to="/my-account"
//             aria-label="Account"
//             className="text-gray-700 hover:text-green-600"
//           >
//             <User size={20} strokeWidth={1.6} />
//           </Link>

//           {/* Wishlist */}
//           <button
//             className="hidden text-gray-700 hover:text-green-600 sm:block"
//             aria-label="Wishlist"
//           >
//             <Bookmark size={20} strokeWidth={1.6} />
//           </button>

//           {/* Cart */}
//           <Link
//             to="/cart"
//             aria-label="Cart"
//             className="hidden text-gray-700 hover:text-green-600 sm:block"
//           >
//             <ShoppingBasket size={20} strokeWidth={1.6} />
//           </Link>

//           {/* Login */}
//           <Link
//             to="/login"
//             className=" hiddenrounded-mdborderborder-green-600px-4py-2text-smfont-semiboldtext-green-600hover:bg-green-600hover:text-whitetransition sm:block" >
//             LOGIN
//           </Link>


//           {/* Create Product */}
//           <Link
//             to="/createproduct"
//             className="hidden rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white hover:bg-green-700 sm:block"
//           >
//             CREATE PRODUCT
//           </Link>

//         </div>
//       </div>

//       {/* Mobile Search */}
//       <div className="border-t border-gray-100 px-4 py-2 md:hidden">
//         <div className="flex items-center rounded-md border border-gray-200">

//           <input
//             type="text"
//             placeholder="Search for more than 20,000 products"
//             className="w-full bg-transparent px-3 py-2 text-sm text-gray-500 placeholder:text-gray-400 focus:outline-none"
//           />

//           <button
//             className="shrink-0 px-3 py-2 text-gray-500"
//             aria-label="Search"
//           >
//             <Search size={18} />
//           </button>

//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <nav className="border-t border-gray-100 bg-white px-4 py-3 lg:hidden">

//           {/* Home */}
//           <Link
//             to="/"
//             onClick={closeMenus}
//             className="block rounded-md px-2 py-2 text-sm font-semibold tracking-wide text-gray-900 hover:bg-gray-50"
//           >
//             HOME
//           </Link>

//           {/* Pages Button */}
//           <button
//             className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-semibold tracking-wide text-gray-900 hover:bg-gray-50"
//             onClick={() => setPagesOpen(!pagesOpen)}
//           >
//             PAGES

//             <ChevronDown
//               size={14}
//               className={
//                 pagesOpen
//                   ? "rotate-180 transition-transform"
//                   : "transition-transform"
//               }
//             />
//           </button>

//           {/* Mobile Pages */}
//           {pagesOpen && (
//             <div className="ml-4 flex flex-col gap-1">

//               <Link
//                 to="/Aboutus"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 ABOUT US
//               </Link>

//               <Link
//                 to="/shop"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 SHOP
//               </Link>

//               <Link
//                 to="/single-product"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 SINGLE PRODUCT
//               </Link>

//               <Link
//                 to="/cart"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 CART
//               </Link>

//               <Link
//                 to="/checkout"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 CHECKOUT
//               </Link>

//               <Link
//                 to="/blog"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 BLOG
//               </Link>

//               <Link
//                 to="/SinglePost"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 SINGLE POST
//               </Link>

//               <Link
//                 to="/styles"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 STYLES
//               </Link>

//               <Link
//                 to="/contact"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 CONTACT
//               </Link>

//               <Link
//                 to="/thank-you"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 THANK YOU
//               </Link>

//               <Link
//                 to="/MyAccount"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 MY ACCOUNT
//               </Link>

//               <Link
//                 to="/Error"
//                 onClick={closeMenus}
//                 className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
//               >
//                 404
//               </Link>

//             </div>
//           )}
//         </nav>
//       )}
//     </header>
//   );
// }

// export default Navbar;


import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  User,
  Bookmark,
  ShoppingBasket,
} from "lucide-react";

import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const closeMenus = () => {
    setMobileOpen(false);
    setPagesOpen(false);
  };

  return (
    <header className="relative z-50 bg-white">

      {/* ===================================================== */}
      {/* MAIN NAVBAR */}
      {/* ===================================================== */}

      <div
        className="
          flex
          min-h-[80px]
          items-center
          justify-between
          gap-3
          px-4
          py-3
          lg:px-8
        "
      >

        {/* ================================================= */}
        {/* LOGO + HAMBURGER */}
        {/* ================================================= */}

        <div className="flex shrink-0 items-center">

          <Link
            to="/"
            onClick={closeMenus}
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Organic Logo"
              className="h-16 w-16 object-contain"
            />

            <span
              className="
                text-2xl
                font-semibold
                tracking-tight
                text-gray-900
              "
            >
              Organic
            </span>
          </Link>

          {/* Mobile Hamburger */}

          <button
            type="button"
            className="
              ml-3
              text-gray-600
              hover:text-green-600
              lg:hidden
            "
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>

        {/* ================================================= */}
        {/* DESKTOP SEARCH */}
        {/* ================================================= */}

        <div
          className="
            hidden
            max-w-xl
            flex-1
            items-center
            rounded-full
            bg-gray-50
            md:flex
          "
        >

          <button
            type="button"
            className="
              flex
              shrink-0
              items-center
              gap-1
              py-2.5
              pl-5
              pr-2
              text-sm
              text-gray-400
              hover:text-gray-600
            "
          >
            All Categories
            <ChevronDown size={14} />
          </button>

          <span className="h-4 w-px bg-gray-200" />

          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            className="
              w-full
              bg-transparent
              px-4
              py-2.5
              text-sm
              text-gray-500
              placeholder:text-gray-400
              focus:outline-none
            "
          />

          <button
            type="button"
            className="
              shrink-0
              pl-2
              pr-5
              text-gray-500
              hover:text-gray-700
            "
            aria-label="Search"
          >
            <Search size={18} />
          </button>

        </div>

        {/* ================================================= */}
        {/* DESKTOP NAVIGATION */}
        {/* ================================================= */}

        <nav className="hidden items-center gap-7 lg:flex">

          {/* Home */}

          <Link
            to="/"
            onClick={closeMenus}
            className="
              text-[15px]
              font-semibold
              uppercase
              tracking-wide
              text-gray-900
              hover:text-green-600
            "
          >
            Home
          </Link>

          {/* Pages */}

          <div className="relative">

            <button
              type="button"
              className="
                flex
                items-center
                gap-1
                text-[15px]
                font-semibold
                uppercase
                tracking-wide
                text-gray-900
                hover:text-green-600
              "
              onClick={() => setPagesOpen(!pagesOpen)}
            >
              Pages

              <ChevronDown
                size={14}
                className={
                  pagesOpen
                    ? "rotate-180 transition-transform"
                    : "transition-transform"
                }
              />
            </button>

            {/* Desktop Dropdown */}

            {pagesOpen && (
              <div
                className="
                  absolute
                  right-0
                  top-full
                  z-[99999]
                  mt-3
                  w-52
                  rounded-md
                  border
                  border-gray-100
                  bg-white
                  py-2
                  shadow-xl
                "
              >

                <Link
                  to="/Aboutus"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  ABOUT US
                </Link>

                <Link
                  to="/shop"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  SHOP
                </Link>

                <Link
                  to="/single-product"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  SINGLE PRODUCT
                </Link>

                <Link
                  to="/cart"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  CART
                </Link>

                <Link
                  to="/checkout"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  CHECKOUT
                </Link>

                <Link
                  to="/blog"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  BLOG
                </Link>

                <Link
                  to="/single-post"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  SINGLE POST
                </Link>

                <Link
                  to="/styles"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  STYLES
                </Link>

                <Link
                  to="/contact"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  CONTACT
                </Link>

                <Link
                  to="/thank-you"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  THANK YOU
                </Link>

                <Link
                  to="/my-account"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  MY ACCOUNT
                </Link>

                <Link
                  to="/404"
                  onClick={closeMenus}
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  404 ERROR
                </Link>

              </div>
            )}

          </div>

        </nav>

        {/* ================================================= */}
        {/* RIGHT SIDE */}
        {/* ================================================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            gap-3
            pl-2
            sm:gap-4
            sm:pl-4
            lg:border-l
            lg:border-gray-200
          "
        >

          {/* Account */}

          <Link
            to="/my-account"
            onClick={closeMenus}
            aria-label="Account"
            className="
              text-gray-700
              transition
              hover:text-green-600
            "
          >
            <User
              size={20}
              strokeWidth={1.6}
            />
          </Link>

          {/* Wishlist */}

          <button
            type="button"
            className="
              hidden
              text-gray-700
              transition
              hover:text-green-600
              sm:block
            "
            aria-label="Wishlist"
          >
            <Bookmark
              size={20}
              strokeWidth={1.6}
            />
          </button>

          {/* Cart */}

          <Link
            to="/cart"
            onClick={closeMenus}
            aria-label="Cart"
            className="
              hidden
              text-gray-700
              transition
              hover:text-green-600
              sm:block
            "
          >
            <ShoppingBasket
              size={20}
              strokeWidth={1.6}
            />
          </Link>

          {/* ================================================= */}
          {/* LOGIN BUTTON */}
          {/* ================================================= */}

          <Link
            to="/login"
            onClick={closeMenus}
            className="
              hidden
              items-center
              justify-center
              rounded-md
              border
              border-green-600
              px-4
              py-2
              text-sm
              font-semibold
              text-green-600
              transition-all
              duration-200
              hover:bg-green-600
              hover:text-white
              sm:flex
            "
          >
            LOGIN
          </Link>

          {/* ================================================= */}
          {/* CREATE PRODUCT */}
          {/* ================================================= */}

          <Link
            to="/createproduct"
            onClick={closeMenus}
            className="
              hidden
              rounded-md
              bg-green-600
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-green-700
              sm:block
            "
          >
            CREATE PRODUCT
          </Link>

        </div>

      </div>

      {/* ===================================================== */}
      {/* MOBILE SEARCH */}
      {/* ===================================================== */}

      <div
        className="
          border-t
          border-gray-100
          px-4
          py-2
          md:hidden
        "
      >

        <div
          className="
            flex
            items-center
            rounded-md
            border
            border-gray-200
          "
        >

          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            className="
              w-full
              bg-transparent
              px-3
              py-2
              text-sm
              text-gray-500
              placeholder:text-gray-400
              focus:outline-none
            "
          />

          <button
            type="button"
            className="
              shrink-0
              px-3
              py-2
              text-gray-500
              hover:text-green-600
            "
            aria-label="Search"
          >
            <Search size={18} />
          </button>

        </div>

      </div>

      {/* ===================================================== */}
      {/* MOBILE MENU */}
      {/* ===================================================== */}

      {mobileOpen && (
        <nav
          className="
            border-t
            border-gray-100
            bg-white
            px-4
            py-3
            shadow-sm
            lg:hidden
          "
        >

          {/* Home */}

          <Link
            to="/"
            onClick={closeMenus}
            className="
              block
              rounded-md
              px-2
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-gray-900
              hover:bg-gray-50
              hover:text-green-600
            "
          >
            HOME
          </Link>

          {/* Pages Button */}

          <button
            type="button"
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-md
              px-2
              py-2
              text-sm
              font-semibold
              tracking-wide
              text-gray-900
              hover:bg-gray-50
            "
            onClick={() => setPagesOpen(!pagesOpen)}
          >
            PAGES

            <ChevronDown
              size={14}
              className={
                pagesOpen
                  ? "rotate-180 transition-transform"
                  : "transition-transform"
              }
            />

          </button>

          {/* Mobile Pages */}

          {pagesOpen && (
            <div className="ml-4 flex flex-col gap-1">

              <Link
                to="/Aboutus"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                ABOUT US
              </Link>

              <Link
                to="/shop"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                SHOP
              </Link>

              <Link
                to="/single-product"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                SINGLE PRODUCT
              </Link>

              <Link
                to="/cart"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                CART
              </Link>

              <Link
                to="/checkout"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                CHECKOUT
              </Link>

              <Link
                to="/blog"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                BLOG
              </Link>

              <Link
                to="/single-post"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                SINGLE POST
              </Link>

              <Link
                to="/styles"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                STYLES
              </Link>

              <Link
                to="/contact"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                CONTACT
              </Link>

              <Link
                to="/thank-you"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                THANK YOU
              </Link>

              <Link
                to="/my-account"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                MY ACCOUNT
              </Link>

              <Link
                to="/404"
                onClick={closeMenus}
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-green-600"
              >
                404 ERROR
              </Link>

            </div>
          )}

          {/* ================================================= */}
          {/* MOBILE LOGIN */}
          {/* ================================================= */}

          <Link
            to="/login"
            onClick={closeMenus}
            className="
              mt-3
              flex
              w-full
              items-center
              justify-center
              rounded-md
              bg-green-600
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-200
              hover:bg-green-700
            "
          >
            LOGIN
          </Link>

        </nav>
      )}

    </header>
  );
}

export default Navbar;