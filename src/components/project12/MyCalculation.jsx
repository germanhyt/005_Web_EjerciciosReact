/**
 * El hook useMemo de React se utiliza para memorizar el resultado de una función y evitar cálculos innecesarios. Se debe utilizar cuando se tiene una función costosa que se ejecuta en cada renderizado y se desea evitar que se vuelva a calcular si las dependencias no han cambiado.Algunos casos en los que se puede utilizar useMemo son:
   - Cálculos costosos: Si se tiene una función que realiza cálculos costosos, se puede utilizar useMemo para memorizar el resultado de la función y evitar que se vuelva a calcular en cada renderizado.
   - Filtrado de datos: Si se tiene una lista de datos y se desea filtrarlos en función de una propiedad, se puede utilizar useMemo para memorizar el resultado del filtrado y evitar que se vuelva a calcular en cada renderizado.
   - Ordenamiento de datos: Si se tiene una lista de datos y se desea ordenarlos en función de una propiedad, se puede utilizar useMemo para memorizar el resultado del ordenamiento y evitar que se vuelva a calcular en cada renderizado.
   - Traducción de datos: Si se tiene una lista de datos y se desea traducirlos a otro idioma, se puede utilizar useMemo para memorizar el resultado de la traducción y evitar que se vuelva a calcular en cada renderizado.
 * Es importante tener en cuenta que useMemo debe utilizarse con precaución, ya que puede aumentar la complejidad del código y hacerlo más difícil de depurar. Se debe utilizar solo cuando se tiene una función costosa que se ejecuta en cada renderizado y se desea evitar que se vuelva a calcular si las dependencias no han cambiado.
 * 
 */

import { useState, useMemo } from "react";

function MyCalculation() {
  // Definimos los useState
  const [count, setCount] = useState(0);

  // Definir una función costosa que depende del estado
  function calculateValue() {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += i;
    }
    return result;
  }

  // Memorizar el resultado de la función con useMemo
  const cachedValue = useMemo(
    () =>
      //Ejecutamos
      calculateValue(),
    [count]
  );

  // Renderizar el componente
  return (
    <div className="mx-auto w-1/2 my-12 grid grid-cols-1 gap-4 place-content-center">
      <h2 className="text-center font-serif font-semibold">
        Contador con useMemo
      </h2>
      <p className="text-center bg-white rounded-md">Contador: {count}</p>
      <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
        <button
          className="bg-black px-2 py-1 text-white rounded-lg hover:scale-[0.9]"
          onClick={() => setCount(count + 1)}
        >
          Incrementar
        </button>
      </div>
      <p className="text-center bg-white rounded-md">Value: {cachedValue}</p>
    </div>
  );
}

export default MyCalculation;
