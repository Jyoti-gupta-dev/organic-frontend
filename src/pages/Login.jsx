
import React, { useState } from "react";
import { Mail, Lock, Eye } from "lucide-react";
import logo from "../Images/logo.png";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/Api";

function Login() {
    const [data, setAllData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const getvalue = (e) => {
        setAllData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // const res = await axios.post(
            // "https://organic-backend-five.vercel.app/api/user/login",
            // data,

            const res = await api.post("/user/login", data)
            //"http://localhost:5000/api/user/login",data


            if (res.data.success) {
                // localStorage.setItem(
                //     "user",
                //     JSON.stringify(res.data.user)
                // );
                const token = res.data.token
                localStorage.setItem("token", token)

                console.log("token saved:", token)

                toast.success(res.data.message);

                // Login ke baad home par
                setTimeout(() => {
                    navigate("/");
                }, 1000);
            } else {
                toast.error(res.data.message);
            }

            console.log(res);
        } catch (error) {
            console.log(error);

            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
        }
    };

    return (
        <>
            <Toaster position="top-right" />

            <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">

                <div className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-lg border border-gray-100">

                    {/* Logo */}
                    <div className="flex justify-center mb-5">
                        <div className="bg-green-100 p-3 rounded-full">
                            <img
                                src={logo}
                                alt="Organic"
                                className="w-14 h-14 object-contain"
                            />
                        </div>
                    </div>

                    {/* Heading */}
                    <h2 className="text-center text-3xl font-bold text-slate-800">
                        Welcome Back
                    </h2>

                    <p className="text-center text-gray-500 mt-2 mb-8 text-sm">
                        Login to your Organic account
                    </p>

                    {/* Form */}
                    <form
                        className="space-y-6"
                        onSubmit={handleSubmit}
                    >

                        {/* Email */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Email Address
                            </label>

                            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 mt-2 border border-gray-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition">

                                <Mail
                                    size={18}
                                    className="text-green-600"
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="Enter your email"
                                    onChange={getvalue}
                                    className="ml-3 w-full outline-none bg-transparent text-sm"
                                    required
                                />

                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-sm font-medium text-gray-700">
                                Password
                            </label>

                            <div className="flex items-center bg-gray-50 rounded-xl px-4 py-3 mt-2 border border-gray-200 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition">

                                <Lock
                                    size={18}
                                    className="text-green-600"
                                />

                                <input
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    placeholder="Enter your password"
                                    onChange={getvalue}
                                    className="ml-3 w-full outline-none bg-transparent text-sm"
                                    required
                                />

                                <Eye
                                    size={18}
                                    className="cursor-pointer text-gray-400 hover:text-green-600"
                                />

                            </div>
                        </div>

                        {/* Forgot Password */}
                        <div className="text-right">
                            <button
                                type="button"
                                className="text-sm text-green-600 hover:text-green-700 hover:underline"
                            >
                                Forgot Password?
                            </button>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md hover:shadow-lg transition duration-300"
                        >
                            Login
                        </button>

                    </form>

                    {/* Create Account */}
                    <p className="text-center mt-8 text-gray-600 text-sm">
                        Don't have an account?

                        <Link
                            to="/signup"
                            className="text-green-600 font-semibold ml-2 hover:text-green-700 hover:underline"
                        >
                            Create Account
                        </Link>
                    </p>

                </div>
            </div>
        </>
    );
}

export default Login;