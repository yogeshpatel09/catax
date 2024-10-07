import React from 'react'
import { FaArrowRight, FaRegEdit } from 'react-icons/fa'
import { IoIosInformationCircleOutline } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoCopyOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function Home() {
    return (
        <>
            <div className="w-full">
                <div className="flex justify-center items-center">
                    <div className="flex  justify-between items-center w-[90%] pb-4">
                        <span>Sep 10, 2024</span>

                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center w-[90%] ">
                    </div>
                </div>
            </div>
            <div className="w-full">
                <div className="flex flex-col justify-center items-center relative">
                    <div className="flex  justify-between bg-[#F4F4F4] hover:bg-[#FFF3F9] px-4 h-16 items-center w-[90%] ">
                        <div className="flex items-center gap-4">
                            <img className='h-6' src="/reward.png" alt="" />
                            <div className="flex flex-col items-center">
                                <span className='text-sm'>Reward</span>
                                <span className='text-xs text-[#636363]'>2:53 AM</span>
                            </div>

                        </div>
                        <div className="flex items-center gap-3">
                            <img className='h-6' src="/datbase.png" alt="" />
                            <FaArrowRight className='text-xs text-[#3FBB00]' />
                            <img className='h-6' src="trangle.png" alt="" />
                        </div>
                        <div className="">
                            <span className='text-xs'> Kraken (2)</span>
                            
                            <div className="flex items-center">
                            <span className='text-2xl'>+</span>
                                <div className="flex flex-col">
                                <span>0.00040271 ALGO</span>
                                <span>₹ 0.0043</span>
                                </div>
                                
                            </div>
                        </div>
                        <div className="flex gap-2">
                        <IoIosInformationCircleOutline className='text-[#A54D79]'/>
                        <HiDotsHorizontal className='text-sm text-[#616161]'/>
                        </div>
                        
                    </div>
                    <div className="flex flex-col items-start border absolute right-20 top-8">
                            <button className='flex items-center min-w-32 hover:bg-[#A54D79]'><FaRegEdit />Edit</button>
                            <button className='flex items-center min-w-32 hover:bg-[#A54D79] '> <IoCopyOutline />Dublicate</button>
                            <button className='flex items-center min-w-32 hover:bg-[#A54D79]'> <MdDelete />Delete</button>
                            <button className='flex items-center pt-3 border '> <FaArrowUpRightFromSquare />view in context </button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Home
