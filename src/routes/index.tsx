import React from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import App from "../App";

export const MainRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </BrowserRouter>
    )
}
