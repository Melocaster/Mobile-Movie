import React, { useState } from 'react'
import { MovieGrids } from './MovieGrids'
import { MovieDetails } from './MovieDetails'
import { useFilms } from './useFilms'

export const Movies = () => {
    const films = useFilms()

    const [showDetail, setShowDetail] = useState(false)
    const [filmId, setFilmId] = useState(null)

    const showMovie = id => {
        setShowDetail(true)
        setFilmId(id)
    }

    // back to main screen
    const onBack = () => {
        setShowDetail(false)
        setFilmId(null)
    }

    return (
        <>
            {showDetail ? (
                <MovieDetails id={filmId} onBack={onBack} />
            ) : (
                    <MovieGrids films={films} showMovie={showMovie} />
                )}
        </>
    )
}
