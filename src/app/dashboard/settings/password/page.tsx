import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

function page() {
  return (
    <>
    <h1 className='text-2xl font-bold text-biru mb-6'>Password</h1>

    <div className="border-t border-gray-400"></div>

    <form className="mt-6 space-y-4">
      <div>
        <Label htmlFor="current-password" className="block text-gray-700 font-medium mb-2">
          Password Saat Ini
        </Label>
        <Input
          type="password"
          id="current-password"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-biru"
          placeholder="Enter your current password"
        />
      </div>
      <div>
        <Label htmlFor="new-password" className="block text-gray-700 font-medium mb-2">
          Password Baru
        </Label>
        <Input
          type="password"
          id="new-password"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-biru"
          placeholder="Enter your new password"
        />
      </div>
      <div>
        <Label htmlFor="confirm-password" className="block text-gray-700 font-medium mb-2">
          Konfirmasi Password Baru
        </Label>
        <Input
          type="password"
          id="confirm-password"
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-biru"
          placeholder="Confirm your new password"
        />
      </div>
      <Button type="submit" className="w-full p-4 bg-biru text-white rounded-md hover:bg-blue-700">
        Update Password
      </Button>

    </form>
    </>
  )
}

export default page