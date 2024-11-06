import React from 'react';
import IconLocation from '../assets/images/IconLocation.png';

function GoogleMap() {
    return (
        <div>
            <div className="text-start mt-6 mb-4 flex items-center">

                <h1 className="text-xl  text-customGreen">
                📍 The Ultimate Guide to Restaurants in Paris
                </h1>
            </div>
            <div className="flex justify-start items-center pb-12">
                <div style={{ width: '100%', overflow: 'hidden', height: '480px', borderRadius: '12px' }}>
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1CGYxEFC2Knx62PKd_KoKODyljNEvAtk&ehbc=2E312F&no_toolbar=true"
                        width="100%"  // Full width of the container
                        height="600"  // Larger height to accommodate hiding top and bottom parts
                        className="border-0 shadow-lg"
                        style={{ marginTop: '-150px', borderRadius: '12px' }}  // Apply border radius to iframe
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default GoogleMap;