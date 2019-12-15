import React, {useContext} from 'react';
import {MovieContext} from './MovieContext'

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);

    return(
        <div style={{ background: 'gray', display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            <h3>Jess</h3>
            <p>List of Movies: {movies.length}</p>
        </div>
    )
}

export default Nav;