
import React from 'react'
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Whole Wheat Sandwich Bread",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 2,
    name: "Whole Grain Oatmeal",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 54,
    price: 50,
    reviews: 41,
  },
  {
    id: 3,
    name: "Sharp Cheddar Cheese Block",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 14,
    price: 12,
    reviews: 32,
  },
  {
    id: 4,
    name: "Organic Baby Spinach",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 5,
    name: "Organic Spinach Leaves",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 6,
    name: "Fresh Salmon",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 7,
    name: "Imported Italian Spaghetti Pasta",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 8,
    name: "Granny Smith Apples",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 9,
    name: "Organic 2% Reduced Fat Milk",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
  {
    id: 10,
    name: "Greek Style Plain Yogurt",
    image: "https://via.placeholder.com/200x180",
    oldPrice: 24,
    price: 18,
    reviews: 222,
  },
];

function SellingProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold">Best Selling Products</h2>

        <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
          View All
        </button>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-36 object-cover rounded-lg"
            />

            <h3 className="mt-4 text-sm font-medium h-10">
              {item.name}
            </h3>

            <div className="flex items-center gap-1 mt-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={14}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

              <span className="text-xs text-gray-500">
                ({item.reviews})
              </span>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-gray-400 line-through text-sm">
                ${item.oldPrice}.00
              </span>

              <span className="font-bold text-lg">
                ${item.price}.00
              </span>

              <span className="text-[10px] border px-2 py-1 rounded bg-gray-100">
                10% OFF
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


export default SellingProducts