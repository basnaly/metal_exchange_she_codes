import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ChangeCurrentCurrency } from "../Actions/ChartAction";
import { GOLD, SILVER } from "../Constants";

const NavigationComponent = () => {

    const dispatch = useDispatch();

    return (
            <div className="d-flex">
                <Link onClick={ () => dispatch(ChangeCurrentCurrency(GOLD, SILVER)) } 
                    className="footer-link mx-5" to="/home">Home</Link>
                <Link className="footer-link mx-5" to="/about">About</Link>
                <Link className="footer-link mx-5" to="/contact">Contact</Link>
            </div>
    )
}

export default NavigationComponent;