import { useState, useCallback } from "react";


/**
 * 
 * El hook useCallback de React se utiliza para memorizar una función y evitar que se vuelva a crear en cada renderizado, lo que puede mejorar el rendimiento de la aplicación. Se debe utilizar cuando se tiene una función que se pasa como prop a un componente hijo y se desea evitar que se vuelva a crear en cada renderizado si las dependencias no han cambiado.
 * useCallback se utiliza para memorizar una función y evitar que se vuelva a crear en cada renderizado, lo que puede mejorar el rendimiento de la aplicación. Se debe utilizar con precaución y solo cuando se tiene una función que se pasa como prop a un componente hijo y se desea evitar que se vuelva a crear en cada renderizado si las dependencias no han cambiado. En el ejemplo presentado, se utiliza useCallback para memorizar la función "handleDeleteProduct", que se pasa como prop a un componente hijo.
 * 
*/

function MyProducts() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);
  const [taxRate, setTaxRate] = useState(0.1);

  // Función que se pasa como prop a un componente hijo
  const handleDeleteProduct = useCallback(
    (productId) => {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    },
    [setProducts]
  );

  // Renderizar el componente
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}: {product.price}
            <button onClick={() => handleDeleteProduct(product.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      <p>Tax rate: {taxRate}</p>
      <button onClick={() => setTaxRate(taxRate + 0.1)}>Increase tax rate</button>
    </div>
  );
}

export default MyProducts;
