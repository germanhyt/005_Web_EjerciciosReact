import React from "react";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

import imgSpain from "../../assets/img/spain.jpg";
import imgUk from "../../assets/img/uk.png";
import imgFrance from "../../assets/img/francia.png";

function Lenguages() {
    //Hooks
    const { setEstudent } = useContext(MyContext);
    const { estudent } = useContext(MyContext);

    //Functions
    const replacement = (posicion) => {
        setEstudent(
            estudent.map((date, indice) =>
                indice === 3 ? { ...date, idioma: posicion } : { ...date }
            )
        );
    };
    const change1 = () => {
        replacement(0);
    };
    const change2 = () => {
        replacement(1);
    };
    const change3 = () => {
        replacement(2);
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-2">
                <h2 className='font-bold font-serif text-center'>Curso de React según idioma</h2>

                <div className="flex items-center gap-2">
                    <div className="w-fit m-auto">
                        <div onClick={change1}>
                            <img src={imgSpain} alt="" />
                        </div>
                    </div>
                    <div className="w-fit m-auto">
                        <div onClick={change2}>
                            <img src={imgUk} alt="" />
                        </div>
                    </div>
                    <div className="w-fit m-auto">
                        <div onClick={change3}>
                            <img src={imgFrance} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Lenguages;
