import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { combineReducers, createStore } from 'redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import BitcoinRateChange from '../BitcoinRateChange';

const store = (partialState) => createStore(
    combineReducers({
        TopReducer: (state = {
            loadingToday: false,
            loadingYesterday: false,
            dataToday: {},
            dataYesterday: {},
            errorToday: '',
            errorYesterday: '',
        }, action) => state
    })
);

const MockBitcoinRateChange = (props) => {
    return (
        <Router>
            <Provider store={store({})}>
                <BitcoinRateChange todayBitcoinValue={ props.todayBitcoinValue } 
                                    yesterdayBitcoinValue={ props.yesterdayBitcoinValue }/>
            </Provider>
        </Router>
    )
}

describe('BitcoinRateChange', () => {
    it('should render Bitcoin Component', () => {
        render(
            <MockBitcoinRateChange todayBitcoinValue={ 5 } 
                                  yesterdayBitcoinValue={ 10 }/>
        );
        const divEl = screen.getByTestId("bitcoin-element");
        expect(divEl).toBeInTheDocument();
    });

    it('should display decrese when today value is less than yesterday', () => {
        render(
            <MockBitcoinRateChange todayBitcoinValue={ 5 } 
                                  yesterdayBitcoinValue={ 10 }/>
        );
        const symbolEl = screen.getByText(/↓/i);
        expect(symbolEl).toBeInTheDocument();

        const divColorEl = screen.getByTestId("bitcoin-color-element");
        expect(divColorEl).toHaveStyle("color: red")
    }); 
    
    it('should display increse when today value is higher than yesterday', () => {
        render(
            <MockBitcoinRateChange todayBitcoinValue={ 10 } 
                                  yesterdayBitcoinValue={ 5 }/>
        );
        const symbolEl = screen.getByText(/↑/i);
        expect(symbolEl).toBeInTheDocument();

        const divColorEl = screen.getByTestId("bitcoin-color-element");
        expect(divColorEl).toHaveStyle("color: green")
    });
      
})
