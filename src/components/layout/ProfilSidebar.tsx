'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Eye, Info, LockKeyhole, MousePointerClick, User2 } from 'lucide-react'

function ProfilSidebar() {
  const pathname = usePathname()

  const sidebarItems = [
    { name: 'Profile', href: '/dashboard/settings', icon: User2 },
    { name: 'Password', href: '/dashboard/settings/password', icon: LockKeyhole },
    { name: 'View', href: '/dashboard/settings/view', icon: Eye },
    { name: 'Click', href: '/dashboard/settings/click', icon: MousePointerClick },
    { name: 'About', href: '/dashboard/settings/about', icon: Info },
  ]

  return (
    <div className="flex gap-8">
      <aside className="w-64 bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            const Icon = item.icon
            return (
              <li key={item.name} className="relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                    }`}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>

                  {isActive && (
                    <span className="absolute right-0 top-0 h-full w-[4px] bg-blue-600 rounded-l-md"></span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </aside>
    </div>
  )
}

export default ProfilSidebar
