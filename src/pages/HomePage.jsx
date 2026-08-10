
import React from "react";
import { RefreshCw, Leaf, Truck } from "lucide-react";

function HomePage() {
    const stats = [
        { value: "14k+", label: "PRODUCT\nVARIETIES" },
        { value: "50k+", label: "HAPPY\nCUSTOMERS" },
        { value: "10+", label: "STORE\nLOCATIONS" },
    ];

    const features = [
        {
            icon: RefreshCw,
            title: "Fresh from farm",
            desc: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
            bg: "bg-[#7CB342]",
        },
        {
            icon: Leaf,
            title: "100% Organic",
            desc: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
            bg: "bg-[#2E3B1F]",
        },
        {
            icon: Truck,
            title: "Free delivery",
            desc: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
            bg: "bg-[#F2790F]",
        },
    ];

    return (
        <div className="w-full font-sans">
            {/* HERO SECTION */}
            <section className="relative z-0 bg-[#F6C445] overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center">
                    {/* LEFT: TEXT CONTENT */}
                    <div className="relative z-10 px-6 sm:px-10 lg:px-12 py-14 sm:py-20 lg:py-28">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
                            <span className="text-[#6DBE5B]">Organic</span>{" "}
                            <span className="text-gray-900">Foods at your</span>
                            <br />
                            <span className="text-gray-900">Doorsteps</span>
                        </h1>

                        <p className="mt-5 text-gray-600 text-base sm:text-lg">
                            Dignissim massa diam elementum.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <button className="bg-[#6DBE5B] hover:bg-[#5eab4d] transition-colors text-white text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full">
                                START SHOPPING
                            </button>
                            <button className="bg-gray-900 hover:bg-black transition-colors text-white text-sm font-semibold tracking-wide px-7 py-3.5 rounded-full">
                                JOIN NOW
                            </button>
                        </div>

                        {/* STATS */}
                        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-6">
                            {stats.map((s) => (
                                <div key={s.value} className="flex items-center gap-3">
                                    <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                                        {s.value}
                                    </span>
                                    <span className="text-xs font-semibold text-gray-700 leading-snug whitespace-pre-line">
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: IMAGE */}
                    <div className="relative h-64 sm:h-80 lg:h-full min-h-[320px] lg:min-h-[520px]">
                        <img
                            src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=1200&q=80"
                            alt="Fresh organic vegetables in a shopping basket"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* fade to blend into yellow bg on the left edge of the image (desktop) */}
                        <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F6C445] to-transparent" />
                    </div>
                </div>
            </section>

            {/* FEATURE STRIP */}
            <section className="grid grid-cols-1 sm:grid-cols-3">
                {features.map(({ icon: Icon, title, desc, bg }) => (
                    <div
                        key={title}
                        className={`${bg} px-8 sm:px-7 lg:px-10 py-10 flex items-start gap-4`}
                    >
                        <Icon className="w-8 h-8 text-white shrink-0 mt-1" strokeWidth={2} />
                        <div>
                            <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
                                {desc}
                            </p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default HomePage