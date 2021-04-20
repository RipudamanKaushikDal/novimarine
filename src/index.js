import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {setBasepath} from "hookrouter"
import reportWebVitals from './reportWebVitals';

// Sets the base path to match with static web hosting
setBasepath("/novimarine");

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
