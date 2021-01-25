import Navbar from '../components/Navbar'
import { getEpisodes } from "../content/episodes"
import Episodes from '../components/Episodes'


function EpisodesPage({episodes}) {
  return (
    <div >
    <div className="flex flex-wrap  md items-center md:h-screen relative justify-center  ">
    <Navbar></Navbar>

    <div className="container">
        <section id="episodes" className="flex flex-col items-center  mt-12 mx-4">
      <Episodes episodes={episodes} />  
    </section> 
  </div> 


    </div>
    </div>
  );
}
EpisodesPage.getInitialProps = async (ctx) => {
  const episodes = await getEpisodes();
  return { episodes }
}


export default EpisodesPage;
