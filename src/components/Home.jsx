import React, { useEffect } from 'react'
import Dp from "../assets/Dp.png"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import '../App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs'
import { FiPhoneCall } from "react-icons/fi";

const Home = () => {
    useEffect(() => {
        AOS.init({duration: 1000})
    }, [])

    const socialLinks = [
        {
            href: "mailto:kailashmaurya51@gmail.com",
            icon: <HiOutlineMail size={25} />,
            label: "Email"
        },
        {
            href: "https://www.linkedin.com/in/kailash51/",
            icon: <BsLinkedin size={25} />,
            label: "LinkedIn"
        },
        {
            href: "https://www.github.com/kailash51",
            icon: <BsGithub size={25} />,
            label: "GitHub"
        },
        {
            href: "https://www.instagram.com/kailash__51/",
            icon: <BsInstagram size={25} />,
            label: "Instagram"
        }
    ]

    return (
        <div name="home" className='h-auto w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4 md:flex-row text-white'>
                <div className='flex flex-col justify-center'>
                    <img 
                        src={Dp} 
                        alt="my profile" 
                        data-aos="fade-in" 
                        data-aos-duration="500" 
                        className='mt-20 rounded-2xl w-1/3 md:w-1/3 lg:w-1/5 my-5 hover:scale-105 duration-300 sm:ease-in' 
                    />
                    
                    <h2 data-aos="fade-in" data-aos-duration="1000" className='text-4xl sm:text-6xl font-bold text-white'>
                        Kailash Maurya | <span className='animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-5xl font-black'>Front-End Developer</span>
                    </h2>
                    
                    <p data-aos="fade-in" data-aos-delay="400" data-aos-duration="2000" className='text-gray-300 py-4 max-w-xl w-full'>
                    AI & Machine Learning Enthusiast | React.js & Python
                    </p>

                    <div className='flex flex-row gap-2'>
                        <Link 
                            to="experiences" 
                            spy={true}
                            smooth={true} 
                            duration={500} 
                            offset={-80}
                            className='group rounded bg-gradient-to-r from-blue-600 to-cyan-600 w-1/3 h-8 flex items-center justify-center cursor-pointer mt-5 mb-28'
                        >
                            Portfolio
                            <span className='px-2 group-hover:rotate-90 duration-300'>
                                <MdOutlineArrowRightAlt size={25} />
                            </span>
                        </Link>

                        <div className="group relative">
                            <a 
                                href="tel:+919198329925" 
                                className='hover:scale-105 rounded w-auto h-8 px-1 flex items-center justify-center cursor-pointer mt-5 mb-28'
                            >
                                <FiPhoneCall size={25} />
                            </a>
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap mb-2">
                                +91 9198329925
                            </div>
                        </div>

                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                target='_blank'
                                rel="noreferrer"
                                href={link.href}
                                className='group hover:scale-105 rounded w-auto h-8 px-1 flex items-center justify-center cursor-pointer mt-5 mb-28'
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home