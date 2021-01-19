import Episode from './Episode'

export default function Episodes({episodes}) {
    return (
        <>

            { episodes ? episodes.map((episode)=><Episode episode={episode} key={episode.guid}></Episode>) : null}
        
        </>
    )
}
