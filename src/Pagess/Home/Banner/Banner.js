import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-wrape">

           <div className="banner-container">
            <h5 className="banner-title">Hi, there</h5>
            <h1>Greate Trip <br /> for Solo Travellers.</h1>
            <p>Since 2014, we’ve helped more than 500,000 people of all <br /> ages enjoy the best outdoor experience.</p>
             <br />
                <Link to='/pakages'><button className="btn-style">Explore Tours</button></Link>
            </div> 
           
        </div>
    );
};

export default Banner;