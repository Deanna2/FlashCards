import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './js/reducers';
import thunk from 'redux-thunk';

import App from "./App.jsx";

const store = createStore(
    reducer,
    applyMiddleware(thunk)
  );

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>),
    document.getElementById("root"));