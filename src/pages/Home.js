import React from 'react';
import CouponClaim from '../components/CouponClaim';
import './Home.css';  

const Home = () => {
    return (
        <div className="container">
            <h1 className="heading">Welcome to the Coupon Distribution App</h1>
            <p className="description">
                Claim your coupon by clicking the button below. The coupon code will be displayed, and you will have a limited time to use it.
            </p>
            <CouponClaim />
        </div>
    );
};

export default Home;
