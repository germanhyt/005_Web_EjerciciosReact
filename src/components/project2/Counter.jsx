import React, { useState } from 'react'
/**
 * Nos permite declara y manejar estados locales dentro un componente funcional sin necesidad de crear una clase;
 * El valor que devuelve el Hook UseState() es un array que contiene la variable y la función que cambia su valor;
 * Puede mantener datos en el estado del componente que pueden cambiar durante la vida del componente;
 * Gestiona de forma eficiente el estado y solo actualiza los componentes cuando sea necesario;
 * Es usado en formularios para almacenar y actualizar valores de los campos;
 * Es usado usualmente con el hook UseEffect para crear componentes funcionales 
 * @returns 
 */

function Counter() {

    //Declaramos los hooks
    const [number1, setnumber1] = useState(0);
    const [number2, setnumber2] = useState(0);
    const [resultado, setresultado] = useState(0);

    const [count, setCount] = useState(0);


    //Funciones
    const sum = () => {
        setresultado(parseFloat(number1) + parseFloat(number2));
    }
    const increase = () => {
        // setCount((e)=>{e+1})
        setCount(count + 1);
    }
    const decrease = () => {
        setCount(count - 1);
    }
    const reestablish = () => {
        setCount(0);
    }

    return (
        <>
            <div className='my-14 flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif'>Contamos el número de elementos</h2>
                <h3 className='w-32 text-center rounded-md font-bold border-2'>
                    {count}
                </h3>
                <input className='bg-black text-[#11DDAA] rounded-md px-2 py-1'
                    value='Incrementar'
                    onClick={increase}
                    type="button" />
                <input className='bg-black text-[#11DDAA] rounded-md px-2 py-1'
                    value='Decrementar'
                    onClick={decrease}
                    type="button" />
                <input className='bg-black text-[#11DDAA] rounded-md px-2 py-1'
                    value='Reestablecer'
                    onClick={reestablish}
                    type="button" />
            </div>
            <div className='my-20 flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif'>Suma de elementos</h2>
                <input className='py-2 px-2 rounded-md border-2 border-black-200'
                    onChange={(e) => { setnumber1(e.target.value) }}
                    type="number"
                />
                <input className='py-2 px-2 rounded-md border-2 border-black-200'
                    onChange={(e) => { setnumber2(e.target.value) }}
                    type="number"
                />
                <input className='py-2 px-2 rounded-md border-2 border-black-200'
                    value={resultado}
                    type="number"
                    readOnly
                />
                <input className='bg-black text-[#11DDAA] py-1 px-2 rounded-md'
                    onClick={sum}
                    value='Sumar'
                    type="button"
                />
            </div>
        </>
    )
}

export default Counter