import React from 'react'
import { Link } from 'react-router-dom'

function PageA() {
    return (
        <>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='bg-white text-2xl font-bold rounded-lg px-2 py-1 '>
                    PageA
                </div>
                <ul className='list-disc'>
                    <li className='hover:underline '>
                        <Link to='/page-b'>Página B</Link>
                    </li>
                    <li className='hover:underline '>
                        <Link to='/page-c'>Página C</Link>
                    </li>
                    <li className='hover:underline '>
                        <Link to='/kings'>Reyes</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default PageA