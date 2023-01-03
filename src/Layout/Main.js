import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Componends/Header/Header";
import Home from "../Componends/Home/Home";

const Main = () => {
  return (
    <div>
      <Header></Header>
     <Outlet></Outlet>
    </div>
  );
};

export default Main;
