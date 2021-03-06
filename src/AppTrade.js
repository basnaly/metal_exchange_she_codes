import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import TopPanel from "./TopPanel/TopPanel";
import MeComponent from "./Footer/MeComponent";
import NameLogoComponent from "./Body/NameLogoComponent";
import ContentRouting from "./Body/ContentRouting";
import FooterComponent from "./Footer/FooterComponent";
import ChartRequest from "./Body/ChartRequest";

const AppTrade = () => {

    return(
        <div className="d-flex flex-column app">
            <Router>
                <TopPanel />
                <NameLogoComponent />
                <ContentRouting />
                <FooterComponent />
                <ChartRequest />
                <MeComponent />
            </Router>
        </div>
    )
}

export default AppTrade;