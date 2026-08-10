import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Lock, ChevronDown } from "lucide-react";
import Layout from "../Layout/Layout";

function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <Layout>
      <div className="bg-[#f8f8f5] min-h-screen">

        {/* Header */}
        <div className="border-b border-gray-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Home / Cart / Checkout
                </p>

                <h1 className="mt-2 text-3xl font-semibold text-gray-900">
                  Checkout
                </h1>
              </div>

              <div className="hidden items-center gap-2 text-sm text-gray-500 sm:flex">
                <Lock size={17} />
                Secure Checkout
              </div>
            </div>

          </div>
        </div>

        {/* Main */}
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.5fr_0.8fr]">

            {/* LEFT SIDE */}
            <div className="space-y-6">

              {/* Contact */}
              <section className="rounded-2xl bg-white p-6 shadow-sm">

                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Contact Information
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      We'll use this information to contact you.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <label className="mt-4 flex items-center gap-2 text-sm text-gray-600">
                  <input type="checkbox" className="accent-green-600" />
                  Email me with news and offers
                </label>

              </section>

              {/* Delivery */}
              <section className="rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="text-xl font-semibold text-gray-900">
                  Delivery Address
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Enter the address where you want your order delivered.
                </p>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="First name"
                      className="checkout-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Last name"
                      className="checkout-input"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Address
                    </label>

                    <input
                      type="text"
                      placeholder="Street address"
                      className="checkout-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      City
                    </label>

                    <input
                      type="text"
                      placeholder="City"
                      className="checkout-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      State
                    </label>

                    <input
                      type="text"
                      placeholder="State"
                      className="checkout-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      PIN Code
                    </label>

                    <input
                      type="text"
                      placeholder="302001"
                      className="checkout-input"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">
                      Phone
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="checkout-input"
                    />
                  </div>

                </div>

              </section>

              {/* Payment */}
              <section className="rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="text-xl font-semibold text-gray-900">
                  Payment Method
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Choose your preferred payment method.
                </p>

                <div className="mt-6 space-y-3">

                  {/* COD */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("cod")}
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      paymentMethod === "cod"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">

                      <input
                        type="radio"
                        checked={paymentMethod === "cod"}
                        onChange={() => setPaymentMethod("cod")}
                        className="accent-green-600"
                      />

                      <div>
                        <p className="font-medium text-gray-900">
                          Cash on Delivery
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          Pay when your order arrives.
                        </p>
                      </div>

                    </div>
                  </button>

                  {/* Online */}
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("online")}
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      paymentMethod === "online"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">

                      <input
                        type="radio"
                        checked={paymentMethod === "online"}
                        onChange={() => setPaymentMethod("online")}
                        className="accent-green-600"
                      />

                      <div>
                        <p className="font-medium text-gray-900">
                          Online Payment
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          UPI, Credit Card or Debit Card.
                        </p>
                      </div>

                    </div>
                  </button>

                </div>

              </section>

            </div>

            {/* RIGHT SIDE */}
            <div>

              <div className="sticky top-6 rounded-2xl bg-white p-6 shadow-sm">

                <h2 className="text-xl font-semibold text-gray-900">
                  Order Summary
                </h2>

                {/* Product */}
                <div className="mt-6 flex gap-4 border-b border-gray-100 pb-5">

                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-[#f3f4ef]">
                    <span className="text-xs text-gray-400">
                      Product
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      Organic Fresh Product
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Quantity: 1
                    </p>

                    <p className="mt-2 font-semibold text-gray-900">
                      ₹499
                    </p>
                  </div>

                </div>

                {/* Coupon */}
                <div className="mt-5 flex gap-2">

                  <input
                    type="text"
                    placeholder="Discount code"
                    className="min-w-0 flex-1 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-green-500"
                  />

                  <button className="rounded-xl border border-gray-300 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Apply
                  </button>

                </div>

                {/* Price */}
                <div className="mt-6 space-y-3 border-b border-gray-100 pb-5">

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>₹499</span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600">
                      FREE
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Tax</span>
                    <span>₹50</span>
                  </div>

                </div>

                <div className="flex justify-between py-5">

                  <span className="text-lg font-semibold text-gray-900">
                    Total
                  </span>

                  <span className="text-xl font-bold text-gray-900">
                    ₹549
                  </span>

                </div>

                <button className="w-full rounded-xl bg-green-600 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-green-700">
                  Place Order
                </button>

                <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                  By placing your order, you agree to our terms and
                  conditions.
                </p>

                <Link
                  to="/Cart"
                  className="mt-5 flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-green-600"
                >
                  ← Return to Cart
                </Link>

              </div>

            </div>

          </div>

        </div>
      </div>
    </Layout>
  );
}

export default Checkout;