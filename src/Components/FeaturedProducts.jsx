import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Greek Style Plain Yogurt",
    image: "/images/product1.png",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 2,
    name: "Pure Squeezed No Pulp Orange Juice",
    image: "/images/product2.png",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 3,
    name: "Fresh Oranges",
    image: "/images/product3.png",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 4,
    name: "Gourmet Dark Chocolate Bars",
    image: "/images/product4.png",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 5,
    name: "Fresh Green Celery",
    image: "/images/product5.png",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
];

function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto py-12 px-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">
          Featured Products
        </h2>

        <div className="flex items-center gap-2">

          <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700">
            View All
          </button>

          <button className="w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
            <ChevronLeft size={18} />
          </button>

          <button className="w-10 h-10 rounded-md bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
            <ChevronRight size={18} />
          </button>

        </div>
      </div>

      {/* Products */}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {products.map((item) => (

          <div
            key={item.id}
            className="group"
          >

            <div className="overflow-hidden rounded-lg">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 object-contain group-hover:scale-105 duration-300"
              />

            </div>

            <h3 className="mt-4 text-[17px] font-medium leading-6">
              {item.name}
            </h3>

            <div className="flex items-center gap-1 mt-2">

              {[1,2,3,4,5].map((star)=>(
                <Star
                  key={star}
                  size={15}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

              <span className="text-gray-500 text-sm">
                ({item.reviews})
              </span>

            </div>

            <div className="flex items-center gap-2 mt-2">

              <span className="line-through text-gray-400">
                ${item.oldPrice}.00
              </span>

              <span className="font-bold text-lg">
                ${item.price}.00
              </span>

              <span className="border text-xs px-2 py-1 text-gray-500">
                10% OFF
              </span>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;