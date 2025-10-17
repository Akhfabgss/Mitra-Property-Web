'use client';

import { Button } from "@/components/ui/button";
import InfoBox from "@/components/ui/InfoBox";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

function page() {
  const data = [
    {
      no: 1,
      nama: "Listing 1",
      type: "Type A",
      furnish: "Furnish 1",
      certificate: "Certificate 1",
    },
    {
      no: 2,
      nama: "Listing 2",
      type: "Type B",
      furnish: "Furnish 2",
      certificate: "Certificate 2",
    },
    {
      no: 3,
      nama: "Listing 3",
      type: "Type C",
      furnish: "Furnish 3",
      certificate: "Certificate 3",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold text-biru mb-6">Listing Page</h1>
      <InfoBox />

      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <Input placeholder="Search listing..." className="flex-1 py-6" />

        <Button className="bg-white py-6 text-gray-800 border border-gray-300 hover:bg-white hover:text-gray-800">
          Sortir
        </Button>
        <Link href="/dashboard/listing/tambah-listing" className="bg-biru text-white hover:bg-blue-700 px-4 rounded-md py-3">
          Tambah
        </Link>
      </div>

      <Table className="w-full border-collapse rounded-md overflow-hidden">
        <TableHeader>
          <TableRow className="bg-biru hover:bg-biru">
            <TableHead className="text-white text-left px-4 py-3 w-[5%]">
              No
            </TableHead>
            <TableHead className="text-white text-left px-4 py-3 w-[25%]">
              Nama Listing
            </TableHead>
            <TableHead className="text-white text-left px-4 py-3 w-[15%]">
              Type
            </TableHead>
            <TableHead className="text-white text-left px-4 py-3 w-[15%]">
              Furnish
            </TableHead>
            <TableHead className="text-white text-left px-4 py-3 w-[15%]">
              Certificate
            </TableHead>
            <TableHead className="text-white text-left px-4 py-3 w-[25%]">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.no}
            >
              <TableCell className="px-4 py-3">{item.no}</TableCell>
              <TableCell className="px-4 py-3">{item.nama}</TableCell>
              <TableCell className="px-4 py-3">{item.type}</TableCell>
              <TableCell className="px-4 py-3">{item.furnish}</TableCell>
              <TableCell className="px-4 py-3">{item.certificate}</TableCell>
              <TableCell className="px-4 py-3 flex gap-2">
                <Button className="bg-white hover:bg-biru hover:text-white text-biru border border-biru py-1 px-3">
                  Detail
                </Button>
                <Button className="bg-biru hover:bg-blue-600 text-white py-1 px-5">
                  Edit
                </Button>
                <Button className="bg-red-500 hover:bg-red-600 text-white py-1 px-5">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default page;
