import React from 'react'
import { Button } from '@/components/ui/button'
import InfoBox from '@/components/ui/InfoBox'
import { Input } from '@/components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Image from 'next/image'

function page() {
  const data = [
    {
      id: 1,
      foto: '/assets/homepage.png',
      nama: 'John Doe',
      telepon: '08123456789',
      jumlahView: 100,
      jumlahKlik: 50,
    },
    {
      id: 2,
      foto: '/assets/homepage.png',
      nama: 'Jane Smith',
      telepon: '08987654321',
      jumlahView: 150,
      jumlahKlik: 75,
    }
  ]
  return (
    <>
      <h1 className="text-2xl font-bold text-biru mb-6">Marketing Kami</h1>

      <InfoBox />

      <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
        <Input placeholder="Search listing..." className="flex-1 py-6" />

        <Button className="bg-white py-6 px-6 text-gray-800 border border-gray-300 hover:bg-white hover:text-gray-800">
          Sortir
        </Button>
      </div>

      <Table className='w-full border-collapse rounded-md overflow-hidden'>
        <TableHeader>
          <TableRow className='bg-biru hover:bg-biru'>
            <TableHead className='text-white text-center w-12'>No</TableHead>
            <TableHead className='text-white text-center'>Foto</TableHead>
            <TableHead className='text-white text-center'>Nama Marketing</TableHead>
            <TableHead className='text-white text-center'>Telepon</TableHead>
            <TableHead className='text-white text-center'>Jumlah View</TableHead>
            <TableHead className='text-white text-center'>Jumlah Klik</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((marketing, index) => (
            <TableRow key={marketing.id}>
              <TableCell className='text-center'>{index + 1}</TableCell>
              <TableCell className="text-center">
                <div className="w-14 h-14 rounded-full overflow-hidden mx-auto border border-gray-300">
                  <Image
                    src={marketing.foto}
                    alt="Foto Marketing"
                    width={56}
                    height={56}
                    className="object-cover"
                  />
                </div>
              </TableCell>
              <TableCell className='text-center'>{marketing.nama}</TableCell>
              <TableCell className='text-center'>{marketing.telepon}</TableCell>
              <TableCell className='text-center'>{marketing.jumlahView}</TableCell>
              <TableCell className='text-center'>{marketing.jumlahKlik}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </>
  )
}

export default page