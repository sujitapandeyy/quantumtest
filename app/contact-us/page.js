"use client"
import axios from 'axios';
import React from 'react'

function page() {
const handleSubmit=(e)=>{
e.preventDefault();
const formData=new FormData(e.target);
try{
  const response=axios.post("xyz",formData);
  console.log(response); 
}
catch(error){
  console.log(error);
}
}
  return (

<div className='container mx-auto' >
<h2 className="text-3xl font-bold text-gray-800 justify-center flex mt-6">Contact Us</h2>
    <form id="myform" onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 p-6 mt-2 bg-white rounded-lg shadow-md max-w-md mx-auto'>
      <input type="text" name="name" placeholder="Name" required className="border rounded py-2 p-2 focus:outline-none "/>
      <input type="email" name="email" placeholder="Email" required className="border rounded py-2 p-2 focus:outline-none "/>
      <textarea name="name" cols="10" rows="2" placeholder="Message" required className="border rounded py-2 p-2 focus:outline-none "/>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded "  type="submit" name="submit">Submit</button>
    </form>
    </div>
  )
}

export default page
