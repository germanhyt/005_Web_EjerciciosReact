import React, { useState } from 'react'

/**
 * App para ver la info de cada uno de estos reyes,
 * y con un click pasaremos de info en info
 * @returns 
 */

function Message() {

    //Creamos un array de objetos
    const reyes = [
        {
            name: "Ataúlfo",
            hobby: "Comer carne de toro"
        }, {
            name: "Recesvinto",
            hobby: "Leer obras"
        }, {
            name: "Teodorico",
            hobby: "Criar animales"
        }
    ]

    //Hooks
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('Hobby de los reyes');

    //Funciones
    const handleChange = () => {
        //contador inicia desde 1
        setCount(count + 1);  //Seteamos el contador

        if (count + 1 >= reyes.length) {
            setCount(0);
        }

        setMessage(
            <p className='font-bold font-serif'>
                El hobby de
                <span className='bg-yellow-100 rounded-md py-1 px-2'>{reyes[count].name}</span>
                es
                <span className='bg-yellow-100 rounded-md py-1 px-2'>{reyes[count].hobby}</span>
            </p>
        );
    }

    const showMessage = () => {
        reyes.forEach((e) => {
            console.log(e.name);
        })
    }


    return (
        <>
            <div
                className='my-20 flex flex-col items-center justify-center gap-2'
            >
                <div
                    className='text-center'
                    onClick={showMessage}
                >
                    Mensaje: {message}
                </div>
                <input
                    onClick={handleChange}
                    className='py-1 px-2 bg-black text-[#11DDAA] rounded-md'
                    type="button"
                    value='Ver siguiente'
                />
            </div>
        </>
    )
}

export default Message