import React from 'react';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import './bootstrap.min.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
export default function App() {
    return (
        <>
            <BrowserRouter>
                <div className='container'>
                    <nav style={{ backgroundColor: 'lightblue', textAlign: "center" }} >
                        {/* //<a href=></> */}
                        <Link style={{ fontSize: "20px" }} to="/p1">Page 1</Link>
                        &nbsp; &nbsp;
                        <Link style={{ fontSize: "20px" }} to="/p2">Page 2</Link>
                        &nbsp; &nbsp;
                        <Link style={{ fontSize: "20px" }} to="/p3">Page 3</Link>
                    </nav>
                    <br />

                    <Routes>
                        <Route path='/p1' element={<Page1 />} />
                        <Route path='/p2' element={<Page2 />} />
                        <Route path='/p3' element={<Page3 />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </>

    );
}

