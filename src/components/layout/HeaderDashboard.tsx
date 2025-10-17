import React from 'react'
import { LogOut } from 'lucide-react'

function HeaderDashboard() {
  return (
    <header className='flex justify-end items-center gap-4 mr-5 border-b pb-4'>
      <button
        className="p-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 transition"
      >
        <LogOut size={22} />
      </button>
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
          <img
            src="/assets/logo.jpg"
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <span className="hidden md:inline text-[#243B83] font-medium">
            admin
        </span>
      </div>

    </header>
  )
}

export default HeaderDashboard