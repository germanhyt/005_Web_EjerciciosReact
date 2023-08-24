import React from 'react'

function ActivitiesWithMethods() {

    //Array de Objetos
    const kings = [
        {
            name: "Atanagildo",
            duration: 15,
            cowsMeals: 9,
        },
        {
            name: "Ervigio",
            duration: 7,
            cowsMeals: 3,
        },
        {
            name: "Ataúlfo",
            duration: 5,
            cowsMeals: 16,
        },
        {
            name: "Leovigildo",
            duration: 18,
            cowsMeals: 3,
        },
        {
            name: "Sisebuto",
            duration: 9,
            cowsMeals: 13,
        },
        {
            name: "Recesvinto",
            duration: 19,
            cowsMeals: 11,
        },
        {
            name: "Teodorico",
            duration: 33,
            cowsMeals: 12,
        },
    ];

    //Funciones
    let path = "https://html6.es/img/rey_";

    const findName = kings.find((e) =>
        e.name.includes("a", 0) || e.name.includes("n", 0)
    );

    const btnDelete = (e) => {
        e.target.parentNode.remove();
        // e.target.parentNode.style.display="none";
    }

    const sum = (e) => {
        ++e.target.innerHTML; //Sumamos 1 y lo colocamos en el tag
    }


    return (
        <>
            <div className='my-14 px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center'>
                <h2 className='md:col-span-2 text-center font-bold font-serif'>Activity 1: Use Map</h2>
                {
                    kings.map((e) =>
                        <div
                            key={e.name}
                            className='p-5 flex flex-col gap-2 items-center justify-center border-2'
                        >
                            <img
                                className='w-[50%]'
                                src={`${path}${e.name.toLowerCase()}.png`}
                                alt="img"
                            />
                            <p
                                key={e.name}
                                className='flex gap-2'
                            >
                                <span className='bg-yellow-100 py-1 px-2'>
                                    {e.name}
                                </span>
                                ha comido {e.cowsMeals} vacas en sus {e.duration} años de reinado
                            </p>
                        </div>
                    )

                }
            </div>
            <div className='my-14 px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center'>
                <h2 className='md:col-span-2 text-center font-bold font-serif'>Activity 2: Use Filter, Includes and Map</h2>
                {
                    kings
                        .filter((f) => !f.name.includes("a"))
                        .map((e) =>
                            <div
                                key={e.name}
                                className='p-5 flex gap-2 items-center justify-center border-2'
                            >
                                <span className='bg-yellow-100 py-1 px-2'>
                                    {e.name}
                                </span>
                                <input
                                    className="bg-black text-[#11DDAA] py-1 px-2 rounded-md"
                                    onClick={btnDelete}
                                    type="button"
                                    value={'Borrar'}
                                />
                            </div>
                        )

                }
            </div>
            <div className='my-14 px-10 flex flex-col  gap-2 items-center justify-center'>
                <h2 className='text-center font-bold font-serif'>Activity 3: Use Find</h2>
                <p className='bg-yellow-100 py-1 px-2 rounded-md'>
                    {
                        findName != null
                            ? findName.name
                            : "No se ha encontrado"
                    }
                </p>
            </div>
            <div className='my-14 px-10 grid grid-cols-1 md:grid-cols-2 gap-2 items-center justify-center'>
                <h2 className='md:col-span-2 text-center font-bold font-serif'>Activity 4: Use Filter y map</h2>
                {
                    kings
                        .filter((f) => !f.duration <= 0 && f.duration < 20)
                        .map((e) =>
                            <div
                                key={e.name}
                                className='p-5 flex gap-2 items-center justify-center border-2'
                            >
                                <span className='bg-yellow-100 py-1 px-2'>
                                    {e.name}
                                </span>
                                <div
                                    className='bg-sky-400 rounded-md py-1 px-2'
                                    onClick={sum}
                                >
                                    0
                                </div>
                            </div>
                        )

                }
            </div>
        </>
    )
}

export default ActivitiesWithMethods