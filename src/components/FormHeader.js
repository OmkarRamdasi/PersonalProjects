import React from 'react'
import { GiCrane } from 'react-icons/gi'
import { MdEngineering } from 'react-icons/md'
import { GiTruck } from 'react-icons/gi'
import { GiForklift } from 'react-icons/gi'
import { GiBrickWall } from 'react-icons/gi'

import { MdOutlineConstruction } from 'react-icons/md'
const FormHeader = () => {
    return (
        <>
            <div className='flex flex-col gap-[10px]'>
                <p className='xxxl:text-3xl xs:text-[1.07rem] sm:text-[1.9rem]  font-black'>Need Vendor, Consultant, Contractor?</p>
                <div className='flex gap-[30px] items-center'>
                    <span className='text-black text-3xl xxxl:text-2xl  sm:text-[1.9rem] xs:text-[1rem] flex items-center'><GiCrane /></span>
                    <span className='text-black text-3xl xxxl:text-2xl  sm:text-[1.9rem] xs:text-[1rem] flex items-center'><MdEngineering /></span>
                    <span className='text-black text-3xl xxxl:text-2xl  sm:text-[1.9rem] xs:text-[1rem] flex items-center'><GiTruck /></span>
                    <span className='text-black text-3xl xxxl:text-2xl  sm:text-[1.9rem] xs:text-[1rem] flex items-center'><GiForklift /></span>
                    <span className='text-black text-3xl xxxl:text-2xl  sm:text-[1.9rem] xs:text-[1rem] flex items-center'><GiBrickWall /></span>
                    <span className='text-black text-3xl xxxl:text-2xl  sm:text-[1.9rem] xs:text-[1rem] flex items-center'><MdOutlineConstruction /></span>
                </div>
                <p className='xxxl:text-2xl xs:text-[0.9rem] sm:text-[1.9rem]  font-semibold text-[#000000cc] font-manrope'>
                    Fill in your requirements and contact details, and we’ll help you connect
                    with the right business!
                </p>
            </div>
        </>
    )
}

export default FormHeader