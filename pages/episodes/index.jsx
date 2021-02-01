import { getEpisodes } from '../../services/episodes';
import Episodes from '../../components/Episodes';

function EpisodesPage({ episodes }) {
    return (
        <div>
            <div className="flex flex-wrap md:h-full  items-center h-screen relative justify-center mb-20 pt-20  ">

                    <section id="episodes" className="flex flex-col items-center pb-16">
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
