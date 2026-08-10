
import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Layout from "../Layout/Layout";

function Contact() {
    return (
        <>
        <Layout>
            <div>
                {/* ================= HERO ================= */}
                <section className="bg-[#f3f7ee] px-6 py-20 md:px-12 lg:px-20">
                    <div className="mx-auto max-w-7xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-green-600">
                            Contact Us
                        </p>

                        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                            Get In Touch
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500">
                            We'd love to hear from you. Whether you have a question,
                            feedback, or need help, feel free to reach out to us.
                        </p>
                    </div>
                </section>

                {/* ================= CONTACT INFO ================= */}
                <section className="px-6 py-16 md:px-12 lg:px-20">
                    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0df] text-green-600">
                                <MapPin size={22} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                Our Address
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Jaipur, Rajasthan
                                <br />
                                India
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0df] text-green-600">
                                <Phone size={22} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                Phone
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                +91 98765 43210
                                <br />
                                Mon - Sat, 9AM - 6PM
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0df] text-green-600">
                                <Mail size={22} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                Email
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                hello@organic.com
                                <br />
                                support@organic.com
                            </p>
                        </div>

                        <div className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0df] text-green-600">
                                <Clock size={22} />
                            </div>

                            <h3 className="text-lg font-semibold text-gray-900">
                                Working Hours
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-gray-500">
                                Monday - Saturday
                                <br />
                                9:00 AM - 6:00 PM
                            </p>
                        </div>

                    </div>
                </section>

                {/* ================= FORM ================= */}
                <section className="bg-[#f8faf6] px-6 py-20 md:px-12 lg:px-20">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[3px] text-green-600">
                                Send Us A Message
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold text-gray-900 md:text-4xl">
                                Have Any Questions?
                            </h2>

                            <p className="mt-5 max-w-lg leading-7 text-gray-500">
                                Fill out the form and our team will get back to you
                                as soon as possible. We are always happy to help.
                            </p>

                            <div className="mt-8 space-y-5">

                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f0df] text-green-600">
                                        <Mail size={19} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-400">Email us</p>
                                        <p className="font-medium text-gray-800">
                                            hello@organic.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e8f0df] text-green-600">
                                        <Phone size={19} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-400">Call us</p>
                                        <p className="font-medium text-gray-800">
                                            +91 98765 43210
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* FORM */}
                        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-10">
                            <form className="space-y-5">

                                <div className="grid gap-5 md:grid-cols-2">

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Your Name
                                        </label>

                                        <input
                                            type="text"
                                            placeholder="Enter your name"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-700">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            placeholder="Enter your email"
                                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500"
                                        />
                                    </div>

                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="What is this about?"
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-medium text-gray-700">
                                        Message
                                    </label>

                                    <textarea
                                        rows="6"
                                        placeholder="Write your message..."
                                        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-green-500"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
                                >
                                    SEND MESSAGE
                                </button>

                            </form>
                        </div>

                    </div>
                </section>

                {/* ================= MAP ================= */}
                <section className="px-6 py-16 md:px-12 lg:px-20">
                    <div className="mx-auto max-w-7xl">

                        <div className="mb-8 text-center">
                            <p className="text-sm font-semibold uppercase tracking-[3px] text-green-600">
                                Find Us
                            </p>

                            <h2 className="mt-2 text-3xl font-semibold text-gray-900">
                                Visit Our Store
                            </h2>
                        </div>

                        <div className="flex h-[350px] items-center justify-center overflow-hidden rounded-3xl bg-[#e8eee0]">

                            <div className="text-center">
                                <MapPin
                                    size={45}
                                    className="mx-auto text-green-600"
                                />

                                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                                    Jaipur, Rajasthan
                                </h3>

                                <p className="mt-2 text-sm text-gray-500">
                                    India
                                </p>
                            </div>

                        </div>

                    </div>
                </section>

            </div>
        </Layout>
        </>
    );
}

export default Contact;