import React from 'react'
import one from './one.jpg'
import two from './two.jpg'
import three from './three.jpg'
import four from './four.jpg'
import './Experience.css'

const Experience = () => {
  return (
    <div className='flex flex-col justify-center items-center' >

        <div className='border-[1px] border-black w-4/5  mt-16' ></div>


        <h2 className='text-red text-[13px] mt-20' >OVER 1 YEAR OF EXPERIENCE</h2>
        <h1 id='heading' className='text-4xl font-[600] text-gray' >My Experience</h1>

        <div id='expP' className='drop-shadow-4xl w-[70%] h-52 rounded-xl mt-10 text-gray' >
            <div id='exp' className='flex p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-12' >
                <img className='w-[22%] h-full rounded-xl' src={one} alt="" />
                <div id='expC' className='flex flex-col justify-center items-start w-[60%] ' >
                    <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >March 2024 - Present</h4>
                    <h1 className='mt-3 text-2xl' >Digital Event TOI</h1>
                    <h2 className='text-xl mt-3' >Wev Development Engineer Intern</h2>
                    <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Created Software for the company and gained proficiency in Figma</h3>
                </div>
                <div id='expC2' className='w-[18%] drop-shadow-4xl h-full flex justify-center items-center ' >
                    <div className='w-full h-[30%] bg-blueTheme text-red flex justify-center items-center' > EXPLORE </div>
                </div>
            </div>
        </div>
        <div id='expP' className='drop-shadow-4xl w-[70%] h-52 rounded-xl mt-10 text-gray' >
            <div id='exp' className='flex p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-12' >
                <img className='w-[22%] h-full rounded-xl' src={two} alt="" />
                
                <div id='expC' className='flex flex-col justify-center items-start w-[60%] ' >
                    <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >January - March 2024</h4>
                    <h1 className='mt-3 text-2xl' >MADE 2 AUTOMATE</h1>
                    <h2 className='text-xl mt-3' >Softare Development Engineer Intern </h2>
                    <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Worked on AWS Services and created an inventory management software for a German Company.</h3>
                </div>
                <div id='expC2' className='w-[18%] drop-shadow-4xl h-full flex justify-center items-center ' >
                    <div className='w-full h-[30%] bg-blueTheme text-red flex justify-center items-center' > EXPLORE </div>
                </div>
            </div>
        </div>
        <div id='expP' className='drop-shadow-4xl w-[70%] h-52 rounded-xl mt-10 text-gray' >
            <div id='exp' className='flex p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-12' >
                <img className='w-[22%] h-full rounded-xl' src={three} alt="" />
                <div id='expC' className='flex flex-col justify-center items-start w-[60%] ' >
                    <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >October 2023</h4>
                    <h1 className='mt-3 text-2xl' >HacktoberFest 2023</h1>
                    <h2 className='text-xl mt-3' >Open Source Contributor</h2>
                    <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Contributed on various Open Source Projects.</h3>
                </div>
                <div id='expC2' className='w-[18%] drop-shadow-4xl h-full flex justify-center items-center ' >
                    <div className='w-full h-[30%] bg-blueTheme text-red flex justify-center items-center' > EXPLORE </div>
                </div>
            </div>
        </div>
        <div id='expP' className='drop-shadow-4xl w-[70%] h-52 rounded-xl mt-10 text-gray' >
            <div  id='exp' className='flex p-7 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-12' >
                <img className='w-[22%] h-full rounded-xl' src={four} alt="" />
                <div id='expC' className='flex flex-col justify-center items-start w-[60%] ' >
                    <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >June - August 2023</h4>
                    <h1 className='mt-3 text-2xl' >GSSOC 2023</h1>
                    <h2 className='text-xl mt-3' >Open Source Contributor</h2>
                    <h3 className='text-[0.9rem] text-[#878e99] mt-1' >KickStarted My Open Source Journey.</h3>
                </div>
                <div id='expC2' className='w-[18%] drop-shadow-4xl h-full flex justify-center items-center ' >
                    <div className='w-full h-[30%] bg-blueTheme text-red flex justify-center items-center' > EXPLORE </div>
                </div>
            </div>
        </div> 




    </div>
  )
}

export default Experience