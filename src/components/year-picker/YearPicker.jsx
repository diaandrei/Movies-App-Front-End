import React from "react";

export const YearPicker = ({
  startYear,
  endYear,
  selectedYear,
  onYearChange,
  label,
  height,
  textColor,
}) => {
  const years = [];
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <div className="w-full mb-3">
      {label && (
        <div
          className={` ${
            textColor ? textColor : "text-white"
          } font-semibold mb-2 `}
        >
          {label}
        </div>
      )}

      <select
        className={`w-full border rounded-lg
           border-[#696969] focus:outline-none  p-3 
          placeholder:text-sm placeholder:text-[#696969] ${
            height && "h-14"
          }     shadow-sm    sm:text-sm`}
        value={selectedYear}
        onChange={(e) => onYearChange(e.target.value)}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
};
