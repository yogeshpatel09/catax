import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const MyComponent = () => {
  const [clickElements, setClickElement] = useState([false, false, false, false]);
  const elements = ['+ TxHash', '+ TxSrc', '+ Tag', '+ Description'];


  const handleClick = (index) => {
    const newClickElement = [...clickElements];
    for (let i = 0; i <= index; i++) {
      newClickElement[i] = true;
    }
    setClickElement(newClickElement);
  };

  return (
    <div>
      <div className="w-full py-3 my-6 space-y-2 border px-4">
        <div className="flex items-center gap-2">
          <FaArrowDown className="text-[#3FBB00]" />
          <span className="font-semibold">Received</span>
        </div>
        <select className="bg-[#EFEFEF] w-full py-2">
          <option>Select Wallet</option>
          <option>Kraken (2)</option>
          <option>CoinDCX</option>
          <option>Unocoin</option>
        </select>
        <div className="flex gap-2">
          <select className="bg-[#EFEFEF] w-1/2 py-2">
            <option>Coin</option>
          </select>
          <select className="bg-[#EFEFEF] w-1/2 py-2">
            <option>No. of Coin</option>
          </select>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          {elements.map((Data, index) => (
            <div key={index} className="flex flex-col gap-2">
              {clickElements[index] && (
                <div className="flex flex-col gap-2 mb-4">
                  {index === 0 && (
                    <div className="flex flex-col gap-2 mb-4">
                      <label htmlFor="">Tag</label>
                      <select className='py-1 border' name="" id="">
                        <option value="">Select </option>
                      </select>
                      <label htmlFor="">Transaction Hash</label>
                      <input type="text" placeholder="" className="border px-2 py-1 rounded outline-none" />
                    </div>
                  )}
                  {index === 1 && (<div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="">Tag</label>
                    <select className='py-1 border' name="" id="">
                      <option value="">Select </option>
                    </select>
                    <label htmlFor="">Transaction Hash</label>
                    <input type="text" placeholder="" className="border px-2 py-1 rounded outline-none" />
                  </div>
                  )}
                  {index === 2 && (<div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="">Tag</label>
                    <select className='py-1 border' name="" id="">
                      <option value="">Select </option>
                    </select>
                    <label htmlFor="">Transaction Hash</label>
                    <input type="text" placeholder="" className="border px-2 py-1 rounded outline-none" />
                  </div>
                  )}
                  {index === 3 && (<div className="flex flex-col gap-2 mb-4">
                    <label htmlFor="">Tag</label>
                    <select className='py-1 border' name="" id="">
                      <option value="">Select </option>
                    </select>
                    <label htmlFor="">Transaction Hash</label>
                    <input type="text" placeholder="" className="border px-2 py-1 rounded outline-none" />
                  </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          {elements.map((Data, index) => (
            <div key={index} className="flex gap-4 items-center">

              <div
                className="border rounded-full px-2 cursor-pointer"
                onClick={() => handleClick(index)}
              >
                {Data}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
