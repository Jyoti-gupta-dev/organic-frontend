
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

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <header className="relative z-[9999] isolate w-full bg-white font-['Oswald',_sans-serif]">

      {/* Google Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap"
      />

      {/* Main Navbar */}
      <div className="relative z-[9999] mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-6">

        {/* Logo + Hamburger */}
        <div className="flex shrink-0 items-center gap-2">

          <img
            src={logo}
            alt="Organic Logo"
            className="w-16 h-16 object-contain"
          />

          <span className="text-2xl font-semibold tracking-tight text-gray-900">
            Organic
          </span>

          <button
            className="ml-1 text-gray-600 lg:ml-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

        </div>


        {/* Search Bar - Desktop */}
        <div className="hidden max-w-xl flex-1 items-center rounded-full bg-gray-50 md:flex">

          <button className="flex shrink-0 items-center gap-1 py-2.5 pl-5 pr-2 text-sm text-gray-400 hover:text-gray-600">
            All Categories
            <ChevronDown size={14} />
          </button>

          <span className="h-4 w-px bg-gray-200" />

          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            className="w-full bg-transparent px-4 py-2.5 text-sm text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />

          <button
            className="shrink-0 pl-2 pr-5 text-gray-500 hover:text-gray-700"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

        </div>


        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">

          {/* Home */}
          <a
            href="#"
            className="text-[15px] font-semibold uppercase tracking-wide text-gray-900 hover:text-green-600"
          >
            Home
          </a>


          {/* Pages Dropdown */}
          <div className="relative">

            <button
              className="flex items-center gap-1 text-[15px] font-semibold uppercase tracking-wide text-gray-900 hover:text-green-600"
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


            {/* Dropdown */}
            {pagesOpen && (
              <div className="absolute right-0 top-full z-[99999] mt-3 w-48 rounded-md border border-gray-100 bg-white py-2 shadow-xl">

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  ABOUT US
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  SHOP
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  SINGLE PRODUCT
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  CART
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  CHECKOUT
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  BLOG
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  SINGLE POST
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  STYLES
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  CONTACT
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  THANK YOU
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  MY ACCOUNT
                </a>

                <a
                  href="#"
                  className="block px-5 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-600"
                >
                  404 ERROR
                </a>

              </div>
            )}

          </div>

        </nav>


        {/* Right Icons */}
        <div className="flex shrink-0 items-center gap-4 pl-4 lg:border-l lg:border-gray-200">

          {/* User */}
          <button
            className="text-gray-700 hover:text-green-600"
            aria-label="Account"
          >
            <User size={20} strokeWidth={1.6} />
          </button>


          {/* Wishlist */}
          <button
            className="hidden text-gray-700 hover:text-green-600 sm:block"
            aria-label="Wishlist"
          >
            <Bookmark size={20} strokeWidth={1.6} />
          </button>


          {/* Cart */}
          <button
            className="hidden text-gray-700 hover:text-green-600 sm:block"
            aria-label="Cart"
          >
            <ShoppingBasket size={20} strokeWidth={1.6} />
          </button>

        </div>

      </div>


      {/* Mobile Search */}
      <div className="border-t border-gray-100 px-4 py-2 md:hidden">

        <div className="flex items-center rounded-md border border-gray-200">

          <input
            type="text"
            placeholder="Search for more than 20,000 products"
            className="w-full bg-transparent px-3 py-2 text-sm text-gray-500 placeholder:text-gray-400 focus:outline-none"
          />

          <button
            className="shrink-0 px-3 py-2 text-gray-500"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="relative z-[9999] flex flex-col gap-1 border-t border-gray-100 bg-white px-4 py-3 lg:hidden">

          {/* Home */}
          <a
            href="#"
            className="rounded-md px-2 py-2 text-sm font-semibold tracking-wide text-gray-900 hover:bg-gray-50"
          >
            HOME
          </a>


          {/* Mobile Pages */}
          <button
            className="flex items-center justify-between rounded-md px-2 py-2 text-sm font-semibold tracking-wide text-gray-900 hover:bg-gray-50"
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


          {pagesOpen && (
            <div className="ml-4 flex flex-col gap-1">

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                ABOUT US
              </a>

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                SHOP
              </a>

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                SINGLE PRODUCT
              </a>

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                CART
              </a>

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                CHECKOUT
              </a>

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                BLOG
              </a>

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                SINGLE POST
              </a>

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                STYLES
              </a>

              <a
                href="#"
                className="rounded-md px-2 py-2 text-sm text-gray-600 hover:bg-gray-50"
              >
                CONTACT
              </a>

            </div>
          )}


          {/* Mobile Icons */}
          <div className="mt-2 flex items-center gap-5 border-t border-gray-100 px-2 pt-3">

            <button className="flex items-center gap-2 text-sm text-gray-700">
              <Bookmark size={18} />
              Wishlist
            </button>

            <button className="flex items-center gap-2 text-sm text-gray-700">
              <ShoppingBasket size={18} />
              Cart
            </button>

          </div>

        </nav>
      )}

    </header>
  );
}

export default Navbar;