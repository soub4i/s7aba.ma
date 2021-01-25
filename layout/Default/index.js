import { Context } from "../../context";
import { useContext } from "react";
import Player from "../../components/Player";
import CastProvider from "react-chromecast";


function DefaultLayout({ children }) {

    const {  state: { currentEpisode } } = useContext(Context);
     
  return <>
  <CastProvider>
    <Player episode={currentEpisode}></Player>
    { children }
    </CastProvider>
    </>
}

export default DefaultLayout
