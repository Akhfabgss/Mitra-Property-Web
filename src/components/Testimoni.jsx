"use client";
import { useRef } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function TestimoniSection() {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      name: "Lorem ipsum dolor",
      role: "Lorem ipsum",
      img: "/assets/Profile-testimoni.png",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Lorem ipsum dolor",
      role: "Lorem ipsum",
      img: "/assets/Profile-testimoni.png",
      rating: 4,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Lorem ipsum dolor",
      role: "Lorem ipsum",
      img: "/assets/Profile-testimoni.png",
      rating: 5,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Lorem ipsum dolor",
      role: "Lorem ipsum",
      img: "/assets/Profile-testimoni.png",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/assets/Testimoni.png')" }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
          Testimoni
        </h2>

        <div className="relative">
          {/* Tombol Navigasi */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black text-[#2A2E6E] w-15 h-15 rounded-full flex items-center justify-center shadow-md -mx-25"
          >
            <FaChevronLeft className="w-7 h-7 text-white"/>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="pb-20"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-left flex flex-col justify-between h-full min-h-[250px] md:min-h-[280px]">
                  
                  {/* Header (foto + nama + bintang kanan) */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="relative w-20 h-20 mr-4">
                        <div className="absolute inset-0 rounded-full border-2 border-[#8291EA] border-dashed"></div>
                        <div className="absolute bg-transparent rounded-full"></div>
                        <Image
                          src={t.img}
                          alt={t.name}
                          fill
                          className="rounded-full object-cover p-1 z-10"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">{t.name}</h3>
                        <p className="text-gray-500 text-sm">{t.role}</p>
                      </div>
                    </div>

                    {/* Bintang di pojok kanan */}
                    <div className="flex gap-1 items-center mt-2">
                      {Array.from({ length: t.rating }).map((_, idx) => (
                        <FaStar key={idx} className="text-[#8291EA] text-lg ml-[2px]" />
                      ))}
                    </div>
                  </div>

                  {/* Isi testimoni */}
                  <p className="text-gray-600 text-sm leading-relaxed flex-grow">
                    {t.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Next */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black text-[#2A2E6E] w-15 h-15 rounded-full flex items-center justify-center shadow-md -mx-25"
          >
            <FaChevronRight className="w-7 h-7 text-white" />
          </button>

          {/* Pagination */}
          <div className="custom-pagination mt-6 flex justify-center gap-2"></div>
        </div>
      </div>

      {/* Custom style pagination */}
      <style jsx global>{`
        .custom-pagination .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: rgba(255, 255, 255, 1);
          width: 12px;
          height: 12px;
        }
      `}</style>
    </section>
  );
}
