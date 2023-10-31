import { useState, useMemo } from "react";

function CalculatePrice() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);
  const [taxRate, setTaxRate] = useState(0.1);

  // Función costosa que calcula el precio con impuestos de cada producto
  function calculatePriceWithTax(product) {
    return product.price * (1 + taxRate);
  }

  // Memorizar el resultado de la función con useMemo
  const cachedPrices = useMemo(
    () =>
      // Ejecutamos la función costosa para cada producto
      products.map((product) => calculatePriceWithTax(product)),
    [products, taxRate]
  );

  // Renderizar el componente
  return (
    <div className="mx-auto w-1/2 my-12 grid grid-cols-1 gap-4 place-content-center">
      <h2 className="text-center font-serif font-semibold">Calcular precio</h2>
      <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
        <p className="text-center bg-white rounded-md px-2 py-1">
          Count: {count}
        </p>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-black px-2 py-1 text-white rounded-lg hover:scale-[0.9]"
        >
          Incrementar
        </button>
      </div>
      <ul className="bg-white flex flex-col gap-2 rounded-md px-2 py-1">
        {products.map((product, index) => (
          <li key={product.id} className="bg-slate-400">
            <span className="font-bold"> {product.name}:</span>{" "}
            {cachedPrices[index]}
          </li>
        ))}
      </ul>
      <div className="flex flex-col items-center justify-center sm:flex-row gap-4">
        <p className="text-center bg-white rounded-md px-2 py-1">
          Tax rate: {taxRate}
        </p>
        <button
          onClick={() => setTaxRate(taxRate + 0.1)}
          className="bg-black px-2 py-1 text-white rounded-lg hover:scale-[0.9]"
        >
          Aumentar el tipo impositivo
        </button>
      </div>
    </div>
  );
}

export default CalculatePrice;
