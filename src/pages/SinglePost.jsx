import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CalendarDays,
  User,
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
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Eating healthy does not have to be complicated. Small changes in your everyday food choices can make a meaningful difference to your lifestyle.",
      "Adding more organic fruits, vegetables, whole grains and natural ingredients to your meals is a simple way to improve the quality of your everyday diet.",
      "Start by replacing processed snacks with fresh fruits, nuts or other naturally nutritious options. You can also prepare simple meals at home using fresh ingredients.",
      "Planning your meals ahead of time can make healthy eating easier. Keep fresh vegetables and fruits available so that making a healthy choice becomes more convenient.",
      "Remember that a healthy lifestyle is built through small and consistent habits. You do not have to change everything at once."
    ],
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
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Fresh ingredients can make a big difference in the taste and quality of everyday meals.",
      "Fresh fruits and vegetables provide important nutrients and can become an essential part of a balanced lifestyle.",
      "Choosing quality ingredients also encourages us to prepare meals at home and become more aware of what we eat.",
      "The best approach is to focus on variety, freshness and balanced meals."
    ],
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
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Cooking at home can be simple, enjoyable and healthy.",
      "Start with fresh vegetables, seasonal fruits and a few basic ingredients that you already have in your kitchen.",
      "Simple salads, vegetable bowls and fresh homemade meals can be prepared without spending hours in the kitchen.",
      "The key is to keep your recipes simple and use fresh ingredients."
    ],
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
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Healthy habits are created through consistency rather than perfection.",
      "Begin with small changes such as drinking enough water, eating fresh foods and planning balanced meals.",
      "Over time, these small habits can become a natural part of your daily routine.",
      "Focus on progress and give yourself time to build better habits."
    ],
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
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Choosing quality ingredients starts with understanding what you are buying.",
      "Look for fresh fruits and vegetables and choose products that fit your lifestyle and cooking needs.",
      "Reading product information and checking freshness can help you make better shopping decisions.",
      "A well-planned kitchen can make healthy cooking easier and more enjoyable."
    ],
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
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=1200&q=80",
    content: [
      "Planning your meals for the week can save time and help you make healthier choices.",
      "Keep a variety of fresh vegetables, fruits and other nutritious ingredients available at home.",
      "Prepare some ingredients in advance so that healthy meals are easier to make during busy days.",
      "A little planning can make your entire week more organized and balanced."
    ],
  },
];

function SinglePost() {
  const { id } = useParams();

  const post = blogs.find(
    (blog) => blog.id === Number(id)
  );

  // If post doesn't exist
  if (!post) {
    return (
      <Layout>
        <section className="flex min-h-[70vh] items-center justify-center px-4">
          <div className="text-center">

            <h1 className="text-4xl font-bold text-gray-900">
              Post Not Found
            </h1>

            <p className="mt-3 text-gray-500">
              Sorry, this blog post could not be found.
            </p>

            <Link
              to="/Blog"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              <ArrowLeft size={17} />
              Back to Blog
            </Link>

          </div>
        </section>
      </Layout>
    );
  }

  return (
    <>
    <Layout>

      {/* ================= HERO ================= */}

      <section className="bg-[#f5f8f1] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl">

          {/* Back */}
          <Link
            to="/Blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-green-600"
          >
            <ArrowLeft size={17} />
            Back to Blog
          </Link>

          {/* Category */}
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-green-600">
            {post.category}
          </p>

          {/* Title */}
          <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-6xl">
            {post.title}
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
            {post.description}
          </p>

          {/* Meta */}
          <div className="mt-7 flex flex-wrap items-center gap-6 text-sm text-gray-500">

            <div className="flex items-center gap-2">
              <CalendarDays size={17} />
              {post.date}
            </div>

            <div className="flex items-center gap-2">
              <User size={17} />
              {post.author}
            </div>

          </div>

        </div>
      </section>

      {/* ================= ARTICLE ================= */}

      <article className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

        <div className="mx-auto max-w-5xl">

          {/* Main Image */}
          <div className="overflow-hidden rounded-3xl">
            <img
              src={post.image}
              alt={post.title}
              className="h-[300px] w-full object-cover sm:h-[450px] lg:h-[550px]"
            />
          </div>

          {/* Article Content */}
          <div className="mx-auto mt-12 max-w-3xl">

            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-base leading-8 text-gray-600 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}

          </div>

          {/* Back Button */}
          <div className="mx-auto mt-12 max-w-3xl border-t border-gray-100 pt-8">

            <Link
              to="/Blog"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <ArrowLeft size={17} />
              Back to All Articles
            </Link>

          </div>

        </div>

      </article>

    </Layout>
    </>
  );
}

export default SinglePost;