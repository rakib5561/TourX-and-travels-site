import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pakages.css';

const Pakages = () => {


    const [pakages, setPakages] = useState([]);

    useEffect( ()=>{

        fetch('pakages.JSON')
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
                        <div className="card-style">
                            <img src={pakage.image} alt="" />

                            <div className="package-price-duration">
                                <div>{pakage.price}</div>
                                <div>{pakage.duration}</div>
                            </div>
                            <h5 className="package-title">{pakage.title}</h5>

                            <Link to=''><button className="btn-style">Booking Now</button></Link>

                        </div>
                    ))
                }
            </div>

            </div>
        </div>
    );
};

export default Pakages;