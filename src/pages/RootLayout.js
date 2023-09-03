import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-[100vh]">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootLayout;
