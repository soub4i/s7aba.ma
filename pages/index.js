import Navbar from '../components/Navbar'
import Link from 'next/link'
import About from "../components/About"
import Episode from "../components/Episode"
import Contact from "../components/Contact"
import { getEpisodes } from "../content/episodes"


function HomePage({episodes}) {
  return (
     <div >
      <div className="flex flex-wrap  md items-center md:h-screen relative justify-center  ">
      <Navbar></Navbar>
      <div className=" h-1/3 md:w-1/2 flex flex-col  items-center content-center justify-between py-20 md:py-0 order-3 md:order-none" id="home">
            <div className="text-center">
              <span className="uppercase ">Minimalist Cloud Podcast</span>
              <p className="text-3xl  font-bold pt-2 gradient-text">
                Powered by Moroccan Darija & Tea
              </p>
            </div>
          <Link href="#about">
       <button className="hidden md:block border-solid border-blue-300 border-2 rounded-full px-3 py-1 focus:outline-none  hover:border-blue-200 my-10"><i className="fas fa-arrow-down text-xl text-blue-300"></i></button>
       </Link>
        
      </div >
      <div className=" w-full md:w-1/2 md:h-screen relative bg-blue-300 ">
      <h1 className=" text-4xl sm:text-6xl font-bold mt-16 absolute  top-2 md:top-32 sm:top-20  left-4 md:left-2 text-white z-20">S7aba Podcast</h1>
      <h1 className="text-4xl sm:text-6xl font-bold mt-16 absolute top-12  md:top-52  sm:top-36 right-4 md:right-2 text-white z-20">سحابة بودكاست</h1>
        <img
          src="https://source.unsplash.com/_alEmiTYyYk/1600x900"
          className="h-full md:h-screen w-full filter-grayscale object-fit"
          alt=""
        />
      
      </div>
    </div>
    
  <About></About>  
<section id="episodes" className="flex flex-col items-center"> {episodes.map((episode)=>{
  return <Episode episode={episode} key={episode.guid}></Episode>
})}</section>
<Contact></Contact>
    </div>
  );
}
HomePage.getInitialProps = async (ctx) => {
  const episodes = await getEpisodes();
  return { episodes }
}


export default HomePage;
