import React from "react";
import {
  ArrowRight,
  CalendarDays,
  User,
  Search,
  ChevronRight,
} from "lucide-react";
import Layout from "../Layout/Layout";

const blogs = [
  {
    id: 1,
    category: "Healthy Living",
    title: "Simple Ways to Add More Organic Food to Your Daily Diet",
    description:
      "Discover simple and practical ways to make healthier food choices and bring more natural ingredients into your everyday meals.",
    date: "August 08, 2026",
    author: "Organic Team",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    category: "Nutrition",
    title: "Why Fresh Ingredients Matter for a Healthy Lifestyle",
    description:
      "Learn how choosing fresh and quality ingredients can make your everyday meals more enjoyable and nutritious.",
    date: "August 05, 2026",
    author: "Organic Team",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    category: "Recipes",
    title: "Easy & Delicious Recipes You Can Make at Home",
    description:
      "Try these easy recipes made with fresh ingredients that are perfect for busy days and family meals.",
    date: "August 02, 2026",
    author: "Organic Team",
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    category: "Lifestyle",
    title: "Building Better Eating Habits One Day at a Time",
    description:
      "Small changes can create meaningful results. Explore simple habits that can help you build a healthier lifestyle.",
    date: "July 28, 2026",
    author: "Organic Team",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    category: "Organic Food",
    title: "How to Choose Quality Products for Your Kitchen",
    description:
      "A simple guide to choosing quality ingredients and making smarter decisions while shopping for your kitchen.",
    date: "July 24, 2026",
    author: "Organic Team",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    category: "Healthy Living",
    title: "Fresh Food Ideas for a More Balanced Week",
    description:
      "Plan your week with fresh ingredients, balanced meals and easy food ideas that fit your daily routine.",
    date: "July 20, 2026",
    author: "Organic Team",
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=900&q=80",
  },
];

const categories = [
  "All Posts",
  "Healthy Living",
  "Organic Food",
  "Recipes",
  "Nutrition",
  "Lifestyle",
];

function Blog() {
  return (
    <>
      <Layout>
      <div className="min-h-screen bg-white text-gray-900">

        {/* ================= HERO ================= */}
        <section className="bg-[#f5f8f1] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">

            {/* Breadcrumb */}
            <div className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <span className="hover:text-green-600 cursor-pointer">
                Home
              </span>

              <ChevronRight size={15} />

              <span className="font-medium text-gray-800">
                Blog
              </span>
            </div>

            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                From Our Journal
              </p>

              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Fresh Ideas for a
                <span className="text-green-600"> Better Lifestyle</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
                Explore healthy recipes, organic food ideas, nutrition tips
                and simple lifestyle inspiration from the Organic team.
              </p>
            </div>

          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">

            {/* ================= FEATURED BLOG ================= */}
            <div className="mb-16 overflow-hidden rounded-3xl bg-[#f5f8f1]">

              <div className="grid items-center lg:grid-cols-2">

                {/* Image */}
                <div className="h-[300px] overflow-hidden sm:h-[400px] lg:h-[500px]">
                  <img
                    src={blogs[0].image}
                    alt={blogs[0].title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-7 sm:p-10 lg:p-14">

                  <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-green-700">
                    Featured Article
                  </span>

                  <p className="mt-6 text-sm font-semibold text-green-600">
                    {blogs[0].category}
                  </p>

                  <h2 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    {blogs[0].title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base">
                    {blogs[0].description}
                  </p>

                  {/* Meta */}
                  <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">

                    <div className="flex items-center gap-2">
                      <CalendarDays size={16} />
                      {blogs[0].date}
                    </div>

                    <div className="flex items-center gap-2">
                      <User size={16} />
                      {blogs[0].author}
                    </div>

                  </div>

                  <button className="mt-8 flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700">
                    Read Article
                    <ArrowRight size={17} />
                  </button>

                </div>

              </div>
            </div>

            {/* ================= BLOG HEADER ================= */}
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
                  Latest Articles
                </p>

                <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                  Explore Our Latest Stories
                </h2>
              </div>

              {/* Search */}
              <div className="flex w-full items-center rounded-full border border-gray-200 bg-white px-4 py-2.5 shadow-sm md:max-w-xs">
                <Search size={18} className="text-gray-400" />

                <input
                  type="text"
                  placeholder="Search articles..."
                  className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>

            </div>

            {/* ================= CATEGORIES ================= */}
            <div className="mb-12 flex gap-3 overflow-x-auto pb-2">

              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition ${index === 0
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
                    }`}
                >
                  {category}
                </button>
              ))}

            </div>

            {/* ================= BLOG GRID ================= */}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

              {blogs.slice(1).map((blog) => (
                <article
                  key={blog.id}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">

                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-green-700 shadow-sm">
                      {blog.category}
                    </span>

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-xs text-gray-500">

                      <span className="flex items-center gap-1.5">
                        <CalendarDays size={14} />
                        {blog.date}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <User size={14} />
                        {blog.author}
                      </span>

                    </div>

                    <h3 className="mt-4 text-xl font-bold leading-snug transition group-hover:text-green-600">
                      {blog.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
                      {blog.description}
                    </p>

                    <button className="mt-5 flex items-center gap-2 text-sm font-semibold text-green-600 transition hover:gap-3">
                      Read More
                      <ArrowRight size={16} />
                    </button>

                  </div>

                </article>
              ))}

            </div>

            {/* ================= LOAD MORE ================= */}
            <div className="mt-14 flex justify-center">

              <button className="rounded-full border border-green-600 px-7 py-3 text-sm font-semibold text-green-600 transition hover:bg-green-600 hover:text-white">
                Load More Articles
              </button>

            </div>

          </div>
        </section>

        {/* ================= NEWSLETTER ================= */}
        <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#e8eee0]">

            <div className="px-6 py-12 text-center sm:px-12 lg:px-20 lg:py-16">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Stay Updated
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Get Fresh Ideas in Your Inbox
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                Subscribe to our newsletter for healthy recipes, organic food
                tips and the latest updates from Organic.
              </p>

              <div className="mx-auto mt-7 flex max-w-lg flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="h-12 flex-1 rounded-full border border-gray-200 bg-white px-5 text-sm outline-none focus:border-green-500"
                />

                <button className="h-12 rounded-full bg-green-600 px-7 text-sm font-semibold text-white transition hover:bg-green-700">
                  Subscribe
                </button>

              </div>

            </div>

          </div>
        </section>

      </div>
      </Layout>

    </>
  );
}

export default Blog;