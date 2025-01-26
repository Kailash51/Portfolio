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

                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                Hey! I’m Kailash 👋
A developer who believes code should solve problems, not create them. My journey began in 2021 when I started my engineering degree, but it truly took flight when I built AlgoZip – a Huffman encoding-based file compressor that shrinks data by 60-70%. Since then, I’ve:

🔥 Engineered AI systems like Infosys’ healthcare app (90% urgency classification accuracy)
🚀 Scaled platforms at ByteSigma, boosting user engagement by 40% with React/Zoho integrations
🏆 Led teams to 1st place among 3,000 teams at Hack-a-Sol 3.0. 
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                🏏 Sports Strategist & Puzzle Architect: A cricket fanatic who deciphers game tactics like algorithms, analyzing bowling strategies and mastering the nuances of the sport. A badminton player who thrives on balancing agility with patience, I bring the same precision and focus to solving LeetCode hard problems, logic puzzles, and real-world system design challenges. Breaking down complexity, whether on the field or in problem-solving, is my superpower.
                </p>
                
                <div data-aos="zoom-in" data-aos-duration="500" className='mb-20 fade-in flex mx-auto items-center justify-center hover:scale-105 duration-300 rounded bg-gradient-to-b from-cyan-500 to-blue-500 lg:w-1/5 md:w-1/5 w-2/4 h-10 text-center cursor-pointer mt-10 gap-2'>


                    <AiOutlineCloudDownload />
                    <a href="https://www.dropbox.com/scl/fo/r1yzjncf3od8pjmpyje8s/AKA_6XL5pZ6vbEL04RjFHlk?rlkey=p3l47y8iy2p7s588l5f62h03t&st=q3qnwrey&dl=0" target="_blank" rel="noreferrer">Download CV</a>
                </div>
            </div>
        </div>
    )
}

export default About