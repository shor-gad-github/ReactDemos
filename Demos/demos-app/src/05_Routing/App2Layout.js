import * as React from 'react';
import { Outlet, Link } from 'react-router-dom';

export default function App2Layout() {
    return (
        <div className='container'>
            <h1>Bookkeeper</h1>
            <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
                <Link to="/invoices">Invoices</Link> |{' '}
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Outlet />
        </div>
    );
}
