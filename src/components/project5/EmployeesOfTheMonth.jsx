import React from 'react'
import { useState, useEffect } from 'react'

/**
 * En este proyecto se muestra el empleado del mes en base al consumo de la Api RamdonUser;
 * En este proyecto usamos el hook useEffect que nos permite ejecutar código secundario(Efectos) en componentes funcinales,
 * se usa para:
 * - Ejecutar código luego del renderizado inicial y después de cada actualización del componente
 * - Manejar operacioes asíncronas, como solicitudes a API's
 * - Suscribirse y desusribirse a eventos del navegador
 * - Realizar cambios en el DOM después de la actualización del componente  
 * - para cargar datos de una API cuando el componente se monta, o para realizar acciones específicas cuando ciertos valores en el componente cambian
 * - useEffect también se utiliza cuando se desea ejecutar un código solo una vez, específicamente después del renderizado inicial del componente. Esto se logra pasando un array vacío como segundo argumento al useEffect, lo que indica que el efecto solo se ejecutará una vez después del montaje inicial del componente,  se ejecutará solo una vez cuando el componente se monte por primera vez en el DOM. Ojo para ejecutar varias veces, se tiene que especificar dentro de los corchetes
 * 
 * Nota:
 * - Cuando sse quiere hacer una cosa el .then(elemento=> elemento), se coloca directo, pero al hacer varias con llaves .then(elemento=>{ })
 * - 
 * 
 * @returns 
 * 
 */


function EmployeesOfTheMonth() {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");

    // const numberRamdom=Math.floor(Math.random()*(100-80)+80);

    useEffect(() => {
        const url = "https://randomuser.me/api/";
        const request = fetch(url);

        request
            .then((data) => data.json())
            .then((json) => {
                setName(
                    `${json.results[0].name.first} ${json.results[0].name.last}`
                );
                setImage(
                    `${json.results[0].picture.large}`
                );
            })
            .catch(
                console.log("Se produjo un error en el consumo de la api")
            )

    }, []);

    return (
        <>
            <div className='my-14 flex flex-col p-4 items-center justify-center'>
                <h2 className='font-bold font-serif text-center'>Selección ramdon del Empleado del mes</h2>
                <div className='p-10'>
                    <p className='py-2 text-center font-bold bg-[#FFF]'>
                        {name}
                    </p>
                    <img
                        className='w-48 py-2 rounded-xl'
                        src={image}
                        alt="img"
                    />
                </div>
            </div>
        </>
    )
}

export default EmployeesOfTheMonth