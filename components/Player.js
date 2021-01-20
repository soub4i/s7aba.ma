import Episode from "./Episode";

export default function Player({episode}) {
    return (
        <>
            { episode ? <div style={{
                    position: "fixed",
                    top: "4em",
                    left: "1em",
                    zIndex:"99999"
            }}>   {<Episode play={true} episode={episode}></Episode>}</div> : null}
        
        </>
    )
}