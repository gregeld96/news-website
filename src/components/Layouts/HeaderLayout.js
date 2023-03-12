import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { initiateGlobal } from "../../store/global/actions";
import Footer from "../Navbars/Footer";
import Header from "../Navbars/Header";
import LoggedHeader from "../Navbars/LogedHeader";

const HeaderLayout = () => {
  const { user } = useSelector(state => state.global);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initiateGlobal());
  }, []);

  useEffect(() => {

  }, [user]);
  
  return (
    <div className="layout__main">
        {
          user ? <LoggedHeader /> : <Header />
        }
        <Outlet />
        <Footer />
    </div>
  )
};

export default HeaderLayout;