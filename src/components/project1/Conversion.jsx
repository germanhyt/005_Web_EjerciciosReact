import React from 'react'
import rey_atanagildo from "../../assets/img/rey_atanagildo.png";
import rey_leogivildo from "../../assets/img/rey_leogivildo.png";
import { useRef } from 'react';

/**
 * El useRef es un Hook que sirve para acceder directamente a nodos del DOM ;
 * también mantiene una referencia persistente de un valor que no afectará el ciclo de vida del componente es decir es útil cuando se necesite almacenar un valor que no debe provocar re-renderizaciones, esta capacidad de mantener valores mutables entre renderizaciones sin provocar re-renderizaciones es útil en situaciones donde tienes valores que necesitas almacenar a lo largo del ciclo de vida del componente, pero no quieres que esos valores provoquen actualizaciones visuales. Por ejemplo, si tienes contadores, acumuladores u otros valores que no influyen en la representación visual, puedes usar useRef para mantener esos valores sin afectar el ciclo de vida del componente  * y gestiona valores mutables en efectos(useEffect) es decir se usa cuando se quiere mantener valores mutables en efectos(useEffect) sin provocar re-renderizaciones adicionales.
 * @returns 
 */

function Conversion() {
    //Variables
    let change = 20.20;
    const refBox = useRef();

    const increment = (e) => {
        if (Number(e.target.innerHTML) === 9) {
            e.target.innerText = "1";
            e.target.style.background = "white";
        } else {
            e.target.innerHTML = Number(e.target.innerHTML) + 1;
            e.target.style.background = "red";
        }
    }

    const conversion = () => {
        refBox.current.innerHTML = Number(refBox.current.innerHTML) * change;
    }

    const changeImage = (c) => {
        if (c.target.src.includes(rey_atanagildo)) {
            c.target.src = rey_leogivildo;
        } else if (c.target.src.includes(rey_leogivildo)) {
            c.target.src = rey_atanagildo;
        }
    }

    const read = (r) => {
        refBox.current.innerHTML = r.target.value;
    }

    return (
        <>
            <div className='my-14 flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif text-center'>Multiplicamos por {change} el número ingresado</h2>

                <label htmlFor="number">
                    Número:
                    <input
                        id="number"
                        onChange={read}
                        className='rounded-md p-2 m-2'
                        type="text" />
                </label>
                <div
                    ref={refBox}
                    onClick={increment}
                    className='text-center w-[24%] px-2 py-1 bg-green-300 rounded-md'
                >
                    1
                </div>
                <h1>
                    Click al button para multiplicar por 20.20
                </h1>
                <button
                    onClick={conversion}
                    className='bg-black  text-[#11DDAA] w-36 rounded-md'
                >
                    Convertir
                </button>
                <img onClick={changeImage} src={rey_atanagildo} alt="" />
            </div>
        </>
    )
}

export default Conversion