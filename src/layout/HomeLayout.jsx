import React from "react";
import { Outlet } from "react-router-dom";
import logo from "../assets/desktop/logo.svg";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";

function HomeLayout() {
  return (
    <div className="bg-LightGrey h-screen dark:bg-Midnight">
      <div className="h-40 w-full flex items-center bg-[url('./assets/desktop/bg-pattern-header.svg')] bg-no-repeat">
        <div className="container mx-auto px-10 flex items-center justify-between">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center gap-4">
            <div>
              <img src={sunIcon} alt="Sun-Icon" />
            </div>
            <div>
              <div className="bg-white rounded-2xl w-12 h-6 p-[5px] flex items-center justify-start">
                <div className=" bg-PrimaryViolet  w-4 h-4 rounded-full"></div>
              </div>
            </div>
            <div>
              <img src={moonIcon} alt="Moon-Icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-10">
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
