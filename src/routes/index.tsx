import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Login} from "../pages/Login/index";

export const MainRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Login />} />
                <Route path="/search" element={<Login />} />
                <Route path="/all" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}
