import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header>
        <h1>LINKS</h1> 
        <NavLink to="/dashbord" activeClassName="is-active">Home</NavLink>
        <NavLink to="/add" activeClassName="is-active">Add Link</NavLink>
        <button onClick={startLogout}>Log Out</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);