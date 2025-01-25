import React, { useEffect, useState } from 'react'
import SIH from '../assets/Achievement/SIH.jpg'
import Hackasol from '../assets/Achievement/Hackasol.jpg'
import Hackathon1 from '../assets/Achievement/Hack-A-Sol 3.0 winner.jpg'
import Hackathon2 from '../assets/Achievement/Smart India Hackathon 2025 Finalist.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Achievements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [certificateSrc, setCertificateSrc] = useState('')

  useEffect(()=> {
    AOS.init({duration: 1000})
  })

  const achievements = [
    {
      id: 1,
      src: SIH,
      desc: "Grand Finalist - Smart India Hackathon 2024",
      demo: "https://faculty-excellence-tracker.vercel.app/",
      certificate: Hackathon2
    },
    {
      id: 2,
      src: Hackasol,
      desc: "Winner - Hack-A-Sol 3.0 (AI/ML Track)", 
      demo: "https://hack-a-sol-3-0-9dsj.onrender.com/",
      certificate: Hackathon1
    }
  ]

  const openModal = (src) => {
    setCertificateSrc(src)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setCertificateSrc('')
  }

  return (
    <div name="achievement" className='py-5 bg-gradient-to-b from-gray-800 to-black w-full h-auto text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div >
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Achievements</h2>
          <p className='py-6'>Check out some of my Achievements</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0'>
          {
            achievements.map(({ id, src, desc, demo, certificate }) => (
              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg flex flex-col h-full p-4'>
                <div className='flex-grow'>
                  <img src={src} alt="Achievement" className='rounded-md duration-200 hover:scale-105 w-full h-64 object-cover' />
                  <p className='p-2 text-justify font-extralight'>{desc}</p>
                </div>
                <div className='flex items-center justify-between px-4 pb-4'>
                  <button className='flex-1 mx-2 py-2 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo} target="_blank" rel="noopener noreferrer" className='block w-full text-center'>Demo</a>
                  </button>
                  <button className='flex-1 mx-2 py-2 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md' onClick={() => openModal(certificate)}>
                    View Certificate
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {/* Modal for Certificate */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg w-full max-w-3xl mx-auto">
            <button 
              onClick={closeModal} 
              className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-800" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              </svg>
            </button>
            <div className="p-2">
              <img 
                src={certificateSrc} 
                alt="Certificate" 
                className="w-full h-auto object-contain rounded-lg"
                style={{maxHeight: '80vh'}} 
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Achievements