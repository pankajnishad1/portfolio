import React from 'react'
import { FaBootstrap, FaCss3Alt, FaGitAlt, FaGithub, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiFramer, SiRedux } from 'react-icons/si'
import cards from '../api/cards.json'

function Skillscards() {
const icons=
    {
        FaHtml5:<FaHtml5 />,
        FaJs:<FaJs />,
        FaReact:<FaReact />,
        SiRedux:<SiRedux />,
        FaCss3Alt:<FaCss3Alt />,
        RiTailwindCssFill:<RiTailwindCssFill />,
        FaBootstrap:<FaBootstrap />,
        FaGithub :<FaGithub  />,
        FaGitAlt :<FaGitAlt  />,
        SiFramer :<SiFramer />,
        img: <img src="/image/gsap.png" className='object-center object-cover h-16 w-16' alt="gsap" />
    }

  return (
    <>
      <div className=' w-full grid grid-cols-3 justify-items-center items-start gap-[5rem] px-10 py-10 bg-black text-white '>
        {cards.map((data,index)=>{
         return (
            <div className='h-auto w-[35rem] bg-[#1e1e1e] px-10 py-14 rounded-3xl' key={index}> 
        <div className='flex flex-wrap gap-16 justify-center pb-10' >
            {data.icons.map((data,index2)=>{
                return(
                         <div className={`flex items-center justify-center bg-[#141414]  text-[#${data.color}] h-24 w-24 rounded-full text-[4rem]`} key={index2}>
                {icons[data.icon]} 
            </div>
                )
            })}
        </div>
        <div>
            <h1>{data.skillname}</h1>
            <p className='text-[#575757]'>{data.skilldetails}</p>
        </div>
      </div>
         )   
        })}
      </div>
    </>
  )
}

export default Skillscards
