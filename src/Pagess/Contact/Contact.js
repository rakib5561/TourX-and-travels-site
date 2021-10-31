import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
   
    return (
        <div className="contact-wrape">

            <div className="contact-container">

                <div className="contact-content">
                    
                    <h1>Get in Touch</h1>
                    <p>Suspendisse dolor risus, congue ac diam id, viverra facilisis dolor. Cras nec purus sagittis, varius tortor at, maximus erat. Sed at tellus id tellus lobortis dictum. Mauris dignissim, turpis vitae ullamcorper fermentum, sapien arcu aliquam arcu, in viverra quam est ac ex. Cras sed lectus eu.</p>

                </div>

                <div className="contact-form">

                 <form className="form-style" onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 40 })} placeholder="Your name"  />
                    <input type='number' {...register("Your Mobile")} placeholder="Your Number" />
                    <textarea  rows='8' {...register("subject")} placeholder="write your masage" />
                    <input className="btn-style" type="submit" />
            </form> 

                </div>

            </div>
            
        </div>
    );
};

export default Contact;