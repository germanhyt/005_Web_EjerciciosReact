import { useMovies } from "./useMovies.js";
import { Movies } from "./Movies.jsx";
import { useState, useEffect, useRef, useCallback } from "react";
import debounce from "just-debounce-it";

/**
 * UseCallBack: useCallback es un hook en React que se utiliza para optimizar el rendimiento al crear versiones memorizadas de funciones en componentes funcionales. Su propósito principal es evitar que las funciones se vuelvan a crear en cada renderización, lo que puede causar re-renderizaciones innecesarias en componentes hijos que dependen de estas funciones.
 * Cómo funciona:
 * - Cuando una función se envuelve en useCallback, React la guarda en memoria y la devuelve en futuras renderizaciones del componente. Sin embargo, la clave aquí es que esta función memorizada solo se vuelve a crear si alguna de las dependencias proporcionadas cambia. 
 * - Si las dependencias no cambian, React reutiliza la instancia memorizada de la función.
 * En qué casos se usa: 
 * - se usa en situaciones donde tienes funciones que se pasan como propiedades a componentes hijos y deseas evitar re-renderizaciones innecesarias.
 * - Optimización con React.memo: Cuando usas el componente React.memo para evitar re-renderizaciones innecesarias de componentes, el uso de useCallback en las funciones pasadas como props puede ayudar a asegurar que estas funciones no se vuelvan a crear y, por lo tanto, no causen re-renderizaciones adicionales.
 * - Manejo de Eventos: Si tienes un componente que maneja eventos y necesitas pasar funciones de manejo de eventos a elementos hijo, useCallback es útil para evitar re-creaciones de estas funciones cada vez que el componente se renderiza.
 * - Listas y Bucles: En situaciones donde se mapean listas o se utilizan bucles para generar elementos, useCallback puede ayudar a mantener la consistencia en las referencias de las funciones para evitar problemas de re-renderización.
 * - Prevención de Recálculos Costosos: Si tienes funciones que realizan cálculos costosos y deseas asegurarte de que no se recalculen en cada renderización, puedes usar useCallback con dependencias adecuadas para controlar cuándo se recalcula. 
 * 
* @returns 
 */


function useSearch() {
    const [search, updateSearch] = useState("");
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);

    useEffect(() => {
        if (isFirstInput.current) {
            isFirstInput.current = search === "";
            return;
        }

        if (search === "") {
            setError("No se puede buscar una película vacía");
            return;
        }

        if (search.match(/^\d+$/)) {
            setError("No se puede buscar una película con un número");
            return;
        }

        if (search.length < 3) {
            setError("La búsqueda debe tener al menos 3 caracteres");
            return;
        }

        setError(null);
    }, [search]);

    return { search, updateSearch, error };
}

function MainSearchMovies() {
    const [sort, setSort] = useState(false);

    const { search, updateSearch, error } = useSearch();
    const { movies, loading, getMovies } = useMovies({ search, sort });

    const debouncedGetMovies = useCallback(
        debounce((search) => {
            // console.log("search", search);
            getMovies({ search });
        }, 300),
        [getMovies]
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        getMovies({ search });
    };

    const handleSort = () => {
        setSort(!sort);
    };

    const handleChange = (event) => {
        const newSearch = event.target.value;
        updateSearch(newSearch);
        debouncedGetMovies(newSearch);
    };

    return (
        <>
            <div className="my-12 flex flex-col items-center justify-center gap-6 mx-12">
                <header className="flex flex-col gap-4">
                    <h1 className="font-bold text-xl text-center">Buscador de películas</h1>
                    <form className="flex gap-4" onSubmit={handleSubmit}>
                        <input
                            className="p-2"
                            style={{
                                border: "1px solid transparent",
                                borderColor: error ? "red" : "transparent",
                            }}
                            onChange={handleChange}
                            value={search}
                            name="query"
                            placeholder="Avengers, Star Wars, The Matrix..."
                        />
                        <input
                            className="w-8"
                            type="checkbox"
                            onChange={handleSort}
                            checked={sort}
                        />
                        <button
                            className="bg-black text-white hover:scale-[0.9] duration-100 p-2 w-32 rounded-md "
                            type="submit"
                        >
                            Buscar
                        </button>
                    </form>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </header>

                <main>{loading ? <p>Cargando...</p> : <Movies movies={movies} />}</main>
            </div>
        </>
    );
}

export default MainSearchMovies;
