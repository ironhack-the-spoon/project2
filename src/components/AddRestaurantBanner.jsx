import React from 'react';
import bannerImage from '../assets/images/restaurateur.jpg'; 
import PageContainer from './PageContainer';
import { Link } from "react-router-dom";


function AddRestaurantBanner() {
    
    return (
        <PageContainer>
            <div className="w-full h-64 bg-beige-light relative flex items-center justify-between rounded-lg pl-6 shadow-lg mb-8">
                
                <div className="w-1/2" style={{ color: '#06402B' }}>
                    <h1 className="text-4xl font-bold mb-4">Are you a restaurant owner?</h1>
                    <p className="text-lg mb-4">Join us and expand your culinary reach by adding your restaurant to our platform.</p>
                    <Link to="/add-restaurant">
                    <button className="bg-green-700 text-beige-light px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300">
                        Add Restaurant
                    </button>
                    </Link>
                </div>

                <div className="w-1/3 h-full">
                    <img src={bannerImage} alt="Add Restaurant" className="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
        </PageContainer>
    );
}

export default AddRestaurantBanner;