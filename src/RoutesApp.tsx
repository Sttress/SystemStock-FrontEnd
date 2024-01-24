import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";

const RoutesApp = () =>{
    return(
        <Routes>
            <Route
            path="/"
            element={
                <>
                    <Login></Login>
                </>
            }
            />
        </Routes>
    );
}

export default RoutesApp;