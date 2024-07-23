import React, { useState } from "react";

export function InputField({
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
  height,
  ...props
}) {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  return (
    <div className="mb-3 ">
      {label && (
        <div
          className={` ${
            textColor ? textColor : "text-white"
          } font-semibold mb-2 `}
        >
          {label}
        </div>
      )}
      <div className=" ">
        <input
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          autoComplete="off"
          className={`${bgColor ? bgColor : "bg-black"} w-full border ${
            radius ? radius : "rounded-full"
          } border-[#696969] focus:outline-none  py-3 px-3 ${
            textColor ? textColor : "text-white"
          } placeholder:text-sm placeholder:text-[#696969] ${height && "h-14"}`}
          type={isPassword && !isEyeOpen ? "password" : "text"}
          onChange={handleChange}
          onBlur={handleBlur}
          validate={validate}
          {...props}
        />
        <div className="error-input-container">
          {error ? <p className="form-error">{error}</p> : null}
        </div>
      </div>
    </div>
  );
}
