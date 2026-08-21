// // import React from "react";
// // import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// // const products = [
// //   {
// //     id: 1,
// //     name: "Greek Style Plain Yogurt",
// //     image: "/images/product1.png",
// //     oldPrice: 24,
// //     price: 18,
// //     reviews: 222,
// //   },
// //   {
// //     id: 2,
// //     name: "Pure Squeezed No Pulp Orange Juice",
// //     image: "/images/product2.png",
// //     oldPrice: 24,
// //     price: 18,
// //     reviews: 222,
// //   },
// //   {
// //     id: 3,
// //     name: "Fresh Oranges",
// //     image: "/images/product3.png",
// //     oldPrice: 24,
// //     price: 18,
// //     reviews: 222,
// //   },
// //   {
// //     id: 4,
// //     name: "Gourmet Dark Chocolate Bars",
// //     image: "/images/product4.png",
// //     oldPrice: 24,
// //     price: 18,
// //     reviews: 222,
// //   },
// //   {
// //     id: 5,
// //     name: "Fresh Green Celery",
// //     image: "/images/product5.png",
// //     oldPrice: 24,
// //     price: 18,
// //     reviews: 222,
// //   },
// // ];

// // function FeaturedProducts() {
// //   return (
// //     <section className="max-w-7xl mx-auto py-12 px-4">

// //       {/* Header */}
// //       <div className="flex items-center justify-between mb-8">

// //         <h2 className="text-3xl font-bold">
// //           Featured Products
// //         </h2>

// //         <div className="flex items-center gap-2">

// //           <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">
// //             View All
// //           </button>

// //           <button className="w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
// //             <ChevronLeft size={18} />
// //           </button>

// //           <button className="w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
// //             <ChevronRight size={18} />
// //           </button>

// //         </div>
// //       </div>

// //       {/* Products */}

// //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

// //         {products.map((item) => (

// //           <div
// //             key={item.id}
// //             className="group"
// //           >

// //             <div className="overflow-hidden rounded-lg">

// //               <img
// //                 src={item.image}
// //                 alt={item.name}
// //                 className="w-full h-52 object-contain group-hover:scale-105 duration-300"
// //               />

// //             </div>

// //             <h3 className="mt-4 text-[17px] font-medium leading-6">
// //               {item.name}
// //             </h3>

// //             <div className="flex items-center gap-1 mt-2">

// //               {[1,2,3,4,5].map((star)=>(
// //                 <Star
// //                   key={star}
// //                   size={15}
// //                   className="fill-yellow-400 text-yellow-400"
// //                 />
// //               ))}

// //               <span className="text-gray-500 text-sm">
// //                 ({item.reviews})
// //               </span>

// //             </div>

// //             <div className="flex items-center gap-2 mt-2">

// //               <span className="line-through text-gray-400">
// //                 ${item.oldPrice}.00
// //               </span>

// //               <span className="font-bold text-lg">
// //                 ${item.price}.00
// //               </span>

// //               <span className="border text-xs px-2 py-1 text-gray-500">
// //                 10% OFF
// //               </span>

// //             </div>

// //           </div>

// //         ))}

// //       </div>

// //     </section>
// //   );
// // }

// // export default FeaturedProducts;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // ================= FETCH FEATURED PRODUCTS =================

//   useEffect(() => {
//     const fetchFeaturedProducts = async () => {
//       try {
       
//         const res = await axios.post(
//           "http://localhost:5000/api/Products/featured"
//         );

//         console.log("Featured Products:", res.data);

//         setProducts(res.data.data || []);


//       } catch (error) {
//         console.error("Error fetching featured products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFeaturedProducts();
//   }, []);

//   // ================= LOADING =================

//   if (loading) {
//     return (
//       <section className="mx-auto max-w-7xl px-4 py-12">
//         <h2 className="mb-8 text-3xl font-bold">
//           Featured Products
//         </h2>

//         <div className="py-10 text-center text-gray-500">
//           Loading featured products...
//         </div>
//       </section>
//     );
//   }

//   // ================= UI =================

//   return (
//     <section className="mx-auto max-w-7xl px-4 py-12">

//       {/* HEADER */}

//       <div className="mb-8 flex items-center justify-between">

//         <h2 className="text-3xl font-bold">
//           Featured Products
//         </h2>

//         <div className="flex items-center gap-2">

//           <button
//             type="button"
//             className="rounded-md bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
//           >
//             View All
//           </button>

//           <button
//             type="button"
//             className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 transition hover:bg-gray-200"
//           >
//             <ChevronLeft size={18} />
//           </button>

//           <button
//             type="button"
//             className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 transition hover:bg-gray-200"
//           >
//             <ChevronRight size={18} />
//           </button>

//         </div>
//       </div>

//       {/* NO PRODUCTS */}

