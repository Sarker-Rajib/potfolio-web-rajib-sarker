import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='min-vh-100 bg-warning d-flex align-items-center justify-content-center'>
            <div className="p-3 bg-light rounded border border-danger">
                <h2>Page Not Found</h2>
                <p>Please go back to home</p>
                <Link className='btn btn-success' to='/'>Home</Link>
            </div>
        </div>
    );
};

export default NotFound;