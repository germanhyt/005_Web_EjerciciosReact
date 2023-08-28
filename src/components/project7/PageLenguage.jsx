import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import Teacher from "./Teacher";
import Ubication from "./Ubication";


function PageLenguage() {
    //Hooks
    const { estudent } = useContext(MyContext);

    const idioma = estudent[3].idioma;

    const [ocultar1, setOcultar1] = useState(false);
    const mostrar1 = () => {
        setOcultar1(!ocultar1);
        setOcultar2(false);
    };

    const [ocultar2, setOcultar2] = useState(false);
    const mostrar2 = () => {
        setOcultar2(!ocultar2);
        setOcultar1(false);
    };

    return (
        <>
            <div className="flex flex-col gap-4 justify-center items-center">
                <div>{estudent[idioma].titulo}</div>
                <h2>{estudent[idioma].texto}</h2>
                <div className="flex gap-2">
                    <button
                        className="w-40 h-10 rounded-md bg-black text-white"
                        onClick={mostrar1}
                    >
                        {estudent[idioma].boton1}
                    </button>
                    <button
                        className="w-40 h-10 rounded-md bg-black text-white"
                        onClick={mostrar2}
                    >
                        {estudent[idioma].boton2}
                    </button>
                </div>
                {ocultar1 ? <Teacher /> : null}
                {ocultar2 ? <Ubication /> : null}
            </div>
        </>
    );
}

export default PageLenguage;
