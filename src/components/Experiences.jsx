import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experiences = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    return (
        <div name="experiences" className='w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-4'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-gray-500'>Experiences</h2>
                    <p className='py-6'>Here are some of my professional experiences:</p>
                </div>
                <div className='space-y-4 mb-20 '>
                    <div data-aos="fade-up" className='bg-gray-700 p-4 rounded-lg'>
                        <h3 className='text-xl font-semibold'>Web Developer</h3>
                        <div className="flex justify-between">
                            <p className='text-gray-400'>Freelancer</p>
                            <p className='text-gray-400'>maharashtra</p>
                        </div>
                        <p className='text-gray-400'>2022 - Present</p>
                        <ul className='list-disc list-inside text-gray-300'>
                            <li>Developing responsive websites for clients using React and Tailwind CSS</li>
                            <li>Managing client relationships and delivering projects on time</li>
                            <li>Implementing SEO best practices and performance optimizations</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200" className='bg-gray-700 p-4 rounded-lg'>
                        <h3 className='text-xl font-semibold'>Open Source Contributor</h3>
                        <div className="flex justify-between">
                            <p className='text-gray-400'>Freelancer</p>
                            <p className='text-gray-400'>maharashtra</p>
                        </div>
                        <p className='text-gray-400'>2023</p>
                        <ul className='list-disc list-inside text-gray-300'>
                            <li>Contributing to open source projects under GSOC program</li>
                            <li>Collaborating with global developers and mentors</li>
                            <li>Learning and implementing new technologies</li>
                        </ul>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400" className='bg-gray-700 p-4 rounded-lg'>
                        <h3 className='text-xl font-semibold'>Content Creator</h3>
                        <div className="flex justify-between">
                            <p className='text-gray-400'>Freelancer</p>
                            <p className='text-gray-400'>maharashtra</p>
                        </div>
                        <p className='text-gray-400'>2021 - Present</p>
                        <ul className='list-disc list-inside text-gray-300'>
                            <li>Creating educational content about programming and technology</li>
                            <li>Building an engaged community of tech enthusiasts</li>
                            <li>Sharing knowledge and experiences in the tech field</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;