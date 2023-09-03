import React, { useReducer, useRef, useState } from 'react'

/**
 * useReducer, hook que se usa para gestionar el estado de un componente más controlada y predecible, especialmente cuando el estado del componente es más complejo y requere lógica más avanzado que la que se puede lograr con el hook 'useState'.
 * Funca de forma similar al patrón de diseño "Reducer" en programación funcional 
 * Este hook funciona de la siguiente manera:
 * - Crea un Reducer, este se compone de 2 argumentos de 'el estado actual' y 'una acción'. Basadi en la acción, el reducer calcula y devuleve el nuevo estado.
 * - Inicalizar el Estado, esto se hace tras usar el 'useReducer'.
 * - Despachar acciones, en vez de cambiar el estado directamente, usamos el 'dispatch' dado por el hook 'useReducer'
 * - Actualizar el estado, el reducer se ejecuta con el estado actual y la acción enviada a través del 'dispatch'. El reducer calcula el nuevo estado y lo devuelve.
 * - Devolver el estado y Distpacth, el 'useReducer' devuelve el estado actual y la función 'dispatch' donde este último se usar para despachar acciones. 
 * Este hook se usa cuando:
 * - El estado es complejo, si el estado tiene múltiples subvalores que interactúan entre sí, 'useReducer' ayuda a manejar el estado más limpiamente.
 * - Se necesita Optimizar el rendimiento del estado, el 'useReducer' ofrece una mejor optimización que el 'useState' especialmente cuando las actualizaciones de estado son más complejas. 
 * 
 * 
 * Nota:
 * - target: : Se refiere al elemento DOM en el que se originó el evento, es decir, el elemento específico que activó el evento. Esta propiedad es especialmente útil en eventos como el evento de clic (click) para determinar en qué elemento específico se hizo clic. La propiedad target siempre se refiere al elemento más interno que activó el evento. Esto significa que, incluso si el usuario hace clic en un elemento hijo de un elemento, la propiedad target siempre será el elemento hijo.
 * - current: La propiedad currentTarget se refiere al elemento al que está adjunto(al lado o se ejecuta con) el oyente de eventos. Esto significa que, independientemente del elemento que activó el evento, la propiedad currentTarget siempre será el elemento al que está adjunto el oyente de eventos.En este código, el oyente de eventos está adjunto al elemento parent. Sin embargo, si el usuario hace clic en el elemento child, la propiedad target detendrá el evento en el elemento child, pero la propiedad currentTarget seguirá siendo el elemento parent. Esto se debe a que la propiedad currentTarget se refiere al elemento al que está adjunto el oyente de eventos, y el oyente de eventos en este caso está adjunto al elemento parent.
 * 
 * @returns 
 * 
 */


const types = {
    menos: 'menos',
    mas: 'mas',
    eliminar: 'eliminar',
    comprar: 'comprar'
}

const valueInitial = [
    // { id:1, nombre:'Agua',cantidad:4},
    // { id:2, nombre:'Pan',cantidad:5},
    // { id:3, nombre:'Pera',cantidad:6}
];

const reducer = (state, action) => {
    console.log(state)
    console.log(action.payload);
    switch (action.type) {
        case types.menos:
            return state.map((p) =>
                action.payload === p.id && p.quantity > 1
                    ? { ...p, quantity: p.quantity - 1 }
                    : p
            );
        case types.mas:
            return state.map((p) =>
                action.payload === p.id && p.quantity >= 1
                    ? { ...p, quantity: p.quantity + 1 }
                    : p
            );
        case types.eliminar:
            return state.filter((p) =>
                p.id !== action.payload
            );
        case types.comprar:
            return [...state, action.payload];
        default:
            return state;
    }
}

function Products() {
    const [product, setProduct] = useState();
    const [list, dispatch] = useReducer(reducer, valueInitial);
    // console.log(list);
    const inputName = useRef(null);

    return (
        <>
            <div className='my-12 grid grid-cols-1 gap-4 place-content-center'>
                <h2 className='text-center font-serif font-semibold'>Lista de Productos</h2>
                <div className='flex flex-col sm:flex-row gap-3 items-center justify-center'>
                    <label
                        className='font-semibold'
                        htmlFor="idProduct"
                    >
                        Producto:
                    </label>
                    <input
                        className='font-serif px-2 py-1 rounded-md'
                        placeholder='Ingrese un producto'
                        id='idProduct'
                        type="text"
                        value={product}
                        ref={inputName}
                        onChange={(e) => setProduct(e.target.value)}
                    />

                    <input
                        className=' bg-black text-white px-2 py-1 hover:scale-[0.9] rounded-md cursor-pointer'
                        type="button"
                        onClick={() => {
                            if (inputName.current.value == "") {
                                // console.log("Ingrese un producto ", inputName.current.value)
                                alert("Ingrese un producto ", inputName.current.value)
                            } else {
                                inputName.current.focus(); //Apuntamos al tag donde se coloca el click
                                setProduct("");
                                dispatch({
                                    type: types.comprar,
                                    payload: { id: Date.now(), name: product, quantity: 1 }
                                })
                            }
                        }}
                        value='Agregar'
                    />
                </div>

                <ul className='flex flex-col items-center justify-center gap-4 list-disc'>
                    {list.map((prod) =>
                        <li key={prod.id}>
                            <div className='flex gap-6'>
                                <p className='font-semibold'>
                                    {prod.name} ({prod.quantity} unidades)
                                </p>
                                <div className='flex gap-2'>
                                    <input
                                        className='px-2 py-1 bg-blue-500 text-white rounded-md'
                                        type="button"
                                        onClick={() => dispatch({ type: types.menos, payload: prod.id })}
                                        value='menos'
                                    />
                                    <input
                                        className='px-2 py-1 bg-blue-500 text-white rounded-md'
                                        type="button"
                                        onClick={() => dispatch({ type: types.mas, payload: prod.id })}
                                        value='mas'
                                    />
                                    <input
                                        className='px-2 py-1 bg-red-500 text-white rounded-md'
                                        type="button"
                                        onClick={() => dispatch({ type: types.eliminar, payload: prod.id })}
                                        value='eliminar'
                                    />
                                </div>
                            </div>
                        </li>
                    )}
                </ul>

            </div >

        </>
    )
}

export default Products