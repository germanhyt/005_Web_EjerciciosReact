const API_KEY = '4287ad07'

export const searchMovies = async ({ search }) => {
    if (search === '') return null  //validación

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)  //Petición asíncrona Fetch
        const json = await response.json()  //Obtenemos asíncronamente la respuesta convertida a json()

        const movies = json.Search  //

        return movies?.map(movie => ({
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster
        }))
    } catch (e) {
        throw new Error('Error searching movies')
    }
}

// https://www.omdbapi.com/?apikey=4287ad07