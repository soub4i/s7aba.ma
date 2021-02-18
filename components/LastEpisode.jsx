import Episode from './Episode';

export default function LastEpisode({ episode }) {
    return <>{episode ? <Episode episode={episode} key={episode.guid}></Episode> : null}</>;
}
