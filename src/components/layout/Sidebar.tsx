"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHome } from "react-icons/io5";
import { FaRegListAlt } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { CalendarCheck, Settings } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { name: "Beranda", href: "/dashboard", icon: IoHome },
    { name: "Listing", href: "/dashboard/listing", icon: FaRegListAlt },
    {
      name: "Team",
      href: "/dashboard/team",
      icon: FaPeopleGroup,
      children: [
        { label: "Marketing Kami", href: "/dashboard/team/marketing-kami" },
        { label: "Marketing Luar", href: "/dashboard/team/marketing-luar" },
      ],
    },
    { name: "Request Payment", href: "/dashboard/request-payment", icon: MdPayment },
    { name: "Schedule", href: "/dashboard/schedule", icon: CalendarCheck },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-primary text-white flex flex-col">
      {/* Header */}
      <div className="p-6 flex items-center justify-center mt-8">
        <h1 className="text-2xl font-bold">MITRA PROPERTI</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-0 mt-6 space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActiveParent =
            pathname === item.href ||
            item.children?.some((child) => pathname === child.href);

          return (
            <div key={item.name}>
              {/* Parent link */}
              <Link
                href={item.href}
                className={`relative flex items-center gap-3 px-6 py-3 font-medium transition-all
                  ${
                    isActiveParent
                      ? "bg-white/20 text-white"
                      : "text-white/80 hover:bg-primary hover:text-white"
                  }`}
              >
                {Icon && <Icon size={25} color="white" />}
                <span>{item.name}</span>

                {/* Rectangle di kanan hanya saat parent aktif */}
                {isActiveParent && (
                  <span className="absolute right-0 top-0 h-full w-2 bg-white rounded-l-md"></span>
                )}
              </Link>

              {/* Submenu (static, tidak toggle) */}
              {item.children && (
                <div className="ml-10 mt-1 space-y-2 text-sm">
                  {item.children.map((child) => {
                    const isChildActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="flex items-center gap-2 text-left hover:text-gray-300 transition-all"
                      >
                        <span
                          className={`w-3 h-3 rounded-full border-2 ${
                            isChildActive
                              ? "bg-white border-white"
                              : "border-white/50"
                          }`}
                        />
                        <span
                          className={`${
                            isChildActive ? "text-white" : "text-white/80"
                          }`}
                        >
                          {child.label}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

    {/* Footer */}
    <div className="mt-auto px-4 py-6 flex flex-col items-center text-center border-t border-white/20">
    <h2 className="text-lg font-semibold text-white mb-1">
        Download Mitra Properti
    </h2>
    <span className="text-sm text-white/70 mb-3">Mobile App</span>

    <Image
        src="/assets/download-app.svg"
        alt="Download Mitra Properti App"
        width={150}
        height={50}
        className="hover:scale-105 transition-transform duration-200"
    />
    </div>


    </div>
  );
}
