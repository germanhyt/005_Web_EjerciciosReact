import React from 'react'
import imagen from "../../assets/img/rey_atanagildo.png";

function WelcomeReact() {

  //variables
  let nickname = "ShemanSystems";
  let information = {
    nickname: nickname,
    ocupation: "Estudiante"
  }
  let box = <div>Ingrese el nombre</div>;
  let flag = false;

  return (
    <>
      <div className='my-14 flex flex-col items-center justify-center gap-5'>
        {flag == true ? alert("Hello world") : ""}
        <h1 className='text-center font-serif font-bold'>
          Mostramos Información
        </h1>
        <ul className='list-disc'>
          <li>
            Mi nombre es: <span className='bg-yellow-50 rounded-sm px-1'>{information.nickname}</span>
          </li>
          <li>
            Soy: <span className='bg-yellow-50 rounded-sm px-1'>{information.ocupation}</span>
          </li>
        </ul>
        <input className='p-1 w-36 border-2 rounded-md'
          type="text"
          placeholder='Input Read Only'
          readOnly
        />
        <input className='p-1 w-36 border-2 rounded-md'
          type="text"
          placeholder={nickname}
          readOnly
        />
        <img className='w-[20%]' src={imagen} alt="" />
      </div>
    </>
  )
}

export default WelcomeReact