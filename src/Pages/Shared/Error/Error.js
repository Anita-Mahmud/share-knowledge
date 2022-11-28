import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../images/error1.png'
const Error = () => {
    return (
        <div className=''>
         <div className='flex justify-center py-20'>
         
          <img src={error} alt="Not found"  />
          </div>
           <div className='flex justify-center'>
           <Link to='/'>
           <button className='btn btn-outline btn-info w-96'>Back to Home</button>
           </Link>
            </div>
        </div>
       
    );
};

export default Error;