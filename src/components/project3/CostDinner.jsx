import React, { useState } from 'react'
import Dinner from './Dinner';

/**
 * 
 * @returns App para calcular el costo total de las figuras que se están comprando
 */

function CostDinner() {

    //Array de Objetos
    const reyes = [
        {
            name: "Atanagildo",
            color: "darkolivegreen",
            price: 178,
        },
        {
            name: "Ervigio",
            color: "crimson",
            price: 169,
        },
        {
            name: "Ataúlfo",
            color: "peru",
            price: 81,
        },
        {
            name: "Leogivildo",
            color: "darkmagenta",
            price: 126,
        },
        {
            name: "Recesvinto",
            color: "royalblue",
            price: 141,
        },
        {
            name: "Sisebuto",
            color: "teal",
            price: 69,
        },
    ];

    //Hooks
    const [total, setTotal] = useState(0);


    return (
        <>
            <div className='my-20 flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif text-center'>Compramos figuras de reyes</h2>

                <h3 className='bg-black text-center text-white py-1 px-20 rounded-md'>
                    Total a pagar: s/.{total}
                </h3>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-5'>

                    <Dinner
                        name={reyes[0].name}
                        color={reyes[0].color}
                        price={reyes[0].price}
                        setTotal={setTotal}
                    />
                    <Dinner
                        name={reyes[1].name}
                        color={reyes[1].color}
                        price={reyes[1].price}
                        setTotal={setTotal}
                    />
                    <Dinner
                        name={reyes[2].name}
                        color={reyes[2].color}
                        price={reyes[2].price}
                        setTotal={setTotal}
                    />
                    <Dinner
                        name={reyes[3].name}
                        color={reyes[3].color}
                        price={reyes[3].price}
                        setTotal={setTotal}
                    />
                    <Dinner
                        name={reyes[4].name}
                        color={reyes[4].color}
                        price={reyes[4].price}
                        setTotal={setTotal}
                    />
                    <Dinner
                        name={reyes[5].name}
                        color={reyes[5].color}
                        price={reyes[5].price}
                        setTotal={setTotal}
                    />

                </div>
            </div>
        </>
    )
}

export default CostDinner