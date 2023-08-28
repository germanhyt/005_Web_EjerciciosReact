import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'

function Ubication() {
    const { estudent } = useContext(MyContext);
    const idioma = estudent[3].idioma;

    return (
        <>
            <div className="text-center ">
                <h1 className="underline font-bold">{estudent[idioma].boton2}</h1>
                <div className="texto">{estudent[idioma].direccion}</div>
            </div>
        </>
    )
}

export default Ubication;