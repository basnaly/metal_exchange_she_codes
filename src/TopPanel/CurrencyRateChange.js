import React from "react";
import { useDispatch } from "react-redux";
import { ChangeCurrentCurrency } from '../Actions/ChartAction';
import { useLocation, useNavigate } from "react-router-dom";

const CurrencyRateChange = (props) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();

    let diffrenceTodayYest = +(props.todayValue - props.yesterdayValue).toFixed(6);
    
    let color = 'green';
    if (diffrenceTodayYest < 0) color='red';

    let symbol = '↑';
    if (diffrenceTodayYest < 0) symbol='↓';

    if (isNaN(diffrenceTodayYest)) return '';

    const onClick = () => {
        dispatch(ChangeCurrentCurrency(props.value, 'EUR'));
        if (location.pathname !== '/home'){
            navigate("/home");
        }     
    }

    return(
        <div data-testid="currency-element"
            className="pointer d-flex flex-column align-items-center p-2 m-1 border flex-grow-1"
            onClick={ onClick }>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                    { props.titleCurrency } / 🇪🇺 EUR
                </div>
                <div className="d-flex align-items-center mx-2">
                    { props.todayValue }
                </div>
            </div>
            <div data-testid="currency-color-element"
                className="d-flex align-items-center"
                style={ { color } }>
                <div className="d-flex align-items-center">
                    { symbol }{ +(Math.abs(diffrenceTodayYest * 100) / props.todayValue).toFixed(2) }%
                </div>
                <div className="d-flex align-items-center mx-2">
                    { Math.abs(diffrenceTodayYest) }
                </div>
            </div>
        </div>
    )
}

export default CurrencyRateChange;