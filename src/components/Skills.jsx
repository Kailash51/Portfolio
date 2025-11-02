import React, { useEffect } from 'react'
import Cpp from '../assets/skills/cpp.png'
import javascript from '../assets/skills/javascript.png'
import SQL from '../assets/skills/SQL img.png'
import ML from '../assets/skills/ML.png'
import MongoDB from '../assets/skills/MongoDB.jpg'
import Flask from '../assets/skills/Flask.png'
import react from '../assets/skills/react.png'
import tailwind from '../assets/skills/tailwind.png'
import python from '../assets/skills/python.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const techs = () => [
        {
            id: 1,
            scr: react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 2,
            scr: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 3,
            scr: ML,
            title: 'ML',
            style: 'shadow-blue-500'
        },
        {
            id: 4,
            scr: MongoDB,
            title: 'MongoDB',
            style: 'shadow-green-600'
        },
        {
            id: 5,
            scr: Flask,
            title: 'Flask',
            style: 'shadow-red-500'
        },
        {
            id: 7,
            scr: python,
            title: 'Python',
            style: 'shadow-cyan-800'
        },
        {
            id: 9,
            scr: Cpp,
            title: 'Cpp',
            style: 'shadow-blue-400'
        },
        {
            id: 8,
            scr: SQL,
            title: 'SQL',
            style: 'shadow-orange-800'
        },
        {
            id: 6,
            scr: tailwind,
            title: 'Tailwind',
            style: 'shadow-yellow-800'
        }
        
    ]

    return (
        <div name="skills" className='pt-20 pb-20 bg-gradient-to-b from-black to-gray-800 text-white w-full h-full' >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full '>
                <div className='mb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400  ' >Skills</p>
                    <p className='py-5'>This are the technologies I've worked with</p>
                </div>

                <div className='w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        techs().map(({ id, scr, title, style }) => (

                            <div data-aos="zoom-in" data-aos-duration="500" key={id} className={`shadow-md hover:scale-105 duration-500 py-5 rounded-lg ${style}`}>
                                <img src={scr} alt="" className='w-20 mx-auto' />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Skills;