import { getEpisodes } from '../../services/episodes';
import Episodes from '../../components/Episodes';

function EpisodesPage({ episodes }) {
    return (
        <div>
            <div className="flex flex-wrap  md items-center md:h-screen relative justify-center  ">

                    <section id="episodes" className="flex flex-col items-center  mt-12 mx-4">
                        <Episodes episodes={episodes} />
                    </section>
            </div>
        </div>
    );
}
EpisodesPage.getInitialProps = async (ctx) => {
    const episodes = await getEpisodes();
    return { episodes };
};

export default EpisodesPage;
