import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Switch } from "react-router-dom";

import ChartComponent from "./Body/ChartComponent";
import AboutComponent from "./Body/AboutComponent";
import ContactComponent from "./Body/ContactComponent";

const ContentRouting = () => {

    return (
        <Routes>
            <Route path='/home' element={ <ChartComponent /> } />
            <Route path='/about' element={ <AboutComponent />} />    
            <Route path='/contact' element={ <ContactComponent /> } />
            <Route exact path="*" 
                element={<Navigate replace to="/home" />} />
        </Routes>
    )
}

export default ContentRouting;