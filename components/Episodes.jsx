import Episode from './Episode';

export default function Episodes({ episodes }) {
    return (
        <>
            <h1 className="text-4xl font-extrabold text-blue-300  py-10  text-center tracking-wide">
                Episodes
            </h1>
            {episodes
                ? episodes.map((episode) => (
                      <Episode episode={episode} key={episode.guid}></Episode>
                  ))
                : null}
        </>
    );
}
