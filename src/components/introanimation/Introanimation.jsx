import { motion,AnimatePresence } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react'

function Introanimation({onFinish}) {
    const greetings = useMemo(()=> ["Hello", "Hola", "Bonjour",
      "Ciao", "Olá", "Здравствуйте",
      "Merhaba", "Γειά", "Hej", "Hallo", "Salam", "नमस्ते"
],[])

const [visible, setvisible] = React.useState(true);
const [index,setindex] = React.useState(0);

useEffect(()=>{

  if (index < greetings.length - 1) {
    const id = setInterval(() => setindex(i => i + 1), 200);
    return ()=> clearInterval(id);
  } else{
    const t = setTimeout(()=>setvisible(false),500);
    return ()=>clearTimeout(t);
  }
},[ index, greetings.length])


  return (
    <AnimatePresence onExitComplete={onFinish}>
      {visible &&(
     <motion.div className='fixed inset-0 z-[9999] flex items-center justify-center text-white bg-black overflow-hidden'
     initial={{y : 0}}
     exit={{y:"-100%",
      transition:{
        duration : .75,
        ease:[0.22,1,0.36,1]
      }
     }}
     >
        <motion.h1 className='text-7xl font-bold'
        initial ={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:-20}}
        transition={{duration:0.15}}
        >
            {greetings[index]}
        </motion.h1>
     </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Introanimation
