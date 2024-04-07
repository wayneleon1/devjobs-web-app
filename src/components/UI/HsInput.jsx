import React from "react";
import { MdSearch } from "react-icons/md";

function Input() {
  return (
    <div className="text-lg py-4 px-8 bg-white rounded-md flex items-center dark:bg-VeryDarkBlue">
      <MdSearch className="text-PrimaryViolet size-8" />
      <input
        type="text"
        placeholder="Enter desired job..."
        className="outline-none ml-1 bg-transparent dark:text-white"
      />
    </div>
  );
}

export default Input;
