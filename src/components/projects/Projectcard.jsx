import React from 'react'
import { PiArrowCircleUpRightThin } from 'react-icons/pi'
import { NavLink } from 'react-router-dom'

function Projectcard({values,index}) {
    const {projectname,projectlink,image,tech,projectdetails}= values
 return (
    <>
       
        {
          index%2===0 ?
          (
            <div className='grid grid-cols-2 gap-10 relative text-black'>
              <div className='absolute h-full w-2 bg-black left-[50%] translate-x-[-50%]'></div>
              <div className='absolute w-20 h-2 bg-black top-[50%] left-[50%] translate-y-[-50%] z-0 '></div>
              <div className='absolute w-10 h-10  rounded-full bg-black top-[50%] left-[49%] translate-y-[-50%] z-0 ' ></div>
               <div className='flex flex-col justify-center gap-4 p-4 py-10'>
                        
                    <h6>
                        {projectname}
                    </h6>
                    <p className=''> <b>Tech</b>-{tech}</p>
                    <p>{projectdetails}</p>

                    <NavLink target='_blank' to={projectlink}  >
                      <button className='py-4 px-16 rounded-xl bg-[#455CE9] text-white '>
                        Visit Now
                      </button>
                    </NavLink>
                </div>

                <div className='p-5 '>
                  <div className=' relative h-[28rem] w-[56rem] rounded-xl overflow-hidden z-30'>
                    <img className='h-full w-full object-cover object-center hover:scale-105 transition-all duration-500  ' src={image} alt={projectname} />
                  </div>
                </div>
            </div>
          ):
          (
            <div className=' relative grid grid-cols-2 gap-10 text-black'>
                             <div className='absolute h-full w-2 bg-black left-[50%] translate-x-[-50%]'></div>
                             <div className='absolute w-20 h-2 bg-black top-[50%] right-[50%] translate-y-[-50%] z-0 '>
                             </div>
                             <div className='absolute w-10 h-10  rounded-full bg-black top-[50%] left-[49%] translate-y-[-50%] z-0 ' ></div>

               <div className='p-5 '>
                  <div className='relative h-[28rem] w-[56rem] rounded-xl overflow-hidden z-30'>
                    <img className='h-full w-full object-cover object-center hover:scale-105 transition-all duration-500 ' src={image} alt={projectname} />
                  </div>
                </div>
               
               <div className='flex flex-col justify-center gap-4 p-4'>
                    <h6>
                        {projectname}
                    </h6>
                    <p className=''> <b>Tech</b>-{tech}</p>
                    <p>{projectdetails}</p>
                    <NavLink target='_blank' to={projectlink}  >
                      <button className='py-4 px-16 rounded-xl bg-[#455CE9] text-white '>
                        Visit Now
                      </button>
                    </NavLink>
                </div>

            </div>
          )
        }

    </>
  )
}

export default Projectcard
