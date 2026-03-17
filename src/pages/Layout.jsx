import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../composant/Navbar";
import Footer from "../composant/Footer";

const Layout = ({ ouvert, setOuvert }) => {
  return (
    <>
      <Navbar ouvert={ouvert} setOuvert={setOuvert} />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;