function ListOfMovies ({ movies }) {
    return (
      <ul className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        {
          movies.map(movie => (
            <li className='flex flex-col items-center border-2 border-black rounded-md p-1' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>({movie.year})</p>
              <img src={movie.image} alt={movie.title} />
            </li>
          ))
        }
      </ul>
    )
  }
  
  function NoMoviesResults () {
    return (
      <p>No se encontraron películas para esta búsqueda</p>
    )
  }
  
  export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
  
    return (
      hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
  }