import React from 'react'
import { TiPin } from "react-icons/ti";
import { HiDotsHorizontal } from "react-icons/hi";
const Annuoncements = ({ desc, }) => {
  return (
    <div className='h-16 w-full border-2 border-slate-200 rounded-xl flex flex-row items-center px-4 justify-between'>
      <div className='flex flex-col '>
        <h6 className='font-md text-black'>{desc}</h6>
        <p className='font-extralight text-slate-600 text-sm'>5 min ago</p>
      </div>
      <div className='flex flex-row gap-2'>
       <TiPin />
       <HiDotsHorizontal />
      </div>
    </div>
  )
}

export default Annuoncements