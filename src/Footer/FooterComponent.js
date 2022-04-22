import React from "react";

import NavigationComponent from "./NavigationComponent"; 

const FooterComponent = () =>{

    return (
        <div className="footer d-flex mt-auto">
            <div data-testid="footer-element"
                className="footer-link">
                    @2020 PMT C°
            </div>
            <NavigationComponent />
            
        </div>
    )
}

export default FooterComponent;