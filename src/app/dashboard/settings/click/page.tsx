import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import React from "react";

function page() {
    const data = [
        {
            id: 1,
            namaListing: 'Listing A',
            jumlahKlik: 120,
        },
        {
            id: 2,
            namaListing: 'Listing B',
            jumlahKlik: 80,
        },
        {
            id: 3,
            namaListing: 'Listing C',
            jumlahKlik: 60,
        },
    ]
  return (
    <div>
      <h1 className="text-2xl font-bold text-biru mb-6">Jumlah Klik Anda</h1>

      <div className="border-t border-gray-400"></div>

      <Table className='w-full border-collapse rounded-md overflow-hidden'>
        <TableHeader>
          <TableRow className='bg-biru hover:bg-biru'>
            <TableHead className='text-white text-center w-12'>No</TableHead>
            <TableHead className='text-white text-center'>Nama Listing</TableHead>
            <TableHead className='text-white text-center'>Jumlah Klik</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((listing, index) => (
            <TableRow key={listing.id}>
              <TableCell className='text-center'>{index + 1}</TableCell>
              <TableCell className='text-center'>{listing.namaListing}</TableCell>
              <TableCell className='text-center'>{listing.jumlahKlik}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>


    </div>
  );
}

export default page;
