import Sidebar from "@/components/layout/Sidebar";
import { Button } from "@/components/ui/button";
import JumlahLeadsChart from "@/components/ui/Charts";
import {
  EyeIcon,
  LayersIcon,
  MousePointerClickIcon,
  PhoneCall,
  UserIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

function page() {
  const data = [
    { day: "Sen", value: 30 },
    { day: "Sel", value: 45 },
    { day: "Rab", value: 28 },
    { day: "Kam", value: 55 },
    { day: "Jum", value: 50 },
    { day: "Sab", value: 35 },
    { day: "Min", value: 40 },
  ];

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT MAIN CONTENT (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Card Biru Welcome */}
          <div className="bg-biru text-white rounded-xl p-10 flex justify-between items-center min-h-[200px]">
            <div>
              <h2 className="text-lg">Selamat Datang</h2>
              <h1 className="text-2xl md:text-3xl font-bold mt-1">Admin</h1>
              <p className="text-sm opacity-90 mt-4">Do you ready for today?</p>
            </div>
            <Image
              width={300}
              height={300}
              src="/assets/welcome.svg"
              alt="welcome"
            />
          </div>

          {/* --- content lain bisa disini --- */}
          <div className="flex gap-6">
            {/* Line Chart */}
            <div className="flex-1 bg-white rounded-xl shadow-md p-6">
              <JumlahLeadsChart />
            </div>

            {/* Cards Statistik */}
            <div className="w-64 flex flex-col gap-4">
              <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <UserIcon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Marketing</p>
                  <p className="text-xl font-bold">12</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <MousePointerClickIcon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Klik</p>
                  <p className="text-xl font-bold">345</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
                <div className="p-3 bg-yellow-100 rounded-full">
                  <EyeIcon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total View</p>
                  <p className="text-xl font-bold">1.2K</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-4 flex items-center gap-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <LayersIcon size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Listing</p>
                  <p className="text-xl font-bold">57</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* RIGHT SIDEBAR (1/3 width) */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-biru font-semibold text-lg mb-4">
            Best Marketing
          </h3>

          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">{item}</span>
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200"></div>
                  <div>
                    <p className="font-medium">Lorem Ipsum</p>
                    <p className="text-sm text-gray-500">Jumlah Klik: 5</p>
                  </div>
                </div>
                <button>
                  <PhoneCall size={20} className="text-biru" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* TABLE KLIK TERBARU */}
      </div>
    </>
  );
}

export default page;
