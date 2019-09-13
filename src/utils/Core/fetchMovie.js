import axios from 'axios'
import { popularFilms, filmDetails, imgUrl } from './endpoints'

const mapPoster = data => {
    return data.results.map(item => ({
        id: item.id,
        title: item.title,
        poster_path: `${imgUrl}${item['poster_path']}`,
    }))
}

const mapMovieDetail = data => {
    return {
        title: data.title,
        release_year: data['release_date'].substring(0, 4),
        runtime: data.runtime,
        vote_average: data['vote_average'],
        overview: data.overview,
        poster_path: `${imgUrl}${data['poster_path']}`,
    }
}

export const fetchPopularMovies = async () => {
    const resp = await axios.get(popularFilms)
    return mapPoster(resp.data)
}

export const fetchMovieDetails = async id => {
    const resp = await axios.get(filmDetails(id))
    const { data } = resp
    return mapMovieDetail(data)
}
