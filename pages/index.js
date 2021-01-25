import React from "react";
import Navbar from '../components/Navbar'
import Link from 'next/link'
import About from "../components/About"
import Contact from "../components/Contact"
import { getEpisodes } from "../content/episodes"
import LastEpisode from '../components/LastEpisode'
import TopThree from '../components/TopThree';


function HomePage({episodes, lastEpisode}) {
 
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-wrap   items-center h-screen relative justify-center  overflow-hidden ">
        <div className="blur-effect"> </div>
        <div className="w-full h-full">
        <img src="cloud1.png" className='absolute bottom-0 animate-cloud  w-3/4 ' style={{"--i":1}} />
        <img src="cloud2.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":2}}/>
        <img src="cloud3.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":3}}/>
        <img src="cloud4.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":4}}/>
        <img src="cloud5.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":5}}/>
        <img src="cloud1.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":10}}/>
        <img src="cloud2.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":9}}/>
        <img src="cloud3.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":8}}/>
        <img src="cloud4.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":7}}/>
        <img src="cloud5.png" className='absolute bottom-0  animate-cloud  w-3/4 ' style={{"--i":6}}/>
        </div>
        <div className="text-center absolute  py-16 px-8 ">
          <span className="uppercase text-xl text-white ">
            Minimalist Cloud Podcast
          </span>
          <p className="text-4xl  font-bold py-2 gradient-text  ">
            Powered by Moroccan Darija & Tea
          </p>
          
        </div>
      </div>

      

      <About/> 

        <section id="episodes" className="flex flex-col items-center mx-4">
        <h1 className="text-4xl font-extrabold text-blue-300  pb-6 pt-6  text-center tracking-wide ">Last Episode</h1>
         <LastEpisode episode={lastEpisode} />  
          <h1 className="text-4xl font-extrabold text-blue-300  pb-6 pt-6 text-center tracking-wide">Top 3 Episodes</h1>
          <div >
          <TopThree episodes={episodes} />  
          </div>
        </section> 


      <Contact></Contact>
    </div>
  );
}

HomePage.getInitialProps = async (ctx) => {
  const episodes = await getEpisodes();
  return { episodes :  episodes.slice(Math.max(episodes.length -3, 0)) , lastEpisode : episodes[0]  }
}


export default HomePage;
