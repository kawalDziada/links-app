import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import { addLink } from './actions/links';
//import { setTextFilter } from './actions/filters';
import getVisibleLinks from './selectors/links';
import './styles/base.scss';

const store = configureStore();

store.dispatch(addLink({adress: 'https://www.facebook.com/', description: 'portal spolecznosciowy ze zjebanymi mordami ktorych nie chce widziec'}));

store.dispatch(addLink({adress: 'https://www.youtube.com/', description: 'filmiki sobie mozna tam poogladac', createdAt: 1000}));

store.dispatch(addLink({adress: 'http://mkportfolio.uk/', description: 'najlepsze portfolio pod sloncem'}));


const state = store.getState();
const visibleLinks = getVisibleLinks(state.links, state.filters);
console.log(visibleLinks);

//console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));


