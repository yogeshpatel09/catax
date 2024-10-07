import React from 'react'
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="w-full py-10">
        <div className="flex justify-center items-center">
          <div className="flex justify-between items-center text-md px-4  w-[90%]">
            <div className="flex gap-4 ">
              <span>Show row per page</span>
              <span className='flex items-center gap-1'>
                <span>8</span>
                <span><FaAngleDown /></span>
              </span>
            </div>
            <div className="flex items-center">

              <p className='flex items-center gap-1'>
                <FaAngleLeft />
                <span>Previous</span>
              </p>
              <div className='flex items-center gap-6 px-3'>
                <span>01</span>
                <span>02</span>
                <span>03</span>
                <span>04</span>
                <span>05</span>
                <span>...</span>
                <span>100</span>
              </div>
              <p className='flex items-center gap-1'>

                <span>Next</span>
                <FaAngleRight />
              </p>
            </div>
            <div className="text-xs space-x-2">
              <span>Page</span>
              <span className='border rounded-full px-3'>112</span>
              <span className='text-[#A54D79]'>Go</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
