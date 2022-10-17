import React from 'react'
import {PhoneIcon, ArrowSmRightIcon} from '@heroicons/react/outline'
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'


import supportImg from '../assets/jpg'
function Support() {
  return (
  <div className='w-full h-screen mt-24'>
        <div className='w-full h-[700px bg-gray-900/90 absolute'>
            <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
        </div>
        <div>
            <div>
                <h2>Support</h2>
                <h3>愛して殺す</h3>
                <p>大嫌い</p>
            </div>\
             
            <div>
                <div>
                    <div>
                        <PhoneIcon />
                        <h3>愛</h3>
                        <p>yu chmaq bic gseeee</p>
                    </div>
                    <div>
                        <p>Contant us <ArrowSmRightIcon/> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Support