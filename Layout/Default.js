import { useContext } from "react";
import Player from "../components/Player";
import { Context } from "../context";

export default function DefaultLayout({ children }) {
    const { state : { currentEpisode } } = useContext(Context);
    return <>
    <Player episode={currentEpisode} />
    { children }
      </>
  }