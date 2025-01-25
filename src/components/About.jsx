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
                    I embarked  my journey as a B.E Computer Science & Engineering student at Dr. Bhimrao Ambedkar University, Agra in 2021. Along the way, I fearlessly explored various fields, including Graphic Designing, Content Creation, Freelancing, and Sports. I delved into the world of cutting-edge technologies, such as C++, Java, React, Flutter, and SQL. 
                </p>
                <br />
                <p data-aos="slide-up" data-aos-duration="500" className='text-xl mt-5 ease-in fade-in'>
                I've worked for few projects for my clients as well as my personal projects. I also contributed for the GSOC. I have a Instagram page (kailash__51). I have learning attitude and growth mindset which helps me to collaborate with people and work for the society.
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