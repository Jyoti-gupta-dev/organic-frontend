import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


function Category() {
  const scrollerRef = useRef(null);

  const categories = [
    {
      name: "Fruits & Veges",
      img: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Breads & Sweets",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Fruits & Veges",
      img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Beverages",
      img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Meat Products",
      img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Breads",
      img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Fruits & Veges",
      img: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?auto=format&fit=crop&w=300&q=80",
    },
    {
      name: "Breads & Sweets",
      img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=300&q=80",
    },
  ];

  const scrollBy = (dir) => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({
        left: dir * 240,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full font-sans px-6 sm:px-10 lg:px-12 py-12">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
          Category
        </h2>

        <div className="flex items-center gap-3">
          <button className="bg-[#6DBE5B] hover:bg-[#5eab4d] transition-colors text-white text-sm font-semibold px-6 py-2.5 rounded-md">
            View All
          </button>
          <button
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500 w-9 h-9 rounded-md flex items-center justify-center"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            className="bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700 w-9 h-9 rounded-md flex items-center justify-center"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* CATEGORY SCROLLER */}
      <div
        ref={scrollerRef}
        className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-4 shrink-0 w-28 sm:w-32"
          >
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-1 ring-gray-100">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm text-gray-700 text-center whitespace-nowrap">
              {cat.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Category