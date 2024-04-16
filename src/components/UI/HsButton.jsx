import React from "react";

function Button({ title, styles }) {
  return (
    <button
      className={`${styles} bg-PrimaryViolet py-2 px-[20px] text-white font-semibold rounded-md hover:bg-LightViolet duration-300`}
    >
      {title}
    </button>
  );
}

export default Button;
