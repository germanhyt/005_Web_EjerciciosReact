import React, { useContext } from 'react'

/**
 * El useContext es un hook en React que te permite acceder al contexto (context) de 
 * un componente funcional sin necesidad de pasar props a través de componentes 
 * intermedios. El contexto es una forma de compartir datos que pueden 
 * considerarse "globales" para un árbol de componentes en React, sin tener que pasar 
 * explícitamente esos datos a través de props en cada nivel.
 * En lugar de usar props para pasar datos desde un componente padre a un componente 
 * hijo, puedes crear un contexto que almacene esos datos y luego acceder a esos datos
 * directamente desde cualquier componente hijo que esté dentro del árbol del contexto.
 * El funcionamiento consta de los siguientes puntos:
 * - Crear un Contexto: Utiliza React.createContext() para crear un objeto de contexto
 *   que contiene los datos que deseas compartir.
 * - Proporcionar el Contexto: Envuelve los componentes que necesitan acceder a esos 
 *   datos con el componente Provider del contexto. Proporciona los datos usando el 
 *   prop value.
 * - Consumir el Contexto: Dentro de los componentes que desean acceder a los datos 
 *   del contexto, usa useContext(Contexto) para obtener los datos directamente desde 
 *   el contexto.
 * Este patrón es útil cuando tienes datos que muchos componentes necesitan, como 
 * temas, autenticación o configuración, y evita la necesidad de pasar esos datos 
 * manualmente a través de cada nivel de componentes.
 * Los Escenarios donde es necesario usar este hook son:
 * - Temas y Estilos Globales: Si deseas aplicar un tema o estilos globales a tu aplicación y quieres que los componentes accedan a la configuración de estilo sin tener que pasarla a través de props.
 * - Autenticación y Usuarios: Cuando necesitas acceder a los detalles del usuario autenticado en diferentes partes de la aplicación, como su nombre o rol.
 * - Configuración de la Aplicación: Si tienes configuraciones globales, como la URL de la API o configuraciones de aplicación que varios componentes necesitan acceder.
 * - Traducción y Localización: Para proporcionar fácil acceso a las cadenas de traducción o contenido localizado en toda la aplicación.
 * - Datos de Estado Global: Cuando deseas evitar la prop drilling para pasar datos de estado a través de múltiples niveles de componentes. Sin embargo, para casos más complejos de gestión de estado global, considera usar herramientas como Redux o Recoil.
 * - Gestión de Temas: Si deseas permitir que los usuarios cambien el tema de la aplicación y quieras propagar esa elección a diferentes partes de la interfaz.
 * - Datos de Configuración: Cuando tienes datos de configuración que afectan el comportamiento de la aplicación y quieres que varios componentes puedan acceder a esos datos.
 * Entocnes useContext es útil cuando tienes datos compartidos que son relevantes en 
 * varios lugares de tu aplicación y deseas acceder a esos datos de manera más 
 * conveniente y sin prop drilling excesivo. Recuerda que si tienes una necesidad más 
 * compleja de gestión de estado global, podrías considerar otras bibliotecas de
 * administración de estado como Redux o Recoil.
 * 
 * @returns 
 * 
 */

import { Context } from '../../context/Context'

function Page1() {
    const { color } = useContext(Context);

    return (
        <>
            <div className={`bg-[${color}] rounded-md p-2`}>
                Primera página
            </div>
        </>
    )
}

export default Page1