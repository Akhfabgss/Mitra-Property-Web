"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="max-w mx-auto px-10 lg:px-0 py-10 mb-10 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 mt-20">
      {/* Left Content */}
      <div className="md:w-1/2 md:px-30 text-center md:text-left space-y-5">
        <span className="inline-block bg-green-100 text-green-500 text-sm font-medium px-4 py-3 rounded-md">
          Mitra Property Nomor 1 Indonesia
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Discover your{" "}
          <span className="text-[#5067EB]">Perfect</span> Property
        </h1>

        <p className="text-gray-600 max-w-md mx-auto md:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <Link
            href="/properties"
            className="bg-[#5067EB] text-white px-10 py-3 rounded-md font-medium hover:bg-[#4056d3] transition-all"
          >
            View Property
          </Link>

          <Link
            href="/contact"
            className="border-2 border-[#5067EB] text-[#5067EB] px-10 py-3 rounded-md font-medium hover:bg-[#5067EB] hover:text-white transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-end">
        <Image
          src="/assets/homepage.png"
          alt="Modern House"
          width={800}
          height={500}
          className="rounded-4xl md:rounded-none object-cover w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
