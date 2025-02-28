import React from "react";
import Logo from "../assets/images/Logo.png";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function Layout() {


    return (
        <div className=" px-4 mt-5 flex flex-col justify-center ">
            <div className={"flex justify-center"}><img src={Logo} alt="Company Logo" className="max-w-1/3 lg:max-w-[200px] pt-3"/></div>
            <Outlet/>
            {/*<Footer/>*/}
        </div>
    )
}