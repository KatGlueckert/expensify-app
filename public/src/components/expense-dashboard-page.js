import React from 'react';
import ExpenseList from './expense-list';
import ExpenseListFilters from './expense-list-filters';
import {connect} from 'react-redux';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

 const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;