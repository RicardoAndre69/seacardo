import React from 'react'

export const Banner = ({ title, bgImage }) => {
  return (
    <div className='bg-zinc-400 h-[50vh] mt-25 flex justify-center items-center bg-center bg-cover relative'
      style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className='text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10'>{title}</h2>
      <div className='bg-black/50 absolute inset-0'></div>
    </div>
  )
}
