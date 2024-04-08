import React from "react";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <div className="h-screen bg-LightGrey dark:bg-Midnight">
      <div>Nabar goes Here...</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default HomeLayout;
