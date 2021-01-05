import Link from "next/link";
import {useRef,useState} from 'react'

export default function Navbar() {
  const nav=useRef(null)
  const [isActive, setActive] = useState(false)
  function handleClick(e)
  {
    
    setActive(!isActive)
  }
    return (
        <header className=" flex flex-row justify-between align-center md:absolute md:top-0 w-full  z-50  px-6 md:my-0 sm:my-4 my-2 h-12 ">
          <div className="flex flex-row  justify-between w-full md:w-1/2 " >
            <div className=""> <img alt="logo" src="logo.png" className="max-h-full  object-cover"></img></div>
         
            <div className="hidden md:flex flex-row   justify-between w-full md:w-1/2 px-8  items-end  ">
            <a href="https://www.instagram.com/s7aba_podcast/" target="_blank"><img src="./instagram.svg" className="w-7"/></a>
            <a href="https://twitter.com/s7aba_podcast/" target="_blank"><img src="./twitter.svg" className="w-11 self-center "/></a>
            <a href="https://open.spotify.com/show/1BXjXjq5nn1SGlU23i6wf3?si=ZqP78Ke3Qs2_SSSLKI4fCg" target="_blank"><img src="./spotify.svg" className="w-7"/></a>
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ZGE2OTJjL3BvZGNhc3QvcnNz?sa=X&ved=0CAIQ9sEGahcKEwjYg8KBg87tAhUAAAAAHQAAAAAQBA" target="_blank"><img className="w-7" src="./google-podcasts.svg"/></a>
              </div>
              <button className="md:hidden self-end " onClick={handleClick}><i className=" fas fa-bars font-extrabold text-gray-700 text-3xl "></i></button>
            </div>
            
          <nav  ref={nav} className={`absolute md:relative md:w-1/2  md:block bg-white md:bg-transparent h-screen w-screen z-50 hidden ${isActive?'active':''}`}>
         
            <ul className="p-4   flex flex-col md:flex-row md:justify-around md:items-start justify-between  items-center   h-full ">
            <button className="md:hidden self-end" onClick={handleClick}><i className=" fas fa-times text-3xl"></i></button>
              <li>
                <Link href="#home" >
                  <button className= "font-semibold text-gray-700 md:text-white focus:outline-none hover:text-gray-200" onClick={handleClick}>Home</button>
                </Link>
              </li>
              <li> <Link href="#about">
                  <button className="font-semibold text-gray-700 md:text-white focus:outline-none   hover:text-gray-200 " onClick={handleClick}>About Us</button>
                </Link></li>
              <li> <Link href="#episodes">
                  <button className="font-semibold text-gray-700 md:text-white focus:outline-none hover:text-gray-200" onClick={handleClick}>Episodes</button>
                </Link></li>
              <li> <Link href="#contact">
                  <button className="font-semibold text-gray-700 md:text-white focus:outline-none  hover:text-gray-200" onClick={handleClick}>Contact Us</button>
                </Link></li>
               
            <a href="https://www.instagram.com/s7aba_podcast/" target="_blank" className="md:hidden"><img src="./instagram.svg" className="w-7"/></a>
            <a href="https://twitter.com/s7aba_podcast/" target="_blank" className="md:hidden"><img src="./twitter.svg" className="w-11 self-center "/></a>
            <a href="https://open.spotify.com/show/1BXjXjq5nn1SGlU23i6wf3?si=ZqP78Ke3Qs2_SSSLKI4fCg" target="_blank" className="md:hidden"><img src="./spotify.svg" className="w-7"/></a>
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ZGE2OTJjL3BvZGNhc3QvcnNz?sa=X&ved=0CAIQ9sEGahcKEwjYg8KBg87tAhUAAAAAHQAAAAAQBA" target="_blank" className="md:hidden"><img className="w-7" src="./google-podcasts.svg"/></a>
              
            </ul>
          </nav>
        </header>
    )
}
