import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from "redux";
import thunk from 'redux-thunk';

import AllReducers from './Reducers/AllReducers';
import AppTrade from './AppTrade';
import NameLogoComponent from './Body/NameLogoComponent';


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
  render(
    <MockApp />
  );

  const divElement = screen.getByText(/Precious Metals Trade Company/i);
  expect(divElement).toBeInTheDocument();
});

test('should render img element in NameLogoComponent', () => {
  render(
    <MockApp />
  );

  const imgEl = screen.getByTestId("logo-element");
  expect(imgEl).toBeInTheDocument();
});

test('should render img element in MeComponent', () => {
  render(
    <MockApp />
  );

  const imgEl = screen.getByTestId("sign-element");
  expect(imgEl).toBeInTheDocument();
});

test('should render footer element in FooterComponent', () => {
  render(
    <MockApp />
  );

  const imgEl = screen.getByTestId("footer-element");
  expect(imgEl).toBeInTheDocument();
});

