import React from 'react'
import "./contact.css"
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import {  useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
   
  
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_ic18wu1",
          "template_mk84l2l",
          formRef.current,
          "tplw9L3w6EhUMWyaM"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    return (
      <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Contact me</h1>
            <div className="c-info">
              <div className="c-info-item">
                <img src={Phone} alt="" className="c-icon" />
                +91 6295314479
              </div>
              <div className="c-info-item">
                <img className="c-icon" src={Email} alt="" />
                amitghosh90029@gmail.com             </div>
              <div className="c-info-item">
                <img className="c-icon" src={Address} alt="" />
                Laketown,Siliguri,West Bengal
              </div>
            </div>
          </div>
          <div className="c-right">
            <p className="c-desc">
              <b>Want to Get in touch?</b> Always available for an advice. Thankyou!
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
              <input  type="text" placeholder="Name" name="user_name" />
              <input  type="text" placeholder="Subject" name="user_subject" />
              <input  type="text" placeholder="Email" name="user_email" />
              <textarea rows="5" placeholder="Message" name="message" />
              <button>Submit</button>
              {done && "Email sent successfully"}
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;




