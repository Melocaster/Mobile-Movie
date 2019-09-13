import { useState, useEffect } from 'react'
import { fetchPopularMovies } from '../../utils/Core/fetchMovie'

export const useFilms = () => {
    const [films, setFilms] = useState(null)

    useEffect(() => {
        const setupFilms = async () => {
            try {
                const results = await fetchPopularMovies()
                setFilms(results)
            } catch (error) {
                console.log(error)
            }
        }

        setupFilms()
    }, [])

    return films
}
