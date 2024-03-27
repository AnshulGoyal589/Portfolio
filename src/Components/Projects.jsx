import React from 'react'
import one from './one.jpg'
import ecommerce from './ecommerce.jpg'
import burger from './burger.jpg'
import insta from './insta.jpg'
import whatsapp from './whatsapp.jpg'
import coffee from './coffee.jpg' 
import weather from './weather.jpg'
import './projects.css'

const Projects = () => { 
  return (
    <div id='hero'  className='flex flex-col justify-center items-center' >
    <div className='border-[1px] border-black w-4/5  mt-20' ></div>
        <h2 className='text-red text-[13px] mt-16' >MY SKILLS DEMONSTRATION</h2>
        <h1 className='text-4xl font-[600] text-gray' >My Projects</h1>

        <div id='main' className='flex justify-center items-center gap-10 px-24' >

            <div onClick={() => window.open('https://intellishop.onrender.com','_blank')} className='drop-shadow-4xl w-[30%] h-[25rem] rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-[70%] rounded-xl' src={ecommerce} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl text-red font-bold' >INTELLISHOP</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >An ECommerce Platform with OTP Authentication, CRUD, Payment Gateway, Buyer/ Seller Login.</h3>
                    </div>
                </div>
            </div>
            <div onClick={() => window.open('https://mcdonalds-kiosk-system.onrender.com','_blank')} className='drop-shadow-4xl w-[30%] h-[25rem] rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-[69%] rounded-xl' src={burger} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl text-red font-bold' >McDonalds Kiosk</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Recreated McDonalds Self Ordering Kiosk System and added Payment Gateway. </h3>
                    </div>
                </div>
            </div>
            <div onClick={() => window.open('https://instagram-clone-98y7.onrender.com','_blank')} className='drop-shadow-4xl w-[30%] h-[25rem] rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-[70%] rounded-xl' src={insta} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl text-red font-bold' >InstaGram Clone</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Cloned Instagram Web using MERN and Socket.io and added features such as posting, authentication.</h3>
                    </div>
                </div>
            </div>
            
        </div>

        <div id='main' className='flex justify-center items-center gap-10 px-24' >

            <div onClick={() => window.open('https://github.com/AnshulGoyal589/Whatsapp-Automation','_blank')} className='drop-shadow-4xl w-[30%] h-[25rem] rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-[70%] rounded-xl' src={whatsapp} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl text-red font-bold' >WHATSAPP AUTOMATION</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >A Chrome Extension that provides premium features like Blur Chat, BroadCast, Multiple Chats Pinning etc,</h3>
                    </div>
                </div>
            </div>
            <div onClick={() => window.open('https://anshulgoyal589.github.io/CoffeeBrewHub/','_blank')} className='drop-shadow-4xl w-[30%] h-[25rem] rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-[69%] rounded-xl' src={coffee} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl text-red font-bold' >CoffeeBrewHub</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >A coffee app offers a seamless experience for coffee lovers, providing menus, reviews, and order customization. </h3>
                    </div>
                </div>
            </div>
            <div onClick={() => window.open('https://anshulgoyal589.github.io/WeatherlyApp/','_blank')} className='drop-shadow-4xl w-[30%] h-[25rem] rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-[70%] rounded-xl' src={weather} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl text-red font-bold' >WeatherlyApp</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >A weather app provides real-time updates,and forecasts, ensuring users stay informed about current conditions.</h3>
                    </div>
                </div>
            </div>
            
        </div>




    </div>
  )
}

export default Projects