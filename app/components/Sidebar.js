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


export default function Sidebar() {
  
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
    <main className="">
      <div className={`bg-[#0e0e0e] h-screen ${open? 'w-60' : 'w-11'} duration-500 text-gray-100 px-4 py-1 sidebar-container`}>
        <div className='py-1 flex justify-between items-center menu-icon'>
          <h1 
            style={{transitionDelay:'300ms',display:open? 'block':'none'}} 
            className='hidden   duration-500'>
              LOGO
          </h1>
          <CgMenuRight size={30} className="cursor-pointer" onClick={()=>{setOpen(!open)}}/>
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          {
            menuItems.map((item,i)=>{
              return(
              <Link 
                href={item?.link} 
                key={i} 
                className='group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-slate-200 text-gray-200 rounded-md menu-item'>
                <div>
                  {React.createElement(item.icon,{size:"20"})}
                </div>
                <h2
                  style={{transitionDelay:`${i + 3}00ms`}} 
                  className={`whitespace-pre duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
                    {item.name}
                </h2>
                <h2 
                  className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0  w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-28 group-hover:duration-300 group-hover:w-fit`}>
                  {item.name}
                </h2>
              </Link>
              )
            })
            
          }
        </div>

      </div>
    </main>
  )
}
