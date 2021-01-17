import Link from "next/link";
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="flex flex-col justify-center md:h-screen  bg-gray-100 bg-opacity-20 py-8 ">
       <h1 className="text-4xl font-extrabold text-blue-300  pb-10  ">About Us</h1>
      <div className="flex flex-col items-center   md:flex-row  w-2/3">
     
      
        <div className=" flex  justify-center  items-center md:w-1/2 my-10 ">
            <div className=" filter-shadow profile-pic ">
      <Image src="/profil.jpg" layout='fill' alt="profile" className="profile-pic"/>
      </div>
     
  </div>
      <div className="flex flex-col justify-center items-start md:w-1/2 ">
      
          <h1 className="font-thin">Abderrahim Soubai-Elidrisi</h1>
     
        <p className=" font-thin  ">
          My Name is Abderrahim Soubai, I'm a fullstack developer, Cloud
          architect and your favorite podcast's host [insert your description
          here ]{" "}
        </p>
        <Link href="https://twitter.com/soub4i" ><a className="text-blue-400">@soub4i</a></Link>
      </div>
      </div>
    </section>
  );
}
