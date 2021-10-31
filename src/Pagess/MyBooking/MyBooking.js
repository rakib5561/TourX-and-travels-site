import React, { useEffect, useState } from 'react';
import './MyBooking.css';

const MyBooking = () => {
    
    const [bookPackage, setBookPackage] = useState([]);
    useEffect( ()=>{

        fetch('http://localhost:5000/showPackage')
        .then(res => res.json())
        .then(data => setBookPackage(data))

    },[]);

    return(
        <div className="booking_list">
            <h1>ALL Booking list</h1>
            <div className="booking-container">
                
            {
                bookPackage.map(booklist => <div>

                    <div className="bookingList-card">
                        <h6>Package: {booklist.packagename}</h6>
                        <p>Name: {booklist.name}</p>
                        <p>Phone: {booklist.phone}</p>
                        <p className="card-date">Date: {booklist.date}</p>
                    </div>

                </div>)
            }

            </div>
        </div>
    )
};

export default MyBooking;