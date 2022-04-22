import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GOLD, SILVER } from '../Constants';
import { ChangeCurrentCurrency } from "../Actions/ChartAction";

const NameLogoComponent = () => {

    const dispatch = useDispatch();

    return (
        <div className="d-flex name-logo">
            <Link onClick={ () => dispatch(ChangeCurrentCurrency(GOLD, SILVER)) }
                to="/home">
                <img data-testid="logo-element"
                    className="icon" src="/metal-icon.png" />
            </Link>

            <div className="name d-flex">
                Precious Metals Trade Company
            </div>
        </div>
    )

}

export default NameLogoComponent