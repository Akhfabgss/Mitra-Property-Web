import { Button } from '@/components/ui/button'
import InfoBox from '@/components/ui/InfoBox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'

function page() {

  const data = [
    {
      id: 1,
      customId: 'REQ12345',
      nama: 'John Doe',
      jenis: 'Pembayaran Komisi',
      total: 5000000,
      noRekening: '1234567890',
      atasNama: 'John Doe',
    },
    {
      id: 2,
      customId: 'REQ12346',
      nama: 'Jane Smith',
      jenis: 'Pembayaran Sewa',
      total: 3000000,
      noRekening: '0987654321',
      atasNama: 'Jane Smith',
    }
  ]
  return (
    <>
    <h1 className='text-2xl font-bold text-biru mb-6'>Request Payment</h1>

    <InfoBox />

    {/* marketing */}
    <div className='hidden'>
      <form action="" className='bg-white rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.1)] p-6 space-y-6'>
        <div>
          <Label htmlFor="nama" className="font-medium text-gray-700">
            Nama
          </Label>
          <Input
            type="text"
            id="nama"
            className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
            placeholder="Masukkan nama listing"
          />
        </div>

        <div>
          <Label htmlFor="jenis-request" className="font-medium text-gray-700">
            Jenis Request
          </Label>
          <Input
            type="text"
            id="jenis-request"
            className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
            placeholder="Masukkan jenis request"
          />
        </div>
        <div>
          <Label htmlFor="total-harga" className="font-medium text-gray-700">
            Total Harga
          </Label>
          <Input
            type="number"
            id="total-harga"
            className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru"
            placeholder="Masukkan total harga"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <Label htmlFor='no-rekening' className='font-medium text-gray-600'>No Rekening</Label>
            <Input type="text" id="no-rekening" className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru" placeholder="Masukkan no rekening" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor='nama-rekening' className='font-medium text-gray-600'>Nama Rekening</Label>
            <Input type="text" id="nama-rekening" className="w-full mt-2 p-5 border border-gray-300 rounded-md focus:outline-biru" placeholder="Nama rekening atas nama" />
          </div>
        </div>

        <Button className="bg-biru text-white px-6 py-3 rounded-md hover:bg-blue-700 w-full">
          Ajukan
        </Button>
      </form>
    </div>

    {/* direktur */}
      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <Input placeholder="Search listing..." className="flex-1 py-6" />

        <Button className="bg-white py-6 text-gray-800 border border-gray-300 hover:bg-white hover:text-gray-800">
          Sortir
        </Button>
        <Link href="/dashboard/listing/tambah-listing" className="bg-biru text-white hover:bg-blue-700 px-4 rounded-md py-3">
          Tambah
        </Link>
      </div>

            <Table className='w-full border-collapse rounded-md overflow-hidden'>
        <TableHeader>
          <TableRow className='bg-biru hover:bg-biru'>
            <TableHead className='text-white text-center w-12'>No</TableHead>
            <TableHead className='text-white text-center'>ID</TableHead>
            <TableHead className='text-white text-center'>Nama</TableHead>
            <TableHead className='text-white text-center'>Jenis</TableHead>
            <TableHead className='text-white text-center'>Total</TableHead>
            <TableHead className='text-white text-center'>No rekening</TableHead>
            <TableHead className='text-white text-center'>Atas Nama</TableHead>
            <TableHead className='text-white text-center'>Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((request, index) => (
            <TableRow key={request.id}>
              <TableCell className='text-center'>{index + 1}</TableCell>
              <TableCell className="text-center">{request.customId}</TableCell>
              <TableCell className='text-center'>{request.nama}</TableCell>
              <TableCell className='text-center'>{request.jenis}</TableCell>
              <TableCell className='text-center'>{request.total}</TableCell>
              <TableCell className='text-center'>{request.noRekening}</TableCell>
              <TableCell className='text-center'>{request.atasNama}</TableCell>
              <TableCell className='text-center flex gap-2 justify-center'>
                <Button className='bg-biru text-white px-4 py-2 rounded-md hover:bg-blue-700'>
                  Approve
                </Button>
                <Button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700'>
                  Reject
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </>
  )
}

export default page