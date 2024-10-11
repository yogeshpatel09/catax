import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FaCalendarAlt } from 'react-icons/fa';

const Trade = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (date) => {
        setStartDate(date);
        // Reset end date if start date is changed
        if (date && endDate && date > endDate) {
            setEndDate(null);
        }
    };

    return (
        <div className="date-range-container flex items-center">
            {/* From Date */}
            <div className="relative flex items-center border rounded-md p-2 mr-4">
                <FaCalendarAlt className="absolute left-3 text-gray-500" />
                <DatePicker
                    selected={startDate}
                    onChange={handleStartDateChange}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="From"
                    className="pl-10 py-2 w-40"
                />
            </div>

            {/* To Date */}
            <div className="relative flex items-center border rounded-md p-2">
                <FaCalendarAlt className="absolute left-3 text-gray-500" />
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="To"
                    className="pl-10 py-2 w-40"
                />
            </div>
        </div>
    );
};

export default Trade;
