import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LinksMainPage from '../components/LinksMainPage.js';
import AddLinkPage from '../components/AddLinkPage.js';
import EditLinkPage from '../components/EditLinkPage';
import NotFound from '../components/NotFound.js';
import Header from '../components/Header.js';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LinksMainPage} exact={true}/>
                <Route path="/add" component={AddLinkPage}/>
                <Route path="/edit/:id" component={EditLinkPage} />
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;