import React from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "./style.css";

export function Calendar({
  placeholder,
  icon,
  searchIcon,
  isPassword,
  error,
  fullWidth,
  handleChange,
  handleBlur,
  phone,
  validate,
  value,
  label,
  disabled,
  prefixerValue,
  customSign,
  textColor,
  bgColor,
  radius,
  filterdate,
  height,
  ...props
}) {
  return (
    <div className="mb-3 ">
      {label && <div className=" text-white font-semibold mb-2 ">{label}</div>}
      <div className=" ">
        <DatePicker
          maxDate={new Date()}
          dayPlaceholder={"dd"}
          monthPlaceholder="mm"
          yearPlaceholder="yyyy"
          onChange={handleChange}
          value={value}
          className={`${bgColor ? bgColor : "bg-black"} w-full border ${radius ? radius : "rounded-full"
            } border-[#696969] focus:outline-none  py-3 px-3 ${height && "h-14"
            } ${textColor ? textColor : "text-white"
            } placeholder:text-sm placeholder:text-[#696969]`}
          size="lg"
          format={"yyyy-MM-dd"}
          {...props}
        />

        <div className="error-input-container">
          {error ? <p className="form-error">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}