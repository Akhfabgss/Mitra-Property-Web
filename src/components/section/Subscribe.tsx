"use client";
import Image from "next/image";

export default function NewsletterSection() {
  return (
    <section className="mx-0 md:mx-30 px-10 lg:px-0 py-10 md:py-5">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-[#EB8F32] to-[#8291EA] rounded-3xl p-8 md:p-5 text-white gap-8 md:gap-16">
        
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[250px] md:w-[350px] md:h-[300px] lg:w-[420px] lg:h-[350px]">
            <Image
              src="/assets/Subscribe.svg"
              alt="Modern House"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT TEXT + FORM */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-5">
            Subscribe to Our <br /> News<span className="text-white/90">letter</span>
          </h2>
          
          <form className="flex flex-row items-center gap-4 bg-white rounded-xl p-2 shadow-md max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Masukan Email"
              className="flex-1 md:px-4 py-2 rounded-lg text-gray-700 outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-[#5067EB] hover:bg-[#4053c5] text-white px-3 md:px-5 py-2 rounded-lg font-medium transition-all text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
