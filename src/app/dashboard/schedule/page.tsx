import React from 'react'
import InfoBox from '@/components/ui/InfoBox'
import { Button } from '@/components/ui/button'

function page() {
  return (
    <>
    <h1 className='text-3xl font-bold text-biru mb-6'>Today’s Schedule</h1>

    <div className="flex justify-between items-center mb-4">
      <p className='text-xl font-medium text-gray-600'>Kamis, 25 Agustus 2025</p>

      <div className="flex gap-4">
        <Button className="bg-white py-3 px-6 text-gray-800 border border-gray-300 hover:bg-white hover:text-gray-800">
          History
        </Button>
        <Button className="bg-biru text-white hover:bg-blue-700 px-4 rounded-md py-3">
          Tambah
        </Button>
      </div>
    </div>

    <div className="bg-white p-6 rounded-md shadow-md">
      <div className="flex items-center mb-4 border border-gray-200 p-4 rounded-md">
      <input type="checkbox" name="tes" id="" className='w-10 h-10' />
      <label htmlFor="tes" className="ml-4 text-gray-700 text-2xl font-bold">Task 1</label>
      </div>
      <div className="flex items-center mb-4 border border-gray-200 p-4 rounded-md">
      <input type="checkbox" name="tes" id="" className='w-10 h-10' />
      <label htmlFor="tes" className="ml-4 text-gray-700 text-2xl font-bold">Task 1</label>
      </div>
    <Button className='bg-biru text-white hover:bg-biru/70 px-6 py-3 rounded-md mt-4 w-full'>
      Simpan
    </Button>
    </div>



    
    </>
  )
}

export default page