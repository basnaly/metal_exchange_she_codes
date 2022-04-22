import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; 
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import thunk from 'redux-thunk';
import TopPanel from '../TopPanel';

const store = (partialState) => createStore(
    combineReducers({
        TopReducer: (state = {
            loadingToday: false,
            loadingYesterday: false,
            dataToday: {},
            dataYesterday: {},
            errorToday: '',
            errorYesterday: '',
            ...partialState
        }, action) => state
    }),
    applyMiddleware(thunk),
);

const MockTopPanel = (props) => {
    return (
        <Router>
            <Provider store={store(props)}>
                <TopPanel />
            </Provider>
        </Router>
    )
}

describe('TopPanel', () => {
    it('should render Top Panel', () => {
        render(
            <MockTopPanel dataToday={ {'USD': 3.2, 'GBP': 4.2, 'JPY': 132, 
                                    'BTC': 50000, 'XAU': 52, 'XAG': 12} }
                        dataYesterday={ {'USD': 3.1, 'GBP': 4.3, 'JPY': 131, 
                        'BTC': 50020, 'XAU': 54, 'XAG': 11} }/>
        );

        const currencyEl = screen.getAllByTestId("currency-element");
        expect(currencyEl.length).toEqual(5);

        const bitcoinEl = screen.getAllByTestId("bitcoin-element");
        expect(bitcoinEl.length).toEqual(1);
    });
})
