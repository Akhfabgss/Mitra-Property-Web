"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Project", href: "/project" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md shadow-sm z-50 py-3">
      <div className="mx-auto px-4 sm:px-10 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/assets/logo.jpg"
              alt="Mitra Properti"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold text-xs">MITRA PROPERTI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative font-medium text-gray-700 hover:text-[#5067EB] transition-colors duration-200
                  after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                  after:w-0 after:h-[2px] after:bg-[#5067EB] after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Login Button */}
          <div className="hidden md:block">
            <Link
              href="/login"
              className="bg-[#5067EB] text-white px-7 py-2.5 rounded-md hover:bg-[#4056d3] transition-all duration-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 hover:text-[#4056d3]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 text-center shadow-sm">
          <div className="px-4 py-3 space-y-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-gray-700 hover:text-[#4056d3] transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block text-center bg-[#5067EB] text-white px-5 py-2 rounded-md hover:bg-[#4056d3] transition-all"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
