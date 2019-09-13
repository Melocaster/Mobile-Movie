import { useState, useEffect } from 'react'
import { fetchMovieDetails } from '../../../utils/Core/fetchMovie'

export const useMovieDetails = id => {
    const [details, setDetails] = useState(null)

    useEffect(() => {
        const setupDetails = async id => {
            try {
                const results = await fetchMovieDetails(id)
                setDetails(results)
            } catch (error) {
                console.log(error)
            }
        }

        setupDetails(id)
    }, [id])

    return details
}
