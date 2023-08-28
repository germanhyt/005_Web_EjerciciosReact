import React, { useContext } from 'react'
import { Context } from '../../context/Context';

function Page3() {
  const { color } = useContext(Context);

  return (
    <>
      <div className={`bg-[${color}] rounded-md p-2`}>
        Tercera página
      </div>
    </>
  )
}

export default Page3