import React from 'react'
import Projectcard from './Projectcard'

const projectarr = [
  {
    projectname: "Music Player",
    projectlink: "https://moonlit-tartufo-e2e8b6.netlify.app",
    image: "image/musicplayer.png",
    tech: "React, Redux, Tailwind",
    projectdetails:
      "A music and podcast player featuring latest songs like 'Ishq Hai', 'Sahiba', and curated podcasts. Includes navigation for Music, Podcast, and personal library with a Now Playing section." // 
  },
  {
    projectname: "World Atlas",
    projectlink: "https://phenomenal-unicorn-132827.netlify.app/",
    image: "image/worldatlas.png",
    tech: "React, API, Tailwind",
    projectdetails:
      "An interactive atlas to explore countries worldwide. Provides capital, population, and cultural facts (e.g., Nepal’s Mount Everest, Egypt’s Pyramids, Australia’s Great Barrier Reef). Includes search, filter, and sorting features." // 
  },
  {
    projectname: "E-commerce",
    projectlink: "https://euphonious-duckanoo-1a1cfd.netlify.app",
    image: "image/E-commerce.png",
    tech: "HTML, CSS, JavaScript",
    projectdetails:
      "A shopping platform showcasing featured products across categories like fashion, electronics, and appliances. Includes product listings with images, prices, and add-to-cart functionality (e.g., Men’s T-shirt ₹799, Gaming PC ₹69,999)." // 
  },
  {
    projectname: "Weather App",
    projectlink: "https://pankaj-weather-api-project.netlify.app/",
    image: "image/weather.png",
    tech: "HTML, CSS, JavaScript",
    projectdetails:
      "A weather application fetching live data via API. Displays temperature, feels-like conditions, humidity, wind speed, and pressure for user-specified locations." // 
  },
];


function ProjectSection() {
  return (
    <>
    <div className='px-10 py-20'>
       
         <div className='relative px-10 flex justify-center items-center'>
            <div>
                 <h1 className='text-[5rem] '>Impressive Works</h1>
            </div>

            <div className=' absolute w-[34%] h-2 bg-black bottom-0 left-[50%] translate-x-[-50%]'>
            </div>
        </div>
            {projectarr.map((data,index)=>{          
                return(
                    <Projectcard key={index} values={data} index={index}  />)
                })}        
    </div>
    </>
  )
}

export default ProjectSection