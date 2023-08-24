import React from 'react'

/**
 * En este proyecto usaremos los métodos más usados en React,
 * primero usaremos un find para recorrer el array de kings, buscar y devolver las coincidencias que haremos con el método 'includes'
 * segundo usaremos un map y filter para recorrer el array, y filtrar usando un operadores de comparación o lógicos
 * tercero usaremos solo el método find para recorrer el array, y devolver la primera coincidencia encontrada.
 *
 * Nota:
 * - Método Find: Recorre en array, busca, y devuelve la 1ra coincidencia  
 * - Método includes: Busca coincidencias con el parámetro pasado, se comprueba y devuleve un booleano
 * @returns 
 */

function Methods() {

    //Array de Objetos
    const kings = [
        {
            name: "Atanagildo",
            color: "darkolivegreen",
            price: 178,
        },
        {
            name: "Ervigio",
            color: "crimson",
            price: 169,
        },
        {
            name: "Ataúlfo",
            color: "peru",
            price: 81,
        },
        {
            name: "Leogivildo",
            color: "darkmagenta",
            price: 126,
        },
        {
            name: "Recesvinto",
            color: "royalblue",
            price: 141,
        },
        {
            name: "Sisebuto",
            color: "teal",
            price: 69,
        },
    ];

    //Funciones
    const results1 = kings.find((e) =>
        e.price >= 50 && e.price <= 200
    );


    const results2 = kings.find((e) =>
        e.name.includes('ú')
    );

    const results3 = kings.
        filter((f) => f.price > 100 && f.price < 200).
        map((e) =>
            <p
                key={e.name}
                className='bg-yellow-100 py-1 px-2 rounded-md'
            >
                {e.name} cobra {e.price} dólares
            </p>
        );


    return (
        <>
            <h2 className='font-bold font-serif text-center'>Métodos más usados</h2>

            <div className='my-10 flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif'>Método Find</h2>
                <p className='bg-yellow-100 py-1 px-2 rounded-md'>
                    {results1.name} cobra {results1.price} al dia
                </p>
            </div>
            <div className='my-2 flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif'>Método Find e Includes:</h2>
                <p className='bg-yellow-100 py-1 px-2 rounded-md'>
                    {results2.name} cobra {results2.price} al dia
                </p>
            </div>
            <div className='my-10 flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif'>Método Map y Filter:</h2>
                {results3}
            </div>
        </>
    )
}

export default Methods