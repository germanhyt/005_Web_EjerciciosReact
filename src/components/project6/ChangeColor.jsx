import React, { useEffect, useState } from 'react'

/**
 * EL proyecto consiste en cambiar de color un cuadro mediante un evento, ello en base a la distancia de un punto a otro.
 * Usamos los hooks de useState y useEffect.
 * @returns 
 * 
 */


function ChangeColor() {
    const [show, setShow] = useState(true);

    function MouseColor() {
        const [color, setColor] = useState("FFAA00");

        useEffect(() => {
            window.addEventListener("mousemove", onMouseMove);
            console.log("Ejecutando...");

            function onMouseMove(e) {
                if (e.clientX < window.innerWidth / 2) {
                    setColor("#000000");
                } else {
                    setColor("#FFDDFF");
                }
            }

            return () => {
                window.removeEventListener("mousemove", onMouseMove);
                console.log("Limpiando...");
            }

        }, [color]);

        return (
            <div
                style={{
                    width: "90%",
                    height: "400px",
                    margin: "auto",
                    background: color,
                }}
            />
        );

    }


    return (
        <>
            <div className="my-14 grid grid-cols-1 place-items-center gap-4">
                <h2 className='font-bold font-serif text-center'>Cuadro de cambio de Color</h2>

                <div className="flex gap-2">
                    <button
                        className="p-2 bg-black text-white rounded-md"
                        onClick={() => setShow(false)}
                    >
                        Dejar de mostrar
                    </button>
                    <button
                        className="p-2 bg-black text-white rounded-md"
                        onClick={() => setShow(true)}
                    >
                        Mostrar
                    </button>
                </div>
                {show ? <MouseColor /> : null}
            </div>
        </>
    )
}

export default ChangeColor