"use client"

import { SignOutButton, SignedIn } from '@clerk/nextjs'
import { Add, Logout, Search } from '@mui/icons-material'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const TopBar = () => {
  const router = useRouter()
  const [search, setSearch] = React.useState("")
  return (
    <div className='flex justify-between items-center mt-6'>
      <div className='relative'>
        <input type='text' className='search-bar' placeholder='Search Posts, People, ... ' value={search} onChange={(e) => setSearch(e.target.value)} />
        <Search className="search-icon" onClick={()=>{}} />
      </div>
      <button className="create-post-btn" onClick={()=> router.push("/create-post")}> <Add/><p>Create A Post</p></button>

      <div className='flex gap-3'>
        <SignedIn>
          <SignOutButton>
            <div className="flex cursor-pointer items-center md:hidden">
              <Logout sx={{color: "white", fontSize: "32px"}} />
            </div>
          </SignOutButton>
        </SignedIn>
        <Link href="/">
        <Image src="/assets/Jashwanth.jpg" alt="Profile Picture" width={50} height={60} className="rounded-full md:hidden" />
      </Link>
      </div>

      
    </div>
  )
}

export default TopBar