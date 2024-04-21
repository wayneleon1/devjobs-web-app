import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import SlugPage from "../pages/SlugPage";

function AppRouters() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="/:JobId" element={<SlugPage />} />
      </Route>
    </Routes>
  );
}

export default AppRouters;
