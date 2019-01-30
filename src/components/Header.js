import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>LINKS</h1> 
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/add" activeClassName="is-active">Add Link</NavLink>
    </header>
);

export default Header;