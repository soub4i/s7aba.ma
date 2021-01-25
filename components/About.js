import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="flex flex-col place-items-center place-content-center md:h-screen  bg-gray-100 bg-opacity-80 py-8 px-2 "
    >
      <h1 className="text-4xl font-extrabold text-blue-300  md:pb-20 pb-6  text-center tracking-wide">
        About Us
      </h1>
      <div className="flex flex-col justify-items-center   md:flex-row w-full md:w-2/3 bg-white rounded shadow-lg  p-4">
        <div className=" flex  justify-center  items-center md:w-1/2 my-10">
          <div className=" filter-shadow profile-pic transform transition duration-500 hover:scale-105">
            <Image
              src="/profil.jpg"
              layout="fill"
              alt="profile"
              className="profile-pic"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-start md:w-1/2 ">
          <h1 className="font-bold ">Abderrahim Soubai-Elidrisi</h1>

          <p className=" font-thin  ">
            My Name is Abderrahim Soubai, I'm a fullstack developer, Cloud
            architect and your favorite podcast's host [insert your description
            here ]{" "}
          </p>
          <Link href="https://twitter.com/soub4i">
            <a className="text-blue-400 text-lg">
              <i class="fab fa-twitter"></i> @soub4i
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
