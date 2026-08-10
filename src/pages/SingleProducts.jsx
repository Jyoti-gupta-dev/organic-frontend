import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Star,
  ArrowLeft,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";

function SingleProducts() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  const productImages = [
    "/src/Images/product1.jpg",
    "/src/Images/product2.jpg",
    "/src/Images/product3.jpg",
  ];

  const product = {
    name: "Organic Premium Fresh Fruits",
    category: "Fresh Fruits",
    price: 299,
    oldPrice: 399,
    rating: 4.8,
    reviews: 126,
    description:
      "Fresh and naturally grown organic fruits, carefully selected for the best quality and taste. Perfect for a healthy lifestyle.",
  };

  return (
    <Layout>
      <main className="bg-white">

        {/* Breadcrumb */}
        <div className="border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link
                to="/"
                className="hover:text-green-600 transition"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                to="/Shop"
                className="hover:text-green-600 transition"
              >
                Shop
              </Link>

              <span>/</span>

              <span className="text-gray-900">
                {product.name}
              </span>
            </div>
          </div>
        </div>

        {/* Product Section */}
        <section className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-16">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">

            {/* LEFT - Images */}
            <div>

              {/* Main Image */}
              <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden rounded-3xl bg-[#f7f8f3] p-8 sm:min-h-[500px]">

                <span className="absolute left-5 top-5 rounded-full bg-green-600 px-4 py-2 text-xs font-semibold uppercase text-white">
                  Sale
                </span>

                <button
                  className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:text-red-500"
                >
                  <Heart size={20} />
                </button>

                <img
                  src={productImages[activeImage]}
                  alt={product.name}
                  className="h-full max-h-[430px] w-full object-contain"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="mt-5 grid grid-cols-3 gap-4">

                {productImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`flex h-24 items-center justify-center overflow-hidden rounded-xl bg-gray-50 p-2 transition ${
                      activeImage === index
                        ? "border-2 border-green-600"
                        : "border border-gray-100"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="h-full w-full object-contain"
                    />
                  </button>
                ))}

              </div>
            </div>

            {/* RIGHT - Product Details */}
            <div className="flex flex-col justify-center">

              {/* Category */}
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="max-w-xl text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-5 flex flex-wrap items-center gap-3">

                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <span className="text-sm font-medium text-gray-600">
                  {product.rating}
                </span>

                <span className="text-sm text-gray-400">
                  ({product.reviews} Reviews)
                </span>

              </div>

              {/* Price */}
              <div className="mt-7 flex items-center gap-4">

                <span className="text-3xl font-semibold text-gray-900">
                  ₹{product.price}
                </span>

                <span className="text-lg text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>

                <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
                  25% OFF
                </span>

              </div>

              {/* Description */}
              <p className="mt-7 max-w-xl text-base leading-7 text-gray-600">
                {product.description}
              </p>

              {/* Divider */}
              <div className="my-7 border-t border-gray-100" />

              {/* Quantity */}
              <div>
                <p className="mb-3 text-sm font-semibold text-gray-900">
                  Quantity
                </p>

                <div className="flex w-fit items-center rounded-xl border border-gray-200">

                  <button
                    onClick={() =>
                      setQuantity((q) => Math.max(1, q - 1))
                    }
                    className="flex h-11 w-11 items-center justify-center text-gray-600 hover:text-green-600"
                  >
                    <Minus size={17} />
                  </button>

                  <span className="flex h-11 w-12 items-center justify-center border-x border-gray-200 font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="flex h-11 w-11 items-center justify-center text-gray-600 hover:text-green-600"
                  >
                    <Plus size={17} />
                  </button>

                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700">
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>

                <button className="flex-1 rounded-xl border border-gray-900 px-6 py-4 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white">
                  Buy Now
                </button>

              </div>

              {/* Product Info */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-7 sm:grid-cols-3">

                <div>
                  <p className="text-xs uppercase text-gray-400">
                    Availability
                  </p>
                  <p className="mt-1 text-sm font-semibold text-green-600">
                    In Stock
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-400">
                    SKU
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    ORG-001
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase text-gray-400">
                    Delivery
                  </p>
                  <p className="mt-1 text-sm font-semibold text-gray-800">
                    2–4 Days
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Product Information */}
        <section className="border-t border-gray-100 bg-[#fafbf8]">

          <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-16">

            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Product Details
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Premium quality organic product made with carefully
                  selected natural ingredients.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Shipping Information
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Fast and secure delivery. Orders are carefully packed
                  to maintain product freshness.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Returns
                </h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Easy return and replacement available according to
                  our return policy.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* Back to Shop */}
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6">
          <Link
            to="/Shop"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-green-600"
          >
            <ArrowLeft size={18} />
            Continue Shopping
          </Link>
        </div>

      </main>
    </Layout>
  );
}

export default SingleProducts;