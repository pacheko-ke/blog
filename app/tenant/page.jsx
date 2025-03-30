'use client'
import React from 'react'

export default async function page() {
    const users=await fetch('localhost:3000/api/tenant')
    console.log(users)
  return (
    <div>Tenant</div>
  )
}
