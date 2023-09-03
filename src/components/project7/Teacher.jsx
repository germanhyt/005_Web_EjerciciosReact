import React, { useContext } from 'react'
import MyContext from '../../context/MyContext'
import imgAimee from "../../assets/img/aimee.PNG";
import imgGrace from "../../assets/img/grace.PNG";
import imgMarta from "../../assets/img/marta.PNG";

//Funciones
function getImgUrl(fileName) {
    // const imgUrl = new URL("../../assets/img/" + fileName, import.meta.url).href;
    let imgUrl = '';
    const arrayTeachers = [imgAimee, imgGrace, imgMarta];

    arrayTeachers.forEach((e) => {
        // console.log(e)
        let partesRuta = e.split('/');
        let ultimaParte = partesRuta[partesRuta.length - 1];
        // console.log(nombre[nombre.length - 1])
        if (ultimaParte === fileName) {
            let nombre = ultimaParte.split('.')[0];

            if (nombre == 'aimee') {
                imgUrl = imgAimee;
            } else if (nombre === 'grace') {
                imgUrl = imgGrace;
            } else if (nombre === 'marta') {
                imgUrl = imgMarta;
            }
        }
    });
    // console.log(imgUrl)
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