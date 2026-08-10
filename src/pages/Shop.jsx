import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  ShoppingBasket,
  ChevronDown,
  Star,
  X,
} from "lucide-react";

import Layout from "../Layout/Layout";

const products = [
  {
    id: 1,
    name: "Fresh Organic Apples",
    category: "Fruits",
    price: 180,
    oldPrice: 220,
    rating: 4.8,
    reviews: 124,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600",
  },
  {
    id: 2,
    name: "Organic Green Broccoli",
    category: "Vegetables",
    price: 120,
    oldPrice: 150,
    rating: 4.7,
    reviews: 98,
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600",
  },
  {
    id: 3,
    name: "Organic Fresh Carrots",
    category: "Vegetables",
    price: 90,
    oldPrice: 120,
    rating: 4.6,
    reviews: 76,
    image:
      "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=600",
  },
  {
    id: 4,
    name: "Natural Organic Honey",
    category: "Natural Products",
    price: 350,
    oldPrice: 420,
    rating: 4.9,
    reviews: 210,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600",
  },
  {
    id: 5,
    name: "Organic Strawberries",
    category: "Fruits",
    price: 240,
    oldPrice: 280,
    rating: 4.8,
    reviews: 143,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600",
  },
  {
    id: 6,
    name: "Fresh Organic Tomatoes",
    category: "Vegetables",
    price: 100,
    oldPrice: 130,
    rating: 4.5,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=600",
  },
  {
    id: 7,
    name: "Organic Almonds",
    category: "Dry Fruits",
    price: 550,
    oldPrice: 650,
    rating: 4.9,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1508061253366-f7da158b6d46?w=600",
  },
  {
    id: 8,
    name: "Organic Avocado",
    category: "Fruits",
    price: 280,
    oldPrice: 330,
    rating: 4.7,
    reviews: 112,
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600",
  },
];

const categories = [
  "All",
  "Fruits",
  "Vegetables",
  "Dry Fruits",
  "Natural Products",
];

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [mobileFilter, setMobileFilter] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [search, category, sort]);

  const toggleWishlist = (id) => {
    setWishlist((items) =>
      items.includes(id)
        ? items.filter((item) => item !== id)
        : [...items, id]
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#fafcf8]">

        {/* ================= HERO ================= */}
        <section className="bg-[#eef5e8] px-4 py-14 sm:py-16">
          <div className="mx-auto max-w-7xl">

            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-green-600">
              Organic Store
            </p>

            <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
              Shop
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
              Discover fresh, healthy and carefully selected organic
              products for your everyday lifestyle.
            </p>

          </div>
        </section>

        {/* ================= SHOP CONTENT ================= */}
        <section className="px-4 py-10 sm:py-14">
          <div className="mx-auto max-w-7xl">

            {/* TOP BAR */}
            <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

              {/* Search */}
              <div className="relative w-full lg:max-w-md">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm outline-none transition focus:border-green-500"
                />

                {search && (
                  <button
                    onClick={() => setSearch("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  >
                    <X size={17} />
                  </button>
                )}
              </div>

              <div className="flex items-center justify-between gap-3">

                <p className="text-sm text-gray-500">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredProducts.length}
                  </span>{" "}
                  products
                </p>

                {/* Mobile filter */}
                <button
                  onClick={() => setMobileFilter(!mobileFilter)}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 lg:hidden"
                >
                  <SlidersHorizontal size={16} />
                  Filter
                </button>

                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none rounded-full border border-gray-200 bg-white py-2.5 pl-4 pr-9 text-sm text-gray-700 outline-none"
                  >
                    <option value="default">Sort by</option>
                    <option value="low">Price: Low to High</option>
                    <option value="high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>

                  <ChevronDown
                    size={15}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  />
                </div>

              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[220px_1fr]">

              {/* ================= SIDEBAR ================= */}
              <aside
                className={`${
                  mobileFilter ? "block" : "hidden"
                } lg:block`}
              >
                <div className="rounded-2xl bg-white p-5 shadow-sm">

                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-base font-semibold text-gray-900">
                      Categories
                    </h2>

                    <SlidersHorizontal
                      size={18}
                      className="text-gray-400"
                    />
                  </div>

                  <div className="space-y-2">
                    {categories.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setCategory(item);
                          setMobileFilter(false);
                        }}
                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm transition ${
                          category === item
                            ? "bg-[#eef5e8] font-semibold text-green-700"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span>{item}</span>

                        {category === item && (
                          <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="my-7 border-t border-gray-100" />

                  <h2 className="mb-4 text-base font-semibold text-gray-900">
                    Why Organic?
                  </h2>

                  <ul className="space-y-3 text-sm text-gray-500">
                    <li>✓ Fresh & quality products</li>
                    <li>✓ Carefully selected</li>
                    <li>✓ Secure checkout</li>
                    <li>✓ Fast delivery</li>
                  </ul>

                </div>
              </aside>

              {/* ================= PRODUCTS ================= */}
              <div>

                {filteredProducts.length === 0 ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl bg-white text-center shadow-sm">
                    <Search
                      size={38}
                      className="mb-4 text-gray-300"
                    />

                    <h2 className="text-xl font-semibold text-gray-900">
                      No products found
                    </h2>

                    <p className="mt-2 text-sm text-gray-500">
                      Try another search or category.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                    {filteredProducts.map((product) => (
                      <article
                        key={product.id}
                        className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                      >

                        {/* IMAGE */}
                        <div className="relative aspect-square overflow-hidden bg-gray-100">

                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />

                          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-green-700 shadow-sm">
                            Organic
                          </span>

                          <button
                            onClick={() =>
                              toggleWishlist(product.id)
                            }
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm transition hover:scale-105"
                          >
                            <Heart
                              size={17}
                              className={
                                wishlist.includes(product.id)
                                  ? "fill-red-500 text-red-500"
                                  : "text-gray-600"
                              }
                            />
                          </button>

                        </div>

                        {/* DETAILS */}
                        <div className="p-5">

                          <p className="mb-1 text-xs font-medium uppercase tracking-wide text-green-600">
                            {product.category}
                          </p>

                          <h3 className="line-clamp-2 min-h-[48px] text-base font-semibold text-gray-900">
                            {product.name}
                          </h3>

                          {/* Rating */}
                          <div className="mt-3 flex items-center gap-2">

                            <div className="flex items-center gap-0.5">
                              <Star
                                size={14}
                                className="fill-yellow-400 text-yellow-400"
                              />

                              <span className="text-xs font-semibold text-gray-700">
                                {product.rating}
                              </span>
                            </div>

                            <span className="text-xs text-gray-400">
                              ({product.reviews})
                            </span>

                          </div>

                          {/* Price */}
                          <div className="mt-4 flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900">
                              ₹{product.price}
                            </span>

                            <span className="text-sm text-gray-400 line-through">
                              ₹{product.oldPrice}
                            </span>
                          </div>

                          {/* Add cart */}
                          <button
                            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                          >
                            <ShoppingBasket size={17} />
                            Add to Cart
                          </button>

                        </div>
                      </article>
                    ))}

                  </div>
                )}

              </div>

            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Shop;