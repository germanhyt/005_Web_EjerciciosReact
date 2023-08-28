import React, { createContext, useState } from 'react';

/**
 * Nota:
 * - children: Para que afecte a todos los hijos
 * - Contexto.Provider: Provee los Datos del contexto de alguna manera, sirve para acceder y modificar
 * 
 * @returns 
 * 
 */


// Crear un nuevo objeto de contexto llamado Context
export const Context = createContext();

// Definir el componente Datos
export const Datos = ({ children }) => {
    // Usar el hook useState para crear una variable de estado llamada 'color' con valor inicial '#FFFFFF'
    const [color, setColor] = useState("#FFF");

    // Devolver el componente Context.Provider con el valor del contexto y los componentes hijos
    return (
        <Context.Provider value={{ color, setColor }}>
            {children}
        </Context.Provider>
    );
}

