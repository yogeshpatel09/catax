import React, { useState } from 'react'
import { FaAngleDown, FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoMdCopy } from "react-icons/io";

function Tax() {
    const [year, setyYear] = useState(false)
    const [selectYear, setSelectYear] = useState('2023 - 2024')
    const handleYear = () => {
        setyYear(!year)
    }
    const handleYearSelect = (year) => {
        setSelectYear(year);
        setYearDropdown(false);
    };
    const [selectCountry, setSelectCountry] = useState(false)
    const [selectCountryType, setSelectCountryType] = useState('Select Country')
    const handleSelectCountry = () => {
        setSelectCountry(!selectCountry)
        setSelectCountry(true)
    }
    const handleCountryChange = (Type) => {
        setSelectCountryType(Type)
        setSelectCountry(false)
    }
    const [selectCurrency, setSelectCurrency] = useState(false)
    const [selectCurrencyType, setSelectCurrencyType] = useState('Select courrency')
    const handleSelectCurrency = () => {
        setSelectCurrency(!selectCurrency)
        setSelectCurrency(true)
    }
    const handleCurrencyChange = (Type) => {
        setSelectCurrencyType(Type)
        setSelectCurrency(false)
    }
    const [stander,setStander] = useState(false)
    const handleStandardReport = () =>{
        setStander(!stander)
        setStander(stander = '' ? 'pink':'pink')
    }
    const[ standerclick,setStanderclick] = useState('')

    
    return (
        <div>
            <header>
                <div className="w-full h-12 bg-[#A54D79]">
                    <div className="flex justify-start text-white items-center h-full container mx-auto gap-16 text-sm ">
                        <Link className='hover:text-lg  hover:font-semibold'>
                            Catax
                        </Link>
                        <Link className='hover:text-xl  hover:font-semibold'>
                            Dashboard
                        </Link>
                        <Link className='hover:text-xl hover:font-semibold'>
                            Wallets
                        </Link>
                        <Link className='hover:text-xl hover:font-semibold'>
                            Transactions
                        </Link>
                        <Link className='hover:text-xl hover:font-semibold'>
                            Tax Reports
                        </Link>
                        <Link className='hover:text-xl hover:font-semibold'>
                            Settings
                        </Link>
                    </div>

                </div>
            </header>
            <div className=" flex justify-center items-center">
                <div className="w-[90%] pb-4">
                    <div className="flex items-center gap-2 py-6">
                        <div>
                            <span onClick={handleYear} className='font-semibold relative'>
                                {selectYear}
                                {year && (
                                    <div className="bg-[#FBFBFB] absolute">
                                        <div className='hover:bg-[#FFF3F9]' onClick={() => handleYearSelect("2023 - 2024")} >
                                            2023 - 2024
                                        </div>
                                        <div className='hover:bg-[#FFF3F9]' onClick={() => handleYearSelect("2022 - 2023")} >
                                            2022 - 2023
                                        </div>
                                        <div className='hover:bg-[#FFF3F9]' onClick={() => handleYearSelect("2021 - 2022")} >
                                            2021 - 2022
                                        </div>
                                    </div>
                                )}
                            </span>
                            <span className='ml-2'>Tax Report</span>
                        </div>
                        <span className='text-sm'><FaAngleDown /></span>
                        <span className='text-[#787878] text-xs'>Jan 1, 2024 - Dec 31 2024  </span>
                    </div>
                    <div className="">
                        <div className="bg-[#FFF5FB] w-full text-2xl font-semibold px-6 py-3">
                            Tax Data
                        </div>
                        <div className="bg-[#FFFFFF] px-6 py-5 w-full">
                            <p className='py-3 text-[#4C4C4C] text-sm'>General tax-related option such as the method and long/short definition</p>
                            <div className="flex justify-between items-center w-full gap-4">
                                <div className="w-full">
                                    <span>Country</span>
                                    <div className="flex flex-col w-full bg-[#FAFAFA] border relative">
                                        <div onClick={handleSelectCountry} className='flex items-center justify-between py-1 px-2 gap-2 mt-1 '>
                                            <div className="flex gap-2 items-center">
                                                {selectCountryType === 'INR' ? (
                                                    <>
                                                        <img src="india.png" alt="" className='h-6' />
                                                        <span>{selectCountryType}</span>
                                                    </>
                                                ) : selectCountryType === 'USD' ? (
                                                    <>
                                                        <img src="us.png" alt="" className='h-6' />
                                                        <span>{selectCountryType}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <img src="canada.png" alt="" className='h-6' />
                                                        <span>{selectCountryType}</span>
                                                    </>
                                                )}
                                            </div>
                                            <div>
                                                <FaAngleDown />
                                            </div>
                                        </div>
                                        {selectCountry && (
                                            <div className="border z-10 absolute w-full top-[50px] bg-[#FAFAFA]">
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9] ' onClick={() => handleCountryChange('INR')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="india.png" alt="" className='h-4' />
                                                        <span>INR</span>
                                                    </div>

                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCountryChange('USD')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="us.png" alt="" className='h-4' />
                                                        <span>USD</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCountryChange('CAD')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="canada.png" alt="" className='h-4' />
                                                        <span>CAD</span>
                                                    </div>

                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                                <div className="w-full">
                                    <span>Currency</span>
                                    <div className="flex flex-col w-full bg-[#FAFAFA] border relative">
                                        <div onClick={handleSelectCurrency} className='flex items-center justify-between py-1 px-2 gap-2 mt-1 '>
                                            <div className="flex gap-2 items-center">
                                                {selectCurrencyType === 'INR' ? (
                                                    <>
                                                        <img src="india.png" alt="" className='h-6' />
                                                        <span>{selectCurrencyType}</span>
                                                    </>
                                                ) : selectCurrencyType === 'USD' ? (
                                                    <>
                                                        <img src="us.png" alt="" className='h-6' />
                                                        <span>{selectCurrencyType}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <img src="canada.png" alt="" className='h-6' />
                                                        <span>{selectCurrencyType}</span>
                                                    </>
                                                )}
                                            </div>
                                            <div>
                                                <FaAngleDown />
                                            </div>
                                        </div>
                                        {selectCurrency && (
                                            <div className="border z-10 absolute w-full top-[50px] bg-[#FAFAFA]">
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9] ' onClick={() => handleCurrencyChange('INR')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="india.png" alt="" className='h-4' />
                                                        <span>INR</span>
                                                    </div>

                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCurrencyChange('USD')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="us.png" alt="" className='h-4' />
                                                        <span>USD</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCurrencyChange('CAD')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="canada.png" alt="" className='h-4' />
                                                        <span>CAD</span>
                                                    </div>

                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                                <div className="w-full">
                                    <span>Cost Basic Method</span>
                                    <div className="flex items-center w-full bg-[#FFFFFF] text-[#A1A1A1] px-2 py-1 justify-between">
                                        <span>FIFO</span>
                                        <FaAngleDown />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-[#FFF5FB] w-full text-xl font-semibold px-6 py-3">
                            Crypto Tax Summary
                        </div>
                        <div className="bg-[#FFFFFF] px-6 py-5 w-full space-y-2">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Capital Gain / P & L</span>
                                    <span><FaInfoCircle /></span>
                                </div>
                                <div className="">
                                    <span className='text-[#FF6384]'>-₹ 3,952.28</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Other Gain (Future, Derivatives Etc)</span>
                                    <span><FaInfoCircle /></span>
                                </div>
                                <div className="">
                                    <span className='text-[#FF6384]'>-₹ 103.04</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Income</span>
                                    <span><FaInfoCircle /></span>
                                </div>
                                <div className="">
                                    <span className=''>₹ 6.29</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Cost & Expenses</span>
                                    <span><FaInfoCircle /></span>
                                </div>
                                <div className="">
                                    <span className=''>₹ 44.13  </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Gift, Donation & Lost Coins</span>
                                    <span><FaInfoCircle /></span>
                                </div>
                                <div className="">
                                    <span className=''>₹ 0.00 </span>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="">
                        <div className="bg-[#FFF5FB] w-full text-xl font-semibold px-6 py-3">
                            <span>Download Report</span>
                        </div>
                        <div className="px-6 py-3 flex gap-8">
                            <div onClick={handleStandardReport}  className="flex items-center gap-2">
                                <div  className="h-4 w-4 rounded-full border"></div>
                                <span >Standard Report</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-4 w-4 rounded-full border"></div>
                                <span >Advanced Report</span>
                            </div>
                        </div>
                        {stander && (
                            <div className="px-6 py-2 pb-8">
                            <div className="flex justify-between border-b py-2">
                                <span>Complete Tax Report</span>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Buy - Sell Report</span>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Income Summary Report</span>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Transaction history Report</span>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Schedule VDA Report</span>
                                <input type="checkbox" />
                            </div>
                            <div className="flex justify-between border-b py-2">
                                <span>Tax Filling Data Report</span>
                                <input type="checkbox" />
                            </div>
                            
                        </div>
                        )}
                        

                        <button className='w-full bg-[#A64D79] text-white py-2'>
                        Generate Now
                        </button>
                        <div className="flex items-center justify-center py-3">
                            <span><IoMdCopy /></span>
                            <span>Previously Generated Notes</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tax