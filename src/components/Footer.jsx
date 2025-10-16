import Image from "next/image";
import { Facebook, Instagram, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white pt-12 pb-6 px-10 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 border-b border-indigo-400 pb-10">
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <Image
              src="/assets/logo.jpg" 
              alt="Mitra Property"
              width={100}
              height={100}
              className="mb-4"
            />
            <p className="text-indigo-100 text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </div>

          {/* Menu 1 */}
          <div className="ml-0 md:ml-10">
            <h3 className="font-semibold pt-0 md:pt-25 mb-3">Home</h3>
            <ul className="space-y-2 text-indigo-100">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Project
                </a>
              </li>
            </ul>
          </div>

          {/* Menu 2 */}
          <div className="pt-0 md:pt-25 mb-3">
            <ul className="space-y-2 text-indigo-100">
              <li>
                <a href="#" className="hover:text-white transition">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-semibold pt-0 md:pt-25 mb-3">Location</h3>
            <p className="text-indigo-100 text-sm leading-relaxed">
              Jl. Kumbang No.14, RT.02/RW.06, Babakan, Kecamatan Bogor Tengah,
              Kota Bogor, Jawa Barat 16128
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 gap-4">
          <p className="text-sm text-indigo-100 text-center md:text-left">
            © 2025 Pendekar Pedang. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
