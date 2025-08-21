"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-indigo-50 dark:bg-neutral-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            Discover the <span className="text-indigo-600 dark:text-indigo-400">Best Products</span>
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
            Browse our curated collection and find the products you love. Fast delivery, trusted brands, and amazing deals.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start gap-4">
            <Link
              href="/products"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium text-sm sm:text-base hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-indigo-600 px-6 py-3 text-indigo-600 font-medium text-sm sm:text-base hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-400 dark:hover:bg-neutral-800 transition"
            >
              Login
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="/product3.jpg"
            alt="Hero Banner"
            className="w-full max-w-md rounded-xl shadow-lg"
          />
        </div>
      </div>

      {/* Optional Decorative Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply opacity-30 animate-blob"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply opacity-30 animate-blob animation-delay-2000"></div>
    </section>
  );
}
