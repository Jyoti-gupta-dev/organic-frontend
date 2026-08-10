import React from "react";
import {
  CheckCircle,
  ShoppingBag,
  ArrowRight,
  Home,
  Package,
} from "lucide-react";

import Layout from "../Layout/Layout";

function ThankYou() {
  return (
    <>
    <Layout>
      <div className="min-h-[80vh] bg-[#f8faf6] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">

        <div className="mx-auto max-w-3xl">

          {/* ================= SUCCESS CARD ================= */}
          <div className="rounded-[32px] bg-white px-6 py-12 text-center shadow-sm sm:px-12 sm:py-16">

            {/* SUCCESS ICON */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle
                size={48}
                className="text-green-600"
              />
            </div>

            {/* TITLE */}
            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Order Confirmed
            </p>

            <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">
              Thank You!
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
              Your order has been successfully placed. We appreciate your
              trust in us and can't wait to deliver fresh and organic
              products to you.
            </p>


            {/* ORDER NUMBER */}
            <div className="mx-auto mt-8 max-w-md rounded-2xl bg-[#eef5e8] p-5">

              <p className="text-xs font-medium uppercase tracking-wide text-gray-500">
                Your Order Number
              </p>

              <p className="mt-2 text-xl font-bold text-green-700">
                #ORG-1025
              </p>

            </div>


            {/* ================= ORDER INFO ================= */}
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">

              <div className="rounded-2xl border border-gray-100 p-5">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef5e8]">
                    <Package
                      size={19}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Delivery
                    </p>

                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      3–5 Business Days
                    </p>
                  </div>
                </div>

              </div>


              <div className="rounded-2xl border border-gray-100 p-5">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef5e8]">
                    <ShoppingBag
                      size={19}
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      Order Status
                    </p>

                    <p className="mt-1 text-sm font-semibold text-green-600">
                      Confirmed
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* ================= BUTTONS ================= */}
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">

              <a
                href="/Shop"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Continue Shopping
                <ShoppingBag size={17} />
              </a>

              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 px-7 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Back to Home
                <Home size={17} />
              </a>

            </div>


            {/* VIEW ORDER */}
            <a
              href="/my-account"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:gap-3"
            >
              View My Orders
              <ArrowRight size={16} />
            </a>

          </div>


          {/* ================= BOTTOM MESSAGE ================= */}
          <div className="mt-8 text-center">

            <p className="text-sm text-gray-500">
              Need help with your order?
            </p>

            <a
              href="/Contact"
              className="mt-2 inline-block text-sm font-semibold text-green-600 hover:text-green-700"
            >
              Contact our support team
            </a>

          </div>

        </div>

      </div>
    </Layout>
    </>
  );
}

export default ThankYou;