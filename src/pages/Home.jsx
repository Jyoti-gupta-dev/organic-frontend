
import React from "react";

import Navbar from "../Components/Navbar";
import HomePage from "./HomePage";
import Category from "../Components/Category";
import SellingProducts from "../Components/SellingProducts";
import PromoBanner from "../Components/PromoBanner";
import FeaturedProducts from "../Components/FeaturedProducts";
import DiscountBanner from "../Components/DiscountBanner";
import PopularProduct from "../Components/PopularProducts";
import BlogSection from "../Components/BlogSection";
import AppBanner from "../Components/AppBanner";
import PeopleLookingFor from "../Components/PeopleLookingFor";
import Features from "../Components/Features";
import Footer from "../Components/Footer";
import Aboutus from "./Aboutus";

function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Category />
      <SellingProducts />
      <PromoBanner />
      <FeaturedProducts />
      <DiscountBanner />
      <PopularProduct />
      <BlogSection />
      <AppBanner />
      <PeopleLookingFor />
      <Features />
      <Footer />
    
    </>
  );
}

export default Home;