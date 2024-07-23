import React, { useState } from "react";
import { InputField } from "../../components/input-field/InputField";
import { Calendar } from "../../components/calendar/Calendar";
import { YearPicker } from "../../components/year-picker/YearPicker";


const CreateMovie = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleYearChange = (year) => {
    setSelectedYear(year);
    console.log(`Selected Year: ${year}`);
  };
  return (
    <div className=" min-h-screen w-full">
      <div className="max-w-7xl mx-auto py-5">
        <div className=" text-black text-xl font-semibold ">
          Create a movie by entering title and release year
        </div>
        <div className=" flex items-center justify-between my-2 gap-3 ">
          <div className=" w-1/2 ">
            <InputField
              label={"Movie Title"}
              placeholder={"Enter Title"}
              bgColor={"bg-white"}
              radius={"rounded-lg"}
              textColor={"text-black"}
              height={true}
            />
          </div>
          <div className=" w-1/2 ">
            <YearPicker
              label={"Release Year"}
              startYear={1900}
              endYear={new Date().getFullYear()}
              selectedYear={selectedYear}
              onYearChange={handleYearChange}
              height={true}
              textColor={"text-black"}
            />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button className="h-10 w-1/3 border border-darkBlue-800 rounded-lg  text-lg hover:scale-110 transition-transform hover:text-white hover:bg-darkBlue-900 ">
            {"Search"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
