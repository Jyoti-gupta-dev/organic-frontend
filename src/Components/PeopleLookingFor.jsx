import React from "react";

const tags = [
  "Blue diamond almonds",
  "Angie’s Boomchickapop Corn",
  "Salty kettle Corn",
  "Chobani Greek Yogurt",
  "Sweet Vanilla Yogurt",
  "Foster Farms Takeout Crispy wings",
  "Warrior Blend Organic",
  "Chao Cheese Creamy",
  "Chicken meatballs",
  "Blue diamond almonds",
  "Angie’s Boomchickapop Corn",
  "Salty kettle Corn",
  "Chobani Greek Yogurt",
  "Sweet Vanilla Yogurt",
  "Foster Farms Takeout Crispy wings",
  "Warrior Blend Organic",
  "Chao Cheese Creamy",
  "Chicken meatballs",
];

const PeopleLookingFor = () => {
  return (
    <section className="max-w-7xl mx-auto py-14 px-4">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-gray-900 mb-8">
        People are also looking for
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-3">

        {tags.map((tag, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-[#F8F5EE] border border-[#ECE6D8] rounded-md text-gray-600 text-sm hover:bg-green-600 hover:text-white hover:border-green-600 transition duration-300"
          >
            {tag}
          </button>
        ))}

      </div>

    </section>
  );
};

export default PeopleLookingFor;