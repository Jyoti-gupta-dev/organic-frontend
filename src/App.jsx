import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import HomePage from "./pages/HomePage";

import Category from "./Components/Category";
import SellingProducts from "./Components/SellingProducts";
import PromoBanner from "./Components/PromoBanner";
import FeaturedProducts from "./Components/FeaturedProducts";
import DiscountBanner from "./Components/DiscountBanner";
import PopularProducts from "./Components/PopularProducts";
import BlogSection from "./Components/BlogSection";
import AppBanner from "./Components/AppBanner";
import PeopleLookingFor from "./Components/PeopleLookingFor";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
// import SingleProducts from "./pages/SingleProducts";
import Checkout from "./pages/CheckOut";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import SinglePost from "./pages/SinglePost";
import Styles from "./pages/Styles";
import MyAccount from "./pages/MyAccount";
import ThankYou from "./pages/ThankYou";
import CreateProduct from "./pages/CreateProduct";



function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/SellingProducts" element={<SellingProducts />} />
        <Route path="/PromoBanner" element={<PromoBanner />} />
        <Route path="/FeaturedProducts" element={<FeaturedProducts />} />
        <Route path="/DiscountBanner" element={<DiscountBanner />} />
        <Route path="/PopularProducts" element={<PopularProducts />} />
        <Route path="/BlogSection" element={<BlogSection />} />
        <Route path="/AppBanner" element={<AppBanner />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/PeopleLookingFor" element={<PeopleLookingFor />} />
        <Route path="/Features" element={<Features />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Aboutus" element={<Aboutus />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Shop" element={<Shop />} />
        {/* <Route path="/SingleProducts" element={<SingleProducts />} /> */}
        <Route path="/CheckOut" element={<Checkout/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Error" element={<Error/>}/>
        {/* <Route path="/SinglePost" element={<SinglePost/>}/> */}
        <Route path="/Styles" element={<Styles/>}/>
        <Route path="/my-account" element={<MyAccount/>}/>
        <Route path="/thank-you" element={<ThankYou/>}/>
        <Route path="createproduct" element={<CreateProduct/>}/>

        






      </Routes>
    </BrowserRouter>
  );
}

export default App;