const API_KEY = '4287ad07'

//Petición asíncrona a API
export const searchMovies = async ({ search }) => {

    if (search === '') return null  //validación

    try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)  //Petición asíncrona Fetch
        const json = await response.json()  //Obtenemos asíncronamente la respuesta convertida a json()

        const movies = json.Search

        // ? : Es el operador de encadenamiento opcional. Garantiza que si movies es null o undefined, no se intentará ejecutar el método map, evitando errores.
        // movie => ({ ... }): Esto es una función de flecha que toma un objeto movie (una película) como argumento y devuelve un nuevo objeto. Los paréntesis alrededor de { ... } se utilizan para asegurarse de que el contenido sea tratado como un objeto y no un bloque de código.
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