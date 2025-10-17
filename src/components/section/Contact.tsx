"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="max-w mx-0 md:mx-30 px-10 py-10 md:py-20 bg-white">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-12">
           <span className="text-[#5067EB] font-semibold text-lg border-l-4 border-[#5067EB] pl-3">
          Contact Us
        </span>
          <h1 className="text-4xl font-bold mt-2">Get In Touch</h1>
          <p className="text-gray-600 mt-3 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 md:gap-10">
          {/* Left Side - Form */}
          <form className="col-span-2 space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full mb-5 gap-10">
              <div>
                <label className="block text-sm text-[#5067EB] mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Masukan Nama"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5067EB]"
                />
              </div>
              <div>
                <label className="block text-sm text-[#5067EB] mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Masukan Email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5067EB]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-[#5067EB] mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="Masukan Nomor Telepon"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5067EB]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#5067EB] mb-1">Message</label>
              <textarea
                rows={4}
                placeholder="Masukan Pesan ...."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#5067EB]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5067EB] hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition-all"
            >
              Kirim
            </button>
          </form>

          {/* Right Side - Contact Info */}
          <div className="w-full bg-[#5067EB] text-white rounded-xl p-8 flex flex-col justify-between gap-0 mt-10 md:mt-0">
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Information</h2>
              <p className="text-sm text-indigo-100 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor
              </p>
              <ul className="space-y-5">
                <li className="flex items-center gap-3">
                  <Mail className="w-6 h-6" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-6 h-6" />
                  <span>Lorem ipsum dolor sit amet</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
