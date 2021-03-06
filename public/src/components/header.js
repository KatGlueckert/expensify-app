import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

 const Header = () => (
    <header>
        <h1> Expensify</h1>
        <NavLink to= "/" activeClassName='is-active' exact={true}> Home</NavLink>
        <NavLink to= "/create" activeClassName='is-active'> Create Page</NavLink>
        <NavLink to= "/help" activeClassName='is-active'> Help Page</NavLink>
        <NavLink to= "/testing" activeClassName='is-active'> Test Page </NavLink>
        <NavLink to= "/extra" activeClassName='is-active'> Extra Page </NavLink>
    </header>
);

export default Header;