import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, subDays } from 'date-fns';

import "react-datepicker/dist/react-datepicker.css";

const CalendarC = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
    return (
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
        excludeDateIntervals={[
            //falta descubrir como pasar de String al formato de esto (Fri 24 Nov 2022 00:00:00)
            //https://date-fns.org/v2.29.3/docs/format
            {start: subDays(new Date(), 5), end: addDays(new Date(), 5) }
        ]}
      />
    );
  };
export default CalendarC;