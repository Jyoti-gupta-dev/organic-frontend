
import axios from "axios";
import {
  Star,
  Heart,
  ShoppingCart,
  Plus,
  Minus,
} from "lucide-react";
import { useEffect, useState } from "react";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  console.log(products)
  const [loading, setLoading] = useState(true);
  const [quantities, setQuantities] = useState({});

  // Mobile par selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  // =====================================================
  // GET PRODUCTS
  // =====================================================

  const getProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:5000/api/Products/getAllProducts"
      );

      console.log("Popular Products:", response.data);

      setProducts(response.data.data || []);
      // const PopularProducts = allproducts.filter(
      //   (product) => product.section === "popular"
      // );
     // setProducts=(PopularProducts)

    } catch (error) {
      console.log("Error fetching popular products:", error);

      if (error.response) {
        console.log("Status:", error.response.status);
        console.log("Response:", error.response.data);
      }

      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // USE EFFECT
  // =====================================================

  useEffect(() => {
    getProducts();
  }, []);

  // =====================================================
  // INCREASE
  // =====================================================

  const increaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  // =====================================================
  // DECREASE
  // =====================================================

  const decreaseQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) - 1, 1),
    }));
  };

  // =====================================================
  // MOBILE PRODUCT CLICK
  // =====================================================

  const handleProductClick = (id) => {
    setSelectedProduct((prev) =>
      prev === id ? null : id
    );
  };

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* ================================================= */}
        {/* HEADING */}
        {/* ================================================= */}

        <div className="flex items-center justify-between mb-7 sm:mb-8">

          <div>
            <p className="text-xs sm:text-sm text-green-600 font-medium mb-1">
              Our Products
            </p>

            <h2
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                font-bold
                text-gray-900
              "
            >
              Popular Products
            </h2>
          </div>

          <button
            type="button"
            className="
              bg-green-600
              hover:bg-green-700
              text-white
              text-xs
              sm:text-sm
              font-medium
              px-4
              sm:px-5
              py-2
              sm:py-2.5
              rounded-md
              transition
            "
          >
            View All
          </button>

        </div>

        {/* ================================================= */}
        {/* LOADING */}
        {/* ================================================= */}

        {loading && (
          <div className="text-center py-10 text-gray-500">
            Loading products...
          </div>
        )}

        {/* ================================================= */}
        {/* NO PRODUCTS */}
        {/* ================================================= */}

        {!loading && products.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No products found.
          </div>
        )}

        {/* ================================================= */}
        {/* PRODUCTS */}
        {/* ================================================= */}

        {!loading && products.length > 0 && (

          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5

              gap-x-3
              sm:gap-x-5
              lg:gap-x-6

              gap-y-8
              sm:gap-y-10
            "
          >

            {products.map((item) => {

              // =================================================
              // PRICE
              // =================================================

              const price = Number(item.price || 0);

              const discount = Number(item.discount || 0);

              const discountedPrice =
                price - (price * discount) / 100;

              // =================================================
              // QUANTITY
              // =================================================

              const quantity =
                quantities[item._id] || 1;

              // =================================================
              // MOBILE SELECTED
              // =================================================

              const isSelected =
                selectedProduct === item._id;

              return (

                <div
                  key={item._id}
                  onClick={() =>
                    handleProductClick(item._id)
                  }
                  className="
                    group
                    relative
                    bg-white
                    rounded-lg
                    cursor-pointer
                  "
                >

                  {/* ================================================= */}
                  {/* IMAGE */}
                  {/* ================================================= */}

                  <div
                    className="
                      relative
                      w-full

                      h-36
                      sm:h-40
                      md:h-44

                      flex
                      items-center
                      justify-center

                      overflow-hidden
                      rounded-lg
                      bg-white
                    "
                  >

                    {/* DISCOUNT */}

                    {discount > 0 && (
                      <span
                        className="
                          absolute
                          top-2
                          left-2
                          z-10

                          bg-white
                          border
                          border-gray-200

                          text-gray-500
                          text-[8px]
                          sm:text-[10px]

                          px-1.5
                          sm:px-2

                          py-0.5
                          sm:py-1

                          rounded-sm
                        "
                      >
                        {discount}% OFF
                      </span>
                    )}

                    {/* PRODUCT IMAGE */}

                    <img
                      src={`http://localhost:5000/uploads/${item.image}`}
                      alt={item.title || "Product"}
                      className="
                        w-full
                        h-full
                        object-contain
                      "
                      onError={(e) => {
                        e.currentTarget.style.display =
                          "none";
                      }}
                    />

                    {/* ================================================= */}
                    {/* TOP HEART */}
                    {/* ================================================= */}

                    <button
                      type="button"
                      aria-label="Add to wishlist"
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      className="
                        absolute
                        top-2
                        right-2
                        z-10

                        w-8
                        h-8
                        sm:w-9
                        sm:h-9

                        rounded-full
                        bg-white
                        shadow

                        flex
                        items-center
                        justify-center

                        opacity-100

                        sm:opacity-0
                        sm:group-hover:opacity-100

                        hover:bg-green-600
                        hover:text-white

                        transition
                      "
                    >
                      <Heart
                        size={15}
                        className="
                          sm:w-[17px]
                          sm:h-[17px]
                        "
                      />
                    </button>

                  </div>

                  {/* ================================================= */}
                  {/* PRODUCT INFO */}
                  {/* ================================================= */}

                  <div className="pt-3">

                    {/* TITLE */}

                    <h3
                      className="
                        text-xs
                        sm:text-sm

                        text-gray-800
                        font-medium
                        leading-5

                        min-h-[40px]
                        line-clamp-2
                      "
                    >
                      {item.title || "Product"}
                    </h3>

                    {/* RATING */}

                    <div
                      className="
                        flex
                        items-center
                        gap-0.5
                        sm:gap-1
                        mt-2
                      "
                    >

                      <div className="flex items-center">

                        {[1, 2, 3, 4, 5].map(
                          (star) => (
                            <Star
                              key={star}
                              size={12}
                              className="
                                sm:w-[14px]
                                sm:h-[14px]
                                fill-yellow-400
                                text-yellow-400
                              "
                            />
                          )
                        )}

                      </div>

                      <span
                        className="
                          text-[10px]
                          sm:text-xs
                          text-gray-500
                          ml-1
                        "
                      >
                        ({item.reviews || item.reviewCount || 222})
                      </span>

                    </div>

                    {/* PRICE */}

                    <div
                      className="
                        flex
                        items-center
                        gap-1
                        sm:gap-2
                        mt-2
                        flex-wrap
                      "
                    >

                      {/* OLD PRICE */}

                      {discount > 0 && (
                        <span
                          className="
                            text-[11px]
                            sm:text-sm
                            text-gray-400
                            line-through
                          "
                        >
                          ₹{price.toFixed(2)}
                        </span>
                      )}

                      {/* CURRENT PRICE */}

                      <span
                        className="
                          text-sm
                          sm:text-base
                          font-bold
                          text-gray-900
                        "
                      >
                        ₹
                        {discount > 0
                          ? discountedPrice.toFixed(2)
                          : price.toFixed(2)}
                      </span>

                      {/* DISCOUNT */}

                      {discount > 0 && (
                        <span
                          className="
                            text-[8px]
                            sm:text-[10px]

                            text-gray-500

                            border
                            border-gray-300

                            px-1
                            sm:px-1.5

                            py-0.5

                            rounded-sm
                          "
                        >
                          {discount}% OFF
                        </span>
                      )}

                    </div>

                    {/* ================================================= */}
                    {/* CART AREA */}
                    {/* ================================================= */}

                    <div
                      className={`
                        flex
                        items-center
                        gap-1
                        sm:gap-1.5
                        mt-3
                        overflow-hidden

                        /* MOBILE */

                        ${isSelected
                          ? "opacity-100 h-10"
                          : "opacity-0 h-0"
                        }

                        /* DESKTOP */

                        sm:opacity-0
                        sm:h-0

                        sm:group-hover:opacity-100
                        sm:group-hover:h-10

                        transition-all
                        duration-300
                      `}
                    >

                      {/* ================================================= */}
                      {/* QUANTITY */}
                      {/* ================================================= */}

                      <div
                        className="
                          flex
                          items-center

                          border
                          border-gray-300
                          rounded-md

                          h-8
                          sm:h-9

                          shrink-0
                        "
                      >

                        {/* MINUS */}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();

                            decreaseQuantity(item._id);
                          }}
                          className="
                            w-6
                            sm:w-7
                            h-full

                            flex
                            items-center
                            justify-center

                            hover:bg-gray-100
                          "
                        >
                          <Minus size={12} />
                        </button>

                        {/* NUMBER */}

                        <span
                          className="
                            w-5
                            sm:w-6

                            text-center

                            text-xs
                            sm:text-sm
                          "
                        >
                          {quantity}
                        </span>

                        {/* PLUS */}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();

                            increaseQuantity(item._id);
                          }}
                          className="
                            w-6
                            sm:w-7
                            h-full

                            flex
                            items-center
                            justify-center

                            hover:bg-gray-100
                          "
                        >
                          <Plus size={12} />
                        </button>

                      </div>

                      {/* ================================================= */}
                      {/* ADD TO CART */}
                      {/* ================================================= */}

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();

                          console.log(
                            "Add to cart:",
                            item.title,
                            "Quantity:",
                            quantity
                          );
                        }}
                        className="
                          flex-1

                          h-8
                          sm:h-9

                          bg-green-600
                          hover:bg-green-700

                          text-white

                          rounded-md

                          flex
                          items-center
                          justify-center

                          gap-1

                          text-[10px]
                          sm:text-xs

                          font-medium

                          min-w-0

                          transition
                        "
                      >

                        <ShoppingCart
                          size={13}
                          className="shrink-0"
                        />

                        <span className="truncate">
                          Add to Cart
                        </span>

                      </button>

                      {/* ================================================= */}
                      {/* BOTTOM HEART */}
                      {/* ================================================= */}

                      <button
                        type="button"
                        aria-label="Add to wishlist"
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="
                          hidden
                          sm:flex

                          w-8
                          sm:w-9

                          h-8
                          sm:h-9

                          shrink-0

                          border
                          border-gray-300

                          rounded-md

                          items-center
                          justify-center

                          hover:bg-green-600
                          hover:text-white
                          hover:border-green-600

                          transition
                        "
                      >
                        <Heart size={14} />
                      </button>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        )}

      </div>
    </section>
  );
};

export default PopularProducts;