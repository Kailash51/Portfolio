import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experiences = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div name="experiences" className='w-full h-auto bg-gradient-to-b from-black to-gray-800 text-white pb-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto'>
                <div className='pb-4'>
                    <h2 className='text-4xl font-bold inline border-b-4 border-blue-500 hover:border-purple-500 transition-colors duration-300'>Experiences</h2>
                    <p className='py-6 text-gray-300'>My professional journey and contributions:</p>
                </div>

                <div className='space-y-8'>
                    <div data-aos="fade-up" className='bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500'>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                            <h3 className='text-2xl font-bold text-blue-400'>Infosys</h3>
                            <h6 className='text-purple-400 font-medium'>November 2024 – January 2025</h6>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between mb-4">
                            <p className='text-emerald-400 font-semibold'>Artificial Intelligence Intern</p>
                            <p className='text-gray-400'>Remote, India</p>
                        </div>
                        <ul className='space-y-3 text-gray-300'>
                            <li className='flex items-start'>
                                <span className='text-blue-400 mr-2'>•</span>
                                <span>Developed and implemented an advanced healthcare application using React Native, incorporating NLP-based prioritization with Universal Sentence Encoder (USE), achieving 90% accuracy in patient urgency classification and significantly improving emergency response times.</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-blue-400 mr-2'>•</span>
                                <span>Created a sophisticated multilingual (Hindi/English) chatbot powered by LLM technology, resulting in a 40% reduction in non-critical patient queries and enhanced automated symptom analysis capabilities.</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-blue-400 mr-2'>•</span>
                                <span>Implemented high-performance patient case tagging system using TensorFlow.js, achieving sub-200ms response times and streamlining nurse workflows through seamless React Native and Node.js integration.</span>
                            </li>
                        </ul>
                    </div>

                    <div data-aos="fade-up" className='bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 hover:border-blue-500'>
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                            <h3 className='text-2xl font-bold text-blue-400'>ByteSigma Technologies Pvt. Ltd.</h3>
                            <h6 className='text-purple-400 font-medium'>July 2024 – August 2024</h6>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between mb-4">
                            <p className='text-emerald-400 font-semibold'>Front-End Developer Intern</p>
                            <p className='text-gray-400'>Maharashtra, India</p>
                        </div>
                        <ul className='space-y-3 text-gray-300'>
                            <li className='flex items-start'>
                                <span className='text-blue-400 mr-2'>•</span>
                                <span>Spearheaded development of I'M Possible Training platform's front-end, implementing real-time progress tracking and intuitive navigation features that drove a 30% increase in user engagement metrics.</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-blue-400 mr-2'>•</span>
                                <span>Architected and deployed comprehensive course catalogs and personalized dashboard systems, resulting in 30% improvement in user learning efficiency and overall platform satisfaction rates.</span>
                            </li>
                            <li className='flex items-start'>
                                <span className='text-blue-400 mr-2'>•</span>
                                <span>Engineered interactive community forums and integrated Zoho SalesIQ chatbot functionality, implementing data-driven features that increased user engagement and participation by 40%.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experiences;