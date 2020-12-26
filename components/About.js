import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center md:flex-row md:h-screen py- bg-gray-100 bg-opacity-20">
      
      
        <div className=" flex  justify-center  items-center md:w-1/2 mb-10 ">
            <div className="px-6">
      <img src="profil.jpg" className="filter-shadow profile-pic" alt="profile" ></img>
      </div>
      <div >
          <h1 className="font-thin">Abderrahim Soubai-Elidrisi</h1>
          <Link href="https://twitter.com/soub4i" ><a className="text-blue-400">@soub4i</a></Link>
      </div>
  </div>
      <div className="flex flex-col justify-center items-start md:w-1/2 p-6">
        <h1 className="text-3xl  font-bold  text-blue-300 mb-6">Hello!</h1>
        <p className=" font-thin  ">
          My Name is Abderrahim Soubai, I'm a fullstack developer, Cloud
          architect and your favorite podcast's host [insert your description
          here ]{" "}
        </p>
      </div>
    </section>
  );
}
