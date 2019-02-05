import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
//import { addLink } from './actions/links';
//import { setTextFilter } from './actions/filters';
//import getVisibleLinks from './selectors/links';
import './styles/base.scss';
import './firebase/firebase';
import { startSetLinks } from './actions/links';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

store.dispatch(startSetLinks()).then(() => {
    ReactDOM.render(jsx, document.getElementById('root'));
});




