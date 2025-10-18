"use client";
import React from "react";
import Image from "next/image";
import { PenIcon, UserPen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function page() {
  return (
    <>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-biru">Profil</h1>

        <div className="border-t border-gray-400"></div>

        <div className="flex items-start gap-6 pb-6 border-b border-gray-400">
          <div className="relative w-28 h-28">
            {/* Wrapper dengan border */}
            <div className="w-28 h-28 rounded-full border-2 border-gray-300 flex items-center justify-center overflow-hidden">
              <Image
                src="/assets/homepage.png"
                alt="Foto Marketing"
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Icon edit nempel persis di border */}
            <button
              className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 bg-white border border-gray-300 shadow rounded-full p-2 hover:scale-105 transition"
              aria-label="Edit Foto"
            >
              <UserPen size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <div>
              <p className="text-sm text-gray-500">Nama</p>
              <p className="font-semibold">John Doe</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold">john.doe@example.com</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">No Telepon</p>
              <p className="font-semibold">08123456789</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-semibold">Admin</p>
            </div>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-biru">Edit profil</h1>

        <div className="border-t border-gray-400"></div>

        <form action="">
                  <div>
          <Label htmlFor="nama" className="font-medium text-gray-700">
            Nama
          </Label>
          <Input
            type="text"
            id="nama"
            className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
            defaultValue="John Doe"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="py-5">
            <Label htmlFor="email" className="font-medium text-gray-700">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
              defaultValue="john.doe@example.com"
            />
          </div>

          <div className="py-5">
            <Label htmlFor="no-telepon" className="font-medium text-gray-700">
              No Telepon
            </Label>
            <Input
              type="text"
              id="no-telepon"
              className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
              defaultValue="08123456789"
            />
          </div>

        </div>
          <div>
            <Label htmlFor="role" className="font-medium text-gray-700">
              Role
            </Label>
            <Select>
              <SelectTrigger id="role" className="mt-2 p-5 border-gray-300 w-full">
                <SelectValue placeholder="--Pilih Role--" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button type="submit" className="w-full mt-6 bg-biru text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Simpan
          </Button>
        </form>


      </div>
    </>
  );
}

export default page;
