import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Sheared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
