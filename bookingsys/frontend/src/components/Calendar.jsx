import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

export default function Calendar({ handleDateSelect, handleDateSelectPrev }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());
  const [nextMonth, setNextMonth] = useState(dayjs().add(1, "month"));

  // Handler to update the month when the month changes in the current calendar
  const handleMonthChange = (newDate) => {
    setCurrentMonth(newDate);
  };

  // Handler to update the previous month when the previous calendar changes
  const handleMonthChangePrev = (newDate) => {
    setNextMonth(newDate);
  };

  // Handler for date selection from the previous month
  const handleDateClickPrev = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    handleDateSelectPrev(formattedDate);
  };

  // Handler for date selection from the current month
  const handleDateClickCurrent = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    handleDateSelect(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        {/* Left Calendar: Current Month with minDate to disable previous months */}
        <DateCalendar
          value={currentMonth}
          onMonthChange={handleMonthChange}
          onChange={handleDateClickCurrent}
          minDate={dayjs()} // Disable previous months
        />

        {/* Right Calendar: Next Month with minDate to disable previous months */}
        <DateCalendar
          value={nextMonth}
          onMonthChange={handleMonthChangePrev}
          onChange={handleDateClickPrev}
          minDate={dayjs()} // Disable previous months
        />
      </div>
    </LocalizationProvider>
  );
}
