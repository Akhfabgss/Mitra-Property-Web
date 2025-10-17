import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import React from 'react'

function page() {
  return (
    <div>
      <h1 className='text-2xl font-bold text-biru'>Tambah Listing</h1>

      <form className="bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] p-6 space-y-6">
  {/* Lokasi */}
  <div>
    <Label htmlFor="lokasi" className="font-medium text-gray-700">
      Lokasi
    </Label>
    <Input
      type="text"
      id="lokasi"
      className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
      placeholder="Masukkan nama listing"
    />
  </div>

  {/* Dua Select sejajar */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Tipe Listing */}
    <div className="flex flex-col">
      <Label htmlFor="type" className="mb-2 font-medium text-gray-700">
        Tipe Listing
      </Label>
      <Select>
        <SelectTrigger id="type" className="p-5 border-gray-300 w-full">
          <SelectValue placeholder="--Pilih Tipe--" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="jual">Jual</SelectItem>
          <SelectItem value="sewa">Sewa</SelectItem>
        </SelectContent>
      </Select>
    </div>

    {/* Tipe Furnish */}
    <div className="flex flex-col">
      <Label htmlFor="furnish" className="mb-2 font-medium text-gray-700">
        Tipe Furnish
      </Label>
      <Select>
        <SelectTrigger id="furnish" className="p-5 border-gray-300 w-full">
          <SelectValue placeholder="--Pilih Tipe--" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="furnished">Furnished</SelectItem>
          <SelectItem value="unfurnished">Unfurnished</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
</form>

    </div>
  )
}

export default page