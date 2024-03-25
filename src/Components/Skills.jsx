import React from 'react'
import './skills.css'
 
const Skills = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-12' >

    <div className='border-[1px] border-black w-4/5 mt-12 ' ></div>
        <h2 className='text-red text-[13px] mt-16' >MY PROFICIENY SKILLS</h2>
        <h1 className='text-4xl font-[600] text-gray' >My Skills</h1>


        <div className='flex justify-start mt-10 items-start w-[90%] h-full pr-36 text-[1.2rem]' >

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                    <h1 className='text-red text-7xl font-bold' >FRONTED SKILLS</h1>
                        <div className='flex uni'  >

                            <ul>
                                <li>React JS</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Canvas API</li>
                                <li>Tailwind</li>
                            </ul>
                            <ul>
                                <li>Material UI</li>
                                <li>JavaScript</li>
                                <li>Next JS</li>
                                <li>Figma (UI /UX Design Tool)</li>
                            </ul>

                        </div></div>
                    <hr />
                </li>
                <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <h1 className='text-red text-7xl font-bold' >DevOps and Cloud Services:</h1>
                            <div className='flex uni'  >

                                <ul>
                                    <li>Git</li >
                                    <li>GitHub</li>
                                    <li>AWS S3</li>
                                </ul>
                                <ul>
                                    <li>AWS Lambda</li>
                                    <li>AWS EC2</li>
                                    <li>AWS Amplify</li>
                                </ul>

                            </div></div>
                        <hr />
                </li>
                
            </ul>

            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">

                <li>
                    <hr />
                    <div className="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end mb-10">
                    <h1 className='text-red  text-7xl font-bold' >BACKEND DEVELOPMENT</h1>
                        <div className='flex uni'  >

                            <ul>
                                <li>Express</li>
                                <li>NodeJS</li>
                                <li>WebRTC</li>
                                <li>MongoDB</li>
                            </ul>
                            <ul>
                                <li>GraphQL API</li>
                                <li>Socket.io</li>
                                <li>Restful API</li>
                                <li>FireBase</li>
                            </ul>

                        </div></div>
                    <hr />
                </li>
                <li>
                        <hr />
                        <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                        <h1 className='text-red text-7xl font-bold' >Additional Skills:</h1>
                            <div className='flex uni'  >

                                <ul id='spec' >
                                    <li>WordPress (Content Management System)</li >
                                    <li>UI/UX (User Interface / User Experience design principles)</li>
                                </ul>

                            </div></div>
                        <hr />
                </li>
            
            </ul>

        </div>



    </div>
  )
}

export default Skills