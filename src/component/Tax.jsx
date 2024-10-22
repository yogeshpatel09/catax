import React, { useState } from 'react'
import { FaAngleDown, FaInfoCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoMdCopy } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";

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
    const [selectCountry, setSelectCountry] = useState('')
    const [selectCountryType, setSelectCountryType] = useState('Select Country')
    const handleSelectCountry = () => {
        setSelectCountry(!selectCountry)
        
    }
    const handleCountryChange = (Type) => {
        setSelectCountryType(Type)
        setSelectCountry(false)
    }
    const [selectCurrency, setSelectCurrency] = useState('')
    const [selectCurrencyType, setSelectCurrencyType] = useState('Select courrency')
    const handleSelectCurrency = () => {
        setSelectCurrency(!selectCurrency)
       
    }
    const handleCurrencyChange = (Type) => {
        setSelectCurrencyType(Type)
        setSelectCurrency(false)
    }
    const [selectCost, setSelectCost] = useState('')
    const [selectCostType, setSelectCostType] = useState('FIFO')
    const handleSelectCost = () => {
        setSelectCost(!selectCost)
       
    }
    const handleCostChange = (Type) => {
        setSelectCostType(Type)
        setSelectCost(false)
    }
    const [selectReport, setSelectReport] = useState("standard");
    const [stander, setStander] = useState(true);
    const [advanced, setAdvanced] = useState(false)

    const handleSelectReport = (reportType) => {
        setSelectReport(reportType);
        setStander(reportType === "standard");
        setAdvanced(reportType === "advanced")
    };

    const [transaction, setTransaction] = useState(107);
    const totalTransaction = 5000;

    const prograessPercentage = (transaction / totalTransaction) * 100;



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
                            <span onClick={handleYear} className='font-semibold relative px-4 text-center  py-1'>
                                {selectYear}
                                {year && (
                                    <div className="bg-[#FBFBFB] absolute  w-full space-y-2">
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
                                                {selectCountryType === 'India' ? (
                                                    <>
                                                        <img src="india.png" alt="" className='h-6' />
                                                        <span>{selectCountryType}</span>
                                                    </>
                                                ) : selectCountryType === 'United State Of America' ? (
                                                    <>
                                                        <img src="us.png" alt="" className='h-6' />
                                                        <span>{selectCountryType}</span>
                                                    </>
                                                ): selectCountryType === 'Canada' ? (
                                                    <>
                                                        <img src="canada.png" alt="" className='h-6' />
                                                        <span>{selectCountryType}</span>
                                                    </>
                                                )
                                                 : (
                                                    <>
                                                        <img src="" alt="" className='h-6' />
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
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9] ' onClick={() => handleCountryChange('India')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="india.png" alt="" className='h-4' />
                                                        <span>India</span>
                                                    </div>

                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCountryChange('United State Of America')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="us.png" alt="" className='h-4' />
                                                        <span>United State Of America</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCountryChange('Canada')}>
                                                    <div className="flex gap-2 items-center">
                                                        <img src="canada.png" alt="" className='h-4' />
                                                        <span>Canada</span>
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
                                                ) : selectCurrencyType === 'CAD' ? (
                                                    <>
                                                        <img src="canada.png" alt="" className='h-6' />
                                                        <span>{selectCurrencyType}</span>
                                                    </>
                                                )
                                                : (
                                                    <>
                                                        <img src="" alt="" className='h-6' />
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
                                    <div className="flex flex-col w-full bg-[#FAFAFA] border relative">
                                        <div onClick={handleSelectCost} className='flex items-center justify-between py-1 px-2 gap-2 mt-1 '>
                                            <div className="flex gap-2 items-center">
                                                {selectCostType === 'INR' ? (
                                                    <>
                                                        <span>{selectCostType}</span>
                                                    </>
                                                ) : selectCostType === 'USD' ? (
                                                    <>
                                                        <span>{selectCostType}</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>{selectCostType}</span>
                                                    </>
                                                )}
                                            </div>
                                            <div>
                                                <FaAngleDown />
                                            </div>
                                        </div>
                                        {selectCost && (
                                            <div className="border z-10 absolute w-full top-[50px] bg-[#FAFAFA]">
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9] ' onClick={() => handleCostChange('INR')}>
                                                    <div className="flex gap-2 items-center">
                                                        <span>INR</span>
                                                    </div>

                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCostChange('USD')}>
                                                    <div className="flex gap-2 items-center">
                                                        <span>USD</span>
                                                    </div>
                                                </div>
                                                <div className='flex items-center justify-between p-2 gap-2 mt-1 hover:bg-[#FFF3F9]' onClick={() => handleCostChange('CAD')}>
                                                    <div className="flex gap-2 items-center">
                                                        <span>CAD</span>
                                                    </div>

                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-[#FFF5FB] w-full text-xl font-semibold px-6 py-3">
                            Crypto Tax Summary
                        </div>
                        <div className="bg-[#FFFFFF] px-6 py-5 w-full space-y-2 text-sm">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Capital Gain / P & L</span>
                                    <span><CiCircleInfo /></span>
                                </div>
                                <div className="">
                                    <span className='text-[#FF6384]'>-₹ 3,952.28</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Other Gain (Future, Derivatives Etc)</span>
                                    <span><CiCircleInfo /></span>
                                </div>
                                <div className="">
                                    <span className='text-[#FF6384]'>-₹ 103.04</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Income</span>
                                    <span><CiCircleInfo /></span>
                                </div>
                                <div className="">
                                    <span className=''>₹ 6.29</span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Cost & Expenses</span>
                                    <span><CiCircleInfo /></span>
                                </div>
                                <div className="">
                                    <span className=''>₹ 44.13  </span>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2">
                                    <span>Gift, Donation & Lost Coins</span>
                                    <span><CiCircleInfo /></span>
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

                            <div onClick={() => handleSelectReport("standard")} className="flex items-center gap-2 ">
                                <div className={`h-4 w-4 rounded-full border flex justify-center items-center ${selectReport === "standard" ? "bg-[#A54D79]" : ""}`}>
                                    <div className={`h-3 w-3 rounded-full border border-white ${selectReport === "standard" ? "bg-[#A54D79]" : ""}`}></div>
                                </div>
                                <span>Standard Report</span>
                            </div>


                            <div onClick={() => handleSelectReport("advanced")}  className="flex items-center gap-2  ">
                                <div className={`h-4 w-4 rounded-full border flex items-center justify-center ${selectReport === "advanced" ? "bg-[#A54D79]" : ""}`}>
                                    <div className={`h-3 w-3 rounded-full border border-white ${selectReport === "advanced" ? "bg-[#A54D79]" : ""}`}></div>
                                </div>
                                <span>Advanced Report</span>
                            </div>
                        </div>

                        {stander && (<div className="px-6 py-2 pb-8">
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

                        {advanced && (<div className="px-6 py-2 pb-8">
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

                    <div className="">
                        <div className="bg-[#FFF5FB] w-full text-xl font-semibold px-6 py-3">
                            License for 2024
                        </div>
                        <div className="px-6 py-3">
                            <div className="flex justify-end py-2">
                                <button className='text-white bg-[#A64D79] px-3 py-2 rounded-md'>
                                    Building Purchase
                                </button>

                            </div>
                            <div className="py-4">
                                <div className="relative w-full bg-[#F4F4F4] h-1 rounded">
                                  
                                    <div
                                        className="absolute top-0 left-0 h-full bg-[#A54D79] rounded"
                                        style={{ width: `${prograessPercentage}%` }} 
                                    ></div>
                                </div>
                                
                                <span className='text-sm'>
                                    {transaction} of {totalTransaction} Transactions
                                </span>
                            </div>

                            <div className="w-full grid grid-cols-3 gap-10">
                                <div className="border-[#CBD5E1] border-[1px] shadow-lg flex flex-col  px-8 py-5">
                                    <div className='text-[#A64D79] font-bold text-lg pb-6'>Investor</div>
                                    <div className='font-semibold text-xl pb-20'>5,000 TXs</div>
                                    <div className=' text-xl text-[#A64D79] font-bold'>59 $</div>
                                </div>
                                <div className="border-[#CBD5E1] border-[1px] shadow-lg flex flex-col  px-8 py-5">
                                    <div className='text-[#A64D79] font-bold text-lg pb-6'>Trader</div>
                                    <div className=' pb-20 space-y-2 '>
                                        <div className='font-semibold text-xl'>25,000 TXs  </div>
                                        <div className=''>Chat Support: Bugs & Feature </div>
                                    </div>
                                    <div className=' text-xl text-[#A64D79] font-bold'>199 $</div>
                                </div>
                                <div className="border-[#CBD5E1] border-[1px] shadow-lg flex flex-col  px-8 py-5">
                                    <div className='text-[#A64D79] font-bold text-lg pb-6'>Professional</div>
                                    <div className=' pb-20 space-y-2 '>
                                        <div className='font-semibold text-xl'>350,000 TXs  </div>
                                        <div className=''>Zoom Support Individua Tax Report help VIP Telegram   </div>
                                    </div>
                                    <div className=' text-xl text-[#A64D79] font-bold'>From 899 $</div>
                                </div>

                            </div>

                            <div className="py-8">
                                <span>After purchase, any number of document for that year can be generated and downloaded. Subsequent corrections are thus possible without any problem</span>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tax