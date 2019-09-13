const baseUrl = `https://api.themoviedb.org/3/movie`
const API_KEY = process.env.REACT_APP_API_KEY

export const popularFilms = baseUrl + `/popular?api_key=${API_KEY}`
export const filmDetails = id => baseUrl + `/${id}?api_key=${API_KEY}`

export const imgUrl = `http://image.tmdb.org/t/p/w185`
