import React from 'react'

const Statcard = ({ heading, number, desc, color, desColor }) => {
  return (
    <div className={`flex flex-col lg:w-56 w-full h-32 border-2 border-slate-100 justify-evenly lg:p-3 p-4 rounded-xl ${color}`}>
      <h2 className='font-semibold text-xl '>{heading}</h2>
      <h1 className='font-bold text-4xl'>{number}</h1>
      <h5 className={`font-semibold ${desColor}`}>{desc}</h5>
    </div>
  )
}

export default Statcard