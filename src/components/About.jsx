import React, { useEffect } from 'react'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="about" className='w-full h-auto bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-8'>

                    <h2 className='text-4xl  font-bold inline border-b-4 border-gray-500'>About</h2>

                </div>

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-4 ease-in fade-in'>
                Hi, I’m Kailash Maurya — a <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black'>Front-End Developer</span> and AI enthusiast who loves turning ideas into intelligent, scalable products. My interest in tech grew during my engineering journey at Dr. Bhimrao Ambedkar University, Agra, and evolved through hands-on experience at ByteSigma Technologies Pvt. Ltd., where I built engaging web applications and worked on real-world projects.
                </p>
                <br />
                 <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-3 ease-in fade-in'>
                 I enjoy solving complex problems—whether it’s optimizing React apps for better performance, designing ML models for real-world impact, or tackling 500+ DSA challenges on LeetCode and GeeksforGeeks. My work has been recognized at national hackathons, including Hack-a-Sol 3.0 (<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black'>1st place among 3,000 teams</span>) and Smart India Hackathon 2024 (<span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-xl font-black'>Top 6 finalists</span>).
                </p>  
                <br /> 
                 <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-3 ease-in fade-in'>
                 Outside of coding, I’m passionate about strategy-based games and sports like cricket and badminton, which keep my focus sharp and mindset adaptive—qualities I bring to every project I build.
                </p>              
        
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="https://www.dropbox.com/scl/fo/p9lkbt76wsu3bpdekppem/AEyq6imXn0orve2PAxlIGY4?rlkey=2fv6ydknc4ij70m8i778zm1vu&st=leiyafb4&dl=0" target="_blank" rel="noreferrer">Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About