import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { combineReducers, createStore } from 'redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CurrencyRateChange from '../CurrencyRateChange';

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

const MockCurrencyRateChange = (props) => {
    return (
        <Router>
            <Provider store={store({})}>
                <CurrencyRateChange todayValue={ props.todayValue } 
                                    yesterdayValue={ props.yesterdayValue }
                                    titleCurrency={ props.titleCurrency }
                                    value={ props.value } />
            </Provider>
        </Router>
    )
}

describe('CurrencyRateChange', () => {
    it('should render Bitcoin Component', () => {
        render(
            <MockCurrencyRateChange todayValue={ 3 } 
                                    yesterdayValue={ 3.2 }
                                    titleCurrency={ 'USD' }
                                    value={ 'USD' }/>
        );

        const divEl = screen.getByTestId("currency-element");
        expect(divEl).toBeInTheDocument();
    });

    it('should display decrese when today value is less than yesterday', () => {
        render(
            <MockCurrencyRateChange todayValue={ 3 } 
                                    yesterdayValue={ 3.2 }
                                    titleCurrency={ 'USD' }
                                    value={ 'USD' }/>
        );
        const symbolEl = screen.getByText(/↓/i);
        expect(symbolEl).toBeInTheDocument();

        const divColorEl = screen.getByTestId("currency-color-element");
        expect(divColorEl).toHaveStyle("color: red")
    }); 
    
    it('should display increse when today value is higher than yesterday', () => {
        render(
            <MockCurrencyRateChange todayValue={ 3.2 } 
                                    yesterdayValue={ 3 }
                                    titleCurrency={ 'USD' }
                                    value={ 'USD' }/>
        );
        const symbolEl = screen.getByText(/↑/i);
        expect(symbolEl).toBeInTheDocument();

        const divColorEl = screen.getByTestId("currency-color-element");
        expect(divColorEl).toHaveStyle("color: green")
    });
      
})
