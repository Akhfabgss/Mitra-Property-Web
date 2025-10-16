"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function RecentProject() {
  const projects = [
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      price: "Rp. 2.000.000.000",
      img: "/assets/homepage.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      price: "Rp. 2.000.000.000",
      img: "/assets/homepage.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      price: "Rp. 2.000.000.000",
      img: "/assets/homepage.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      price: "Rp. 3.000.000.000",
      img: "/assets/homepage.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      price: "Rp. 3.000.000.000",
      img: "/assets/homepage.png",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      desc: "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor",
      price: "Rp. 3.000.000.000",
      img: "/assets/homepage.png",
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mx-auto max-w-7xl px-10 lg:px-0 py-10 md:py-20 overflow-hidden">
      {/* Heading */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <p className="text-[#8291EA] font-medium border-l-4 border-[#8291EA] pl-3">
            Best Project of The Years
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Our <span className="text-[#8291EA]">Recent Project</span>
          </h2>
        </div>

        {/* Custom Nav Buttons */}
        <div className="flex gap-3 mt-4 md:mt-0">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full bg-[#8291EA] flex items-center justify-center hover:bg-[#6e7adb] transition"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Wrapper agar item yang keluar ke-hide */}
      <div className="relative overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!overflow-hidden"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i} className="p-3">
              <div className="bg-white rounded-2xl p-5 shadow-[0_0_10px_rgba(0,0,0,0.1)] hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] transition-all duration-300">
                <div className="relative w-full h-52 mb-4">
                  <Image
                    src={project.img}
                    alt={project.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-900">{project.price}</span>
                  <button className="text-[#8291EA] hover:underline text-sm font-medium">
                    Show Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
