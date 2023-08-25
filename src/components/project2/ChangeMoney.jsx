import React, { useState } from 'react'

/**
 * Mediante esta app vamos a poder hacer una conversión
 * desde la moneda internacional dólar a la moneda
 * local y otras más
 * @returns 
 */

function ChangeMoney() {

    //Definimos los hooks
    const [number, setNumber] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);

    //Objetos
    const conversiones = {
        peru: 3.68,
        argentina: 283.19,
        colombia: 4028.85,
        espania: 0.909406
    }

    //Funciones
    const convertir = () => {
        setNumber1(number * conversiones.peru);
        setNumber2(number * conversiones.argentina);
        setNumber3(number * conversiones.colombia);
        setNumber4(number * conversiones.espania);
    }

    return (
        <>
            <div className='my-14 flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif'>Cambiamos dólares a sus equivalentes</h2>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <label className='text-center' htmlFor='dolar'>Dólar:</label>
                    <input
                        id='dolar'
                        className='mx-2 px-2 py-1 border-2 border-blue-700 rounded-md'
                        onInput={(e) => { setNumber(e.target.value) }}
                        type="number" />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <label className='text-center' htmlFor='soles'>Soles:</label>
                    <input
                        id='soles'
                        className='mx-2 px-2 py-2 border-2 rounded-md'
                        value={number1}
                        type="number"
                        readOnly
                    />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <label className='text-center' htmlFor='pesosarg'>pesos argentinos:</label>
                    <input
                        id='pesosarg'
                        className='mx-2 px-2 py-2 border-2 rounded-md'
                        value={number2}
                        type="number"
                        readOnly
                    />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <label className='text-center' htmlFor='pesosco'>Pesos colombianos:</label>
                    <input
                        id='pesosco'
                        className='mx-2 px-2 py-2 border-2 rounded-md'
                        value={number3}
                        type="number"
                        readOnly
                    />
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <label className='text-center' htmlFor='euro'>Euros:</label>
                    <input
                        id='euro'
                        className='mx-2 px-2 py-2 border-2 rounded-md'
                        value={number4}
                        type="number"
                        readOnly
                    />
                </div>
                <input
                    className='bg-black text-[#11DDAA] px-2 py-2 border-2 rounded-md'
                    onClick={convertir}
                    type="button"
                    value='Convertir'
                />

            </div>
        </>
    )
}

export default ChangeMoney