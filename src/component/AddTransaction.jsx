import React from 'react'

function AddTransaction() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 opacity-75"

      ></div>
      <div
        className={`z-10 ml-auto h-[90vh] w-1/2 rounded-md bg-white `}
      >
        <div className="max-h-[80vh] overflow-y-auto text-[12px]">
          <h2 className="rounded-t-md bg-gray-200 p-5 font-bold shadow-sm">
            Transactions Filter
          </h2>
          <p className="px-5 py-2 text-xl font-semibold text-gray-900">Filter</p>
          <div className="px-5 py-2">
            <label className="relative inline-flex cursor-pointer items-center">
              <input type="checkbox" value="" className="peer sr-only" />
              <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#a64d79] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-gray-300 rtl:peer-checked:after:-translate-x-full"></div>
              <span className="ms-3 text-gray-900">Invoice Available</span>
            </label>
            <div className="flex flex-col space-y-2 py-2">
              <label>Wallets</label>
              <select className="w-full rounded border py-2">
                <option>All Wallet</option>
                <option>Wallet 1</option>
                <option>Wallet 2</option>
              </select>
            </div>
            <div className="flex w-full flex-col space-y-2 py-2">
              <label>Date Range</label>
              {/* Uncomment and use DatePicker here */}
              {/* <DatePicker
              selectsRange
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                if (focus === "startDate") {
                  setStartDate(update[0]);
                  setEndDate(null);
                  handleFocusChange("endDate");
                } else {
                  setEndDate(update[1]);
                  handleFocusChange("startDate");
                }
              }}
              onFocus={() => handleFocusChange(focus)}
              placeholderText="Start Date - End Date"
              className="w-full rounded-md border border-gray-300 p-2"
            /> */}
            </div>
            <div className="flex w-full flex-col space-y-2 py-2">
              <label>Activities</label>
              <div className="flex gap-x-2 flex-wrap">
                {["Transfer", "Swap", "Contract Interaction", "Wrap", "Unwrap"].map((activity, index) => (
                  <div key={index} className="mb-4 flex w-fit items-center rounded border bg-gray-200 px-3 py-1">
                    <input
                      id={`activity-checkbox-${index}`}
                      type="checkbox"
                      value=""
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-900"
                    />
                    <label htmlFor={`activity-checkbox-${index}`} className="ms-2 text-gray-900">{activity}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col space-y-2 py-2">
              <label>Transaction types</label>
              <div className="flex flex-wrap gap-x-2">
                {["Deposit", "Deposit Internal", "Deposit Group", "Fee", "Withdrawal", "Withdrawal Internal", "Withdrawal Group"].map((type, index) => (
                  <div key={index} className="mb-4 flex w-fit items-center rounded border bg-gray-200 px-3 py-1">
                    <input
                      id={`type-checkbox-${index}`}
                      type="checkbox"
                      value=""
                      className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-gray-600 focus:ring-2 focus:ring-gray-900"
                    />
                    <label htmlFor={`type-checkbox-${index}`} className="ms-2 text-gray-900">{type}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col space-y-2 py-2">
              <label>From</label>
              <select className="w-full rounded border py-2">
                <option>All Wallet/Address</option>
                <option>Wallet 1</option>
                <option>Wallet 2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 py-2">
              <label>To</label>
              <select className="w-full rounded border py-2">
                <option>All Wallet/Address</option>
                <option>Wallet 1</option>
                <option>Wallet 2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 py-2">
              <label>Assets</label>
              <select className="w-full rounded border py-2">
                <option>All Assets</option>
                <option>Asset 1</option>
                <option>Asset 2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-2 py-2">
              <label>Transaction Value Range</label>
              <div className="flex items-center gap-4">
                <div className="flex">
                  <input
                    type="number"
                    placeholder="Start Value"
                    className="h-[40px] w-full rounded-lg border p-2 text-sm shadow-md outline-none"
                  />
                  <div className="flex h-[40px] items-center justify-center rounded border p-2">
                    INR
                  </div>
                </div>
                <p className="text-[0.875rem] leading-[1.125rem] text-neutral-700">-</p>
                <div className="flex">
                  <input
                    type="number"
                    placeholder="End Value"
                    className="h-[40px] w-full rounded-lg border p-2 text-sm shadow-md outline-none"
                  />
                  <div className="flex h-[40px] items-center justify-center rounded border p-2">
                    INR
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2 py-2">
              <label>Chart of accounts</label>
              <select className="w-full rounded border py-2">
                <option>All chart of accounts</option>
                <option>Account 1</option>
                <option>Account 2</option>
              </select>
            </div>
            <div className="flex gap-x-2 py-2">
              <button className="rounded-md border bg-gray-300 px-5 py-2 font-bold text-black">
                Clear All
              </button>
              <button className="rounded-md bg-[#a64d79] px-5 py-2 font-bold text-white">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddTransaction;
