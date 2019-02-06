import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LinksMainPage from '../components/LinksMainPage.js';
import AddLinkPage from '../components/AddLinkPage.js';
import EditLinkPage from '../components/EditLinkPage';
import NotFound from '../components/NotFound.js';

import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashbord" component={LinksMainPage}/>
                <PrivateRoute path="/add" component={AddLinkPage}/>
                <PrivateRoute path="/edit/:id" component={EditLinkPage} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;