"use client";
import Image from "next/image";
import { FaHome, FaUsers, FaFileAlt, FaChartBar } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="max-w mx-0 md:mx-30 px-10 lg:px-0 py-10 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
      {/* LEFT IMAGE */}
      <div className="md:w-1/2 w-full">
        <div className="relative w-full h-[500px] md:h-[720px] overflow-hidden">
          <Image
            src="/assets/about.svg"
            alt="About Mitra Property"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="md:w-1/2 w-full">
        <span className="text-[#5067EB] font-semibold text-lg border-l-4 border-[#5067EB] pl-3">
          About Mitra Property
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug my-5">
          We Provide You The Simple Ways to Invest In{" "}
          <span className="text-[#5067EB]">Real Estate</span>
        </h2>

        <p className="text-gray-600 my-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>

        {/* FEATURE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
        {[
            { icon: <FaFileAlt size={28} />, title: "Lorem ipsum dolor sit amet,", desc: "Lorem ipsum dolor sit amet, consectetur" },
            { icon: <FaHome size={28} />, title: "Lorem ipsum dolor sit amet,", desc: "Lorem ipsum dolor sit amet, consectetur" },
            { icon: <FaChartBar size={28} />, title: "Lorem ipsum dolor sit amet,", desc: "Lorem ipsum dolor sit amet, consectetur" },
            { icon: <FaUsers size={28} />, title: "Lorem ipsum dolor sit amet,", desc: "Lorem ipsum dolor sit amet, consectetur" },
        ].map((item, index) => (
            <div
            key={index}
            className="bg-white pr-7 pb-5" 
            >
            {/* top row: icon + title */}
            <div className="flex items-start gap-4">
                <div className="text-[#5067EB] bg-blue-50 p-3 rounded-lg text-xl w-20 h-16 flex items-center justify-center">
                {item.icon}
                </div>

                <h3 className="font-semibold text-gray-900 text-lg">
                {item.title}
                </h3>
            </div>

            <p className="text-gray-600 text-sm mt-3">
                {item.desc}
            </p>
            </div>
        ))}
        </div>


        
      </div>
    </section>
  );
}