//       {products.length === 0 ? (
//         <div className="py-10 text-center text-gray-500">
//           No featured products available.
//         </div>
//       ) : (

//         /* PRODUCTS */

//         <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

//           {products.map((item) => {

//             // ================= IMAGE URL =================

//             // const imageUrl = item.image?.startsWith("http")
//             //   ? item.image
//             //   : `http://localhost:5000/${item.image}`;

//             const imageUrl = item.image?.startsWith("http")
//               ? item.image
//               : `http://localhost:5000/uploads/${item.image}`;

//             // ================= DISCOUNT =================

//             const discount = Number(item.discount || 0);

//             const oldPrice =
//               discount > 0
//                 ? Math.round(item.price / (1 - discount / 100))
//                 : item.price;

//             return (

//               <div
//                 key={item._id}
//                 className="group"
//               >

//                 {/* IMAGE */}

//                 <div className="overflow-hidden rounded-lg bg-[#f7f9f5]">

//                   <img
//                     src={imageUrl}
//                     alt={item.title}
//                     className="h-52 w-full object-contain p-3 transition duration-300 group-hover:scale-105"
//                   />

//                 </div>

//                 {/* PRODUCT NAME */}

//                 <h3 className="mt-4 text-[17px] font-medium leading-6">
//                   {item.title}
//                 </h3>

//                 {/* RATING */}

//                 <div className="mt-2 flex items-center gap-1">

//                   {[1, 2, 3, 4, 5].map((star) => (

//                     <Star
//                       key={star}
//                       size={15}
//                       className={
//                         star <= Math.round(item.rating || 0)
//                           ? "fill-yellow-400 text-yellow-400"
//                           : "text-gray-300"
//                       }
//                     />

//                   ))}

//                   <span className="ml-1 text-sm text-gray-500">
//                     ({item.reviewCount || 0})
//                   </span>

//                 </div>

//                 {/* PRICE */}

//                 <div className="mt-2 flex flex-wrap items-center gap-2">

//                   {discount > 0 && (
//                     <span className="text-gray-400 line-through">
//                       ₹{oldPrice}
//                     </span>
//                   )}

//                   <span className="text-lg font-bold">
//                     ₹{item.price}
//                   </span>

//                   {discount > 0 && (
//                     <span className="border px-2 py-1 text-xs text-gray-500">
//                       {discount}% OFF
//                     </span>
//                   )}

//                 </div>

//               </div>

//             );
//           })}

//         </div>
//       )}

//     </section>
//   );
// }

// export default FeaturedProducts;
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Star,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // FETCH FEATURED PRODUCTS
  // ==========================================

  const getProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/Products/featured"
      );

      console.log("Featured Products:", res.data);

      setProducts(res.data.data || []);
    } catch (error) {
      console.error(
        "Error fetching featured products:",
        error
      );

      if (error.response) {
        console.log(
          "Status:",
          error.response.status
        );

        console.log(
          "Response:",
          error.response.data
        );
      }

      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // USE EFFECT
  // ==========================================

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

          {/* HEADER SKELETON */}

          <div className="mb-7">
            <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />

            <div className="mt-3 h-7 w-60 animate-pulse rounded bg-gray-200" />
          </div>

          {/* PRODUCT SKELETON */}

          <div
            className="
              grid
              grid-cols-2
              gap-4
              sm:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
            "
          >
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
              Featured Products
            </h2>

          </div>

          {/* DESKTOP VIEW ALL */}

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
            View All

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
              No featured products available.
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

              const price = Number(
                item.price || 0
              );

              const discount = Number(
                item.discount || 0
              );

              const discountedPrice =
                discount > 0
                  ? price -
                    (price * discount) / 100
                  : price;

              const saveAmount =
                discount > 0
                  ? Math.round(
                      price - discountedPrice
                    )
                  : 0;

              // ==========================================
              // RATING
              // ==========================================

              const rating = Number(
                item.rating || 0
              );

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
                  : `http://localhost:5000/uploads/${item.image}`;

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

                    {/* FEATURED BADGE */}

                    {/* <div
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

                      FEATURED

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
                      alt={
                        item.title ||
                        "Product"
                      }
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
                          "https://via.placeholder.com/500x500?text=Product";
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
                      {item.category ||
                        "Fruits & Vegetables"}
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
                      {item.title ||
                        "Organic Fresh Product"}
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
                          {rating > 0
                            ? rating.toFixed(1)
                            : "0.0"}
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
                          ₹
                          {discountedPrice.toFixed(0)}
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
                        DESKTOP ONLY VIEW
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
            MOBILE VIEW ALL
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
              View All

              <ArrowRight size={14} />

            </Link>

          </div>

        )}

      </div>

    </section>
  );
}

export default FeaturedProducts;