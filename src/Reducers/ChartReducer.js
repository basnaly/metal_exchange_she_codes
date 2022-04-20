import {
    CHANGE_CURRENT_CURRENCY, FETCH_METALS_REQUEST,
    FETCH_METALS_SUCCESS, FETCH_METALS_FAILURE, 
    GOLD, SILVER} from '../Constants';

const initialState = {
    loading: false,
    data: {},
    error: '',
    baseCurrency: SILVER,
    selectedCurency: GOLD
}

const ChartReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_CURRENT_CURRENCY:
            return {
                ...state,
                selectedCurency: action.selectedCurency,
                baseCurrency: action.baseCurrency
            }
        case FETCH_METALS_REQUEST:
           return {
               ...state,
               loading: true
           } 
        case FETCH_METALS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data ?? {}
            } 
        case FETCH_METALS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}

export default ChartReducer;