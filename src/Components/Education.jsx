import React from 'react'
import one from './college.png'
import './Education.css'

const Education = () => {
  return (
    <div className='flex flex-col justify-center items-center' >
        <div className='border-[1px] border-black w-4/5 mt-32' ></div>

        <h2 className='text-red text-[13px] mt-20' >BACHELORS IN TECHNOLOGY (COMPUTER SCIENCE) </h2>
        <h1 className='text-4xl font-[600] text-gray' >Education</h1>

        <div id='expP' className='drop-shadow-4xl w-[70%] h-52 rounded-xl mt-10 text-gray' >
            <div id='exp' className='flex p-7 pl-9 drop-shadow-4xl rounded-xl w-full h-full bg-blueTheme gap-12' >
                <img className='w-[19%] h-full rounded-xl' src={one} alt="" />
                <div id='expC' className='flex flex-col justify-center items-start w-[60%] ' >
                    <h4 className='text-sm bg-gray-dark rounded-3xl py-1 px-3' >November 2022 - July 2026</h4>
                    <h1 className='mt-3 text-2xl' >Netaji Subhas University Of Technology, Delhi</h1>
                    <h2 className='text-xl mt-3' >Computer Science And Engineering ( BTech )  </h2>
                    <h3 className='text-[0.9rem] text-[#878e99] mt-1' >Pursuing BTech Cmputer Science In NSUT Main Campus</h3>
                </div>
                <div id='expC2' className='w-[18%] drop-shadow-4xl h-full flex justify-center items-center ' >
                    <div className='w-full h-[30%] bg-blueTheme text-red flex justify-center items-center' > EXPLORE </div>
                </div>
            </div>
        </div>

        {/* <div className='border-[1px] border-black w-4/5  mt-24' ></div> */}

    </div>
  )
}

export default Education