import React, { useEffect, useState } from 'react';
import SinglePachakgeBooking from '../SinglePackageBooking/SinglePachakgeBooking';
import './Pakages.css';

const Pakages = () => {

    const [pakages, setPakages] = useState([]);
    useEffect( ()=>{

        fetch('http://localhost:5000/packages')
        .then(res => res.json())
        .then(data => setPakages(data))

    },[]);
    
    
    return (
        <div>
            <div className="Tour-pakages-wrap">

            <div className="pakages-content">
                <h5>Choose Your Package</h5>
                <h1>Select Your Best Package <br /> For Your Travel</h1>
            </div>

            <div className="card-container">
                {
                    pakages.map(pakage => (
                        <SinglePachakgeBooking
                         key={pakage._id} 
                         pakage={pakage}
                         ></SinglePachakgeBooking>
                    ))
                }
            </div>

            </div>
        </div>
    );
};

export default Pakages;