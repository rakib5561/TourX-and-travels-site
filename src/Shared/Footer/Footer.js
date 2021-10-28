import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrape">
            
            <div className="footer-container">
            <div>
                <h3>About</h3>
            </div>

            <div>
                <h3>Contact Us</h3>
            </div>
            <div>
                <h3>Support</h3>
            </div>
            <div>
                <h3>We Accepts:</h3>
            </div>
            </div>

            <hr />
            <div className="copy-right">
                    Copyright 2021 TourX | Design By Md. Rakib
            </div>

        </div>
    );
};

export default Footer;