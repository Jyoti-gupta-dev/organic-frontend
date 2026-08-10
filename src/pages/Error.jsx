import React from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Layout from "../Layout/Layout";

function Error() {
    return (
        <>
            <Layout>
                <div className="min-h-screen bg-[#f8faf5] flex items-center justify-center px-6">
                    <div className="text-center max-w-2xl">

                        {/* Error Number */}
                        <h1 className="text-[120px] md:text-[180px] font-bold leading-none text-[#dce5d3]">
                            404
                        </h1>

                        {/* Heading */}
                        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mt-4">
                            Page Not Found
                        </h2>

                        {/* Description */}
                        <p className="text-gray-500 text-base md:text-lg mt-5 max-w-lg mx-auto">
                            Sorry, the page you are looking for doesn't exist or may have
                            been moved.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

                            <Link
                                to="/"
                                className="flex items-center gap-2 px-6 py-3 rounded-xl
                       bg-black text-white hover:bg-gray-800 transition"
                            >
                                <Home size={19} />
                                Go Home
                            </Link>

                            <button
                                onClick={() => window.history.back()}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl
                       border border-gray-300 text-gray-700
                       hover:bg-gray-100 transition"
                            >
                                <ArrowLeft size={19} />
                                Go Back
                            </button>

                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

export default Error;