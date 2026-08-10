import React from "react";
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

import Layout from "../Layout/Layout";

function MyAccount() {
  return (
    <>
    <Layout>
      <div className="min-h-screen bg-[#f8faf6]">

        {/* ================= HERO ================= */}
        <section className="bg-[#eef5e8] px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="mx-auto max-w-7xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              My Account
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              Welcome Back
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Manage your profile, orders, wishlist and account settings
              from one place.
            </p>

          </div>
        </section>


        {/* ================= ACCOUNT CONTENT ================= */}
        <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-7 lg:grid-cols-[260px_1fr]">

              {/* ================= SIDEBAR ================= */}
              <aside>

                <div className="rounded-3xl bg-white p-5 shadow-sm">

                  {/* Profile */}
                  <div className="border-b border-gray-100 pb-5">

                    <div className="flex items-center gap-3">

                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#dfe9d5]">
                        <User
                          size={25}
                          className="text-green-700"
                        />
                      </div>

                      <div>
                        <h2 className="font-semibold text-gray-900">
                          John Doe
                        </h2>

                        <p className="text-xs text-gray-500">
                          john@example.com
                        </p>
                      </div>

                    </div>

                  </div>


                  {/* Menu */}
                  <nav className="mt-5 space-y-1">

                    <button className="flex w-full items-center gap-3 rounded-xl bg-[#eef5e8] px-4 py-3 text-left text-sm font-semibold text-green-700">
                      <User size={18} />
                      My Profile
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
                      <Package size={18} />
                      My Orders
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
                      <Heart size={18} />
                      Wishlist
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
                      <MapPin size={18} />
                      Addresses
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
                      <CreditCard size={18} />
                      Payment Methods
                    </button>

                    <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-gray-600 transition hover:bg-gray-50">
                      <Settings size={18} />
                      Settings
                    </button>

                    <div className="my-3 border-t border-gray-100" />

                    <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-red-500 transition hover:bg-red-50">
                      <LogOut size={18} />
                      Logout
                    </button>

                  </nav>

                </div>

              </aside>


              {/* ================= MAIN ================= */}
              <main className="space-y-7">

                {/* Profile Card */}
                <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">

                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                        Personal Information
                      </p>

                      <h2 className="mt-2 text-2xl font-bold text-gray-900">
                        My Profile
                      </h2>
                    </div>

                    <button className="rounded-full border border-green-600 px-5 py-2.5 text-sm font-semibold text-green-600 transition hover:bg-green-600 hover:text-white">
                      Edit Profile
                    </button>

                  </div>


                  <div className="mt-8 grid gap-5 sm:grid-cols-2">

                    <div>
                      <label className="text-xs font-medium text-gray-400">
                        Full Name
                      </label>

                      <div className="mt-2 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700">
                        John Doe
                      </div>
                    </div>


                    <div>
                      <label className="text-xs font-medium text-gray-400">
                        Email Address
                      </label>

                      <div className="mt-2 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700">
                        john@example.com
                      </div>
                    </div>


                    <div>
                      <label className="text-xs font-medium text-gray-400">
                        Phone Number
                      </label>

                      <div className="mt-2 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700">
                        +91 98765 43210
                      </div>
                    </div>


                    <div>
                      <label className="text-xs font-medium text-gray-400">
                        Country
                      </label>

                      <div className="mt-2 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-700">
                        India
                      </div>
                    </div>

                  </div>

                </div>


                {/* ================= STATS ================= */}
                <div className="grid gap-5 sm:grid-cols-3">

                  <div className="rounded-3xl bg-white p-6 shadow-sm">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef5e8]">
                      <Package
                        size={20}
                        className="text-green-600"
                      />
                    </div>

                    <p className="mt-5 text-2xl font-bold text-gray-900">
                      12
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Total Orders
                    </p>

                  </div>


                  <div className="rounded-3xl bg-white p-6 shadow-sm">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef5e8]">
                      <Heart
                        size={20}
                        className="text-green-600"
                      />
                    </div>

                    <p className="mt-5 text-2xl font-bold text-gray-900">
                      8
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Wishlist Items
                    </p>

                  </div>


                  <div className="rounded-3xl bg-white p-6 shadow-sm">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef5e8]">
                      <MapPin
                        size={20}
                        className="text-green-600"
                      />
                    </div>

                    <p className="mt-5 text-2xl font-bold text-gray-900">
                      2
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Saved Addresses
                    </p>

                  </div>

                </div>


                {/* ================= RECENT ORDERS ================= */}
                <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                        Your Activity
                      </p>

                      <h2 className="mt-2 text-2xl font-bold text-gray-900">
                        Recent Orders
                      </h2>
                    </div>

                    <button className="hidden items-center gap-1 text-sm font-semibold text-green-600 sm:flex">
                      View All
                      <ChevronRight size={16} />
                    </button>

                  </div>


                  <div className="mt-7 space-y-4">

                    {/* ORDER 1 */}
                    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef5e8]">
                          <Package
                            size={20}
                            className="text-green-600"
                          />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            Order #ORG-1024
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            August 08, 2026 · 3 Items
                          </p>
                        </div>

                      </div>

                      <div className="flex items-center justify-between gap-5 sm:justify-end">

                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          Delivered
                        </span>

                        <span className="text-sm font-bold text-gray-900">
                          ₹840
                        </span>

                      </div>

                    </div>


                    {/* ORDER 2 */}
                    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef5e8]">
                          <Package
                            size={20}
                            className="text-green-600"
                          />
                        </div>

                        <div>
                          <h3 className="text-sm font-semibold text-gray-900">
                            Order #ORG-1021
                          </h3>

                          <p className="mt-1 text-xs text-gray-500">
                            August 02, 2026 · 2 Items
                          </p>
                        </div>

                      </div>

                      <div className="flex items-center justify-between gap-5 sm:justify-end">

                        <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
                          Processing
                        </span>

                        <span className="text-sm font-bold text-gray-900">
                          ₹560
                        </span>

                      </div>

                    </div>

                  </div>

                </div>


                {/* ================= ADDRESS ================= */}
                <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">

                  <div className="flex items-center justify-between">

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-green-600">
                        Delivery
                      </p>

                      <h2 className="mt-2 text-2xl font-bold text-gray-900">
                        Saved Address
                      </h2>
                    </div>

                    <button className="text-sm font-semibold text-green-600">
                      Edit
                    </button>

                  </div>


                  <div className="mt-6 rounded-2xl bg-[#f8faf6] p-5">

                    <div className="flex gap-4">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                        <MapPin
                          size={18}
                          className="text-green-600"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Home
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-500">
                          123 Green Street, Jaipur, Rajasthan,
                          India - 302001
                        </p>
                      </div>

                    </div>

                  </div>

                </div>

              </main>

            </div>

          </div>
        </section>

      </div>
    </Layout>
    </>
  );
}

export default MyAccount;