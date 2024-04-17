import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../assets/desktop/logo.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import BgImg from "../assets/desktop/bg-pattern-header.svg";

function HomeLayout() {
  const [toggled, setTogged] = useState(false);
  return (
    <>
      <div className="h-40 w-full flex items-center">
        <img
          src={BgImg}
          alt="bg-img"
          className="-z-10 absolute  bg-no-repeat  w-full h-40
          "
        />
        <div className="container mx-auto px-10 flex items-center justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img src={sunIcon} alt="Sun-Icon" className="size-5" />
            </div>
            <div>
              <div
                className={`bg-white rounded-2xl w-12 h-6 p-[5px] flex items-center ${
                  toggled ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className="bg-PrimaryViolet  w-4 h-4 rounded-full cursor-pointer"
                  onClick={() => setTogged(!toggled)}
                ></div>
              </div>
            </div>
            <div>
              <img src={moonIcon} alt="Moon-Icon" className="size-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="container mx-auto px-10 py-6">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default HomeLayout;
