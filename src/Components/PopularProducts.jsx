import React from "react";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Sandwich Bread",
    image: "/images/bread.png",
    oldPrice: 24,
    price: 18,
    discount: "10% OFF",
  },
  {
    id: 2,
    name: "Honeycrisp Apples",
    image: "/images/apple.png",
    oldPrice: 24,
    price: 18,
    discount: "10% OFF",
  },
  {
    id: 3,
    name: "Whole Wheat Bread",
    image: "/images/bread2.png",
    oldPrice: 24,
    price: 18,
    discount: "10% OFF",
  },
  {
    id: 4,
    name: "Fresh Fruits",
    image: "/images/fruits.png",
    oldPrice: 24,
    price: 18,
    discount: "10% OFF",
  },
  {
    id: 5,
    name: "Fresh Juice",
    image: "/images/juice.png",
    oldPrice: 24,
    price: 18,
    discount: "10% OFF",
  },
];

const PopularProduct = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 px-5">
      {/* Heading */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-gray-900">
          Most Popular Products
        </h2>

        <button className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 p-5 relative"
          >
            {/* Discount */}
            <span className="absolute top-4 left-4 bg-red-500 text-white text-xs px-2 py-1 rounded">
              {item.discount}
            </span>

            {/* Wishlist */}
            <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <Heart size={18} />
            </button>

            {/* Image */}
            <div className="bg-green-50 rounded-full w-30 h-30 mx-auto flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt=""
                className="w-32 group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Name */}
            <h3 className="mt-5 text-center font-semibold">
              {item.name}
            </h3>

            {/* Rating */}
            <div className="text-yellow-400 text-center mt-2">
              ★★★★★
              <span className="text-gray-500 text-sm ml-1">(222)</span>
            </div>

            {/* Price */}
            <div className="text-center mt-3">
              <span className="line-through text-gray-400 mr-2">
                ${item.oldPrice}
              </span>

              <span className="text-green-600 font-bold text-lg">
                ${item.price}
              </span>
            </div>

            {/* Button */}
            <button className="mt-5 w-full h-11 rounded-xl bg-green-600 text-white flex items-center justify-center gap-2 hover:bg-green-700 transition">
              <ShoppingCart size={18} />
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;