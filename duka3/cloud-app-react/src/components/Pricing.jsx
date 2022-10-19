import React from 'react'
import {CheckIcon} from '@heroicons/react/solid'
const Pricing = () => {
  return (
    <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'>Absolute</div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300 '>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
                <p className='text-3xl'>
                    Lorem ipsum 
                </p>
            </div>

            <div className='grid md:grid-cols-2'>
            <div className='bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2x1'>
                <span className='uppercase px-3 py-1 bg-indigo-200'>Standard</span>
                <div>
                  <p>$49<span>/mo</span></p>
                </div>
                <p>Lorem ipsum dolor, sit amet consectetura adipisicing. </p>
                <div>
                    <p><CheckIcon className='w-8 mr-5  text-green-600 '  />Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5  text-green-600 '  />Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5  text-green-600 '  />Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5  text-green-600 '  />Lorem, ipsum dolor.</p>
                    <p><CheckIcon className='w-8 mr-5  text-green-600 '  />Lorem, ipsum dolor.</p>
                    <button>Get Started</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing