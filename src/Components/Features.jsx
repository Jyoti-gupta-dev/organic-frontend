import React from "react";
import {
  Truck,
  ShieldCheck,
  BadgeCheck,
  CircleDollarSign,
  Gift,
} from "lucide-react";

const features = [
  {
    icon: <Truck size={24} className="text-gray-500" />,
    title: "Free delivery",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    icon: <ShieldCheck size={24} className="text-gray-500" />,
    title: "100% secure payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    icon: <BadgeCheck size={24} className="text-gray-500" />,
    title: "Quality guarantee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    icon: <CircleDollarSign size={24} className="text-gray-500" />,
    title: "Guaranteed savings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
  {
    icon: <Gift size={24} className="text-gray-500" />,
    title: "Daily offers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipi elit.",
  },
];

const Features = () => {
  return (
    <section className="max-w-7xl mx-auto py-14 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">

        {features.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md p-2 hover:shadow-lg hover:border-green-500 transition-all duration-300"
          >
            <div className="mb-5">
              {item.icon}
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500 leading-7 text-base">
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Features;