// import React from "react";
// import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "Greek Style Plain Yogurt",
//     image: "/images/product1.png",
//     oldPrice: 24,
//     price: 18,
//     reviews: 222,
//   },
//   {
//     id: 2,
//     name: "Pure Squeezed No Pulp Orange Juice",
//     image: "/images/product2.png",
//     oldPrice: 24,
//     price: 18,
//     reviews: 222,
//   },
//   {
//     id: 3,
//     name: "Fresh Oranges",
//     image: "/images/product3.png",
//     oldPrice: 24,
//     price: 18,
//     reviews: 222,
//   },
//   {
//     id: 4,
//     name: "Gourmet Dark Chocolate Bars",
//     image: "/images/product4.png",
//     oldPrice: 24,
//     price: 18,
//     reviews: 222,
//   },
//   {
//     id: 5,
//     name: "Fresh Green Celery",
//     image: "/images/product5.png",
//     oldPrice: 24,
//     price: 18,
//     reviews: 222,
//   },
// ];

// function FeaturedProducts() {
//   return (
//     <section className="max-w-7xl mx-auto py-12 px-4">

//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">

//         <h2 className="text-3xl font-bold">
//           Featured Products
//         </h2>

//         <div className="flex items-center gap-2">

//           <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">
//             View All
//           </button>

//           <button className="w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
//             <ChevronLeft size={18} />
//           </button>

//           <button className="w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
//             <ChevronRight size={18} />
//           </button>

//         </div>
//       </div>

//       {/* Products */}

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

//         {products.map((item) => (

//           <div
//             key={item.id}
//             className="group"
//           >

//             <div className="overflow-hidden rounded-lg">

//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-full h-52 object-contain group-hover:scale-105 duration-300"
//               />

//             </div>

//             <h3 className="mt-4 text-[17px] font-medium leading-6">
//               {item.name}
//             </h3>

//             <div className="flex items-center gap-1 mt-2">

//               {[1,2,3,4,5].map((star)=>(
//                 <Star
//                   key={star}
//                   size={15}
//                   className="fill-yellow-400 text-yellow-400"
//                 />
//               ))}

//               <span className="text-gray-500 text-sm">
//                 ({item.reviews})
//               </span>

//             </div>

//             <div className="flex items-center gap-2 mt-2">

//               <span className="line-through text-gray-400">
//                 ${item.oldPrice}.00
//               </span>

//               <span className="font-bold text-lg">
//                 ${item.price}.00
//               </span>

//               <span className="border text-xs px-2 py-1 text-gray-500">
//                 10% OFF
//               </span>

//             </div>

//           </div>

//         ))}

//       </div>

//     </section>
//   );
// }

// export default FeaturedProducts;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ================= FETCH FEATURED PRODUCTS =================

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/Products/getAllProducts"
        );

        console.log("All Products:", res.data);

        const featured = (res.data.data || []).filter(
          (product) => product.section === "featured"
        );

        console.log("Featured Products:", featured);

        setProducts(featured);
      } catch (error) {
        console.error("Error fetching featured products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProducts();
  }, []);

  // ================= LOADING =================

  if (loading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold">
          Featured Products
        </h2>

        <div className="py-10 text-center text-gray-500">
          Loading featured products...
        </div>
      </section>
    );
  }

  // ================= UI =================

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">

      {/* HEADER */}

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          Featured Products
        </h2>

        <div className="flex items-center gap-2">

          <button
            type="button"
            className="rounded-md bg-green-600 px-5 py-2 text-white transition hover:bg-green-700"
          >
            View All
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 transition hover:bg-gray-200"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100 transition hover:bg-gray-200"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      </div>

      {/* NO PRODUCTS */}

      {products.length === 0 ? (
        <div className="py-10 text-center text-gray-500">
          No featured products available.
        </div>
      ) : (

        /* PRODUCTS */

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {products.map((item) => {

            // ================= IMAGE URL =================

            const imageUrl = item.image?.startsWith("http")
              ? item.image
              : `http://localhost:5000/${item.image}`;

            // ================= DISCOUNT =================

            const discount = Number(item.discount || 0);

            const oldPrice =
              discount > 0
                ? Math.round(item.price / (1 - discount / 100))
                : item.price;

            return (

              <div
                key={item._id}
                className="group"
              >

                {/* IMAGE */}

                <div className="overflow-hidden rounded-lg bg-[#f7f9f5]">

                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="h-52 w-full object-contain p-3 transition duration-300 group-hover:scale-105"
                  />

                </div>

                {/* PRODUCT NAME */}

                <h3 className="mt-4 text-[17px] font-medium leading-6">
                  {item.title}
                </h3>

                {/* RATING */}

                <div className="mt-2 flex items-center gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (

                    <Star
                      key={star}
                      size={15}
                      className={
                        star <= Math.round(item.rating || 0)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />

                  ))}

                  <span className="ml-1 text-sm text-gray-500">
                    ({item.reviewCount || 0})
                  </span>

                </div>

                {/* PRICE */}

                <div className="mt-2 flex flex-wrap items-center gap-2">

                  {discount > 0 && (
                    <span className="text-gray-400 line-through">
                      ₹{oldPrice}
                    </span>
                  )}

                  <span className="text-lg font-bold">
                    ₹{item.price}
                  </span>

                  {discount > 0 && (
                    <span className="border px-2 py-1 text-xs text-gray-500">
                      {discount}% OFF
                    </span>
                  )}

                </div>

              </div>

            );
          })}

        </div>
      )}

    </section>
  );
}

export default FeaturedProducts;