import React from 'react'

const FormFooterMiddleSection = () => {
    return (
        <div className='xxl:w-[60%] xl:w-[60%] lg:w-[60%] md:w-0 sm:w-0 xs:w-0 h-full  flex items-center justify-end'>
            <nav className=' xxxl:visible xxl:visible xl:visible lg:visible md:invisible sm:invisible xs:invisible h-full'>
                <ul className="flex items-center">
                    <li className="mr-4">
                        <a target={'_blank'} className="text-footerMutedText text-sm hover:text-footerMutedTextHover" href="https://olous.app/termsofservice">Terms & Conditions</a>
                    </li>
                    <div className='h-[12px]  border-l-2 border-gray-400'></div>
                    <li className="m-4">
                        <a target={'_blank'} className="text-footerMutedText text-sm hover:text-footerMutedTextHover" href="https://olous.app/privacy">Privacy Policy</a>
                    </li>
                    <div className='h-[12px]  border-l-2 border-gray-400'></div>
                    <li className="ml-4">
                        <a className="text-footerMutedText text-sm hover:text-footerMutedTextHover" href="mailto:support@olous.app">Support</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default FormFooterMiddleSection