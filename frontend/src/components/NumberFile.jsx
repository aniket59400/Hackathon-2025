import React from 'react'
import FourNumber from './FourNumber'

function NumberFile() {
  return (
    <div className='bg-black w-full h-full flex items-center justify-center'>
      <div className='w-10/12 h-full flex items-center justify-center' >

        <FourNumber />
        
        <FourNumber />
        <FourNumber />

      </div>
    </div>
  )
}

export default NumberFile
