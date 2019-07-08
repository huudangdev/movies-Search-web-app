import React from 'react';

const MoviesTable = props => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Poster</th>
                    <th>Movie</th>
                    <th>Overview</th>
                </tr>
            </thead>
            <tbody>
                {props.movies.results !== undefined ? (
                    props.movies.results.map(movie => {
                        movie.poster_path = 'https://image.tmdb.org/t/p/w185' + movie.poster_path
                        return (
                            <tr key={movie.id}>
                                <td><img src={movie.poster_path} alt='poster'/></td>
                                <td>{movie.title}</td>
                                <td>{movie.overview}</td>
                                <hr/>
                            </tr>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={3}>No results</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default MoviesTable