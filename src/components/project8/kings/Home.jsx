import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const list = ["atanagildo", "ataulfo", "ervigio"]

  return (
    <>
      <div className='flex flex-col gap-4'>
        <h2 className='font-bold font-serif text-center'>Reyes</h2>
        <div className='grid grid-cols-3 gap-4 w-[60%] m-auto'>
          {
            list.map(oneKing =>
              <div key={oneKing}>
                <Link to={`/kings/${oneKing}`}>
                  <img className='hover:scale-[0.9]' src={`https://www.html6.es/img/rey_${oneKing}.png`} alt='king' />
                  <h3 className='font-semibold text-center'>{oneKing}</h3>
                </Link>
              </div>
            )
          }
        </div>
        <Link to='/'>
          <div className='bg-white w-44 hover:scale-[0.9] text-sm py-2 m-auto rounded-lg text-center'>
            Volver atrás
          </div>
        </Link>
      </div>

    </>
  )
}
