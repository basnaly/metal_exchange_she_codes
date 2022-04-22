import { render, screen, fireEvent } from '@testing-library/react';
import ChartComponent from '../ChartComponent';
import { Provider } from 'react-redux'; 
import { combineReducers, createStore } from 'redux';
import { GOLD, SILVER } from "../../Constants";


const store = (partialState) => createStore (
    combineReducers({
        ChartReducer: (state = {
            loading: false,
            error: '',
            data: {},
            baseCurrency: SILVER,
            selectedCurency: GOLD,
            ...partialState
        }, action) => state
    })
  );
  
  const MockApp = (props) => {
    return (
          <Provider store={ store( props.partialState ) }>
            <ChartComponent />
          </Provider>     
    )
  }

describe('ChartComponent', () => {
    it('should render chart element', () => {
        render(<MockApp partialState={ { } }/>);
        const chartEl = screen.getByTestId("chart-element");
        expect(chartEl).toBeInTheDocument();
    });

    it('should render loading in chart element', () => {
        render(<MockApp partialState={ { loading: true } }/>);
        const divEl = screen.getByText(/Loading.../i);
        expect(divEl).toBeInTheDocument();
    });

    it('should render error in chart element', () => {
        render(<MockApp partialState={ { error: 'error' } }/>);
        const divEl = screen.getByText(/error/i);
        expect(divEl).toBeInTheDocument();
    });

})