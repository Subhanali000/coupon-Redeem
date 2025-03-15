import React, { useState, useEffect } from 'react';
import { getRandomCoupon, claimCoupon } from '../services/api';
import './CouponClaim.css';  
const CouponClaim = () => {
    const [message, setMessage] = useState('');
    const [randomCoupon, setRandomCoupon] = useState(null);
    const [loading, setLoading] = useState(false);
    const [isClaimed, setIsClaimed] = useState(false);
    const [claimedCoupon, setClaimedCoupon] = useState(null);

    useEffect(() => {
        const fetchCoupon = async () => {
            try {
                const coupon = await getRandomCoupon();
                setRandomCoupon(coupon);
            } catch (error) {
                setMessage('Error fetching coupon. Please try again.');
            }
        };

        fetchCoupon();
    }, []);

    const handleClaimCoupon = async () => {
        setLoading(true);
        setMessage('');
        try {
            const result = await claimCoupon(randomCoupon.id);
            if (result.message === 'You have already claimed a coupon!') {
                setClaimedCoupon(result.coupon);
            } else {
                setMessage(result.message);
                setIsClaimed(true);
            }
        } catch (error) {
            setMessage('Error claiming coupon. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h2>Claim Your Coupon</h2>

            {/* Show messages (loading, error, success) */}
            {message && <p className="message">{message}</p>}

            {/* Show coupon details if it's fetched, not yet claimed */}
            {!isClaimed && randomCoupon && !claimedCoupon && (
                <div className="couponBox">
                    <h3>Coupon Available! Click to Claim.</h3>
                    <button
                        onClick={handleClaimCoupon}
                        disabled={loading || isClaimed}
                        className="button"
                    >
                        {loading ? 'Claiming...' : 'Claim Coupon'}
                    </button>
                </div>
            )}

            {/* Show the coupon code after it's claimed */}
            {isClaimed && randomCoupon && (
                <div className="couponBox">
                    <h3>Coupon Code: {randomCoupon.code}</h3>
                    <p>{randomCoupon.description}</p>
                </div>
            )}

            {/* Show previously claimed coupon if the user tries to claim again */}
            {claimedCoupon && (
                <div className="couponBox">
                    <h3>You've already claimed this coupon:</h3>
                    <h4>Coupon Code: {claimedCoupon.code}</h4>
                    <p>{claimedCoupon.description}</p>
                </div>
            )}
        </div>
    );
};

export default CouponClaim;
