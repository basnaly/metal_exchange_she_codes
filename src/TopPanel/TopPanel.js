import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import BitcoinRateChange from "./BitcoinRateChange";
import CurrencyRateChange from "./CurrencyRateChange";
import { fetchExchangeToday, fetchExchangeYesterday } from '../Actions/TopAction';

const TopPanel = () => {

    const dispatch = useDispatch();

    const todayData = useSelector(state => state.TopReducer.dataToday);
    const yesterdayData = useSelector(state => state.TopReducer.dataYesterday);
    const loading = useSelector(state => state.TopReducer.loadingToday || 
                                        state.TopReducer.loadingYesterday);
    const error = useSelector(state => state.TopReducer.errorToday || 
                                        state.TopReducer.errorYesterday);

    useEffect(() => {
        dispatch(fetchExchangeToday());
        dispatch(fetchExchangeYesterday());
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{ error }</div>
    }

    return (
        <div className="d-flex align-items-center flex-wrap top">
            <CurrencyRateChange todayValue={ todayData.USD } 
                                yesterdayValue={ yesterdayData.USD }
                                titleCurrency='🇨🇺 USD'
                                value='USD' />
            <CurrencyRateChange todayValue={ todayData.GBP } 
                                yesterdayValue={ yesterdayData.GBP }
                                titleCurrency='🇬🇧 GBP'
                                value='GBP' />
            <CurrencyRateChange todayValue={ todayData.JPY } 
                                yesterdayValue={ yesterdayData.JPY }
                                titleCurrency='🇯🇵 JPY'
                                value='JPY' />                   
            <BitcoinRateChange todayBitcoinValue={ todayData.BTC } 
                                yesterdayBitcoinValue={ yesterdayData.BTC }/>
            <CurrencyRateChange todayValue={ todayData.XAU } 
                                yesterdayValue={ yesterdayData.XAU }
                                titleCurrency={
                                    <React.Fragment>
                                        <img src="https://img.icons8.com/doodle/20/000000/gold-bars--v1.png"
                                            className="me-1"/>
                                        GOLD
                                    </React.Fragment>
                                }
                                value='XAU'/> 
            <CurrencyRateChange todayValue={ todayData.XAG } 
                                yesterdayValue={ yesterdayData.XAG }
                                titleCurrency={
                                    <React.Fragment>
                                        <img src="https://img.icons8.com/color/20/000000/silver-bars.png"
                                            className="me-1"/>
                                        SILVER
                                    </React.Fragment>
                                }
                                value='XAG'/> 
        </div>
    )
} 

export default TopPanel;