import React from "react";

import NavigationComponent from "./NavigationComponent"; 

const FooterComponent = () =>{

    return (
        <div className="footer d-flex mt-auto">
            <div className="footer-link">@2020 PMT C°</div>
            <NavigationComponent />
            
        </div>
    )
}

export default FooterComponent;