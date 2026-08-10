import React from "react";
import {
  ArrowRight,
  Leaf,
  Heart,
  Apple,
  Droplets,
  ShoppingBasket,
} from "lucide-react";

import Layout from "../Layout/Layout";

function Styles() {
  return (
    <>
    <Layout>
      <div className="bg-white">

        {/* ================= HERO ================= */}
        <section className="bg-[#f5f8f1] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                Organic Lifestyle
              </p>

              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Live Naturally,
                <span className="text-green-600"> Live Better</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
                Discover simple ways to bring fresh food, natural choices
                and healthier habits into your everyday lifestyle.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                <a
                  href="/Shop"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
                >
                  Explore Products
                  <ArrowRight size={17} />
                </a>

                <a
                  href="/Blog"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
                >
                  Read Our Blog
                </a>

              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="overflow-hidden rounded-[32px]">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1000&q=80"
                alt="Healthy organic food"
                className="h-[350px] w-full object-cover sm:h-[450px] lg:h-[520px]"
              />
            </div>

          </div>
        </section>


        {/* ================= INTRO ================= */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
              Our Approach
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
              Small Choices Can Make a Big Difference
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600">
              Living an organic lifestyle does not mean changing everything
              overnight. It starts with simple choices — fresh ingredients,
              balanced meals, natural products and mindful daily habits.
            </p>

          </div>
        </section>


        {/* ================= LIFESTYLE CARDS ================= */}
        <section className="bg-[#f8faf6] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">

            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                Organic Living
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Find Your Healthy Style
              </h2>
            </div>


            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              {/* CARD 1 */}
              <div className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <Apple className="text-green-600" size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Healthy Food
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Choose fresh fruits, vegetables and natural ingredients
                  to create balanced everyday meals.
                </p>

                <a
                  href="/Shop"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:gap-3"
                >
                  Shop Fresh Food
                  <ArrowRight size={16} />
                </a>

              </div>


              {/* CARD 2 */}
              <div className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <Leaf className="text-green-600" size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Natural Choices
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Make thoughtful choices by bringing more natural and
                  carefully selected products into your daily routine.
                </p>

                <a
                  href="/Shop"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:gap-3"
                >
                  Explore Products
                  <ArrowRight size={16} />
                </a>

              </div>


              {/* CARD 3 */}
              <div className="rounded-3xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100">
                  <Heart className="text-green-600" size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  Everyday Wellness
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Build simple habits that support a balanced and
                  comfortable everyday lifestyle.
                </p>

                <a
                  href="/Blog"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-green-600 hover:gap-3"
                >
                  Read Healthy Tips
                  <ArrowRight size={16} />
                </a>

              </div>

            </div>
          </div>
        </section>


        {/* ================= FRESH FOOD ================= */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

            {/* IMAGE */}
            <div className="order-2 overflow-hidden rounded-[32px] lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80"
                alt="Fresh organic vegetables"
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />
            </div>

            {/* CONTENT */}
            <div className="order-1 lg:order-2">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                Fresh Food
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
                Make Fresh Ingredients Part of Your Everyday Life
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Fresh ingredients can make everyday meals more enjoyable.
                Keep seasonal fruits, vegetables and natural products
                available in your kitchen for simple and healthy choices.
              </p>

              <div className="mt-7 space-y-4">

                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Leaf size={18} className="text-green-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Choose Fresh
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Prefer fresh and seasonal ingredients whenever possible.
                    </p>
                  </div>
                </div>


                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100">
                    <Apple size={18} className="text-green-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Eat Balanced
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Add variety to your meals with fruits and vegetables.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= NATURAL KITCHEN ================= */}
        <section className="bg-[#eef5e8] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-8 lg:grid-cols-3">

              <div className="lg:col-span-1">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Natural Kitchen
                </p>

                <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                  Create a Kitchen You Love
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600">
                  Keep your kitchen simple, fresh and organized with
                  ingredients that make healthy cooking easier.
                </p>
              </div>


              <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">

                <div className="rounded-3xl bg-white p-6">
                  <Droplets className="text-green-600" size={28} />

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    Stay Hydrated
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Make water a simple and consistent part of your
                    everyday routine.
                  </p>
                </div>


                <div className="rounded-3xl bg-white p-6">
                  <ShoppingBasket className="text-green-600" size={28} />

                  <h3 className="mt-5 text-xl font-bold text-gray-900">
                    Shop Mindfully
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Choose products thoughtfully and focus on quality
                    ingredients for your home.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ================= HABITS ================= */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                Everyday Habits
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
                Simple Habits for a Better Day
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-600">
                Healthy living can start with small habits that fit
                naturally into your daily routine.
              </p>

            </div>


            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Start your day with fresh food",
                "Drink enough water",
                "Choose seasonal ingredients",
                "Make time for balanced meals",
              ].map((habit, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm"
                >

                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef5e8] text-lg font-bold text-green-600">
                    {index + 1}
                  </div>

                  <p className="mt-5 text-sm font-semibold leading-6 text-gray-800">
                    {habit}
                  </p>

                </div>
              ))}

            </div>

          </div>
        </section>


        {/* ================= CTA ================= */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-[#dfe9d5]">

            <div className="px-6 py-14 text-center sm:px-12 lg:px-20 lg:py-20">

              <Leaf
                size={34}
                className="mx-auto text-green-700"
              />

              <h2 className="mt-5 text-3xl font-bold text-gray-900 sm:text-4xl">
                Start Your Organic Journey
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                Discover fresh products and simple ideas that can help
                you make natural choices every day.
              </p>

              <a
                href="/Shop"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                Shop Now
                <ArrowRight size={17} />
              </a>

            </div>

          </div>
        </section>

      </div>
    </Layout>
    </>
  );
}

export default Styles;