import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';

import AllReducers from './Reducers/AllReducers';
import AppTrade from './AppTrade';


const store = createStore (
  AllReducers, 
  compose(
      applyMiddleware(thunk),
  )
);

const MockApp = () => {
  return (
        <Provider store={ store }>
          <AppTrade />
        </Provider>     
  )
}

test('renders page title', () => {
  render(<MockApp />);
  const divElement = screen.getByText(/Precious Metals Trade Company/i);
  expect(divElement).toBeInTheDocument();
});
