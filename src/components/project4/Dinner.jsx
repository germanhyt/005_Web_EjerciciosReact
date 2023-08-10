import React from 'react'

function Dinner({ name, color, price, setTotal }) {
    console.log(name, color);
    //Definimos el path de las imágenes
    let pathImages = `https://html6.es/img/rey_`;
    let img = `${pathImages}${name.toLowerCase()}.png`;

    //Funciones
    const comprar = (tag) => {
        setTotal((e) => e + price);
        tag.target.parentNode.parentNode.style.display = "none";
    }

    return (
        <>
            <div className='relative w-56 p-8 bg-black rounded-md '>
                <img src={img} alt="img" />
                <h2 className='text-white text-center my-2 font-bold'>{name}</h2>
                <div className='absolute top-0 left-2'>
                    <p className='text-white'>
                        Precio: {price}
                    </p>
                    <input
                        className='bg-white px-1 hover:bg-black border-2 rounded-md text-[#11DDAA] hover:text-[#11DDAA] '
                        onClick={comprar}
                        type="button"
                        value='Comprar'
                    />
                </div>
            </div>
        </>

    )
}

export default Dinner