import React from "react";
import { Outlet } from "react-router-dom";

const BlankLayout = () => {
  
  return (
    <div className="layout__non">
      <Outlet />
    </div>
  )
};

export default BlankLayout;