import React from "react";

function Button({ title }) {
  return (
    <button className="bg-PrimaryViolet py-2 px-[20px] text-white font-semibold rounded-md hover:bg-LightViolet">
      {title}
    </button>
  );
}

export default Button;
