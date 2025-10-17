import Sidebar from '@/components/layout/Sidebar'
import React from 'react'

function page() {
  return (
    <div className="bg-biru text-white rounded-xl flex flex-col md:flex-row justify-between">
            {/* Text bagian kiri */}
            <div className="flex flex-col justify-between px-10 py-10">
              <div>
                <h2 className="text-lg">Welcome back,</h2>
                <h1 className="text-2xl md:text-3xl font-bold mt-1">
                    John Doe
                </h1>
              </div>
              <p className="text-sm opacity-90 mt-4">Do you ready for today?</p>
            </div>

            {/* Gambar bagian kanan */}
            <img
              src="/assets/welcome.svg"
              alt="Illustration"
              className="w-40 md:w-1/3 mt-4 md:mt-2"
            />
          </div>


  )
}

export default page