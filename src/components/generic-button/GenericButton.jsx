import React from "react";
import { CircularProgress } from "@mui/material";

export const GenericButton = ({
  onPress,
  radius,
  title,
  isLoading,
  bgColor,
  titleColor,
  borderColor,
  hoverBgColor,
}) => {
  return (
    <button
      disabled={isLoading}
      onClick={onPress}
      type="submit"
      className={`w-full ${bgColor || "bg-blue-900"} mt-5 ${
        radius || "rounded-full"
      } ${titleColor || "text-white"} py-3 px-4 border ${
        borderColor || "border-transparent"
      }  shadow-sm disabled:bg-gray-700 hover:${
        hoverBgColor || "bg-blue-800"
      } focus:outline-none  sm:text-sm`}
    >
      {isLoading ? (
        <CircularProgress size={20} color="inherit" />
      ) : (
        <a className="">{title}</a>
      )}
    </button>
  );
};
