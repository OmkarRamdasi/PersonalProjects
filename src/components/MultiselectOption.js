import React from 'react'
import {IoIosCloseCircleOutline} from 'react-icons/io'
const MultiselectOption = ({optionValue}) => {
  return (
    <div className='bg-multiselectOptionBg rounded-[20px] xs:h-[25px] flex items-center justify-center  gap-[5px] w-fit max-w-[200px] p-1'>
        <p className='ml-[5px] font-bold font-monorope text-black w-[80%] xs:text-[0.7rem] whitespace-nowrap text-ellipsis overflow-hidden ...'>{optionValue}</p>
        <button className='active:scale-95'><IoIosCloseCircleOutline className='xs:text-[23px]'/></button>
    </div>
  )
}

export default MultiselectOption 