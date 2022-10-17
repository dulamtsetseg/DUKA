import React from 'react'
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline'
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'
import supportImg from '../assets/3.png'

function Support() {
  return (
  <div className='w-full h-screen mt-24'>
        <div className='w-full h-[700px bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>
        <div className='max-w-[1240px] mx-auto text-white relative'>
            <div className='px-4 py-12'>
                <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>見てください</h2>
                <h3 className='text-5xl font-bold py-6 text-center'>幸せと愛はお金</h3>
                <p className='py-4 text-3xl text-slate-300'>幸福、お金、愛の3つのうちどれを選びますか?</p>
            </div>
             
            <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <PhoneIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>幸福</h3>
                        <p className='text-gray-600 text-xl'>Hello my name is Ka Du hope you have a great day 幸福とは、健康で、幸せで、平和で、人生に満足しているという長期的な感覚です。これは、私たちが常に求めているものです。私たちはそれを少し味わったとき、それが永遠に続くことを望んでいます.</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>   
                        <p className='flex items-center text-indigo-600'>Contant us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <SupportIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>お金</h3>
                        <p className='text-gray-600 text-xl'>私たちの惑星では、純粋に個別に、または組み合わせて発生します。世界では、この金属は金の20倍、銅のはるかに少ないです。純銀は光沢のある白い金属で、非常に柔らかく再現性が高く、金に次ぐものです。すべての金属よりも電熱をよく伝導します。</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>   
                        <p className='flex items-center text-indigo-600'>Contant us <ArrowSmRightIcon className='w-5 ml-2'/> </p>
                    </div>
                </div>
                <div className='bg-white rounded-xl shadow-2xl'>
                    <div className='p-8'>
                        <ChipIcon className='w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]'/>
                        <h3 className='font-bold text-2xl my-6'>お金</h3>
                        <p className='text-gray-600 text-xl'>私たちの惑星では、純粋に個別に、または組み合わせて発生します。世界では、この金属は金の20倍、銅のはるかに少ないです。純銀は光沢のある白い金属で、非常に柔らかく再現性が高く、金に次ぐものです。すべての金属よりも電熱をよく伝導します</p>
                    </div>
                    <div className='bg-slate-100 pl-8 py-4'>
                        <p className='flex items-center text-indigo-600'>Contact us<ArrowSmRightIcon className='w-5 ml-2'/></p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Support