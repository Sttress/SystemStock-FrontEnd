import React from "react";
import { Routes, Route } from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";

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
            <Route
            path="/Home"
            element={
                <>
                    <Home></Home>
                </>
            }
            />
        </Routes>
    );
}

export default RoutesApp;