import Link from "next/link";
import {useRef,useState} from 'react'
import Image from 'next/image'

export default function Navbar() {
  const nav=useRef(null)
  const [isActive, setActive] = useState(false)
  function handleClick(e)
  {
    
    setActive(!isActive)
  }
    return (
        <header className=" flex flex-row justify-between  md:absolute md:top-0 w-full  z-50  px-6 md:my-0 sm:my-4 my-2 h-14 bg-white ">
          
            <div ><Image src="/logo.png" width={65} height={48}/> </div>
         
            <div className="hidden md:flex flex-row    w-full md:w-1/4  items-center justify-between ">
            <a href="https://www.instagram.com/s7aba_podcast/" target="_blank" ><Image src="/instagram.svg" width={65} height={30}  /></a>
            <a href="https://twitter.com/s7aba_podcast/" target="_blank"><Image src="/twitter.png" width={40} height={30} /></a>
            <a href="https://open.spotify.com/show/1BXjXjq5nn1SGlU23i6wf3?si=ZqP78Ke3Qs2_SSSLKI4fCg" target="_blank"><Image src="/spotify.svg"   width={65} height={30}/></a>
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ZGE2OTJjL3BvZGNhc3QvcnNz?sa=X&ved=0CAIQ9sEGahcKEwjYg8KBg87tAhUAAAAAHQAAAAAQBA" target="_blank"><Image width={65} height={30} src="/google-podcasts.svg"/></a>
              
              <button className="md:hidden self-end " onClick={handleClick}><i className=" fas fa-bars font-extrabold text-gray-700 text-3xl "></i></button>
            </div>
            
          <nav  ref={nav} className={`absolute md:relative md:w-1/2  md:block bg-white md:bg-transparent h-screen w-screen z-50 hidden ${isActive?'active':''}`}>
         
            <ul className="p-4   flex flex-col md:flex-row md:justify-around md:items-start justify-between  items-center   h-full ">
            <button className="md:hidden self-end" onClick={handleClick}><i className=" fas fa-times text-3xl"></i></button>
              <li>
                <Link href="/#home" >
                  <button className= "font-semibold text-gray-700  focus:outline-none hover:text-gray-200" onClick={handleClick}>Home</button>
                </Link>
              </li>
              <li> <Link href="/#about">
                  <button className="font-semibold text-gray-700  focus:outline-none   hover:text-gray-200 " onClick={handleClick}>About Us</button>
                </Link></li>
              <li> <Link href="episodes">
                  <button className="font-semibold text-gray-700 focus:outline-none hover:text-gray-200" onClick={handleClick}>Episodes</button>
                </Link></li>
              <li> <Link href="/#contact">
                  <button className="font-semibold text-gray-700  focus:outline-none  hover:text-gray-200" onClick={handleClick}>Contact Us</button>
                </Link></li>
               
            <a href="https://www.instagram.com/s7aba_podcast/" target="_blank" className="md:hidden"><Image src="/instagram.svg"  width={65} height={36}/></a>
            <a href="https://twitter.com/s7aba_podcast/" target="_blank" className="md:hidden"><Image src="/twitter.svg"  width={65} height={36}/></a>
            <a href="https://open.spotify.com/show/1BXjXjq5nn1SGlU23i6wf3?si=ZqP78Ke3Qs2_SSSLKI4fCg" target="_blank" className="md:hidden"><Image src="/spotify.svg"  width={65} height={48}/></a>
            <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84ZGE2OTJjL3BvZGNhc3QvcnNz?sa=X&ved=0CAIQ9sEGahcKEwjYg8KBg87tAhUAAAAAHQAAAAAQBA" target="_blank" className="md:hidden"><Image  width={65} height={36} src="/google-podcasts.svg"/></a>
              
            </ul>
          </nav>
        </header>
    )
}
