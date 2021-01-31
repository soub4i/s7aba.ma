import { getEpisodes, getEpisode } from '../../services/episodes';
import EpisodeDetails from '../../components/EpisodeDetails';
import { getEpisodeNotes } from '../../services/notes';

function EpisodePage(props) {
    return (
        <div className="my-12 grid justify-items-stretch">
            
                    <section id="episodes" className="flex flex-col items-center " >
                        {props && props.episode ? <EpisodeDetails {...props} /> : null}
                    </section>
            </div>
    );
}
export const getStaticProps = async ({ params }) => {
    const episode = await getEpisode(params.id);
    const notes = await getEpisodeNotes(params.id);
    return {props: { episode, notes }};
};

export const getStaticPaths = async () => {
    const episodes = await getEpisodes();
    const ids = episodes.map(episode => episode.guid)
    const paths = ids.map(id => {
        return { params : { id } }
    })
    return { paths, fallback: false };
};
export default EpisodePage;
