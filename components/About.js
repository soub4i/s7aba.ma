import Link from "next/link";
import Image from 'next/image'
import Config from '../config'

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center md:flex-row md:h-screen py- bg-gray-100 bg-opacity-20">
      
      
        <div className=" flex  justify-center  items-center md:w-1/2 my-10 ">
            <div className="px-8 mx-4 filter-shadow profile-pic ">
      <Image src={Config.hostAvatar} layout='fill' alt="profile" className="profile-pic"/>
      </div>
      <div >
          <h1 className="font-thin">{Config.hostName}</h1>
          <Link href={"https://twitter.com/" + Config.hostTwitter} ><a className="text-blue-400">@{Config.hostTwitter}</a></Link>
      </div>
  </div>
      <div className="flex flex-col justify-center items-start md:w-1/2 p-6">
        <h1 className="text-3xl  font-bold  text-blue-300 mb-6">Hello!</h1>
        <p className=" font-thin  ">
        {Config.hostDescription}
        </p>
      </div>
    </section>
  );
}
