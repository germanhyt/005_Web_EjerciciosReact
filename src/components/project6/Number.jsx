import React from "react";
import { useState, useEffect } from "react";

/**
 * El proyecto consiste en realizar una cuenta cada vez que damos click en un button.
 * Usamos los hooks de useState y useEffect.
 * @returns 
 * 
 */

function Number() {
    const [number, setNumber] = useState(0);
    const increment = () => {
        setNumber(number + 1);
    };

    useEffect(() => {
        document.title = `La cuenta es ${number}`;
        console.log(`La cuenta es ${number}`);
    });

    return (
        <>
            <div className="my-14 flex flex-col items-center justify-center gap-2">
                <h2 className='font-bold font-serif text-center'>Contador de Números mediante clicks</h2>

                <p className="text-xl font-mono">La cuenta es: {number}</p>
                <button className="w-40 h-10 bg-black text-white rounded-md" onClick={increment}>
                    Aumentar
                </button>
            </div>
        </>
    );
}

export default Number;
