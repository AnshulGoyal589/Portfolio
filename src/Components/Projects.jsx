import React from 'react'
import one from './one.jpg'
import ecommerce from './ecommerce.jpg'
import burger from './burger.jpg'
import insta from './insta.jpg'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center' >
        <h2 className='text-red text-[13px] mt-20' >MY SKILLS DEMONSTRATION</h2>
        <h1 className='text-4xl font-[600] text-gray' >My Projects</h1>

        <div className='flex justify-center items-center gap-10 px-24' >

            <div className='drop-shadow-4xl w-[30%] h-96 rounded-xl mt-10 text-gray' >
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
            <div className='drop-shadow-4xl w-[30%] h-96 rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-[69%] rounded-xl' src={burger} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl text-red font-bold' >McDonalds Kiosk System</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Recreated McDonalds Self Ordering Kiosk System using MERN and added Payment Gateway. </h3>
                    </div>
                </div>
            </div>
            <div className='drop-shadow-4xl w-[30%] h-96 rounded-xl mt-10 text-gray' >
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
        <div className='flex justify-center items-center gap-10 px-24' >

            <div className='drop-shadow-4xl w-[30%] h-96 rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-full rounded-xl' src={one} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl' >Digital Event TOI</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Created Software for the company and gained proficiency in Figma</h3>
                    </div>
                </div>
            </div>
            <div className='drop-shadow-4xl w-[30%] h-96 rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-full rounded-xl' src={one} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl' >Digital Event TOI</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Created Software for the company and gained proficiency in Figma</h3>
                    </div>
                </div>
            </div>
            <div className='drop-shadow-4xl w-[30%] h-96 rounded-xl mt-10 text-gray' >
                <div className='flex flex-col p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-4' >
                    <img className='w-[100%] h-full rounded-xl' src={one} alt="" />
                    <div className='flex flex-col justify-start items-start w-[100%] ' >
                        {/* <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4> */}
                        <h1 className='text-2xl' >Digital Event TOI</h1>
                        {/* <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2> */}
                        <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Created Software for the company and gained proficiency in Figma</h3>
                    </div>
                </div>
            </div>

        </div>


        <div className='border-[1px] border-black w-4/5  mt-24' ></div>


    </div>
  )
}

export default Projects