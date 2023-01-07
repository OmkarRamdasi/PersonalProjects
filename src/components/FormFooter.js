import React from 'react'
import FormFooterLeftSection from './FormFooterLeftSection'
import FormFooterMiddleSection from './FormFooterMiddleSection'
import FormFooterRightSection from './FormFooterRightSection'

const FormFooter = () => {
  return (
    <div className='flex bg-black text-white h-[50px]  relative bottom-0'>
      <div className='px-9 absolute w-full h-full flex gap-[10px] items-center justify-between'>
       
          <FormFooterLeftSection />
          <FormFooterMiddleSection />
          <FormFooterRightSection />
       


      </div>
    </div>
  )
}

export default FormFooter