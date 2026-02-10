import React from 'react'
import { AiOutlineCode } from 'react-icons/ai';
import { ImFileText2 } from 'react-icons/im';
import { PiCubeFocusLight } from 'react-icons/pi';
import {  RiHome6Line } from 'react-icons/ri';
import { SlSocialLinkedin } from 'react-icons/sl';
import { VscGithubAlt } from 'react-icons/vsc';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav className=' bg-[#171717] text-white flex gap-3 items-center py-3 px-8 rounded-2xl '>
        <NavLink to='/'>
            {(status)=>{
                return(<div className={`h-20 w-20 flex justify-center items-center text-[3rem] bg-[#262626] rounded-full  ${status.isActive?'bg-[#D4D4D4] text-black':''}` }>
                    <RiHome6Line  />
                </div>)
            }}
        </NavLink>
        <NavLink to='/projects'>
            {(status)=>{
                return(<div className={`h-20 w-20 flex justify-center items-center text-[3rem] bg-[#262626] rounded-full  ${status.isActive?'bg-[#D4D4D4] text-black':''}` }>
                    <AiOutlineCode  />
                </div>)
            }}
        </NavLink>
        <NavLink to='/skills'>
            {(status)=>{
                return(<div className={`h-20 w-20 flex justify-center items-center text-[3rem] bg-[#262626] rounded-full  ${status.isActive?'bg-[#D4D4D4] text-black':''}` }>
                    <PiCubeFocusLight  />
                </div>)
            }}
        </NavLink>
        <a href='/Cv.pdf' download='Cv'>
                <div className={`h-20 w-20 flex justify-center items-center text-[3rem] bg-[#262626] rounded-full `}>
                    <ImFileText2  />
                </div>
        </a>
        <NavLink target='_blank' to='https://github.com/pankajnishad1?tab=overview&from=2025-11-01&to=2025-11-30 '>
            {(status)=>{
                return(<div className={`h-20 w-20 flex justify-center items-center text-[3rem] bg-[#262626] rounded-full ` }>
                    <VscGithubAlt  />
                </div>)
            }}
        </NavLink>
        <NavLink target='
        _blank' to='www.linkedin.com/in/pankaj-nishad-7502b0303'>
            {(status)=>{
                return(<div className={`h-20 w-20 flex justify-center items-center text-[3rem] bg-[#262626] rounded-full ` }>
                   <SlSocialLinkedin />
                </div>)
            }}
        </NavLink>
      </nav>
    </>
  )
}

export default Navbar
