import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    GitHub <FaGithub size={25} />
                </>
            ),
            href: "https://github.com/Kailash51",
            style: "rounded-tr-md"
        },
        {
            id: 2,
            child: (
                <>
                    LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: "https://www.linkedin.com/in/kailash51/",
        },
        {
            id: 3,
            child: (
                <>
                    Mail <HiOutlineMail size={25} />
                </>
            ),
            href: "mailto:kailashmaurya51@gmail.com",
        },
        {
            id: 4,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={25} />
                </>
            ),
            href: "https://www.dropbox.com/scl/fo/r1yzjncf3od8pjmpyje8s/AKA_6XL5pZ6vbEL04RjFHlk?rlkey=p3l47y8iy2p7s588l5f62h03t&st=q3qnwrey&dl=0",
            style: "rounded-br-md"
        },
    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                {links.map(({id, child, href, style}) => (
                    <li key={id}
                        className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300" + style}>
                        <a href={href}
                           className="flex justify-between items-center w-full text-white"
                           target="_blank"
                           rel="noreferrer">
                            {child}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SocialLinks