import axios from 'axios';

const API_URL = 'http://localhost:5000/api/coupons';

export const getRandomCoupon = async () => {
    try {
        const response = await axios.get(`${API_URL}/random`);
        return response.data;
    } catch (error) {
        console.error('Error fetching coupon:', error);
        throw error;
    }
};

export const claimCoupon = async (id) => {
    try {
        const response = await axios.post(`${API_URL}/claim/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error claiming coupon:', error);
        throw error;
    }
};
