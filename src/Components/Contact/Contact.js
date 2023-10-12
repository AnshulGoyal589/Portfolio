import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.main} id='Contact'>
     
      <h2 className={styles.head} >Contact</h2>
      <div >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ullam quasi facere itaque. Recusandae, ea. 
        Aperiam laboriosam soluta rerum aspernatur sunt laborum dolorem mollitia, quod culpa modi repellendus officiis labore.
      </div>
      <div className={styles.body1} >
        <div className={styles.locationContainer}>
          <i class="fa-solid fa-location-dot fa-2xl"></i>
          <div className={styles.location}>
            <h5>Location</h5>
            <p>New Delhi, India</p>
          </div>
        </div>
        <div className={styles.locationContainer}>
        <i class="fa-solid fa-envelope fa-2xl"></i>
          <div className={styles.location}>
            <h5>Email</h5>
            <p>anshulgoyal589@gmail.com</p>
          </div>
        </div>
        <div className={styles.locationContainer}>
        <i class="fa-solid fa-phone fa-2xl"></i>
          <div className={styles.location}>
            <h5>Call</h5>
            <p>+91 81680-79094</p>
          </div>
        </div>
        <div></div>
      </div>
      <form className={styles.form}>
        <label htmlFor="">Name</label>
        <br />
        <input type="text"  />
        <br /><br />
        <label htmlFor="">Email ID</label>
        <br />
        <input type="text" />
        <br /><br />
        <label htmlFor="">SUBJECT</label>
        <br />
        <input type="text" />
        <br /><br />
        <label htmlFor="">DESCRIPTION</label>
        <br />
        <textarea rows={6} cols={65} ></textarea>
      </form>
          

    </div>
  )
}

export default Contact