import React, { useEffect } from 'react'
import Ide from '../assets/projects/ide.png'
import Amazon from '../assets/projects/Amazon.png'
import Compress from '../assets/projects/File compression.png'
import Sales from '../assets/projects/Sales Insights.png'
import RoadConnectivity from '../assets/projects/Road Connectivity.png'
import FET from '../assets/projects/FET.png'


import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
  })

  const Projects = () => [
    {
      id: 1,
      src: FET,
      desc: "Faculty Excellence Tracker (FET) enhances faculty career advancement by providing data-driven insights and automating evaluations to foster continuous professional growth.",
      demo: "https://faculty-excellence-tracker.vercel.app/",
      code: "https://github.com/Kailash51/Faculty-Excellence-Tracker-FET-"
    },
    {
      id: 2,
      src: RoadConnectivity,
      desc: "Optimizing road planning in rural, hilly regions will enhance connectivity, drive economic growth, and improve access to vital services.", 
      demo: "https://hack-a-sol-3-0-9dsj.onrender.com/",
      code: "https://github.com/Kailash51/Hack-A-Sol-3.0"
    },
    {
      id: 3,
      src:Compress, 
      desc: "File compression involves the process of compressing and decompressing data using Huffman coding, an efficient algorithm for reducing file sizes...",
      demo: "https://github.com/Kailash51/AlgoZip",
      code: "https://github.com/Kailash51/AlgoZip"
    },
    {
      id: 4,
      src: Ide,
      desc: "CodifyHub is a code editor built using ReactJS, CSS, the Context API service, and the CodeMirror library, providing a powerful and efficient development environment.", 
      demo: "https://kailash51.github.io/CodifyHub/",
      code: "https://github.com/Kailash51/CodifyHub"
    },
    {
      id: 5,
      src: Amazon,
      desc: "This is an e-commerce website, an Amazon clone, developed using HTML and CSS for a seamless online shopping experience.",
      demo: "https://amazon-clone-tau-taupe.vercel.app/",
      code: "https://github.com/Kailash51/Amazon-clone"
    },
    {
      id: 6,
      src: Sales,
      desc: "Sales Insights is an interactive dashboard created using Power BI and SQL, providing valuable data-driven insights for informed decision-making...",
      demo: "https://github.com/Kailash51/Sales-Insights",
      code: "https://github.com/Kailash51/Sales-Insightsr"
    },
  ]

  return (
    <div name="projects" className='py-5 bg-gradient-to-b from-gray-800 to-black w-full h-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='mt-20'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (
              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg flex flex-col h-full'>
                <div className='flex-grow'>
                  <img src={src} alt="Project" className='rounded-md duration-200 hover:scale-105 w-full h-48 object-cover' />
                  <p className='p-2 text-justify font-extralight'>{desc}</p>
                </div>
                <div className='flex items-center justify-between px-4 pb-4'>
                  <button className='flex-1 mx-2 py-2 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo} target="_blank" rel="noopener noreferrer" className='block w-full text-center'>Demo</a>
                  </button>
                  <button className='flex-1 mx-2 py-2 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code} target="_blank" rel="noopener noreferrer" className='block w-full text-center'>Code</a>
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects