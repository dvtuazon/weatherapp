import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return(
        <div className='m-5'>
            <h1>Page Not Found</h1>
            <h2>The URL you requested does not exist.</h2>
            <Link to='/' className='btn btn-danger mt-3'>↩ Back</Link>
        </div>
    )
}

export default Error;