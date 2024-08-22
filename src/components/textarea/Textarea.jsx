import React from "react";
import "./style.css";

export function TextAreaField({
  placeholder,
  error,
  handleChange,
  handleBlur,
  value,
  label,
  disabled,
  textColor,
  bgColor,
  radius,
  height,
  labelColor,
  rows = 4,
  ...props
}) {
  return (
    <div className="mb-2">
      {label && (
        <div
          className={`${
            labelColor ? labelColor : "text-white"
          } font-semibold mb-1`}
        >
          {label}
        </div>
      )}
      <div>
        <div
          className={`flex items-start ${
            bgColor ? bgColor : "bg-black"
          } w-full border ${
            radius ? radius : "rounded-lg"
          } border-[#696969] focus-within:border-blue-500 py-2 px-3 ${
            textColor ? textColor : "text-white"
          } placeholder:text-sm placeholder:text-[#696969] ${
            height ? height : "h-auto"
          }`}
        >
          <textarea
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            autoComplete="off"
            className="w-full bg-transparent focus:outline-none focus:ring-0 focus:border-transparent resize-none"
            onChange={handleChange}
            onBlur={handleBlur}
            rows={rows}
            {...props}
          />
        </div>
        {error && <div className="text-sm m-1 text-error-700">{error}</div>}
      </div>
    </div>
  );
}
