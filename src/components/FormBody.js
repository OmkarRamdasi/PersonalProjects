import React, { useState } from 'react'
import { FaAsterisk } from 'react-icons/fa'
import CustomSelect from '../common/CustomSelect'
import MultiselectOption from "../components/MultiselectOption"
const FormBody = () => {
    const [userType, setUserType] = useState('Individual')
    const [categories, setCategories] = useState(
        [
            {
                value: 0,
                label: 'Select Category'
            },
            {
                value: 1,
                label: 'Consultant',
            },
            {
                value: 2,
                label: 'Vendor',
            }, {
                value: 3,
                label: 'Contractor',
            }, {
                value: 4,
                label: 'Builder',
            }
        ])
    const [subCategories, setSubCategories] = useState(
        [
            {
                value: 0,
                label: 'Select Sub Category'
            },
            {
                value: 1,
                label: 'Architecture Design',
            },
            {
                value: 2,
                label: 'Interior Design',
            }, {
                value: 3,
                label: 'BIM',
            }
        ])
    const [valueOptions, setValueOptions] = useState(
        [
            {
                value: 0,
                label: 'Select Value'
            },
            {
                value: 1,
                label: '50 thousand to 1 lakhs'
            },
            {
                value: 2,
                label: '1 lakh to 50 lakhs'
            }
        ]
    )
    const handleUserType = (event) => {
        setUserType(event.target.value);
    }
    return (
        <div className='mt-[20px] w-full h-full '>
            <div className='flex  gap-[5px]'>
                <span className='text-[0.5rem]  flex mt-1'><FaAsterisk /></span>
                <span className='italic font-semibold text-[0.7rem] '>Mandatory</span>
            </div>
            <div className='flex items-center w-full gap-[15px] mt-[10px]'>
                <div className='flex gap-0 '>
                    <span className='text-[7px]  xs:text-[0.5rem] mt-1'><FaAsterisk /></span>
                    <span className='font-black xs:text-[0.8rem] '>Are you?</span>
                </div>
                <div className='flex items-center gap-[20px]'>
                    <div className='flex items-center gap-[10px]'>

                        <label className={`w-[15px] h-[15px] xs:h-[10px] xs:w-[10px] cursor-pointer ${userType === 'Individual' ? `bg-[#000]` : `bg-[#fff]`} inline-block outline outline-[1px] outline-offset-[3px] outline-[#707070] rounded-full`}>

                            <input id="IndividualUser" type="radio" name="radio" className='opacity-0'
                                value="Individual"
                                checked={userType === "Individual"}
                                onChange={handleUserType} />
                        </label>
                        <label htmlFor='IndividualUser' className='cursor-pointer xs:text-[0.8rem]'>Individual</label>
                    </div>
                    <div className='flex items-center gap-[10px]'>

                        <label className={`w-[15px]  h-[15px] xs:h-[10px] xs:w-[10px] cursor-pointer ${userType === 'Company' ? `bg-[#000]` : `bg-[#fff]`} inline-block outline outline-[1px] outline-offset-[3px] outline-[#707070] rounded-full`}>
                            <input id="CompanyUser" type="radio" name="radio" className='opacity-0'
                                value="Company"
                                checked={userType === "Company"}
                                onChange={handleUserType} />
                        </label>
                        <label htmlFor='CompanyUser' className='cursor-pointer xs:text-[0.8rem]'>Company</label>

                    </div>
                </div>


            </div>
            <div className='flex flex-col gap-2 mt-[20px]'>
                <div className='flex gap-0 '>
                    <span className='align-top xs:text-[0.5rem] mt-1'><FaAsterisk /></span>
                    <span className='font-black xs:text-[0.8rem]'>What are you looking for? Choose from below categories.</span>
                </div>
                <CustomSelect options={categories} />
                <MultiselectOption optionValue={'Consultant'} />
            </div>
            <div className='flex flex-col gap-2 mt-[20px]'>
                <div className='flex gap-0'>
                    <span className='xs:text-[0.5rem] mt-1'><FaAsterisk /></span>
                    <span className='font-black xs:text-[0.8rem] '>Select from below sub category to reach the right connect.</span>
                </div>
                <CustomSelect options={subCategories} />
                <div className='flex xs:flex-wrap items-center gap-[10px]'>
                    <MultiselectOption optionValue={'Architecture Design'} />
                    <MultiselectOption optionValue={'Interior Design'} />
                    <MultiselectOption optionValue={'BIM'} />
                </div>

            </div>
            <div className='flex flex-col gap-2 mt-[20px]'>
                <div className='flex gap-0 items-center'>

                    <span className='font-black xs:text-[0.8rem] '>Write your requirement</span>
                </div>
                <input placeholder='Eg: I am looking for a RCC Contractor for a Residential project of 200,000 sq.ft.' type={'textarea'} className="border-[1px] border-black rounded-[10px]  pt-0 px-[15px] xs:h-[40px]" />


            </div>
            <div className='flex flex-col gap-2 mt-[20px]'>
                <div className='flex gap-0 '>
                    <span className='text-[7px] mt-1'><FaAsterisk /></span>
                    <span className='font-black xs:text-[0.8rem] '>Work Location</span>
                </div>
                <div className='flex xs:flex-col xxxl:flex-row xxl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-row items-start gap-[20px]'>
                    <input placeholder='Country' type={'text'} className="border-[1px] border-black rounded-[10px] p-1 px-[15px]  min-h-[40px] h-auto xs:w-full " />
                    <input placeholder='City' type={'text'} className="border-[1px] border-black rounded-[10px] p-1 px-[15px] min-h-[40px] h-auto xs:w-full" />

                </div>



            </div>
            <div className='flex flex-col gap-2 mt-[20px] xs:w-full '>
                <div className='flex gap-0 items-center'>

                    <span className='font-black  xs:text-[0.8rem]'>Expected Value of Works</span> <small className='text-sm font-light'> (Select from below)</small>
                </div>
                <div className='flex items-center gap-[20px] xxxl:w-[50%] xxl:w-[50%] xl:w-[50%] lg:w-[50%] md:w-[50%] sm:w-[50%] xs:w-100 '>
                    <div className='w-[30%]  h-20 gap-[5px] flex items-center justify-start flex-col'>
                        <span className='font-black xs:text-[0.8rem]'>Currency</span>
                        <input placeholder=' &#x20b9; Rupee' type={'text'} disabled={true} className="border-[1px] border-black rounded-[10px] p-1 px-[15px] w-full  min-h-[40px] h-auto " />
                    </div>
                    <div className=' w-[70%] h-20 gap-[5px] flex items-start  flex-col'>
                        <span className='font-black ml-[15px] xs:text-[0.8rem]'>Value</span>
                        <CustomSelect options={valueOptions} />
                    </div>


                </div>



            </div>
            <div className='flex flex-col gap-2 mt-[20px] '>
                <div className='flex gap-0 '>
                    <span className='text-[7px] mt-1'><FaAsterisk /></span>
                    <span className='font-black  xs:text-[0.8rem]'>Your Contact Details</span>
                </div>
                <div className='flex flex-col justify-start w-full'>
                    <div className='flex xs:flex-col sm:flex-col lg:flex-row md:flex-row xl:flex-row xxl:flex-row  justify-start'>
                        <input placeholder='Country' type={'text'} className="border-[1px] w-[50%] xs:w-full sm:w-full border-black rounded-[10px] p-1 m-1 px-[15px]  min-h-[40px] h-auto " />
                        <input placeholder='City' type={'text'} className="border-[1px] w-[50%] xs:w-full border-black rounded-[10px] p-1 m-1 px-[15px] min-h-[40px] h-auto " />
                    </div>
                    <div className='flex xs:flex-col sm:flex-col lg:flex-row md:flex-row xl:flex-row xxl:flex-row  justify-start'>
                        <input placeholder='Name' type={'text'} className="border-[1px] w-[50%] xs:w-full border-black rounded-[10px] p-1 m-1 px-[15px]  min-h-[40px] h-auto " />
                        <input placeholder='Company' type={'text'} className="border-[1px] w-[50%] xs:w-full border-black rounded-[10px] p-1 m-1 px-[15px] min-h-[40px] h-auto " />
                    </div>
                    <div className='flex xs:flex-col sm:flex-col lg:flex-row md:flex-row xl:flex-row xxl:flex-row justify-start'>
                        <input placeholder='Email' type={'email'} className="border-[1px] w-[50%]  xs:w-full sm:w-full border-black rounded-[10px] p-1 m-1 px-[15px]  min-h-[40px] h-auto " />
                        <div className='flex items-center gap-0 w-[50%] xs:w-full sm:w-full lg:w-full xl:w-full p-1'>
                            <div className='min-h-[40px] xs:w-[15%] xxl:w-[50px] rounded-l-[10px] border-[1px] border-black flex items-center justify-center'>
                                <span className='text-lg text-gray-600 font-manrope'>+91</span>
                            </div>
                            <input placeholder='Number' type={'number'} className="appearance-none w-full border-[1px] border-l-0 rounded-l-none border-black rounded-[10px] p-1 px-[15px] min-h-[40px] h-auto " />
                        </div>

                    </div>


                </div>



            </div>
            <div className='w-full h-[50px] flex items-center xxl:justify-end xl:justify-end lg:justify-end md:justify-end xs:justify-center mb-[30px]'>
                <button className='w-[140px]  bg-[#d8d8d8] p-[10px] font-black rounded-[1000px] active:scale-95'>Submit</button>
            </div>

        </div>
    )
}

export default FormBody