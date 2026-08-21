import React, { useEffect, useState } from "react";
import {
  Star,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import api, { API_URL } from "../api/api";

function SellingProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // FETCH SELLING PRODUCTS
  // ==========================================

  const getProducts = async () => {
    try {
      setLoading(true);

      const res = await api.post("/Products/selling");

      console.log("Selling Products:", res.data);

      setProducts(res.data.data || []);
    } catch (error) {
      console.error("Error fetching selling products:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }

      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <section className="w-full bg-[#f7faf8] py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Header Skeleton */}
          <div className="mb-7">
            <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />

            <div className="mt-3 h-7 w-60 animate-pulse rounded bg-gray-200" />
          </div>

          {/* Product Skeleton */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-100
                  bg-white
                "
              >
                <div className="h-36 animate-pulse bg-gray-200 sm:h-40" />

                <div className="space-y-3 p-3">
                  <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />

                  <div className="h-4 w-full animate-pulse rounded bg-gray-200" />

                  <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />

                  <div className="h-5 w-20 animate-pulse rounded bg-gray-200" />

                  <div className="h-8 animate-pulse rounded-lg bg-gray-200" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    );
  }

  // ==========================================
  // MAIN UI
  // ==========================================

  return (
    <section className="w-full bg-[#f7faf8] py-10 sm:py-12 lg:py-14">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==========================================
            HEADER
        ========================================== */}

        <div className="mb-7 flex items-end justify-between sm:mb-8">

          <div>
            <p
              className="
                mb-1
                text-[10px]
                font-semibold
                uppercase
                tracking-[2px]
                text-green-600
                sm:text-xs
              "
            >
              Our Products
            </p>

            <h2
              className="
                text-2xl
                font-bold
                text-gray-900
                sm:text-3xl
                lg:text-4xl
              "
            >
              Best Selling Products
            </h2>
          </div>

          {/* DESKTOP NICE VIEW */}

          <Link
            to="/products"
            className="
              hidden
              items-center
              gap-1.5
              rounded-full
              bg-green-600
              px-4
              py-2
              text-xs
              font-semibold
              text-white
              shadow-sm
              transition-all
              duration-300
              hover:bg-green-700
              hover:shadow-md
              sm:flex
            "
          >
            Nice View
            <ArrowRight size={14} />
          </Link>

        </div>

        {/* ==========================================
            NO PRODUCTS
        ========================================== */}

        {products.length === 0 ? (

          <div
            className="
              rounded-2xl
              bg-white
              py-14
              text-center
              shadow-sm
            "
          >
            <p className="text-sm text-gray-500">
              No selling products available.
            </p>
          </div>

        ) : (

          /* ==========================================
              PRODUCT GRID
          ========================================== */

          <div
            className="
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-3
              sm:gap-5
              lg:grid-cols-4
              lg:gap-6
              xl:grid-cols-5
            "
          >

            {products.map((item) => {

              // ==========================================
              // PRICE
              // ==========================================

              const price = Number(item.price || 0);

              const discount = Number(item.discount || 0);

              const discountedPrice =
                discount > 0
                  ? price - (price * discount) / 100
                  : price;

              const saveAmount =
                discount > 0
                  ? Math.round(price - discountedPrice)
                  : 0;

              // ==========================================
              // RATING
              // ==========================================

              const rating = Number(item.rating || 4.8);

              const reviews =
                item.reviewCount ||
                item.reviews ||
                0;

              // ==========================================
              // IMAGE
              // ==========================================

              const imageUrl =
                item.image?.startsWith("http")
                  ? item.image
                  : `${API_URL}/uploads/${item.image}`;

              return (
                <div
                  key={item._id}
                  className="
                    group
                    overflow-hidden
                    rounded-2xl
                    border
                    border-gray-100
                    bg-white
                    shadow-[0_3px_12px_rgba(0,0,0,0.05)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  {/* ==========================================
                      PRODUCT IMAGE
                  ========================================== */}

                  <Link
                    to={`/product/${item._id}`}
                    className="
                      relative
                      block
                      h-36
                      overflow-hidden
                      bg-[#eaf5ed]
                      sm:h-40
                      md:h-44
                    "
                  >

                    {/* ORGANIC BADGE */}
                    {/* 
                    <div
                      className="
                        absolute
                        left-2.5
                        top-2.5
                        z-20
                        flex
                        items-center
                        gap-1
                        rounded-full
                        bg-white
                        px-2.5
                        py-1
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-wide
                        text-green-700
                        shadow-sm
                        sm:left-3
                        sm:top-3
                        sm:px-3
                        sm:py-1.5
                        sm:text-[9px]
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-green-500
                        "
                      />

                      ORGANIC
                    </div> */}

                    {/* WISHLIST */}

                    <button
                      type="button"
                      aria-label="Add to wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        console.log(
                          "Wishlist:",
                          item.title
                        );
                      }}
                      className="
                        absolute
                        right-2.5
                        top-2.5
                        z-30
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-gray-600
                        shadow-sm
                        transition-all
                        duration-300
                        hover:bg-green-600
                        hover:text-white
                        sm:right-3
                        sm:top-3
                        sm:h-9
                        sm:w-9
                      "
                    >
                      <Heart
                        size={15}
                        strokeWidth={1.8}
                      />
                    </button>

                    {/* IMAGE */}

                    <img
                      src={imageUrl}
                      alt={item.title || "Product"}
                      className="
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                      onError={(e) => {
                        e.currentTarget.src =
                          // "https://via.placeholder.com/500x500?text=Product";

                          e.currentTarget.src = "/default-product.jpg";
                      }}
                    />

                  </Link>

                  {/* ==========================================
                      PRODUCT DETAILS
                  ========================================== */}

                  <div className="p-3 sm:p-3.5">

                    {/* CATEGORY */}

                    <p
                      className="
                        mb-1
                        truncate
                        text-[8px]
                        font-bold
                        uppercase
                        tracking-[1.3px]
                        text-green-600
                        sm:text-[9px]
                      "
                    >
                      {item.category || "Fruits & Vegetables"}
                    </p>

                    {/* TITLE */}

                    <Link
                      to={`/product/${item._id}`}
                      className="
                        block
                        min-h-[34px]
                        line-clamp-2
                        text-[12px]
                        font-bold
                        leading-[17px]
                        text-gray-900
                        transition-colors
                        hover:text-green-700
                        sm:text-[13px]
                      "
                    >
                      {item.title || "Organic Fresh Product"}
                    </Link>

                    {/* ==========================================
                        RATING
                    ========================================== */}

                    <div
                      className="
                        mt-2.5
                        flex
                        items-center
                        gap-1.5
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-1
                          rounded-full
                          bg-yellow-50
                          px-1.5
                          py-0.5
                        "
                      >
                        <Star
                          size={12}
                          strokeWidth={2}
                          className="
                            fill-yellow-400
                            text-yellow-400
                          "
                        />

                        <span
                          className="
                            text-[10px]
                            font-bold
                            text-gray-800
                          "
                        >
                          {rating.toFixed(1)}
                        </span>
                      </div>

                      <span
                        className="
                          truncate
                          text-[9px]
                          text-gray-400
                          sm:text-[10px]
                        "
                      >
                        {reviews > 0
                          ? `${reviews} reviews`
                          : "Top Rated"}
                      </span>

                    </div>

                    {/* ==========================================
                        PRICE
                    ========================================== */}

                    <div
                      className="
                        mt-2.5
                        flex
                        items-center
                        justify-between
                        gap-1.5
                      "
                    >

                      <div
                        className="
                          flex
                          items-center
                          gap-1.5
                        "
                      >
                        <span
                          className="
                            text-base
                            font-extrabold
                            text-gray-900
                            sm:text-lg
                          "
                        >
                          ₹{discountedPrice.toFixed(0)}
                        </span>

                        {discount > 0 && (
                          <span
                            className="
                              text-[9px]
                              text-gray-400
                              line-through
                              sm:text-[10px]
                            "
                          >
                            ₹{price.toFixed(0)}
                          </span>
                        )}
                      </div>

                      {/* SAVE */}

                      {discount > 0 && (
                        <span
                          className="
                            rounded-full
                            bg-green-50
                            px-1.5
                            py-0.5
                            text-[8px]
                            font-bold
                            text-green-600
                            sm:px-2
                            sm:text-[9px]
                          "
                        >
                          SAVE ₹{saveAmount}
                        </span>
                      )}

                    </div>

                    {/* ==========================================
                        DESKTOP ONLY VIEW BUTTON
                    ========================================== */}

                    <div className="mt-3 hidden sm:flex">
                      <Link
                        to={`/product/${item._id}`}
                        className="
                          flex
                          h-9
                          w-full
                          items-center
                          justify-center
                          gap-1.5
                          rounded-lg
                          bg-green-600
                          text-[11px]
                          font-bold
                          text-white
                          shadow-sm
                          transition-all
                          duration-300
                          hover:bg-green-700
                          hover:shadow-md
                          active:scale-[0.98]
                        "
                      >
                        View

                        <ArrowRight size={13} />
                      </Link>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        )}

        {/* ==========================================
            MOBILE NICE VIEW
        ========================================== */}

        {products.length > 0 && (
          <div className="mt-7 flex justify-center sm:hidden">

            <Link
              to="/products"
              className="
                flex
                items-center
                gap-1.5
                rounded-full
                bg-green-600
                px-5
                py-2.5
                text-xs
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-green-700
              "
            >
              Nice View

              <ArrowRight size={14} />
            </Link>

          </div>
        )}

      </div>
    </section>
  );
}

export default SellingProducts;