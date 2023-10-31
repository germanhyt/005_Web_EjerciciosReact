import { useReducer } from "react";

/**
 * ¿Qué es? 
 * El hook useReducer de React permite manejar el estado de una aplicación de forma efectiva, especialmente en casos de estado complejo. En lugar de utilizar múltiples estados y funciones para actualizarlos, useReducer utiliza un solo estado y una función reductora para actualizarlo. La función reductora toma el estado actual y una acción y devuelve el nuevo estado.
 * A continuación, se presenta un ejemplo detallado de cómo utilizar el hook useReducer en React:
 * - Definir el estado inicial: En primer lugar, se debe definir el estado inicial de la aplicación. En este ejemplo, se utilizará un objeto con una propiedad "count" establecida en 0.
     const initialState = { count: 0 };
 * - Definir la función reductora: A continuación, se debe definir la función reductora que se utilizará para actualizar el estado de la aplicación. La función reductora toma el estado actual y una acción y devuelve el nuevo estado. En este ejemplo, la acción puede ser "increment" o "decrement".
 *   function reducer(state, action) {
        switch (action.type) {
            case 'increment':
            return { count: state.count + 1 };
            case 'decrement':
            return { count: state.count - 1 };
            default:
            throw new Error();
        }
    }
 * - Utilizar el hook useReducer: Una vez que se ha definido el estado inicial y la función reductora, se puede utilizar el hook useReducer para manejar el estado de la aplicación. El hook useReducer recibe dos argumentos: la función reductora y el estado inicial.
     const [state, dispatch] = useReducer(reducer, initialState);
 * Actualizar el estado de la aplicación: Para actualizar el estado de la aplicación, se debe utilizar la función dispatch que se devuelve del hook useReducer. La función dispatch se utiliza para enviar acciones a la función reductora.
   <button onClick={() => dispatch({ type: 'increment' })}>+</button>
   <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
 * En este ejemplo, se utilizan dos botones para enviar acciones a la función reductora. Cuando se hace clic en el botón "+" o "-", se envía una acción a la función reductora para incrementar o decrementar el contador.
 *  
 */

// Definir el estado inicial
const initialState = {
  todos: [],
  filter: "all",
};

// Definir la función reductora
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, todos: [...state.todos, action.payload] };
    case "toggle":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case "setFilter":
      return { ...state, filter: action.payload };
    default:
      throw new Error();
  }
}

function TodoList() {
  // Utilizar el hook useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Filtrar la lista de tareas
  const filteredTodos =
    state.filter === "all"
      ? state.todos
      : state.filter === "completed"
      ? state.todos.filter((todo) => todo.completed)
      : state.todos.filter((todo) => !todo.completed);

  // Manejar las acciones
  function handleAddTodo() {
    const todo = { id: Date.now(), text: "New Todo", completed: false };
    dispatch({ type: "add", payload: todo });
  }

  function handleToggleTodo(id) {
    dispatch({ type: "toggle", payload: id });
  }

  function handleSetFilter(filter) {
    dispatch({ type: "setFilter", payload: filter });
  }

  // Renderizar la lista de tareas
  return (
    <div className="w-full my-12 grid grid-cols-1 gap-4 place-content-center">
      <h2 className="text-center font-serif font-semibold">
        TodoList con useReducers
      </h2>
      <ul className="mx-auto bg-white rounded-md w-1/2 p-2 flex flex-col gap-2">
        {filteredTodos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => handleToggleTodo(todo.id)}
            className="bg-slate-400 text-white rounded-md px-2 py-1 cursor-pointer"
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div className="mx-auto flex flex-col sm:flex-row gap-2">
        <button
          className="bg-black px-2 py-1 text-white rounded-lg hover:scale-[0.9]"
          onClick={() => handleAddTodo()}
        >
          Agregar ToDo
        </button>
        <button
          className="bg-black px-2 py-1 text-white rounded-lg hover:scale-[0.9]"
          onClick={() => handleSetFilter("all")}
        >
          Mostrar ToDoList
        </button>
        <button
          className="bg-black px-2 py-1 text-white rounded-lg hover:scale-[0.9]"
          onClick={() => handleSetFilter("completed")}
        >
          Completados
        </button>
        <button
          className="bg-black px-2 py-1 text-white rounded-lg hover:scale-[0.9]"
          onClick={() => handleSetFilter("active")}
        >
          Activos
        </button>
      </div>
    </div>
  );
}

export default TodoList;
