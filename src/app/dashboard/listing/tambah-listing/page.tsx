import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { FaRegFolderOpen } from "react-icons/fa";

function page() {
  return (
    <div>

      <h1 className="text-3xl font-bold text-biru mb-3">Tambah Daftar Listing</h1>

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
              <SelectTrigger
                id="furnish"
                className="p-5 border-gray-300 w-full"
              >
                <SelectValue placeholder="--Pilih Tipe--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="furnished">Furnished</SelectItem>
                <SelectItem value="unfurnished">Unfurnished</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col">
          <Label htmlFor="harga" className="mb-2 font-medium text-gray-700">
            Harga
          </Label>

          <div className="w-full flex gap-3">
            <Input
              type="number"
              className="flex-1 p-5 
            focus-visible:ring-1 focus-visible:ring-biru focus-visible:border-biru
            appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none"
              placeholder="Masukkan harga listing"
            />

            <Select>
              <SelectTrigger className="p-5 border-gray-300 w-[160px]">
                <SelectValue placeholder="Satuan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bulan">Per Bulan</SelectItem>
                <SelectItem value="tahun">Per Tahun</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* luas tanah */}
       <div className="flex flex-col">
          <Label htmlFor="luas_tanah" className="mb-2 font-medium text-gray-700">
            Luas Tanah
          </Label>

          <div className="w-full flex gap-3">
            <Input
              type="number"
              id="luas_tanah"
              className="flex-1 p-5 
            focus-visible:ring-1 focus-visible:ring-biru focus-visible:border-biru
            appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none"
              placeholder="Masukkan luas tanah"
            />

            <Select>
              <SelectTrigger className="p-5 border-gray-300 w-[160px]">
                <SelectValue placeholder="Satuan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hectar">Hectar</SelectItem>
                <SelectItem value="meter">Meter</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-col">
          <Label htmlFor="luas_bangunan" className="mb-2 font-medium text-gray-700">
            Luas Bangunan
          </Label>
          <div className="w-full flex gap-3">
            <Input
              type="number"
              id="luas_bangunan"
              className="flex-1 p-5 
            focus-visible:ring-1 focus-visible:ring-biru focus-visible:border-biru
            appearance-none
            [&::-webkit-inner-spin-button]:appearance-none
            [&::-webkit-outer-spin-button]:appearance-none"
              placeholder="Masukkan luas bangunan"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kamar Tidur */}
          <div className="flex flex-col">
            <Label htmlFor="bedrooms" className="mb-2 font-medium text-gray-700">
              Kamar Tidur
            </Label>
            <Input
              type="number"
              id="bedrooms"
              className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
              placeholder="Jumlah kamar tidur"
            />
          </div>
          {/* Kamar tambahan */}
          <div className="flex flex-col">
            <Label htmlFor="bathrooms" className="mb-2 font-medium text-gray-700">
              Kamar Tambahan
            </Label>
            <Input
              type="number"
              id="bathrooms"
              className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
              placeholder="Jumlah kamar tambahanan"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <Label htmlFor="dapur" className="mb-2 font-medium text-gray-700">
            Dapur
          </Label>
          <Input
            type="number"
            id="dapur"
            className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
            placeholder="Jumlah dapur"
          />
        </div>

        <div className="flex flex-col">
          <Label htmlFor="kamar_mandi" className="mb-2 font-medium text-gray-700">
            Kamar Mandi
          </Label>
          <Input
            type="number"
            id="kamar_mandi"
            className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
            placeholder="Masukkan jumlah kamar mandi"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Garasi */}
          <div className="flex flex-col">
            <Label htmlFor="garasi" className="mb-2 font-medium text-gray-700">
              Garasi
            </Label>
            <Input
              type="number"
              id="garasi"
              className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
              placeholder="Masukkan jumlah garasi"
            />
          </div>
          {/* Carport */}
          <div className="flex flex-col">
            <Label htmlFor="carport" className="mb-2 font-medium text-gray-700">
              Carport
            </Label>
            <Input
              type="number"
              id="carport"
              className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
              placeholder="Masukkan jumlah carport"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="furnist" className="mb-2 font-medium text-gray-700">
              Furnist
            </Label>
            <Select>
              <SelectTrigger
                id="furnist"
                className="p-5 border-gray-300 w-full"
              >
                <SelectValue placeholder="--Pilih Furnist--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ada">ex-1</SelectItem>
                <SelectItem value="tidak_ada">ex-2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col">
            <Label htmlFor="sertifikat" className="mb-2 font-medium text-gray-700">
              Sertifikat
            </Label>
            <Select>
              <SelectTrigger
                id="sertifikat"
                className="p-5 border-gray-300 w-full"
              >
                <SelectValue placeholder="--Pilih sertifikat--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">ex-1</SelectItem>
                <SelectItem value="2">ex-2</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col">
            <Label htmlFor="hadap" className="mb-2 font-medium text-gray-700">
              Hadap
            </Label>
            <Input 
              type="text"
              id="hadap"
              className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
              placeholder="Masukkan arah hadap"
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="listrik" className="mb-2 font-medium text-gray-700">
              Listrik
            </Label>
            <Input 
              type="number"
              id="listrik"
              className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
              placeholder="Masukkan jumlah tegangan listrik"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <Label htmlFor="air" className="mb-2 font-medium text-gray-700">
            Air
          </Label>
          <Input 
            type="number"
            id="air"
            className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
            placeholder="Masukkan tegangan air"
          />
        </div>

        {/* upload box */}
        <div className="bg-white mb-6">
              <label
                htmlFor="file-upload"
                className="flex flex-col items-center justify-center h-70 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50"
              >
                <FaRegFolderOpen size={50} className="text-gray-400 mb-4" />
                <p className="text-gray-500">Drag and drop foto disini</p>
                <p className="text-xs text-gray-400">
                  (atau klik untuk memilih foto)
                </p>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                />
              </label>
            </div>

            {/* button */}
            <div className="flex">
              <Button type="submit" className="w-full bg-biru hover:bg-biru/90 text-white p-5 rounded-md font-medium">
                Simpan
              </Button>
            </div>
      </form>
    </div>
  );
}

export default page;
