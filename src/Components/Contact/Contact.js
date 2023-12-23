import React, { useEffect, useState } from 'react'
import styles from './Contact.module.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Contact = () => {
    let [subject,setSubject]=useState("");
    let [body,setBody]=useState("");
    let [from,setFrom]=useState("");
  const handleSubjectChange = (event) => {
    // Update the subject state when the input value changes
    setSubject(event.target.value);
  };
  const handleBodyChange = (event) => {
    // Update the subject state when the input value changes
    setBody(event.target.value);
  };
  const handleFromChange = (event) => {
    // Update the subject state when the input value changes
    setFrom(event.target.value);
  };
  const handleSubmit = async(event) => {
    event.preventDefault();
  
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
  
    const mailtoLink = `mailto:anshulgoyal589@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  
    window.location.href = mailtoLink;

  };
  
  return (
    <div className={styles.main} id='Contact'>
     
      <h2 className={styles.head} >Contact</h2>
      <div >Thank you for visiting my portfolio.! Whether you're interested in collaboration, have a project in mind, 
        or just want to connect, feel free to reach out. Drop me an email at anshulgoyal589@gmail.com or connect with me on 
        <Link to="https://www.linkedin.com/in/anshul-goyal-a9b537254/"><strong> LinkdeIn</strong></Link>.
         Looking forward to the opportunity to chat!
      </div>    
      <div style={{display:'flex',position:'relative',top:'30px',left:'15px',gap:'50px'}} >
      <div className={styles.body1} >
        <div className={styles.locationContainer}>
          <i class="fa-solid fa-location-dot fa-2xl"></i>
          <div className={styles.location}>
            <h3>Location</h3>
            <p>New Delhi, India</p>
          </div>
        </div>
        <div className={styles.locationContainer}>
        <i class="fa-solid fa-envelope fa-2xl"></i>
          <div className={styles.location}>
            <h3>Email</h3>
            <p>anshulgoyal589@gmail.com</p>
          </div>
        </div>
        <div className={styles.locationContainer}>
        <i class="fa-solid fa-phone fa-2xl"></i>
          <div className={styles.location}>
            <h3>Call</h3>
            <p>+91 81680-79094</p>
          </div>
        </div>
        <div></div>
      </div>
      <form className={styles.form}  onSubmit={handleSubmit} >
      <div style={{marginTop:'40px'}}>
        <div class="form-floating"   style={{width:'215px',display:'inline-block',marginRight:'25px'}}>
          <input type="text" className="form-control" id="floatingInput" placeholder="Username" />
          <label htmlFor="floatingInput">Your Name</label>
        </div>
        <div class="form-floating" style={{width:'215px',display:'inline-block'}} >
          <input type="email" className="form-control" id="floatingPassword" placeholder="abcd@gmail.com" onChange={handleFromChange} />
          <label for="floatingPassword">Your Email</label>
        </div>
        </div>
        <div class="form-floating" id='abc' >
          <input type="String" className="form-control" id="floatingPassword" placeholder="Subject" onChange={handleSubjectChange} />
          <label for="floatingPassword">SUBJECT</label>
        </div>
        <div class="form-floating" id='abc' >
          <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '160px'}}onChange={handleBodyChange} />
          <label for="floatingTextarea2">Description</label>
        </div>
        <button type="submit" class="btn btn-primary" style={{width:'fit-content',margin:'auto'} } >SEND MAIL</button>
      </form>
      </div>
          

    </div>
  )
}

export default Contact