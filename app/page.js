'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { HiMenuAlt3 } from "react-icons/hi"
import {CgMenuRight} from "react-icons/cg"
import Link from 'next/link'
import {MdDashboard} from "react-icons/md"
import {MdGpsNotFixed} from "react-icons/md"
import { AiOutlineHeart, AiOutlineUser} from "react-icons/ai"
import {FiMessageSquare, FiFolder} from "react-icons/fi"
import UpperCards from './components/UpperCards'
import Sidebar from './components/Sidebar'


export default function Home() {
  
  const menuItems =[
    {name:"Dashboard", link:'/',icon:MdDashboard},
    {name:"Fixed assets", link:'https://www.google.com',icon:MdGpsNotFixed},
    {name:"Health", link:'/',icon:AiOutlineHeart},
    {name:"User", link:'/',icon:AiOutlineUser},
    {name:"File Manager" ,link:'/',icon:FiFolder},
    {name:"Messages",link:'/',icon:FiMessageSquare}
  ]
  
  const [open,setOpen] = useState(true)



  return (
    <main className="flex">
        {/* <Sidebar/> */}
        <UpperCards className="top-cards"/>
    </main>
  )
}
