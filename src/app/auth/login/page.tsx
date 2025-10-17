"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="flex-1 bg-[#5067EB] text-white flex flex-col p-10 md:pl-25">
        <h1 className="text-lg font-semibold mb-3 md:mb-15 text-center md:text-left">MITRA PROPERTY</h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-center md:text-left">
          Manage your Files <br /> the best way
        </h2>
        <p className="text-md text-center md:text-left opacity-90 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <div className="mt-10">
          <Image
            src="/assets/sign-in.svg"
            alt="login illustration"
            width={300}
            height={300}
            className=""
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center bg-[#F7F7FF] p-10 md:p-20">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-gray-800">Login</h1>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#5067EB] mb-1">Email</label>
              <input
                type="email"
                placeholder="Masukan Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5067EB] text-gray-700 shadow-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#5067EB] mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukan Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5067EB] text-gray-700 shadow-sm pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <Link href="/auth/forgot" className="text-sm text-[#5067EB] hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5067EB] text-white py-3 rounded-md font-semibold hover:bg-[#4056d3] transition-all"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-3 text-gray-500 text-sm">Or</span>
            <hr className="flex-1 border-gray-300" />
          </div>

          <p className="text-center text-gray-600 text-sm">
            Don’t Have an account?{" "}
            <Link href="/auth/register" className="text-[#5067EB] hover:underline font-medium">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
