import React from 'react';
import './GetUpdates.css';

const GetUpdates = () => {
    return (
        <div className="update-wrape">
            <div className="update-container">
            <div className="update-content">
                <h3>Get Updates & More</h3>
                <p>Thoughtful thoughts to your inbox</p>
            </div>
            <div className="input-email">
                <form className="form-style">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <button className="subscribe-btn">SUBCRIBE</button>
                </form>
            </div>
            </div>
        </div>
    );
};

export default GetUpdates;