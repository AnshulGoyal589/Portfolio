import React from 'react'
import styles from './Project.module.css'
import { Link } from 'react-router-dom'


const Project = () => {
  return (
    <div className={styles.main} id='Projects'>

      <h2 className={styles.head} >Projects</h2>
      <div className={styles.content} ></div> 
      <div className={styles.list}>

        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/Antivirus-Authentication-Mechanism"><strong>Antivirus Authentication Mechanism</strong></Link>

          <div className={styles.container}>
          <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZxbnQKlhEeDsrxvjRBrUc63slnafYX04J8w&usqp=CAU" alt="Ecommerce Logo" />
          <ul >
            <li>A chrome extension for authenticating antivirus mechanism and has both customer and admin panel.</li>
            <li>Made using ReactJS, NodeJS, MongoDB, ExpressJS, HTML, CSS, JavaScript, Bootstrap, Material UI, whatsapp-web.js</li>
          </ul>
          </div>
          <img src="" alt="" />

        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/Whatsapp-Automation"><strong>Whatsapp Automation</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/640px-WhatsApp.svg.png" alt="Ecommerce Logo" />
          <ul>
            <li>A chrome extension for adding new features to whatsapp-web and automating it with improvised features.</li>
            <li>Enahnced features in whatsapp web are impplanted like multi-chats pinning, labelling, blur effect in privacy.</li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/instaClone"><strong>Instagram Clone</strong></Link>
        <div className={styles.container}>
          <img style={{width:'250px',height:'130px',borderRadius: '50%',marginLeft:'-40px'}} src="https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo.png" alt="Ecommerce Logo" />
          <ul>
            <li>A robust and fully functional clone of Instagram where you can post anything.</li>
            <li>Make your id and comment on each others posts and even post your stories.</li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/EcommerceWebsite"><strong>Ecommerce Website</strong></Link>
        <div className={styles.container}>
          <img className={styles.image} src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png" alt="Ecommerce Logo" />
          <ul>
            <li>Ecommerce website with payment gateway, buyer and seller authentication , CRUD , cart and review system.</li>
            <li>Made using MongoDB, ReactJS, NodeJS, Express, stripe, chatbot API </li>
          </ul>
          
        </div>
        </div>
        <div className={styles.listChild} >
          <Link to="https://github.com/AnshulGoyal589/Product-management-system"><strong>Product management System</strong></Link>
          <div className={styles.container}>
          <img className={styles.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO__qkMwF7zq6E1J6CGqM2dIdYbW6hJxUvag&usqp=CAU" alt="Ecommerce Logo" />
          <ul>
            <li>Admin Panel to manipulate data on other Ecommerce Websites amd seamlessly integrate with them.</li>
            <li>Now control your Ecommerce website using this admin panel and get regular stats of totla revenue, total orders,etc.</li>
          </ul>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Project