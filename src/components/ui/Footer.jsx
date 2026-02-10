import React from 'react'

function Footer() {
  return (
    <footer className='px-10 py-20 bg-black text-white '>
      <div className='relative '>
        <div className=' pb-32 border-b border-solid border-white'>
          <p>That's all for now.</p>
          <h1 className='text-[5rem]'>Got a project in mind?</h1>
          <h1 className='text-[5rem]'>Let’s talk</h1>
      </div>
      <div className='absolute right-32 -bottom-32 top h-64 aspect-square flex items-center justify-center text-2xl text-white  bg-[#455CE9]  rounded-full'>Get in Touch</div>
      </div>
   
      <div className='flex gap-10 pt-32 '>
        <div >
            <p>E-mail</p>
            <h6>Pankajnishad024@gmail.com</h6>
        </div>
        <div>
            <p>Mobile no.</p>
            <h6>(+91) 9716086701</h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer
