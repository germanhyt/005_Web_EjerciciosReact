import React, { useEffect, useState } from 'react'

/**
 * En este proyecto se muestra una lista de personas seleccionadas para ser premiados.
 * En este caso aparte de los hooks useState y useEffect, usamos el SpreadOperator que:
 * - Nos permite descomponer arrays y objetos en elementos individuales 
 * - Se utiliza para copiar, combinar o pasar elementos de manera eficiente
 * - Copiar Arrays y Objetos: es decir se crea copias de arrays u objetos, evitando modificar los originales accidentalmente
 * - Unir Arrays: Combina varios arrays en uno solo
 * - Pasar Argumentos: Pasa elementos de un array como argumentos individuales a funciones
 * - Clonar Objetos: Crea clones de objetos, evitando modificar el original.
 * - Agregar Propiedades: Añade nuevas propiedades a objetos.
 * - También se puede usar para agregar un valor a un array existente. Se utiliza para crear una nueva copia del array original con el nuevo valor agregado
 * 
 * @returns 
 * 
 */

function PeopleWinners() {

    //Hooks
    const [data, setData] = useState([]); //Con valor inicial de tipo array

    useEffect(() => {
        const url = "https://randomuser.me/api/?results=3";
        const request = fetch(url);

        request
            .then((data) => data.json())
            .then((json) => {
                json.results.map((e) => {
                    setData((ee) => [
                        ...ee,
                        <div key={e.email} className='flex flex-col gap-4 p-4'>
                            <p className='font-serif text-center'>
                                {e.name.first} {e.name.last}
                            </p>
                            <img
                                className='w-32 h-32 rounded-lg'
                                src={e.picture.large}
                                alt="img"
                            />
                        </div>,
                    ]);
                });

                console.log("FFFFFF", data)
            })
            .catch(
                console.log("Se produjo un error")
            )

    }, []); 


    return (
        <div className='my-14'>
            <h2 className='font-bold font-serif text-center'>Lista de Personas Premiadas</h2>
            <div className='grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3'>
                {data}
            </div>
        </div>
    )
}

export default PeopleWinners