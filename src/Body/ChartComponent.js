import React from "react";
import { useSelector } from "react-redux";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

import { GOLD, SILVER } from "../Constants";

const options = {
    title: {
        display: true,
        text: 'Line Chart'
    },
}

const NAME_MAP = {
    EUR: 'EUR',
    USD: 'USD',
    GBP: 'GBP',
    JPY: 'JPY',
    BTC: 'BTC',
    [GOLD]: 'GOLD',
    [SILVER]: 'SILVER'
}

const COLOR_MAP = {
    USD: {
        borderColor: 'green',
        backgroundColor: 'rgba(144, 238, 144, 0.3)',
        pointBackgroundColor: 'lightgreen',
        pointBorderColor: 'green',
    },
    GBP: {
        borderColor: 'coral',
        backgroundColor: 'rgba(255, 228, 196, 0.3)',
        pointBackgroundColor: 'bisque',
        pointBorderColor: 'coral',
    },
    JPY: {
        borderColor: 'darkorchid',
        backgroundColor: 'rgba(230, 230, 250, 0.3)',
        pointBackgroundColor: 'lavender',
        pointBorderColor: 'darkorchid',
    },
    BTC: {
        borderColor: 'blue',
        backgroundColor: 'rgba(135, 206, 250, 0.3)',
        pointBackgroundColor: 'lightskyblue',
        pointBorderColor: 'blue',
    },
    [SILVER]: {
        borderColor: 'gray',
        backgroundColor: 'rgba(176, 196, 222, 0.3)',
        pointBackgroundColor: 'lightsteelblue',
        pointBorderColor: 'gray',
    },
    [GOLD]: {
        borderColor: 'deeppink',
        backgroundColor: 'rgba(255, 228, 225, 0.3)',
        pointBackgroundColor: 'mistyrose',
        pointBorderColor: 'deeppink',
    }
}

const GetConverter = (currency) => {
    if (currency === 'BTC') {
        return (x) => x * 10000
    }
    return x => x
}

const ChartComponent = () =>{

    const data = useSelector(state => state.ChartReducer.data);
    const loading = useSelector(state => state.ChartReducer.loading);
    const error = useSelector(state => state.ChartReducer.error);
    const selectedCurency = useSelector(state => state.ChartReducer.selectedCurency);
    const baseCurrency = useSelector(state => state.ChartReducer.baseCurrency);

    const converter = GetConverter(selectedCurency);

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: NAME_MAP[selectedCurency] + (selectedCurency === 'BTC' ?  ' / 10K' :  ' / ') + NAME_MAP[baseCurrency],
                data: Object.values(data).map(el => converter(el[selectedCurency])),
                ...COLOR_MAP[selectedCurency],
                tension: 0.5,
                fill: true
            }     
        ]   
    }

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>{ error }</div>
    }

    return (
        <div className="chart-div overflow-auto d-flex flex-column p-2">
            <Chart type='line' data={ chartData } options={ options } 
            className='chart'/>
        </div>    
    )
}

export default ChartComponent;