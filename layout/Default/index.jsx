import { Context } from '../../context';
import { useContext } from 'react';
import Player from '../../components/Player';
import Navbar from '../../components/Navbar';

function DefaultLayout({ children }) {
    const {
        state: { currentEpisode }
    } = useContext(Context);

    return (
        <>
                <Navbar></Navbar>
            <Player episode={currentEpisode}></Player>
        <div className="container mx-auto px-4">
            {children}
        </div>
        </>
    );
}

export default DefaultLayout;
