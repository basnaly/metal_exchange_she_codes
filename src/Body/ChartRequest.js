import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchMetals } from "../Actions/ChartAction";

const ChartRequest = () => {

    const baseCurrency = useSelector(state => state.ChartReducer.baseCurrency);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMetals());
    }, [baseCurrency])

    return ''
} 

export default ChartRequest;