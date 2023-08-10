import React from 'react'
import rey_atanagildo from "../../assets/img/rey_atanagildo.png";
import rey_leogivildo from "../../assets/img/rey_leogivildo.png";
import rey_ervigio from "../../assets/img/rey_ervigio.png";
import rey_incognito from "../../assets/img/rey_incognito.png";


function ChangeImage() {

    //Definimos una función que nos permite:
    //Cambiar imagen
    //Cambiar background hasta ocultarlo
    const changeImages = (c) => {
        if (c.target.src.includes(rey_atanagildo)) {
            c.target.src = rey_incognito;
            c.target.parentNode.style.background = "#11DDAA";
        } else if (c.target.src.includes(rey_leogivildo)) {
            c.target.src = rey_incognito;
            c.target.parentNode.style.background = "#11DDAA";
        } else if (c.target.src.includes(rey_ervigio)) {
            c.target.src = rey_incognito;
            c.target.parentNode.style.background = "#11DDAA";
        } else {
            c.target.parentNode.style.opacity = "0%";
        }
    }

    return (
        <div className='my-12'>
            <div className='grid grid-cols-1 md:grid-cols-3 p-4'>
                <div className='flex flex-col items-center w-[100%] p-2'>
                    <img onClick={changeImages} src={rey_atanagildo} alt="" />
                    <p className='font-bold text-sm'>Atanagildo</p>
                </div>
                <div className='flex flex-col items-center w-[100%] p-2'>
                    <img onClick={changeImages} src={rey_leogivildo} alt="" />
                    <p className='font-bold text-sm'>Leogivildo</p>
                </div>
                <div className='flex flex-col items-center w-[100%] p-2'>
                    <img onClick={changeImages} src={rey_ervigio} alt="" />
                    <p className='font-bold text-sm'>Ervigio</p>
                </div>
            </div>
            <div className='text-center'>
                <a href="/">
                    <button className='bg-black text-[#11DDAA] w-36 rounded-md'>
                        Recargar
                    </button>
                </a>
            </div>
        </div>
    )
}

export default ChangeImage