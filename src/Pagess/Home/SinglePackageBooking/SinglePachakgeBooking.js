import React from 'react';
import './SinglePachakgBooking.css';
import { useHistory } from 'react-router-dom';

const SinglePachakgeBooking = (props) => {

    const {_id,image, price, duration, title} = props.pakage;
    const history = useHistory();

    const handlePackageBtn = () =>{
        history.push(`/getbooking/${_id}`)
    }

    return (
            <div className="card-style">
                       <img className="card-img" src={image} alt="" />
                       <div className="package-price-duration">
                           <div>{price}</div>
                          <div>{duration}</div>
                            </div>
                       <h5 className="package-title">{title}</h5>
                       <button onClick={handlePackageBtn}className="btn-style">Booking Now</button>
            </div>
    );
};

export default SinglePachakgeBooking;