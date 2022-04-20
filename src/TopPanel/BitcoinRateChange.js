import React from "react";
import { useDispatch } from "react-redux";
import { ChangeCurrentCurrency } from '../Actions/ChartAction';
import { useLocation, useNavigate } from "react-router-dom";

const BitcoinRateChange = (props) => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    let location = useLocation();

    let bitcoinTodayValue = +(props.todayBitcoinValue * 10000).toFixed(2);
    let bitcoinYesterdayValue = props.yesterdayBitcoinValue * 10000;
    let diffrenceTodayYest = bitcoinTodayValue - bitcoinYesterdayValue;
    let displayPercent = Math.abs(+((diffrenceTodayYest * 100) / bitcoinTodayValue).toFixed(2));
    let displayValue = Math.abs(+(diffrenceTodayYest).toFixed(2));

    let color = 'green';
    if (diffrenceTodayYest < 0) color='red';

    let symbol = '↑';
    if (diffrenceTodayYest < 0) symbol='↓';

    if (isNaN(diffrenceTodayYest)) return '';

    const onClick = () => {
        dispatch(ChangeCurrentCurrency('BTC', 'EUR'));
        if (location.pathname !== '/home'){
            navigate("/home");
        }     
    }

    return(
        <div className="pointer d-flex flex-column align-items-center p-2 m-1 border flex-grow-1"
            onClick={ onClick }>
            <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                    <img src="https://img.icons8.com/fluency/20/000000/bitcoin.png"
                        className="me-1"/>
                    BTC /  🇪🇺 10K EUR
                </div>
                <div className="d-flex align-items-center mx-2">
                    { bitcoinTodayValue  }
                </div>
            </div>
            <div className="d-flex align-items-center"
                style={ { color } }>
                <div className="d-flex align-items-center">
                    { symbol }{ displayPercent }%
                </div>
                <div className="d-flex align-items-center mx-2">
                    { displayValue }
                </div>
            </div>
        </div>
    )
}

export default BitcoinRateChange;