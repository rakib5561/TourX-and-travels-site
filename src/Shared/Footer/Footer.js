import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-wrape">
            
            <div className="footer-container">
            <div className="about">
                <h4>About</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt sequi culpa omnis aliquam harum perferendis tempore fuga est esse non nulla, ipsa vero minima neque rerum quibusdam quasi doloribus laudantium!</p>
            </div>

            <div>
                <h4>Contact Us</h4>
                <div className="phone">
                    +01852-1265122 <br />
                    +01852-1265122
                </div>
                <div className="email">
                    info@example.com <br />
                    support@example.com
                </div>
                <div className="address">
                    2752 Willison Street <br />
                    Eagan, United State
                </div>

            </div>
            <div className="support">
                <h4>Support</h4>
                <ul>
                    <Link to='/login'><li>Login</li></Link>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to='/about'><li>About us</li></Link>
                    <Link to='/pakages'><li>Tour Pakage</li></Link>
                    <Link to='/booking'><li>My Booking</li></Link>
                    <Link to='/contact'><li>Contact us</li></Link>
                    
                </ul>
            </div>
            </div>
            <hr />
            <div className="copy-right">
                    Copyright 2021 <span>TourX</span> | Design By <span>Md. Rakib</span>
            </div>

        </div>
    );
};

export default Footer;