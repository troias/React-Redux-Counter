import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/index'
import './index.css';
import App from './App';
import { Provider } from 'react-redux'


const RootComponent = <Provider store={store}>
    <App />,
</Provider>
ReactDOM.render(RootComponent, document.getElementById('root'));
