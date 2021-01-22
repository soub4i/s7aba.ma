import { Context } from "../../context";
import { useContext } from "react";
import Player from "../../components/Player";


function DefaultLayout({ children }) {

    const {  state: { currentEpisode } } = useContext(Context);
     
  return <>
    <Player episode={currentEpisode}></Player>
    { children }
    </>
}

export default DefaultLayout
