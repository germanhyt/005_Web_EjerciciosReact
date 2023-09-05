import React from 'react'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Colors from './Colors';
import { Datos } from '../../context/Context';
import MyProvider from '../../context/MyProvider';
import Lenguages from './Lenguages';
import PageLenguage from './PageLenguage';

function MainLenguages() {
    return (
        <div className='grid grid-cols-1 place-content-center gap-10'>
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='font-bold font-serif text-center'>Uso del Context</h2>
                <Datos>
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                        <Page1 />
                        <Page2 />
                        <Page3 />
                    </div>
                    <Colors />
                </Datos>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <MyProvider>
                    <Lenguages />
                    <PageLenguage />
                </MyProvider>
            </div>
        </div>
    )
}

export default MainLenguages