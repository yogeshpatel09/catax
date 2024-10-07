import React from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaArrowRight, FaBorderAll } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
function Header() {
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
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center w-[90%] py-6">
            <div className=""><p className='font-semibold'>Transactions</p></div>
            <div className="flex gap-3">
              <div className=" bg-[#A64D79] text-sm flex justify-center items-center px-3 gap-2 py-2 rounded-md text-white">
                Add Transaction <FaAngleDown className='text-xs' />
              </div>
              <div className="text-[#A54D79] flex justify-center items-center gap-2">
                <span>+</span> <span>Add Filter</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center gap-1 py-3  w-[90%]">
            <div className="bg-[#F4F5F7] w-1/3 flex justify-between items-center px-2 py-2 text-sm">
              <span>All Wallets</span><span><FaAngleDown className='text-xs' /></span>
            </div>
            <div className="bg-[#F4F5F7] w-1/3 flex justify-between items-center px-2 py-2 text-sm">
              <span>All Wallets</span><span><FaAngleDown className='text-xs' /></span>
            </div>
            <div className="">
              <FaBorderAll />
            </div>
            <div className="">
              <div className="flex justify-between px-6 py-1 items-center gap-2 border rounded-full"><span>View</span> <span></span> <FaAngleDown className='text-xs' /></div>
            </div>
            <div className="">
              <div className="flex justify-between px-6 py-1 items-center gap-2 border rounded-full "><span>sort by recent</span> <span></span> <FaAngleDown className='text-xs' /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center gap-1 items-center">
          <div className="flex justify-start items-center gap-4 w-[90%] py-4">
            <div className="bg-[#A54D79] flex gap-2 justify-center items-center text-white px-3 py-1 rounded-full  ">
              <span>Type  </span><span><FaAngleDown className='text-xs' /></span>
            </div>
            <div className=" flex gap-2 justify-center items-center  px-3 py-1 rounded-full  ">
              <span>Tag  </span><span><FaAngleDown className='text-xs' /></span>
            </div>
            <div className=" flex gap-2 justify-center items-center  px-3 py-1 rounded-full  ">
              <span>Date </span><span><CiCalendarDate className='text-sm' /></span>
            </div>
            <div className=" flex gap-2 justify-center items-center  px-3 py-1 rounded-full  ">
              <span>warning  </span><span><FaAngleDown className='text-xs' /></span>
            </div>
            <div className=" flex gap-2 justify-center items-center  px-3 py-1 rounded-full  ">
              <span>Manual   </span><span><FaAngleDown className='text-xs' /></span>
            </div>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Header
