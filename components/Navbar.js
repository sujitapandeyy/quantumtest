import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
<div className="bg-gradient-to-r from-blue-100 to-green-100 sticky top-0 z-10 p-2 mb-5">
  <div className="container mx-auto py-5">
    <div className="flex justify-between">
      <div className="text-black text-xl font-bold">
        <p>Blog</p>
      </div>
      <div className="flex space-x-8">
        <Link href='/' className="text-black hover:text-gray-600 font-bold">Home</Link>
        <Link href='/contact-us' className="text-black hover:text-gray-600 font-bold">Contact Us</Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default Navbar
