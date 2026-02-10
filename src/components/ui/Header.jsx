import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { motion,AnimatePresence } from 'framer-motion';

function Header() {
  const location=useLocation();
  return (
    <header>
            <div className={` w-full flex justify-between items-center px-[2rem] pt-[1rem]  ${location.pathname=='/projects'?'bg-white text-black': location.pathname=='/skills'?'text-white bg-black':' text-white bg-[#a3a7a8]'}`}>
                <div>
                <motion.h4 
                  initial ={{opacity:0,y:20}}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{duration:1.75}}
                >
                    @ code by Pankaj
                </motion.h4>
                </div>
                <div className='w-[30%] text-end' >
                <motion.p initial ={{opacity:0,y:20}}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{duration:1.75}}
                className='text-[1rem]'>
                    Passionate Creative Developer, dedicated to crafting innovative solutions and exceptional digital experiences through modern technologies
                </motion.p>
                </div>
            </div>
    </header>
  )
}

export default Header
