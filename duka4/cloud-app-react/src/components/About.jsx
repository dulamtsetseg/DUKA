import React from 'react'

function About() {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>Trusted by kids around the globe</h2>
          <p className='text-3xl py-6 text-gray-500'>Hello everyone my name is .......... and this website is a static one where i used tailwind css to create</p>
        </div>
        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100%</p>
            <p className='text-gray-400 ml-2'>Complete</p>
          </div>
          <div className='py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>24/7</p>
            <p className='text-gray-400 ml-2'>Delivery</p>
          </div>
          <div className='py-8 rounded-xl shadow-xl'>
            <p className='text-6xl font-bold text-indigo-600'>100k</p>
            <p className='text-gray-400 ml-2'>Transactions</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
