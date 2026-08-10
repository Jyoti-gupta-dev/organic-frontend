
import React from "react";
import {
  Leaf,
  Heart,
  ShieldCheck,
  Truck,
  Users,
  ShoppingBag,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import aboutusimg from "../Images/aboutusimg.jpg"
import Layout from "../Layout/Layout";

function Aboutus() {
  return (
    <>
      <Layout>
        <div className="bg-white text-[#333]">

          {/* ================= HERO ================= */}
          <section className="bg-[#f8f8f5] py-14 md:py-20 px-5">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

              {/* LEFT CONTENT */}
              <div>

                <p className="text-[#6a9739] font-medium uppercase tracking-wider">
                  About Organic
                </p>

                <h1 className="text-4xl md:text-6xl font-semibold leading-tight mt-4 text-[#222]">
                  Fresh Choices,
                  <br />
                  <span className="text-[#6a9739]">
                    Better Living.
                  </span>
                </h1>

                <p className="text-gray-600 text-base md:text-lg leading-8 mt-6 max-w-xl">
                  We bring fresh, quality and everyday essentials closer to you.
                  Discover products you love and enjoy a simple shopping experience
                  designed around your needs.
                </p>

                <button
                  className="
                mt-7
                bg-[#6a9739]
                hover:bg-[#587f2f]
                text-white
                px-7
                py-3
                rounded-full
                flex
                items-center
                gap-2
                transition
              "
                >
                  Explore Products
                  <ArrowRight size={18} />
                </button>

                {/* STATS */}
                <div className="flex flex-wrap gap-8 md:gap-10 mt-9">

                  <div>
                    <h3 className="text-2xl font-semibold text-[#222]">
                      14K+
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Products
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#222]">
                      50K+
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Customers
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-[#222]">
                      10+
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Locations
                    </p>
                  </div>

                </div>

              </div>


              {/* ================= RIGHT IMAGE ================= */}
              <div className="w-full">

                <div className="w-full h-[320px] md:h-[450px] rounded-[35px] overflow-hidden bg-[#e8eee0]">

                  <img
                    src={aboutusimg}
                    alt="Fresh Organic Vegetables"
                    className="w-full h-full object-cover block"
                  />

                </div>

              </div>

            </div>

          </section>


          {/* ================= OUR STORY ================= */}
          <section className="py-16 md:py-20 px-5">

            <div className="max-w-4xl mx-auto text-center">

              <p className="text-[#6a9739] uppercase tracking-wider font-medium">
                Our Story
              </p>

              <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-[#222]">
                Bringing Good Food Closer to You
              </h2>

              <p className="text-gray-600 leading-8 mt-6">
                Organic was created with a simple idea — make everyday shopping
                easier, better and more enjoyable. We bring a wide variety of
                products together so you can discover everything you need in one
                place.
              </p>

              <p className="text-gray-600 leading-8 mt-4">
                From fresh fruits and vegetables to pantry essentials and everyday
                favourites, our goal is to make quality products accessible while
                keeping your shopping experience simple.
              </p>

            </div>

          </section>


          {/* ================= WHY CHOOSE US ================= */}
          <section className="bg-[#f8f8f5] py-16 md:py-20 px-5">

            <div className="max-w-7xl mx-auto">

              <div className="text-center mb-12">

                <p className="text-[#6a9739] uppercase tracking-wider font-medium">
                  Why Choose Us
                </p>

                <h2 className="text-3xl md:text-4xl font-semibold mt-3 text-[#222]">
                  Everything You Need, In One Place
                </h2>

              </div>


              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* CARD 1 */}
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition">

                  <div className="w-14 h-14 bg-[#eef4e7] rounded-full flex items-center justify-center">

                    <Leaf
                      size={28}
                      className="text-[#6a9739]"
                    />

                  </div>

                  <h3 className="font-semibold text-xl mt-5">
                    Fresh Products
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    Carefully selected products for your everyday needs.
                  </p>

                </div>


                {/* CARD 2 */}
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition">

                  <div className="w-14 h-14 bg-[#eef4e7] rounded-full flex items-center justify-center">

                    <ShieldCheck
                      size={28}
                      className="text-[#6a9739]"
                    />

                  </div>

                  <h3 className="font-semibold text-xl mt-5">
                    Quality Guarantee
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    We focus on quality so you can shop with confidence.
                  </p>

                </div>


                {/* CARD 3 */}
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition">

                  <div className="w-14 h-14 bg-[#eef4e7] rounded-full flex items-center justify-center">

                    <Truck
                      size={28}
                      className="text-[#6a9739]"
                    />

                  </div>

                  <h3 className="font-semibold text-xl mt-5">
                    Free Delivery
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    Convenient delivery right to your doorstep.
                  </p>

                </div>


                {/* CARD 4 */}
                <div className="bg-white rounded-2xl p-7 border border-gray-100 hover:shadow-lg transition">

                  <div className="w-14 h-14 bg-[#eef4e7] rounded-full flex items-center justify-center">

                    <Heart
                      size={28}
                      className="text-[#6a9739]"
                    />

                  </div>

                  <h3 className="font-semibold text-xl mt-5">
                    Customer First
                  </h3>

                  <p className="text-gray-500 mt-3 leading-7">
                    Your satisfaction is always at the heart of what we do.
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ================= OUR PROMISE ================= */}
          <section className="py-16 md:py-20 px-5">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-14 items-center">

              {/* LEFT */}
              <div>

                <p className="text-[#6a9739] uppercase tracking-wider font-medium">
                  Our Promise
                </p>

                <h2 className="text-3xl md:text-5xl font-semibold mt-3 leading-tight text-[#222]">

                  We Care About
                  <br />

                  <span className="text-[#6a9739]">
                    What You Bring Home.
                  </span>

                </h2>

                <p className="text-gray-600 leading-8 mt-6">
                  From quality products to reliable service, we work to make every
                  shopping experience better.
                </p>


                <div className="space-y-4 mt-7">

                  <div className="flex items-center gap-3">
                    <CheckCircle
                      size={21}
                      className="text-[#6a9739]"
                    />

                    <span>
                      Quality products
                    </span>
                  </div>


                  <div className="flex items-center gap-3">
                    <CheckCircle
                      size={21}
                      className="text-[#6a9739]"
                    />

                    <span>
                      Fresh everyday essentials
                    </span>
                  </div>


                  <div className="flex items-center gap-3">
                    <CheckCircle
                      size={21}
                      className="text-[#6a9739]"
                    />

                    <span>
                      Easy and convenient shopping
                    </span>
                  </div>


                  <div className="flex items-center gap-3">
                    <CheckCircle
                      size={21}
                      className="text-[#6a9739]"
                    />

                    <span>
                      Reliable customer service
                    </span>
                  </div>

                </div>

              </div>


              {/* RIGHT STATS */}
              <div className="grid grid-cols-2 gap-5">

                <div className="bg-[#f8f8f5] rounded-3xl p-7 md:p-8 text-center">

                  <ShoppingBag
                    size={38}
                    className="mx-auto text-[#6a9739]"
                  />

                  <h3 className="text-3xl font-semibold mt-4">
                    14K+
                  </h3>

                  <p className="text-gray-500">
                    Products
                  </p>

                </div>


                <div className="bg-[#eef4e7] rounded-3xl p-7 md:p-8 text-center mt-8">

                  <Users
                    size={38}
                    className="mx-auto text-[#6a9739]"
                  />

                  <h3 className="text-3xl font-semibold mt-4">
                    50K+
                  </h3>

                  <p className="text-gray-500">
                    Customers
                  </p>

                </div>


                <div className="bg-[#eef4e7] rounded-3xl p-7 md:p-8 text-center">

                  <Heart
                    size={38}
                    className="mx-auto text-[#6a9739]"
                  />

                  <h3 className="text-3xl font-semibold mt-4">
                    4.8★
                  </h3>

                  <p className="text-gray-500">
                    Customer Rating
                  </p>

                </div>


                <div className="bg-[#f8f8f5] rounded-3xl p-7 md:p-8 text-center mt-8">

                  <Truck
                    size={38}
                    className="mx-auto text-[#6a9739]"
                  />

                  <h3 className="text-3xl font-semibold mt-4">
                    24/7
                  </h3>

                  <p className="text-gray-500">
                    Support
                  </p>

                </div>

              </div>

            </div>

          </section>


          {/* ================= CTA ================= */}
          <section className="px-5 pb-16 md:pb-20">

            <div className="max-w-6xl mx-auto bg-[#eef4e7] rounded-3xl px-6 md:px-8 py-12 md:py-14 text-center">

              <div className="flex justify-center mb-5">

                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">

                  <Leaf
                    size={32}
                    className="text-[#6a9739]"
                  />

                </div>

              </div>

              <h2 className="text-3xl md:text-4xl font-semibold text-[#222]">
                Ready to Start Shopping?
              </h2>

              <p className="text-gray-600 mt-4">
                Discover fresh products and everyday essentials at Organic.
              </p>

              <button
                className="
              mt-7
              bg-[#6a9739]
              hover:bg-[#587f2f]
              text-white
              px-8
              py-3
              rounded-full
              font-medium
              transition
            "
              >
                Shop Now
              </button>

            </div>

          </section>

        </div>
      </Layout>
    </>
  );
}

export default Aboutus;