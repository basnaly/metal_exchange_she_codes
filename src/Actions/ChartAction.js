import axios from 'axios';
import moment from "moment";

import { CHANGE_CURRENT_CURRENCY, FETCH_METALS_REQUEST, FETCH_METALS_SUCCESS,
         FETCH_METALS_FAILURE } from '../Constants';

let lastDay = moment().format('YYYY-MM-DD');
let firstDay = moment().add(-7, 'day').format('YYYY-MM-DD');

export const ChangeCurrentCurrency = (selectedCurency, baseCurrency) => {
    return {
        type: CHANGE_CURRENT_CURRENCY,
        selectedCurency,
        baseCurrency,
    }
}

export const FetchMetalsRequest = () => {
    return {
        type: FETCH_METALS_REQUEST
    }
}

export const FetchMetalsSuccess = (data) => {
    return {
        type: FETCH_METALS_SUCCESS,
        data
    }
}

export const FetchMetalsFailure = (error) => {
    return {
        type: FETCH_METALS_FAILURE,
        error
    }
}

export const fetchMetals = () => {
    return (dispatch, getState) => {
        let baseCurrency = getState().ChartReducer.baseCurrency;
        //console.log(currency)
        dispatch(FetchMetalsRequest())
        axios.get('https://api.exchangerate.host/timeseries?' +
            'start_date=' + firstDay +
            '&end_date=' + lastDay +
            '&base=' + baseCurrency +
            '&symbols=GBP,USD,JPY,BTC,XAG,XAU')
            .then(response => {
                const data = response?.data?.rates
                dispatch(FetchMetalsSuccess(data))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(FetchMetalsFailure(errorMessage))
            })
    }
}

