


import React, { useState } from "react";
import {
    User,
    Mail,
    Phone,
    Lock,
    Eye,
    ArrowRight,
    Truck,
    ShieldCheck,
    RotateCcw,
} from "lucide-react";

import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import signupleftimg from "../Images/signupleftimg.png";
import logo from "../Images/logo.png";
import api from "../api/Api";

function Signup() {

    const [allData, setAllData] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    });

    const navigate = useNavigate();

    console.log(allData);

    function getvalue(e) {
        setAllData({
            ...allData,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        try {

            console.log("Signup data:", allData);

            // const res = await axios.post(
            //     "http://localhost:5000/api/user/signup",
            //     allData
            // );
            const res = await api.post("/user/signup", data)

            console.log("Signup response:", res.data);

            if (res.data.success) {

                toast.success(res.data.message);

                // Signup successful → Login page
                setTimeout(() => {
                    navigate("/login");
                }, 1000);

            } else {

                toast.error(res.data.message);

            }

        } catch (error) {

            console.log("Signup error:", error.response?.data);

            toast.error(
                error.response?.data?.message ||
                "Something went wrong"
            );
        }
    }


    return (
        <>
            <Toaster />
            <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center p-4 lg:p-10">

                <div className="w-full max-w-7xl bg-white rounded-[35px] overflow-hidden shadow-2xl grid lg:grid-cols-2">

                    {/* LEFT SECTION */}

                    {/* <div className="hidden lg:flex relative bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF1E6]">

                        // {/* background circles */}
                    {/* 
                        <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-40"></div>

                        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-40"></div>

                        <div className="relative z-10 flex flex-col justify-between p-14 w-full">
                            <div className="flex items-center gap-3">
                                <img src={logo} alt="Organic" className="w-40 h-" />
                                <div>
                                    <h1 className="text-3xl font-bold text-green-700">Organic</h1>
                                    <p className="text-sm text-slate-500">Fresh & Healthy</p>
                                </div>
                            </div> */}

                    {/* Brand */}

                    {/* <div>

                                <h1 className="text-4xl font-black tracking-wide text-slate-900">
                                    Organic
                                </h1>

                                <p className="text-slate-500 mt-2">
                                    Premium Shopping Experience
                                </p>

                            </div> */}

                    {/* Heading */}

                    {/* <div>

                                <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                                    New Collection 2026
                                </span>

                                <h2 className="text-5xl font-extrabold leading-tight text-slate-900 mt-6">

                                    Discover
                                    <br />
                                    Your Style.

                                </h2>

                                <p className="text-slate-600 leading-8 text-lg mt-6 max-w-md">

                                    Explore thousands of premium fashion,
                                    electronics and lifestyle products with
                                    secure checkout and lightning fast delivery.

                                </p>

                            </div> */}

                    {/* Image */}

                    {/* <div className="flex justify-center">
                              

                                <img
                                    src={signupleftimg}
                                    alt=""
                                    className="w-[400px] drop-shadow-2xl"
                                />

                            </div> */}

                    {/* Features */}

                    {/* <div className="grid grid-cols-3 gap-5">

                                <div className="bg-white rounded-2xl p-5 shadow-lg">

                                    <Truck className="text-orange-500" />

                                    <h4 className="font-bold mt-4">
                                        Free Shipping
                                    </h4>

                                    <p className="text-sm text-slate-500 mt-2">
                                        On every order
                                    </p>

                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-lg">

                                    <ShieldCheck className="text-green-500" />

                                    <h4 className="font-bold mt-4">
                                        Secure Payment
                                    </h4>

                                    <p className="text-sm text-slate-500 mt-2">
                                        100% Protected
                                    </p>

                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow-lg">

                                    <RotateCcw className="text-indigo-500" />

                                    <h4 className="font-bold mt-4">
                                        Easy Returns
                                    </h4>

                                    <p className="text-sm text-slate-500 mt-2">
                                        7 Days Return
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div> */}

                    {/* LEFT SECTION */}

                    <div className="hidden lg:flex relative bg-gradient-to-br from-green-50 via-white to-lime-50">

                        {/* Background Blur */}

                        <div className="absolute -top-24 -left-24 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-40"></div>

                        <div className="absolute bottom-0 right-0 w-72 h-72 bg-lime-200 rounded-full blur-3xl opacity-40"></div>

                        <div className="relative z-10 flex flex-col justify-between p-12 w-full">

                            {/* Logo */}

                            <div className="flex items-center gap-3">

                                <img
                                    src={logo}
                                    alt="Organic"
                                    className="w-20 h-20 object-contain"
                                />

                                <div>

                                    <h1 className="text-3xl font-bold text-green-700">
                                        Organic
                                    </h1>

                                    <p className="text-slate-500 text-sm">
                                        Fresh • Healthy • Natural
                                    </p>

                                </div>

                            </div>

                            {/* Heading */}

                            <div>

                                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                    100% Organic Foods
                                </span>

                                <h2 className="text-5xl font-extrabold text-slate-900 leading-tight mt-6">
                                    Eat Fresh.
                                    <br />
                                    Live Healthy.
                                </h2>

                                <p className="mt-6 text-slate-600 leading-8 max-w-md">

                                    Fresh vegetables, fruits and organic groceries
                                    delivered directly from local farms to your doorstep.

                                </p>

                            </div>

                            {/* Illustration */}

                            <div className="flex justify-center">

                                <img
                                    src={signupleftimg}
                                    alt="Organic"
                                    className="w-[430px]"
                                />

                            </div>

                            {/* Features */}

                            <div className="grid grid-cols-3 gap-5">

                                <div className="bg-white rounded-2xl p-5 shadow">

                                    🌿

                                    <h4 className="font-bold mt-3">
                                        Farm Fresh
                                    </h4>

                                    <p className="text-sm text-slate-500 mt-2">
                                        Directly from farms
                                    </p>

                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow">

                                    🚚

                                    <h4 className="font-bold mt-3">
                                        Fast Delivery
                                    </h4>

                                    <p className="text-sm text-slate-500 mt-2">
                                        Within 24 Hours
                                    </p>

                                </div>

                                <div className="bg-white rounded-2xl p-5 shadow">

                                    🥬

                                    <h4 className="font-bold mt-3">
                                        100% Natural
                                    </h4>

                                    <p className="text-sm text-slate-500 mt-2">
                                        No Chemicals
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SECTION */}

                    {/* <div className="flex items-center justify-center p-8 lg:p-16">

                        <div className="w-full max-w-md">

                            <h2 className="text-4xl font-bold text-slate-900">
                                Create Account
                            </h2>

                            <p className="text-slate-500 mt-3">
                                Create your account and start shopping smarter.
                            </p>

                            {/* Form yahan se Part 2 me continue hoga */}

                    {/* <form className="mt-10 space-y-6" onSubmit={handleSubmit}>  */}

                    {/* Full Name */}

                    {/* <div>

                                    <label className="text-sm font-semibold text-slate-700">
                                        Full Name
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-2xl border border-slate-300 px-4 transition-all duration-300 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">

                                        <User size={20} className="text-slate-400" />

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name" onChange={getvalue}
                                            className="ml-3 w-full bg-transparent outline-none"
                                        />

                                    </div>

                                </div> */}

                    {/* Email */}
                    {/* 
                                <div>

                                    <label className="text-sm font-semibold text-slate-700">
                                        Email Address
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-2xl border border-slate-300 px-4 transition-all duration-300 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">

                                        <Mail size={20} className="text-slate-400" />

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email" onChange={getvalue}
                                            className="ml-3 w-full bg-transparent outline-none"
                                        />

                                    </div>

                                </div> */}

                    {/* Phone */}

                    {/* <div>

                                    <label className="text-sm font-semibold text-slate-700">
                                        Phone Number
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-2xl border border-slate-300 px-4 transition-all duration-300 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">

                                        <Phone size={20} className="text-slate-400" />

                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="+91 9876543210" onChange={getvalue}
                                            className="ml-3 w-full bg-transparent outline-none"
                                        />

                                    </div>

                                </div> */}

                    {/* Password */}

                    {/* <div>

                                    <label className="text-sm font-semibold text-slate-700">
                                        Password
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-2xl border border-slate-300 px-4 transition-all duration-300 focus-within:border-orange-500 focus-within:ring-4 focus-within:ring-orange-100">

                                        <Lock size={20} className="text-slate-400" />

                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="********" onChange={getvalue}
                                            className="ml-3 w-full bg-transparent outline-none"
                                        />

                                        <Eye
                                            size={20}
                                            className="cursor-pointer text-slate-400 hover:text-orange-500"
                                        />

                                    </div>

                                </div> */}

                    {/* Checkbox */}
                    {/* 
                                <label className="flex items-start gap-3 cursor-pointer">

                                    <input
                                        type="checkbox"
                                        className="mt-1 accent-orange-500"
                                    />

                                    <span className="text-sm text-slate-600 leading-6">

                                        I agree to the

                                        <span className="text-orange-500 font-semibold cursor-pointer">
                                            {" "}Terms & Conditions
                                        </span>

                                        {" "}and{" "}

                                        <span className="text-orange-500 font-semibold cursor-pointer">
                                            Privacy Policy
                                        </span>

                                    </span>

                                </label> */}

                    {/* Button */}

                    {/* <button
                                    className="w-full h-14 rounded-2xl bg-slate-900 hover:bg-orange-500 transition-all duration-300 text-white font-semibold flex items-center justify-center gap-2"
                                >

                                    Create Account

                                    <ArrowRight size={18} />

                                </button>

                            </form> */}

                    {/* Divider */}

                    {/* <div className="my-8 flex items-center gap-4">

                                <div className="h-px flex-1 bg-slate-200"></div>

                                <span className="text-sm text-slate-400">
                                    OR
                                </span>

                                <div className="h-px flex-1 bg-slate-200"></div>

                            </div> */}

                    {/* Google Button */}

                    {/* <button
                                className="w-full h-14 rounded-2xl border border-slate-300 hover:border-orange-400 hover:bg-orange-50 transition-all duration-300 flex items-center justify-center gap-3 font-medium"
                            >

                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="Google"
                                    className="h-5 w-5"
                                />


                                Continue with Google

                            </button> */}

                    {/* Footer */}
                    {/* 
                            <p className="mt-8 text-center text-slate-600">

                                Already have an account?

                                <span className="ml-2 text-orange-500 font-semibold cursor-pointer hover:underline">

                                    Login

                                </span>

                            </p>

                        </div>

                    </div> */}


                    {/* RIGHT SECTION */}

                    <div className="flex items-center justify-center p-8 lg:p-16 bg-white">

                        <div className="w-full max-w-md">

                            <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                                🌿 Welcome to Organic
                            </span>

                            <h2 className="text-4xl font-bold text-slate-900 mt-5">
                                Create Your Account
                            </h2>

                            <p className="text-slate-500 mt-3 leading-7">
                                Join Organic today and enjoy fresh fruits, vegetables and healthy groceries delivered right to your doorstep.
                            </p>

                            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>

                                {/* Full Name */}

                                <div>

                                    <label className="text-sm font-semibold text-slate-700">
                                        Full Name
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-green-600 focus-within:ring-4 focus-within:ring-green-100 transition">

                                        <User size={20} className="text-green-600" />

                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name"
                                            onChange={getvalue}
                                            className="ml-3 w-full outline-none bg-transparent"
                                        />

                                    </div>

                                </div>

                                {/* Email */}

                                <div>

                                    <label className="text-sm font-semibold text-slate-700">
                                        Email Address
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-green-600 focus-within:ring-4 focus-within:ring-green-100 transition">

                                        <Mail size={20} className="text-green-600" />

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            onChange={getvalue}
                                            className="ml-3 w-full outline-none bg-transparent"
                                        />

                                    </div>

                                </div>

                                {/* Phone */}

                                <div>

                                    <label className="text-sm font-semibold text-slate-700">
                                        Phone Number
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-green-600 focus-within:ring-4 focus-within:ring-green-100 transition">

                                        <Phone size={20} className="text-green-600" />

                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="+91 9876543210"
                                            onChange={getvalue}
                                            className="ml-3 w-full outline-none bg-transparent"
                                        />

                                    </div>

                                </div>

                                {/* Password */}

                                <div>

                                    <label className="text-sm font-semibold text-slate-700">
                                        Password
                                    </label>

                                    <div className="mt-2 flex items-center h-14 rounded-xl border border-slate-300 px-4 focus-within:border-green-600 focus-within:ring-4 focus-within:ring-green-100 transition">

                                        <Lock size={20} className="text-green-600" />

                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="********"
                                            onChange={getvalue}
                                            className="ml-3 w-full outline-none bg-transparent"
                                        />

                                        <Eye className="text-slate-400 hover:text-green-600 cursor-pointer" size={20} />

                                    </div>

                                </div>

                                {/* Checkbox */}

                                <label className="flex items-start gap-3 cursor-pointer">

                                    <input
                                        type="checkbox"
                                        className="mt-1 accent-green-600"
                                    />

                                    <span className="text-sm text-slate-600">

                                        I agree to the

                                        <span className="text-green-700 font-semibold cursor-pointer hover:underline">
                                            {" "}Terms & Conditions
                                        </span>

                                        {" "}and{" "}

                                        <span className="text-green-700 font-semibold cursor-pointer hover:underline">
                                            Privacy Policy
                                        </span>

                                    </span>

                                </label>

                                {/* Button */}

                                <button
                                    className="w-full h-14 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold flex items-center justify-center gap-2 transition shadow-lg"
                                >

                                    Join Organic

                                    <ArrowRight size={18} />

                                </button>

                            </form>

                            {/* Divider */}

                            <div className="my-8 flex items-center gap-4">

                                <div className="flex-1 h-px bg-slate-200"></div>

                                <span className="text-sm text-slate-400">
                                    or continue with
                                </span>

                                <div className="flex-1 h-px bg-slate-200"></div>

                            </div>

                            {/* Google */}

                            <button
                                className="w-full h-14 rounded-xl border border-slate-300 hover:border-green-500 hover:bg-green-50 transition flex items-center justify-center gap-3 font-medium"
                            >

                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="Google"
                                    className="w-5 h-5"
                                />

                                Continue with Google

                            </button>

                            {/* Footer */}

                            <p className="mt-8 text-center text-slate-600">

                                Already have an account?

                                <span className="ml-2 text-green-700 font-semibold cursor-pointer hover:underline">

                                    Login

                                </span>

                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </>

    );
}

export default Signup;