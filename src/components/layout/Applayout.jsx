import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../ui/Header'
import Navbar from '../ui/Navbar'
import Footer from '../ui/Footer';
import Introanimation from '../introanimation/Introanimation';


function Applayout() {
    const location=useLocation();
    const [introdone,setintrodone] = React.useState(false);
    const onfinish=()=>setintrodone(true)
  return (
    <>
     {!introdone && 
      (<Introanimation onFinish={onfinish}/>)
    }
    {introdone && (
    <div className=' h-auto w-[125.6rem] m-auto '>
   
      <Header />
      <Outlet />
      {/* {location.pathname=='/projects'?'':
      <div className='absolute z-20 bottom-10 left-1/2 -translate-x-1/2'>
        <Navbar />
      </div>} */}
      <Footer/>
    </div>)}
    </>
  )
}

export default Applayout
