# Coupon Claim Web Application - Frontend

This is the frontend part of the Coupon Claim Web Application built using **React.js**. It communicates with the backend to fetch and claim coupons.

## Features

- Display available coupons.
- Allow users to claim coupons.
- User-friendly interface for interaction.
- Responsive design using React.

## Tech Stack

- **Frontend**: React.js
- **State Management**: React hooks
- **API**: Axios for API calls to the backend
- **CSS**: Custom styling using CSS (or SCSS if preferred)
- **Deployment**: Deployed on [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)

## Setup Instructions

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download and Install Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js installation
- **Git**: [Download and Install Git](https://git-scm.com/)

### Install Dependencies

1. **Clone the repository**:

    ```bash
    git clone https://github.com/Subhanali000/coupon-claim.git
    cd coupon-claim/frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

### Running the Development Server

1. **Start the development server**:

    ```bash
    npm start
    ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### API Integration

The frontend interacts with the backend for coupon operations. Update the API URL in `api.js` to point to your deployed backend.

```javascript
const API_URL = 'https://coupon-backend-6us5.onrender.com'; // Change this to your backend API URL

