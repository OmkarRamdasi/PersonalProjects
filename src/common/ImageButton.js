import React from 'react'

const ImageButton = ({imgSrc,linkHref}) => {
  return (
    <div className=' w-9 h-9 flex items-center justify-center relative'>
        <a target='_blank' className='rounded-full absolute w-8 h-8 cursor-pointer' href={linkHref}><img className='rounded-full absolute w-8 h-8' src={imgSrc} /></a>
    </div>
  )
}

export default ImageButton