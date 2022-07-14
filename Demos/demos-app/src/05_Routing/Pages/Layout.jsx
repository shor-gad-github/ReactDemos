import React from 'react';
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";

//TEMPLATE OF THE APP
export default function Layout() {
    return (
        <div className='container'>
            <h1>WEB SITE TITLE</h1>
            <nav style={{ backgroundColor: 'lightblue', textAlign: "center" }} >
                {/* //<a href=></> */}
                <Link style={{ fontSize: "20px" }} to="/p1">Page 1</Link>
                &nbsp; &nbsp;
                <Link style={{ fontSize: "20px" }} to="/p2">Page 2</Link>
                &nbsp; &nbsp;
                <Link style={{ fontSize: "20px" }} to="/p3">Page 3</Link>
            </nav>
            <br />
            <Outlet />

        </div >
    );




}