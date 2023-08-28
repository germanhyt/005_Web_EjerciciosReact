import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'

//Funciones
function getImgUrl(fileName) {
    const imgUrl = new URL("../../assets/img/" + fileName, import.meta.url).href;
    // console.log(imgUrl);
    return imgUrl;
}

function Teacher() {
    //Hooks
    const { estudent } = useContext(MyContext);
    const idioma = estudent[3].idioma;

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <h1>{estudent[idioma].boton1}</h1>
                <div className="font-mono text-xl">
                    {estudent[idioma].nombre}
                </div>
                <div>
                    <img
                        className="w-40 h-40 rounded-md"
                        src={getImgUrl(estudent[idioma].foto)}
                        alt="profe"
                    />
                </div>
            </div>
        </>
    )
}

export default Teacher