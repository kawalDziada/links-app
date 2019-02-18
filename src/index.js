import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import { startSetLinks } from './actions/links';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid));
        store.dispatch(startSetLinks()).then(() => {
            renderApp();
            if (history.location.pathname === '/') {
                history.push('dashbord');
            }
        });
    } else {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});




