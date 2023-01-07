import React from 'react'
import FormBody from './FormBody'
import FormHeader from './FormHeader'



const Form = () => {
    return (
        <div className='flex flex-1 bg-white p-[40px] overflow-auto'>
            <div className='w-[70%] md:w-full sm:w-full xs:w-full'>
                <FormHeader />
                <FormBody />
            </div>
            <div className='xl:w-[30%] xxl:w-[30%] lg:w-0 md:w-0 sm:w-0 xs:w-0'>

            </div>
        </div>
    )
}

export default Form