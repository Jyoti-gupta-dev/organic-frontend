import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag, Layout as LayoutIcon } from "lucide-react";
import Layout from "../Layout/Layout";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Organic Apples",
      category: "Fresh Fruits",
      price: 180,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500",
    },
    {
      id: 2,
      name: "Organic Green Broccoli",
      category: "Vegetables",
      price: 120,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500",
    },
    {
      id: 3,
      name: "Organic Honey",
      category: "Natural Products",
      price: 350,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500",
    },
  ]);

  const increaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 50;

  const total = subtotal + shipping;

  return (
    <>
      <Layout>
        <div className="min-h-screen bg-[#fafcf8]">

          {/* ================= HERO ================= */}
          <section className="bg-[#eef5e8] px-4 py-14 sm:py-16">
            <div className="mx-auto max-w-7xl">

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-green-600">
                Shopping Cart
              </p>

              <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl lg:text-5xl">
                Your Cart
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 sm:text-base">
                Review your selected products and continue to checkout when
                you're ready.
              </p>

            </div>
          </section>

          {/* ================= CART ================= */}
          <section className="px-4 py-10 sm:py-14">
            <div className="mx-auto max-w-7xl">

              {cartItems.length === 0 ? (
                /* ================= EMPTY CART ================= */
                <div className="flex min-h-[450px] flex-col items-center justify-center rounded-2xl bg-white px-6 text-center shadow-sm">

                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#eef5e8]">
                    <ShoppingBag
                      size={34}
                      strokeWidth={1.5}
                      className="text-green-600"
                    />
                  </div>

                  <h2 className="text-2xl font-semibold text-gray-900">
                    Your cart is empty
                  </h2>

                  <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                    Looks like you haven't added anything to your cart yet.
                  </p>

                  <Link
                    to="/Shop"
                    className="mt-7 inline-flex items-center rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Continue Shopping
                  </Link>

                </div>
              ) : (
                <div className="grid gap-8 lg:grid-cols-[1fr_380px]">

                  {/* ================= LEFT ================= */}
                  <div>

                    {/* Table Header */}
                    <div className="hidden border-b border-gray-200 pb-4 text-xs font-semibold uppercase tracking-wider text-gray-500 md:grid md:grid-cols-[1fr_120px_130px_40px] md:gap-4">
                      <span>Product</span>
                      <span>Price</span>
                      <span>Quantity</span>
                      <span></span>
                    </div>

                    {/* Products */}
                    <div className="divide-y divide-gray-100 rounded-2xl bg-white shadow-sm">

                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="p-5 sm:p-6"
                        >
                          <div className="flex flex-col gap-5 md:grid md:grid-cols-[1fr_120px_130px_40px] md:items-center md:gap-4">

                            {/* Product */}
                            <div className="flex items-center gap-4">

                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-24 w-24 shrink-0 rounded-xl object-cover sm:h-28 sm:w-28"
                              />

                              <div>
                                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-green-600">
                                  {item.category}
                                </p>

                                <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                                  {item.name}
                                </h3>

                                <p className="mt-2 text-sm text-gray-500 md:hidden">
                                  ₹{item.price}
                                </p>
                              </div>

                            </div>

                            {/* Price */}
                            <div className="hidden md:block">
                              <p className="text-sm font-semibold text-gray-900">
                                ₹{item.price}
                              </p>
                            </div>

                            {/* Quantity */}
                            <div className="flex items-center justify-between md:justify-start">

                              <span className="text-sm text-gray-500 md:hidden">
                                Quantity
                              </span>

                              <div className="flex items-center rounded-lg border border-gray-200">

                                <button
                                  onClick={() =>
                                    decreaseQuantity(item.id)
                                  }
                                  className="flex h-9 w-9 items-center justify-center text-gray-500 transition hover:bg-gray-50"
                                >
                                  <Minus size={15} />
                                </button>

                                <span className="flex h-9 w-9 items-center justify-center border-x border-gray-200 text-sm font-medium">
                                  {item.quantity}
                                </span>

                                <button
                                  onClick={() =>
                                    increaseQuantity(item.id)
                                  }
                                  className="flex h-9 w-9 items-center justify-center text-gray-500 transition hover:bg-gray-50"
                                >
                                  <Plus size={15} />
                                </button>

                              </div>

                            </div>

                            {/* Remove */}
                            <button
                              onClick={() => removeItem(item.id)}
                              className="hidden text-gray-400 transition hover:text-red-500 md:block"
                              aria-label={`Remove ${item.name}`}
                            >
                              <Trash2 size={18} />
                            </button>

                          </div>

                          {/* Mobile Remove */}
                          <div className="mt-4 flex justify-end md:hidden">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="flex items-center gap-2 text-xs font-medium text-gray-400 hover:text-red-500"
                            >
                              <Trash2 size={15} />
                              Remove
                            </button>
                          </div>

                        </div>
                      ))}

                    </div>

                    {/* Continue Shopping */}
                    <div className="mt-6">
                      <Link
                        to="/Shop"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 transition hover:text-green-600"
                      >
                        <ArrowLeft size={17} />
                        Continue Shopping
                      </Link>
                    </div>

                  </div>

                  {/* ================= RIGHT SUMMARY ================= */}
                  <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm sm:p-7">

                    <h2 className="text-xl font-semibold text-gray-900">
                      Cart Summary
                    </h2>

                    <div className="my-6 border-t border-gray-100" />

                    {/* Subtotal */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        Subtotal
                      </span>

                      <span className="font-semibold text-gray-900">
                        ₹{subtotal}
                      </span>
                    </div>

                    {/* Shipping */}
                    <div className="mt-4 flex items-center justify-between text-sm">
                      <span className="text-gray-500">
                        Shipping
                      </span>

                      <span className="font-semibold text-gray-900">
                        {shipping === 0 ? "FREE" : `₹${shipping}`}
                      </span>
                    </div>

                    {/* Free Shipping */}
                    {subtotal > 0 && subtotal < 500 && (
                      <p className="mt-4 rounded-lg bg-[#eef5e8] px-3 py-2 text-xs leading-5 text-green-700">
                        Add ₹{500 - subtotal} more to get free shipping.
                      </p>
                    )}

                    <div className="my-6 border-t border-gray-100" />

                    {/* Total */}
                    <div className="flex items-center justify-between">
                      <span className="text-base font-semibold text-gray-900">
                        Total
                      </span>

                      <span className="text-xl font-bold text-gray-900">
                        ₹{total}
                      </span>
                    </div>

                    {/* Checkout */}
                    <Link
                      to="/Checkout"
                      className="mt-7 flex w-full items-center justify-center rounded-full bg-green-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
                    >
                      Proceed to Checkout
                    </Link>

                    <p className="mt-4 text-center text-xs leading-5 text-gray-400">
                      Secure checkout · Free shipping on orders above ₹500
                    </p>

                  </aside>

                </div>
              )}

            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default Cart;