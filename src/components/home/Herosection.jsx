import React from 'react'
import { PiArrowCircleUpRightThin } from 'react-icons/pi'
import { motion,AnimatePresence } from 'framer-motion';
import Navbar from '../ui/Navbar';
function Herosection() {
  return (
    <>
    <div className='relative h-[91.5vh] w-full bg-[#a3a7a8] text-white '>

      <div className=' absolute w-full h-full flex items-center justify-center z-10'>
      <img src="image/1766556152167.png" 
      alt="hero image"
      className='h-[100%] oject-cover oject-center' />
       <div className='absolute z-20 bottom-10 left-1/2 -translate-x-1/2'>
        <Navbar />
      </div>
      </div>
      <motion.div 
      initial ={{opacity:0,y:20}}
      animate={{ y: 0, opacity: 1 }}
      transition={{duration:1.75}}
      className='absolute flex  bottom-[30%] bg-red-10 h-64 w-full z-0 '>
         
      <h1 className=' ml-[6rem] text-[12rem] '>
          Frontend 
      </h1>
      <h1 className=' ml-[14rem] text-[12rem] '>
           Developer 
      </h1>
      </motion.div>
    </div>
    <div 
    className='bg-white px-10 py-8 flex justify-between gap-[30rem] items-center'>
      <h4 >
        I’m a frontend developer driven by curiosity and design thinking. I build digital experiences that are simple, functional, and visually striking—turning ideas into interactive realities with code
      </h4>
      <div>
      <p className='text-end'>
        Creating immersive frontends that feel as good as they look and
        I build responsive, accessible, and delightful digital experiences.
      </p>
      <div className='flex items-center gap-4 mt-4 justify-end'>
        <h5>
          More about me
        </h5>
        <a href="/Cv.pdf" download='More about me'>
          <PiArrowCircleUpRightThin size={30} />
        </a>
      </div>
      </div>
    </div>
    </>
  )
}

export default Herosection
