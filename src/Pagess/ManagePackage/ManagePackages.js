import React from 'react';
import './ManagePackage.css';
import axios from 'axios';
import { useForm } from "react-hook-form";

const ManagePackages = () => {
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/packages', data)
            .then(res =>{
               if(res.data.insertedId){
                   alert("added successfully.");
                   reset();
               }
               else{
                   alert("package don't added.");
               }
            })
    }
    return (
        <div className="manage-package">

            <h2>Please add a package</h2>
            <div className="manage-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("title", { required: true, maxLength: 40 })} placeholder="Ente the place name"  />
                <input {...register("duration")} placeholder="Duration 4 days, 5 nights" />
                <input {...register("price")} placeholder="Price: $180/Per Person" />
                <input {...register("image")} placeholder="Enter the img url" />
                <input className="btn-style" type="submit" />
            </form> 
            </div>

        </div>
      );
};

export default ManagePackages;