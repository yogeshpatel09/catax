import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaAngleDown, FaArrowDown, FaArrowRight, FaBorderAll, FaLink, FaRegEdit, FaRegEye } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaArrowRightLong, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoCopyOutline } from 'react-icons/io5';
import { MdDelete } from 'react-icons/md';
function Header() {
  const [isEditable, setIsEditable] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [navDetails, setNavDetails] = useState(false)


  const handleEdit = () => {
    setIsEditable(!isEditable)
  }

  const handleNavbar = () => {
    setNavbar(!navbar)
  }
  const handleNavDeteail = () => {
    setNavDetails(!navDetails)
  }

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

      <div className="">
        <div className="flex justify-center items-center">
          <div className="w-[90%]">
            <div className="flex justify-between w-full py-6">
              <p className='font-semibold text-lg'>Transactions</p>
              <div className=" flex gap-3 items-center text-sm">
                <div className="">
                  <select className='bg-[#A64D79]  py-2 rounded-sm text-white outline-none' name="" id="">
                    <option className='px-4' value="">Add Transaction</option>
                    <option value="">yogesh</option>
                  </select>
                </div>
                <div className="text-[#A54D79]">
                  <span>+</span>
                  <span>Add Filter</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className=" flex items-center w-1/3">
                <select className='bg-[#F4F5F7] w-full py-2' name="" id="">
                  <option value="">All Wallets</option>
                </select>
              </div>
              <div className=" flex items-center w-1/3">
                <select className='bg-[#F4F5F7] w-full py-2' name="" id="">
                  <option className='text-[#9B9B9B]' value="">All Wallets</option>
                </select>
              </div>
              <div className=" flex items-center border rounded-full px-2">
                <select className='' name="" id="">
                  <option value="">View</option>
                </select>
              </div>
              <div className=" flex items-center border rounded-full px-2">
                <select className='' name="" id="">
                  <option value="">sort by recent</option>
                </select>
              </div>
            </div>
            <div className="flex gap-2 py-8 ">
              <div className=" flex items-center px-2">
                <select className='bg-[#A54D79] text-white px-2 border rounded-full outline-none' name="" id="">
                  <option value="">Type</option>
                </select>
              </div>
              <div className=" flex items-center border rounded-full px-2">
                <select className='' name="" id="">
                  <option value="">Tag </option>
                </select>
              </div>
              <div className=" flex items-center border rounded-full px-2">
                <select className='' name="" id="">
                  <option value="">Date</option>
                </select>
              </div>
              <div className=" flex items-center border rounded-full px-2">
                <select className='' name="" id="">
                  <option value="">warning </option>
                </select>
              </div>
              <div className=" flex items-center border rounded-full px-2">
                <select className='' name="" id="">
                  <option value="">Manual </option>
                </select>
              </div>
            </div>
            <div className="py-2">
              <p>Sep 10, 2024</p>
            </div>

            <div onClick={handleNavbar} className="group bg-[#F4F4F4] h-16 w-full flex justify-between items-center px-4 relative hover:bg-[#FFF3F9]">

              <div className="flex items-center gap-3">
                <div className="group-hover:hidden">
                  <img className='h-6' src="/reward.png" alt="" />
                </div>
                <div className="hidden group-hover:block">
                  <input className='' type="checkbox" />
                </div>

                <div className="">
                  <p className='text-sm'>Reward</p>
                  <p className='text-xs'>2:53 AM</p>
                </div>

              </div>
              <div className="flex items-center gap-2">
                <img className='h-6' src="/datbase.png" alt="" />
                <p><FaArrowRightLong className='text-[#3FBB00]' /></p>
                <img className="h-6" src="/trangle.png" alt="" />
              </div>
              <div className="flex">
                <div className="">
                  <p >Kraken (2)</p>

                  <div className="flex ">
                    <div className=""><p>+</p></div>
                    <div className="">
                      <p className='text-sm'>0.00040271 ALGO</p>
                      <p className='text-xs'>₹ 0.0043</p>
                    </div>

                  </div>
                </div>
              </div>
              <div className="flex gap-1 relative">
                <div className="hidden group-hover:block">
                  <IoIosInformationCircleOutline />
                </div>

                <div onClick={handleEdit} className="hidden group-hover:block">
                  <HiOutlineDotsHorizontal />
                  {isEditable && (
                    <div className="absolute right-0 ">
                      <div className="space-y-1">
                        <button className='flex items-center min-w-32 hover:bg-[#A54D79]'><FaRegEdit />Edit</button>
                        <button className='flex items-center min-w-32 hover:bg-[#A54D79] '> <IoCopyOutline />Dublicate</button>
                        <button className='flex items-center  min-w-32 hover:bg-[#A54D79]'> <MdDelete className='text-[#DC3545]' />Delete</button>
                        <div className="pt-6">
                          <button className='flex items-center  border '> <FaArrowUpRightFromSquare />view in context </button>
                        </div>

                      </div>

                    </div>
                  )}
                </div>

              </div>
            </div>
            {navbar && (
              <div className=" bg-[#FBFBFB] mt-2 py-1">
                <div className="flex justify-between px-2 py-2">
                  <div className="space-x-4">
                    <Link onClick={handleNavDeteail} className='hover:text-[#A54D79]'>
                      Details

                    </Link >
                    <Link className='hover:text-[#A54D79]'>
                      Ledgar
                    </Link>
                    <Link className='hover:text-[#A54D79]'>
                      Cost Analysis
                    </Link>
                  </div>
                  <div className="flex gap-3">
                    <p>=77A89F...</p>
                    <p><FaLink /></p>
                    <p><FaRegEdit /></p>
                    <p><MdDelete /></p>
                  </div>

                </div>
                {navDetails && (
                  <div className="flex justify-between w-full">
                    <div className="flex items-start gap-3 w-1/2">
                      <div className=""><FaArrowDown /></div>
                      <div className="">
                        <div className="">Reward</div>
                        <div className="">Sep 10, 2024 11:40 PM</div>
                      </div>
                    </div>
                    <div className="w-1/2 ">
                      <div className=" bg-[#FFF3F9] flex items-center">
                        <div className="flex items-center gap-2 w-1/2">
                          <p>+</p>
                          <img className='h-4' src="/trangle.png" alt="" />
                          <p>0.00040271 ALGO</p>
                        </div>
                        <div className=" flex w-1/2 gap-2 items-center py-1">
                          <img src="" alt="" />
                          <p>Kraken (2)</p>
                          <p>CSV</p>
                          <p><FaRegEye /></p>
                        </div>

                      </div>
                      <div className="">
                      <div className=" flex items-center">
                        <div className="flex items-center gap-2 w-1/2">
                          <p>Gain</p>
                        </div>
                        <div className=" flex w-1/2">
                          
                         
                          <p>₹0.00</p>
                          <p><FaRegEye /></p>
                        </div>

                      </div>
                      </div>
                      <div className="">
                      <div className="  flex items-center">
                        <div className="flex items-center gap-2 w-1/2">
                          <p>Fiat value</p>
                        </div>
                        <div className=" flex w-1/2">
                         
                          <p>₹0.0043</p>
                          <p><FaRegEye /></p>
                        </div>

                      </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
