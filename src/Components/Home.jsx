import React from 'react'
import { FaRegUser } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import anshul from './anshul.jpeg'
import './Home.css'
    
const Home = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const generatePDF = () => {
        const pdfUrl = './resume.pdf';
      
        fetch(pdfUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to download PDF file');
            }
            return response.blob();
          })
          .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'Resume_Anshul_Goyal.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            alert('Resume Downloaded Successfully!');
          })
          .catch(error => {
            console.error('Error downloading PDF:', error);
            alert('Failed to download PDF. Please try again later.');
          });
      };
      

  return (
    <>
        <div id='main' className='flex justify-center items-center pb-12 pt-44 pl-36 pr-44' >
            <div id='mainC' className='flex flex-col w-[49%] px-12 gap-7 drop-shadow-white' >
                <div id='one' className=' h-[50vh] drop-shadow-4xl rounded-xl'>
                    <div className='w-full  h-full bg-blueTheme rounded-xl p-7 flex flex-col justify-between gap-4' >
                        <p className='bg-[#4d1d30] p-2 rounded-full w-fit  h-[16%]' >
                            <p className='p-2 border-2 bg-red rounded-full border-red w-fit'><FaRegUser className='bg-red' /></p>
                        </p>

                        <div className=' h-[40%] flex flex-col gap-1 ' >
                            <h1 id='name' className='text-[2.8vw] font-[600]  h-[58%] ' >Hi, I'm <span className='text-red' >Anshul Goyal</span></h1>
                            <p id='nameD' className='text-gray-light  h-[42%] text-[1vw]' >I'm a Full Stack Web Developer, a Competitive Programmer & an Open Source Enthusiast.</p>
                        </div>

                        <div className='flex flex-col justify-evenly  h-[45%]' >
                            <p className='flex gap-5 text-base hover:cursor-pointer '   onClick={() => window.open('https://github.com/AnshulGoyal589','_blank')}   ><FaGithub className='text-red text-6xl'/><span id='oneDD' >https://github.com/AnshulGoyal589</span></p>
                            <p className='flex gap-5 text-base hover:cursor-pointer '   onClick={() => window.open('https://www.linkedin.com/in/anshul-goyal-a9b537254','_blank')}   ><CiLinkedin className='text-red text-2xl' /><span id='oneDD' >https://www.linkedin.com/in/anshul-goyal-a9b537254</span></p>
                            <p className='flex gap-5 text-base hover:cursor-pointer '   onClick={() => window.open('tel:+918168079094','_blank')}   ><IoCallOutline className='text-red text-6xl' /><span id='oneDD' >+91 81680 79094</span></p>
                            <p className='flex gap-5 text-base hover:cursor-pointer '   onClick={() => window.open('mailto:anshulgoyal589@gmail.com','_blank')}  ><CiMail className='text-red text-2xl' /><span id='oneDD' >anshulgoyal589@gmail.com</span></p>

                        </div>
                    </div>  
                </div>
                <div id='two' className=' h-[18vh] drop-shadow-4xl rounded-xl'>
                    <div className='w-full  h-full bg-blueTheme rounded-xl p-5' >
                    <p id='twoC1' className='text-gray-light text-6xl ml-2' >Download my Resume</p>
                    <div  className='flex justify-start items-center gap-7 mt-2' >
                        <div className='rounded-xl drop-shadow-4xl ' >
                            <div id='twoC2' className='bg-blueTheme rounded-xl  py-2 px-5 w-full  h-full text-red text-base hover:cursor-pointer ' onClick={generatePDF} >DOWNLOAD</div>
                        </div>
                        <div onClick={() => scrollToSection('contact')}  className='rounded-xl drop-shadow-4xl ' >
                            <div id='twoC2' className='bg-blueTheme rounded-xl  py-2 px-5 w-full  h-full text-red text-base hover:cursor-pointer' >CONTACT ME</div>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </div>
            <div id='three' className='w-[45%] drop-shadow-4xl h-128 rounded-xl' >
                <div className='w-full  h-full bg-blueTheme rounded-xl py-8 px-[6.5vw]' >
                    <img className='w-full h-full rounded-xl' src={anshul} alt="" />
                </div>
            </div>

        </div>
        {/* <div className='border-[1px] border-black w-4/5 ml-44 mt-10' ></div> */}
    </>
  )
}

export default Home