import axios from 'axios';
import moment from "moment";

import { FETCH_EXCHANGE_TODAY_REQUEST, FETCH_EXCHANGE_TODAY_SUCCESS, FETCH_EXCHANGE_TODAY_FAILURE,
        FETCH_EXCHANGE_YESTERDAY_REQUEST, FETCH_EXCHANGE_YESTERDAY_SUCCESS,
        FETCH_EXCHANGE_YESTERDAY_FAILURE } from '../Constants';

let today = moment().format('YYYY-MM-DD');
let yesterday = moment().add(-1, 'day').format('YYYY-MM-DD');
    console.log(yesterday)

export const FetchExchangeTodayRequest = () => {
    return {
        type: FETCH_EXCHANGE_TODAY_REQUEST
    }
}

export const FetchExchangeTodaySuccess = (dataToday) => {
    return {
        type: FETCH_EXCHANGE_TODAY_SUCCESS,
        dataToday
    }
}

export const FetchExchangeTodayFailure = (errorToday) => {
    return {
        type: FETCH_EXCHANGE_TODAY_FAILURE,
        errorToday
    }
}

export const fetchExchangeToday = () => {
    return (dispatch) => {
        dispatch(FetchExchangeTodayRequest())
        axios.get('https://api.exchangerate.host/' +
            today +
            '?' + 
            '&symbols=GBP,USD,JPY,BTC,XAG,XAU')
        .then(response => {
            const todayData = response?.data?.rates
            dispatch(FetchExchangeTodaySuccess(todayData))
        })
        .catch(error => {
            const errorTodayMessage = error.message
            dispatch(FetchExchangeTodayFailure(errorTodayMessage))
        })
    }
}

export const FetchExchangeYesterdayRequest = () => {
    return {
        type: FETCH_EXCHANGE_YESTERDAY_REQUEST
    }
}

export const FetchExchangeYesterdaySuccess = (dataYesterday) => {
    return {
        type: FETCH_EXCHANGE_YESTERDAY_SUCCESS,
        dataYesterday
    }
}

export const FetchExchangeYesterdayFailure = (errorYesterday) => {
    return {
        type: FETCH_EXCHANGE_YESTERDAY_FAILURE,
        errorYesterday
    }
}

export const fetchExchangeYesterday = () => {
    return (dispatch) => {
        dispatch(FetchExchangeYesterdayRequest())
        axios.get('https://api.exchangerate.host/' +
            yesterday +
            '?symbols=GBP,USD,JPY,BTC,XAG,XAU')
        .then(response => {
            const yesterdayData = response?.data?.rates
            dispatch(FetchExchangeYesterdaySuccess(yesterdayData))
        })
        .catch(error => {
            const errorYesterdayMessage = error.message
            dispatch(FetchExchangeYesterdayFailure(errorYesterdayMessage))
        })
    }
}
