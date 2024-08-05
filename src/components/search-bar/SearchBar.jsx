import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { CircularProgress } from "@mui/material";

export const SearchBar = ({ value, onChange, onClear, isLoading }) => {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center  border-b-2  border-teal-500 py-2"
    >
      <input
        type="text"
        placeholder="Search for a title..."
        className="appearance-none  bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        value={value}
        onChange={onChange}
      />

      {isLoading ? (
        <CircularProgress size={20} thickness={6} sx={{ color: "white" }} />
      ) : value?.length > 0 ? (
        <button
          onClick={onClear}
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-1 rounded-full"
        >
          <IoClose size={14} />
        </button>
      ) : null}
    </form>
  );
};
