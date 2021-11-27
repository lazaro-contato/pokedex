import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {Login} from "../pages/Login";

type Props = {

}

export const MainRoute = (props: Props) => {
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
