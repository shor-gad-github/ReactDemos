import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Home from './Pages/home';
import NotFound from './Pages/NotFound';
export default function AppRouting() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/p1" element={<Page1 />} />
                <Route path="/p2" element={<Page2 />} />
                <Route path="/p3" element={<Page3 />} />
                <Route path="/page3" element={<Page3 />} />
                <Route path="*" element={<NotFound />} />

            </Routes>
        </BrowserRouter>);
}