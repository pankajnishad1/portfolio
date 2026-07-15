import React from 'react'
import SkillsSection from '../components/skills/SkillsSection'
import Navbar from '../components/ui/Navbar'

function Skills() {
  return (
    <>
      <div className='h-[91.5vh] w-full flex items-center justify-center px-10 py-10 bg-black text-white '>
        <h1 className='text-[10rem] w-[70%] text-center '>Skills that fuel my passion</h1>
        <div className=' absolute bottom-10 z-10'>
         <div className='absolute bottom-10 left-1/2 -translate-x-1/2'>
                <Navbar />
          </div>
        </div>
      </div>
      <SkillsSection />
    </>
  )
}

export default Skills
