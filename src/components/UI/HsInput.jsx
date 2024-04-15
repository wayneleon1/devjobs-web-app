import React from "react";
import { MdSearch } from "react-icons/md";

function Input({ placeholder }) {
  return (
    <div className="py-4 px-6 text-base bg-white rounded-md flex items-center dark:bg-VeryDarkBlue">
      <MdSearch className="text-PrimaryViolet size-8" />
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none ml-1 bg-transparent dark:text-white w-full"
      />
    </div>
  );
}

export default Input;
