import Image from "next/image";
import React from "react";

function page() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-biru mb-6">About</h1>
      <div className="border-t border-gray-400"></div>

      <div className="flex justify-center items-center flex-col mt-6">
        <Image
          src="/assets/logo.jpg"
          alt="Mitra Properti Logo"
          width={150}
          height={150}
        />
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-biru mt-4">Nama Platform</h2>
        <p className="text-md font-medium text-gray-400">Mitra Properti</p>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-biru mt-4">Deskripsi</h2>
        <p className="text-md font-medium text-gray-400">1.0.0</p>
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-biru mt-4">Copyright</h2>
        <p className="text-md font-medium text-gray-400">
          &copy; 2025 Mitra Properti. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default page;
