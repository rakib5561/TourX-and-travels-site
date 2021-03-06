import React, { useEffect, useState } from 'react';
import './GetBooking.css';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const GetBooking = () => {

    const {objectId} = useParams();
    const [bookPackage, setBookPackage] = useState({});
    useEffect(()=>{
        fetch(`https://possessed-blood-92374.herokuapp.com/packages/${objectId}`)
            .then(res=>res.json())
            .then(data => setBookPackage(data))
    },[]);


    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {

        axios.post('https://possessed-blood-92374.herokuapp.com/showPackage', data)
            .then(res =>{
               if(res.data.insertedId){
                   alert("Successfully booking completed");
                   reset();
               }
               else{
                   alert("Booking not completed");
               }
            })

        reset();
    };

    return (
        <div className="booking-wrape">

            <div className="booking-container">
            <div className="booking-details">
                <img src={bookPackage.image} alt="" />
                <h5>{bookPackage.title}</h5>
            </div>

            <div className="booking">
                <h4 className="booking-form-title"> Book This Package</h4>
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                    
                    <input {...register("packagename", { required: true, maxLength: 25 })} placeholder="Package Name" />
                    <input {...register("name", { required: true, maxLength: 25 })} placeholder="Your Name" />
                    <input {...register("email")} placeholder="Your Email" />
                    <input type="number" {...register("phone")} placeholder="Your Mobile" />
                    <input type="date" {...register("date")} />
                    
                    <textarea rows="8"  type="text" {...register("massage")} placeholder="Your massage" />
                    
                    <input className="btn-style" type="submit" />

                </form>
            </div>
            </div>

        </div>
    );
};

export default GetBooking;