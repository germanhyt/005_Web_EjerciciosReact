import { useRef, useState, useMemo, useCallback } from 'react'
import { searchMovies } from '../../services/movies'

/**
 * useMemo, Es un hook en React que se utiliza para memorizar el resultado de una función costosa de manera que no se recalcule en cada renderización del componente. Su objetivo principal es optimizar el rendimiento al evitar recálculos innecesarios de valores que no han cambiado.
 * Cómo funciona:
 * - Cuando utilizas useMemo, le proporcionas una función y una lista de dependencias. La función se ejecutará solo cuando alguna de las dependencias cambie. Una vez que la función se ejecuta y devuelve un valor, ese valor se guarda en memoria y se devolverá en las renderizaciones futuras del componente hasta que alguna de las dependencias cambie. Esto significa que si las dependencias no cambian, React reutilizará el valor memorizado en lugar de recalcularlo.
 * En qué casos se usa:
 * - se utiliza en situaciones donde tienes cálculos costosos o transformaciones que no necesitan realizarse en cada renderización, ya que los resultados no cambian a menos que algunas dependencias cambien. Algunos casos comunes de uso son:
 * - Cálculos costosos, si tienes cálculos matemáticos o transformaciones complejas que se basan en datos inmutables, puedes usar useMemo para evitar que se recalculen en cada renderización.
 * - Procesamiento de listas, cuando estás trabajando con listas y necesitas realizar operaciones costosas en los elementos de la lista, useMemo puede ayudar a evitar que se vuelvan a calcular en cada renderización 
 * - Optimización de componentes, si tienes componentes que realizan renderizaciones condicionales basadas en ciertas condiciones, puedes utilizar useMemo para optimizar el cálculo de esas condiciones y evitar re-renderizaciones innecesarias.
 * - Prevención de re-renderizaciones, en combinación con React.memo, useMemo puede ayudar a evitar que componentes vuelvan a renderizarse si las propiedades que utilizan no han cambiado.
 * @returns 
 */

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {

    if (search === previousSearch.current) {
      return
    }

    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search;

      const newMovies = await searchMovies({ search })  //Petición asíncrona a la API

      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {

      setLoading(false) // tanto en el try como en el catch
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}