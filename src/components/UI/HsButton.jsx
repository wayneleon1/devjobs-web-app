import React from "react";
import { Link } from "react-router-dom";

function Button({ title, styles, path }) {
  return (
    <Link
      to={path}
      className={`${styles} bg-PrimaryViolet py-4 px-[20px] text-white font-semibold rounded-md hover:bg-LightViolet duration-300`}
    >
      {title}
    </Link>
  );
}

export default Button;
