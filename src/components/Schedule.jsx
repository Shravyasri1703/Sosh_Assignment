import React from 'react'
import { TiPin } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
const Schedule = ({ desc, }) => {
  return (
    <div className='h-16 w-full border-2 border-slate-200 rounded-xl flex flex-row items-center justify-between px-4'>
      <div className='flex flex-col'>
        <h4 className='font-md text-black'>{desc}</h4>
        <p className='font-extralight text-slate-600 text-sm'>5 min ago</p>
      </div>
      <div className='flex flex-row'>
       <HiDotsHorizontal />
      </div>
    </div>
  )
}

export default Schedule