import React from "react";

function Button({ title }) {
  return (
    <button className=" bg-PrimaryViolet py-4 px-[38px] text-white font-semibold rounded-md hover:bg-LightViolet  dark:bg-white/10 dark:hover:bg-white/35">
      {title}
    </button>
  );
}

export default Button;
