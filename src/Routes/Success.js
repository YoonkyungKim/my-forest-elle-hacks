import React from 'react';
import { Link } from 'react-router-dom';
import Trees from '../components/Trees';

function Success() {

  return (
    <div className="success-heading-container">
        <h1 className="success-heading">Congratulations! You just made the earth greener. </h1>
        <Trees />
        <Link to='/impact'>
            <button className="redeem-btn plant-btn">  
                See your Impact! 
            </button>
        </Link>
    </div>
  );
}

export default Success;
