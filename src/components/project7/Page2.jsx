import React, { useContext } from 'react'
import { Context } from '../../context/Context';

function Page2() {
  const { color } = useContext(Context);

  return (
    <>
      <div className={`bg-[${color}] rounded-md p-2`}>
        Segunda Página
      </div>
    </>
  )
}

export default Page2