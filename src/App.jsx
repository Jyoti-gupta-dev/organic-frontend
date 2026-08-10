
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import HomePage from "./pages/HomePage";


// import Category from "./Components/Category";
// import SellingProducts from "./Components/layout/SellingProducts";
// import PromoBanner from "./Components/layout/PromoBanner";
// import FeaturedProducts from "./Components/layout/FeaturedProducts";
// import DiscountBanner from "./Components/layout/DiscountBanner";
// import PopularProducts from "./Components/layout/PopularProducts";
// import BlogSection from "./Components/layout/BlogSection";
// import AppBanner from "./Components/layout/AppBanner";
// import PeopleLookingFor from "./Components/layout/PeopleLooking.jsx";
// import Features from "./Components/layout/Features";
// import Footer from "./Components/layout/Footer";
// import Navbar from "./Components/layout/Navbar";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         {/* <Navbar /> */}

//         <Routes>
//           <Route path="/Signup" element={<Signup />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Navbar" element={<Navbar/>}/>

//           <Route path="/" element={<Home />} />

//           <Route path="/HomePage" element={<HomePage />} />
//           <Route path="/Category" element={<Category />} />
//           <Route path="/SellingProducts" element={<SellingProducts />} />
//           <Route path="/PromoBanner" element={<PromoBanner />} />
//           <Route path="/FeaturedProducts" element={<FeaturedProducts />} />
//           <Route path="/DiscountBanner" element={<DiscountBanner />} />
//           <Route path="/PopularProducts" element={<PopularProducts />} />
//           <Route path="/BlogSection" element={<BlogSection />} />
//           <Route path="/AppBanner" element={<AppBanner />} />
//           <Route
//             path="/PeopleLookingFor"
//             element={<PeopleLookingFor />}
//           />
//           <Route path="/Features" element={<Features />} />
//           <Route path="/Footer" element={<Footer />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;



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
        <Route
          path="/PeopleLookingFor"
          element={<PeopleLookingFor />}
        />
        <Route path="/Features" element={<Features />} />
        <Route path="/Footer" element={<Footer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
