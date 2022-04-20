import {
    FETCH_EXCHANGE_TODAY_REQUEST, FETCH_EXCHANGE_TODAY_SUCCESS,
    FETCH_EXCHANGE_TODAY_FAILURE, FETCH_EXCHANGE_YESTERDAY_REQUEST,
    FETCH_EXCHANGE_YESTERDAY_SUCCESS, FETCH_EXCHANGE_YESTERDAY_FAILURE
} from '../Constants';

const initialState = {
    loadingToday: false,
    loadingYesterday: false,
    dataToday: {},
    dataYesterday: {},
    errorToday: '',
    errorYesterday: '',
}

const TopReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_EXCHANGE_TODAY_REQUEST:
           return {
               ...state,
               loadingToday: true
           } 
        case FETCH_EXCHANGE_TODAY_SUCCESS:
            return {
                ...state,
                loadingToday: false,
                dataToday: action.dataToday
            } 
        case FETCH_EXCHANGE_TODAY_FAILURE:
            return {
                ...state,
                loadingToday: false,
                errorToday: action.errorToday
            }
        case FETCH_EXCHANGE_YESTERDAY_REQUEST:
            return {
                ...state,
                loadingYesterday: true
            } 
        case FETCH_EXCHANGE_YESTERDAY_SUCCESS:
            return {
                ...state,
                loadingYesterday: false,
                dataYesterday: action.dataYesterday
            } 
        case FETCH_EXCHANGE_YESTERDAY_FAILURE:
            return {
                ...state,
                loadingYesterday: false,
                errorYesterday: action.errorYesterday
            }
        default:
            return state;
    }
}

export default TopReducer;