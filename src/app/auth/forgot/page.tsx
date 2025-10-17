"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Reset link dikirim ke:", email);
    };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="flex-1 bg-[#5067EB] text-white flex flex-col p-10 md:pl-25">
        <div>
          <h1 className="text-lg font-semibold mb-3 md:mb-15 text-center md:text-left">MITRA PROPERTY</h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Manage your Files <br /> the best way
          </h2>
          <p className="text-md opacity-90 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="mt-10">
            <Image
              src="/assets/forgot-password.svg"
              alt="forgot password illustration"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center bg-[#F7F7FF] p-10 md:p-20">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">
            Forgot Password
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#5067EB] mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Masukan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5067EB] text-gray-700 shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#5067EB] text-white py-3 rounded-md font-semibold hover:bg-[#4056d3] transition-all"
            >
              Reset
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
