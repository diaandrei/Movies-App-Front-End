import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

export const SearchBar = ({ value, onChange, onClear }) => {
  const [query, setQuery] = useState("");

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
        placeholder="Search for titles..."
        className="appearance-none  bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        value={value}
        onChange={onChange}
      />
      {value?.length > 0 && (
        <button
          onClick={onClear}
          type="submit"
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white p-1 rounded-full"
        >
          <IoClose size={14} />
        </button>
      )}
    </form>
  );
};
