import React, { useState } from 'react';

function HotelTabs({ hotelData }) {
    const [activeTab, setActiveTab] = useState('overview');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return <p>{hotelData.overview}</p>;
            case 'restaurant':
                return <p>{hotelData.restaurant}</p>;
            case 'meals':
                return (
                    <ul>
                        {hotelData.meals.map((meal, index) => (
                            <li key={index}>{meal}</li>
                        ))}
                    </ul>
                );
            case 'orders':
                return (
                    <ul>
                        {hotelData.orders.map((order, index) => (
                            <li key={index}>{order}</li>
                        ))}
                    </ul>
                );
            case 'user_reviews':
                return (
                    <ul>
                        {hotelData.userReviews.map((review, index) => (
                            <li key={index}>{review}</li>
                        ))}
                    </ul>
                );
            default:
                return <p>Tab not found.</p>;
        }
    };

    return (
        <div>
            <nav>
                <button onClick={() => setActiveTab('overview')}>Overview</button>
                <button onClick={() => setActiveTab('restaurant')}>Restaurant</button>
                <button onClick={() => setActiveTab('meals')}>Meals</button>
                <button onClick={() => setActiveTab('orders')}>Orders</button>
                <button onClick={() => setActiveTab('user_reviews')}>User Reviews</button>
            </nav>
            <div>{renderTabContent()}</div>
        </div>
    );
}

export default HotelTabs;
