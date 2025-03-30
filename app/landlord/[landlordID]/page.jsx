import React from "react"
export default async function Landlord({ params }) {
  const  slug  = await params;
  console.log(slug.landlordID)

  return (
    <div className='flex flex-col items-center mx-auto'>
      <div>Landlord: {slug?.landlordID} </div>
      <h1 className='text-2xl'>Sign In</h1>
      <input type="text" name="" id="" placeholder="Enter your name" />
      <button type="button" className='bg-white text-black rounde-md px-6'>Proceed to Checkout</button>
    </div>
  )
}
