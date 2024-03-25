import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center' >

        <div className='border-[1px] border-black w-4/5  mt-16' ></div>


        <h2 className='text-red text-[13px] mt-20' >"LET'S CONNECT AND CREATE SOMETHING AMAZING TOGETHER!"</h2>
        <h1 className='text-4xl font-[600] text-gray' >Contact Me</h1>

        <div className='flex justify-center items-center w-[70vw] gap-12 ' >

            <div className='drop-shadow-4xl w-[70%] h-[55vh] rounded-xl mt-10 text-gray' >
                <div className='flex flex-col px-7 pb-7 pt-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-2 justify-center items-start' >
                    <h1 className='text-[2.5vw] text-red w-full text-center mb-5' >CONTACT DETAILS</h1>
                    <p className='flex gap-5 text-[1.4vw] ' ><FaGithub className='text-red text-[2.5rem] ' />https://github.com/AnshulGoyal589</p>
                    <p className='flex gap-5 text-[1.4vw] ' ><CiLinkedin className='text-red text-[2.5rem] ' />https://www.linkedin.com/in/anshul-goyal-a9b537254/</p>
                    <p className='flex gap-5 text-[1.4vw] ' ><IoCallOutline className='text-red text-[2.5rem] ' />+91 81680 79094</p>
                    <p className='flex gap-5 text-[1.4vw] ' ><CiMail className='text-red text-[2.5rem] ' />anshulgoyal589@gmail.com</p>
                    <p className='flex gap-5 text-[1.4vw] ' ><CiTwitter className='text-red text-[2.5rem] ' />https://twitter.com/AnshulG70118665</p>
                </div>
            </div>

            <div className='drop-shadow-4xl w-[70%] h-[55vh] rounded-xl mt-10 text-gray'>
                <div className='flex p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-12'>
                    <form className='flex flex-col gap-9 px-6 pb-2 pt-6' action="">

                        <input type="text" className='h-20 w-[100%] bg-[#f7f5ef] text-black rounded-xl py-2 px-5 text-xl' placeholder='username' />
                        <input type="text" className='h-20 w-[100%] bg-[#f7f5ef] text-black rounded-xl py-2 px-5 text-xl ' placeholder='abcd@gmail.com' />
                        <textarea name="" id="" cols="35" rows="20" className='text-black bg-[#f7f5ef] rounded-xl px-5 py-2 text-xl' placeholder='Write Your Message Here'></textarea>
                        
                        <div className='w-full drop-shadow-4xl h-[55%] flex justify-center items-center rounded-xl'>
                            <button onClick={() => { window.open('mailto:anshulgoyal589@gmail.com', '_blank'); }} className='w-full h-full bg-blueTheme text-red flex rounded-xl justify-center items-center px-4 py-3 font-bold'>CONTACT</button>
                        </div>

                    </form>
                </div>
            </div>


        </div>

        <div className='border-[1px] border-black w-4/5  mt-24' ></div>

    </div>
  )
}

export default Contact