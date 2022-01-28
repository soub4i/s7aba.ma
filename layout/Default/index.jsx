import React from 'react';

import { Context } from '../../context';
import { useContext } from 'react';
import PropTypes from 'prop-types';
import Player from '../../components/Player';
import Navbar from '../../components/Navbar';

function DefaultLayout({ children }) {
    const {
        state: { currentEpisode }
    } = useContext(Context);

    return (
        <div className=" mx-auto">
            <Navbar />

            <Player episode={currentEpisode}></Player>
            <div className="container mx-auto px-4">{children}</div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.object
};

export default DefaultLayout;
