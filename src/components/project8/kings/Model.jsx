import React from 'react'
import { useParams, Link } from 'react-router-dom'

/**
 * UseParams, Para poder acceder a los parametros de la url
 * 
 * @returns 
 */

export default function Model() {
    const { king } = useParams();
    const kingComplete = king.substring(0, 1).toUpperCase() + king.substring(1).toLocaleLowerCase();
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-4'>
                <img src={`https://www.html6.es/img/rey_${king}`} alt='img' />
                <h3 className='text-center font-bold'>
                    {kingComplete}
                </h3>
                <div className='bg-white w-44 hover:scale-[0.9] m-auto rounded-lg text-center'>
                    <Link className='text-sm' to='/'>Volver al menu principal</Link>
                </div>
            </div>
        </>
    )
}
