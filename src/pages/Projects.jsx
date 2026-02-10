import React from 'react'
import ProjectSection from '../components/projects/ProjectSection'
import { useNavigate } from 'react-router-dom'
import { IoIosArrowRoundBack } from 'react-icons/io'

function Projects() {
  const navigate =useNavigate()
      const gobackhandler =()=>{
      navigate('/');
    }
  return (
    <div >
        <button className='pl-10' onClick={gobackhandler}>
                          <span className='text-black text-[3rem] '>
                            <IoIosArrowRoundBack />
                          </span>
                        </button> 
      <div className='h-[76vh] flex flex-col justify-center px-10'>
        <h1 className='text-[5rem] w-[50%] '>Welcome to my universe of wild ideas and awesome creations</h1>
      </div>
      <ProjectSection />
    </div>
  )
}

export default Projects
