import React from 'react';
import './Banner.style.css';
import home from '../Banner/banner.jpg';

function Banner(){
    return (
        <div>
        <div 
        className="banner_had"
            style={
            {
                backgroundSize:"cover",
                backgroundImage:`url(${home})`,
                backgroundPosition:"center center",
                marginBottom: "-15em"
            }

        }
        >
           
        </div>
        <div
        className="fade_bot">
        </div>
        
            <h1 className="match_name black">
                LIVE SCORES
            </h1>
        
        </div>
    )
}

export default Banner;

