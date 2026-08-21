
import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Heart,
  ShoppingBasket,


  
  ChevronDown,
  Star,
  X,
  Check,
  Sparkles,
} from "lucide-react";
import axios from "axios";

import Layout from "../Layout/Layout";

const API_URL = "http://localhost:5000";

const categories = [
  "All",
  "Fruits & Vegetables",
  "Dairy & Eggs",
  "Pasta & Rice",
  "Atta & Flour",
  "Snacks",
  "Beverages",
  "Dry Fruits",
  "Cooking Oil",
  "Staples",
];

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");
  const [mobileFilter, setMobileFilter] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // ================= FETCH ALL PRODUCTS =================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `${API_URL}/api/Products/getAllProducts`
        );

        console.log("Shop Products:", res.data);

        if (res.data.success) {
          setProducts(res.data.data || []);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Shop Products Error:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // ================= WISHLIST =================

  const toggleWishlist = (id) => {
    setWishlist((items) =>
      items.includes(id)
        ? items.filter((item) => item !== id)
        : [...items, id]
    );
  };

  // ================= FILTER + SEARCH + SORT =================

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const productTitle = product.title || "";

      const matchesSearch = productTitle
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result.sort((a, b) => Number(a.price) - Number(b.price));
    }

    if (sort === "high") {
      result.sort((a, b) => Number(b.price) - Number(a.price));
    }

    if (sort === "rating") {
      result.sort(
        (a, b) => Number(b.rating || 0) - Number(a.rating || 0)
      );
    }

    return result;
  }, [products, search, category, sort]);

  // ================= CLEAR FILTER =================

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("default");
  };

  // ================= OLD PRICE =================

  const getOldPrice = (price, discount) => {
    if (!discount || discount <= 0) return null;

    return Math.round(
      Number(price) / (1 - Number(discount) / 100)
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#f7faf5]">

        {/* ================= HERO ================= */}

        <section className="relative overflow-hidden bg-[#edf5e8]">

          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-green-200/30 blur-3xl" />

          <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-lime-200/30 blur-3xl" />

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">

            <div className="max-w-2xl">

              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-200 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-green-700 backdrop-blur">

                <Sparkles size={14} />

                Organic Store

              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">

                Freshness you can

                <span className="block text-green-600">
                  feel & trust.
                </span>

              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                Discover fresh, healthy and carefully selected organic
                products for your everyday lifestyle.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">

                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm">
                  <Check size={16} className="text-green-600" />
                  Fresh Products
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm">
                  <Check size={16} className="text-green-600" />
                  Quality Checked
                </div>

                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm text-gray-700 shadow-sm">
                  <Check size={16} className="text-green-600" />
                  Fast Delivery
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ================= SHOP ================= */}

        <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">

          <div className="mx-auto max-w-7xl">

            {/* ================= SEARCH + SORT ================= */}

            <div className="mb-8 rounded-3xl border border-gray-100 bg-white p-4 shadow-sm sm:p-5">

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* SEARCH */}

                <div className="relative w-full lg:max-w-xl">

                  <Search
                    size={19}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search fresh products..."
                    className="w-full rounded-2xl border border-gray-200 bg-[#fafcf9] py-3.5 pl-11 pr-11 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-green-500 focus:bg-white focus:ring-4 focus:ring-green-500/10"
                  />

                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
                    >
                      <X size={17} />
                    </button>
                  )}

                </div>

                <div className="flex items-center justify-between gap-3">

                  {/* PRODUCT COUNT */}

                  <p className="hidden text-sm text-gray-500 sm:block">

                    <span className="font-semibold text-gray-900">
                      {filteredProducts.length}
                    </span>{" "}
                    products found

                  </p>

                  {/* MOBILE FILTER */}

                  <button
                    onClick={() => setMobileFilter(!mobileFilter)}
                    className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700 transition hover:border-green-300 hover:text-green-700 lg:hidden"
                  >
                    <SlidersHorizontal size={17} />
                    Filters
                  </button>

                  {/* SORT */}

                  <div className="relative">

                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="appearance-none rounded-2xl border border-gray-200 bg-white py-3 pl-4 pr-10 text-sm font-medium text-gray-700 outline-none transition focus:border-green-500"
                    >
                      <option value="default">
                        Sort by
                      </option>

                      <option value="low">
                        Price: Low to High
                      </option>

                      <option value="high">
                        Price: High to Low
                      </option>

                      <option value="rating">
                        Top Rated
                      </option>
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* ================= CONTENT ================= */}

            <div className="grid gap-8 lg:grid-cols-[250px_1fr]">

              {/* ================= SIDEBAR ================= */}

              <aside
                className={`${mobileFilter ? "block" : "hidden"
                  } lg:block`}
              >

                <div className="sticky top-24 rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">

                  <div className="mb-5 flex items-center justify-between">

                    <div>

                      <p className="text-xs font-semibold uppercase tracking-widest text-green-600">
                        Browse
                      </p>

                      <h2 className="mt-1 text-lg font-bold text-gray-900">
                        Categories
                      </h2>

                    </div>

                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-50">

                      <SlidersHorizontal
                        size={17}
                        className="text-green-600"
                      />

                    </div>

                  </div>

                  <div className="space-y-1">

                    {categories.map((item) => (

                      <button
                        key={item}
                        onClick={() => {
                          setCategory(item);
                          setMobileFilter(false);
                        }}
                        className={`group flex w-full items-center justify-between rounded-xl px-3.5 py-3 text-left text-sm transition ${category === item
                            ? "bg-green-600 font-semibold text-white shadow-md shadow-green-600/20"
                            : "text-gray-600 hover:bg-green-50 hover:text-green-700"
                          }`}
                      >

                        <span>{item}</span>

                        {category === item && (
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                            <Check size={13} />
                          </span>
                        )}

                      </button>

                    ))}

                  </div>

                  <div className="my-6 border-t border-gray-100" />

                  <div className="rounded-2xl bg-[#f1f7ed] p-4">

                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white">

                      <Sparkles
                        size={17}
                        className="text-green-600"
                      />

                    </div>

                    <h3 className="text-sm font-bold text-gray-900">
                      Why Organic?
                    </h3>

                    <ul className="mt-3 space-y-2.5 text-xs leading-5 text-gray-600">

                      <li className="flex gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        Fresh & quality products
                      </li>

                      <li className="flex gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        Carefully selected
                      </li>

                      <li className="flex gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        Secure checkout
                      </li>

                      <li className="flex gap-2">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-green-600"
                        />
                        Fast delivery
                      </li>

                    </ul>

                  </div>

                </div>

              </aside>

              {/* ================= PRODUCTS ================= */}

              <div>

                {/* MOBILE COUNT */}

                <div className="mb-5 flex items-center justify-between lg:hidden">

                  <p className="text-sm text-gray-500">

                    <span className="font-semibold text-gray-900">
                      {filteredProducts.length}
                    </span>{" "}
                    products found

                  </p>

                  {(category !== "All" || search || sort !== "default") && (

                    <button
                      onClick={clearFilters}
                      className="text-xs font-semibold text-green-600"
                    >
                      Clear filter
                    </button>

                  )}

                </div>

                {/* LOADING */}

                {loading ? (

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                    {[1, 2, 3, 4, 5, 6].map((item) => (

                      <div
                        key={item}
                        className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm"
                      >

                        <div className="aspect-square animate-pulse bg-gray-200" />

                        <div className="space-y-3 p-5">

                          <div className="h-3 w-24 animate-pulse rounded bg-gray-200" />

                          <div className="h-5 w-full animate-pulse rounded bg-gray-200" />

                          <div className="h-5 w-2/3 animate-pulse rounded bg-gray-200" />

                          <div className="h-10 w-full animate-pulse rounded-2xl bg-gray-200" />

                        </div>

                      </div>

                    ))}

                  </div>

                ) : filteredProducts.length === 0 ? (

                  /* ================= EMPTY ================= */

                  <div className="flex min-h-[450px] flex-col items-center justify-center rounded-3xl border border-gray-100 bg-white px-5 text-center shadow-sm">

                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50">

                      <Search
                        size={28}
                        className="text-green-500"
                      />

                    </div>

                    <h2 className="mt-5 text-xl font-bold text-gray-900">
                      No products found
                    </h2>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                      We couldn't find anything matching your search.
                      Try another keyword or category.
                    </p>

                    <button
                      onClick={clearFilters}
                      className="mt-6 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      Clear Filters
                    </button>

                  </div>

                ) : (

                  /* ================= PRODUCT GRID ================= */

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

                    {filteredProducts.map((product) => {

                      const oldPrice = getOldPrice(
                        product.price,
                        product.discount
                      );

                      const imageUrl = product.image
                        ? `${API_URL}/uploads/${product.image}`
                        : "/fallback-product.png";

                      return (

                        <article
                          key={product._id}
                          className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200/60"
                        >

                          {/* ================= IMAGE ================= */}

                          <div className="relative aspect-square overflow-hidden bg-gray-100">

                            <img
                              src={imageUrl}
                              alt={product.title || "Product"}
                              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                              onError={(e) => {
                                e.currentTarget.src =
                                  "/fallback-product.png";
                              }}
                            />

                            {/* Gradient */}

                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition group-hover:opacity-100" />

                            {/* Organic */}

                            <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-bold text-green-700 shadow-sm backdrop-blur">

                              <span className="h-1.5 w-1.5 rounded-full bg-green-500" />

                              ORGANIC

                            </span>

                            {/* Wishlist */}

                            <button
                              onClick={() =>
                                toggleWishlist(product._id)
                              }
                              aria-label="Add to wishlist"
                              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm backdrop-blur transition duration-200 hover:scale-110"
                            >

                              <Heart
                                size={18}
                                className={
                                  wishlist.includes(product._id)
                                    ? "fill-red-500 text-red-500"
                                    : "text-gray-600"
                                }
                              />

                            </button>

                          </div>

                          {/* ================= DETAILS ================= */}

                          <div className="p-5">

                            <p className="mb-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-green-600">
                              {product.category}
                            </p>

                            <h3 className="line-clamp-2 min-h-[48px] text-base font-bold leading-6 text-gray-900">
                              {product.title}
                            </h3>

                            {/* Rating */}

                            <div className="mt-3 flex items-center gap-2">

                              <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-2 py-1">

                                <Star
                                  size={13}
                                  className="fill-yellow-400 text-yellow-400"
                                />

                                <span className="text-xs font-bold text-gray-700">
                                  {product.rating || 0}
                                </span>

                              </div>

                              <span className="text-xs text-gray-400">
                                {product.reviewCount || 0} reviews
                              </span>

                            </div>

                            {/* Price */}

                            <div className="mt-4 flex items-end justify-between">

                              <div className="flex items-center gap-2">

                                <span className="text-xl font-extrabold text-gray-900">
                                  ₹{product.price}
                                </span>

                                {oldPrice && (
                                  <span className="text-sm text-gray-400 line-through">
                                    ₹{oldPrice}
                                  </span>
                                )}

                              </div>

                              {product.discount > 0 && (

                                <span className="rounded-full bg-green-50 px-2.5 py-1 text-[10px] font-bold text-green-700">
                                  {product.discount}% OFF
                                </span>

                              )}

                            </div>

                            {/* Size */}

                            {product.size && (

                              <p className="mt-2 text-xs text-gray-500">
                                Pack:{" "}
                                <span className="font-semibold text-gray-700">
                                  {product.size}
                                </span>
                              </p>

                            )}

                            {/* Cart */}

                            <button
                              className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 px-4 py-3.5 text-sm font-bold text-white shadow-sm shadow-green-600/20 transition duration-200 hover:bg-green-700 hover:shadow-md active:scale-[0.98]"
                            >

                              <ShoppingBasket size={17} />

                              Add to Cart

                            </button>

                          </div>

                        </article>

                      );

                    })}

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