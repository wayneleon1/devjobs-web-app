import React from "react";

function Input({ placeholder, icon }) {
  return (
    <div className="py-4 px-6 text-base rounded-md flex items-center w-full">
      {icon}
      <input
        type="text"
        placeholder={placeholder}
        className="outline-none ml-1 bg-transparent dark:text-white w-full"
      />
    </div>
  );
}

export default Input;
