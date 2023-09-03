import React, { useReducer, useState } from 'react'

//Objects y variables
const currentTime = new Date();
const month = currentTime.getMonth();
const year = currentTime.getFullYear();
const monthsArray = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
const types = {
  masM: "masM",
  menosM: "menosM",
  masY: "masY",
  menosY: "menosY",
};
const valueInitial = {
  month: 8,
  year: 2023
};

const reducer = (state, action) => {
  let newMonth = state.month;
  let newYear = state.year;
  console.log(action)
  switch (action.type) {
    case "masM":
      newMonth = newMonth === 11
        ? newMonth = 0
        : newMonth + 1;
      break;
    case "menosM":
      newMonth = newMonth === 0
        ? newMonth = 11
        : newMonth - 1
      break;
    case "masY":
      newYear = newYear + action.payload;
      break;
    case "menosY":
      newYear = newYear - action.payload;
      break;
    default:
      return state;

  }
  return { month: newMonth, year: newYear };
};

function Calendar() {
  const [dateActually, dispatch] = useReducer(reducer, valueInitial);
  const [units, setUnits] = useState(1);

  return (
    <>
      <div className='my-12 grid grid-cols-1 gap-4 place-content-center'>
        <h2 className='text-center font-serif font-semibold'>
          Cambio de color en base la fecha
        </h2>

        <div className='flex items-center justify-center'>
          <p className={
            (dateActually.month < month && dateActually.year <= year) || dateActually.year < year
              ? ' bg-red-500 text-white px-2 py-2 rounded-md'
              : ' bg-green-700 text-white px-2 py-2 rounded-md'
          }>
            {monthsArray[dateActually.month]}({dateActually.year})
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex items-center justify-center gap-2'>
            <p className='font-sans font-semibold'>Meses:</p>
            <input
              className='bg-blue-500 text-white rounded-md w-10 py-1'
              type="button"
              onClick={() => dispatch({ type: types.menosM })}
              value='-'
            />
            <input
              className='bg-blue-500 text-white rounded-md w-10 py-1'
              type="button"
              onClick={() => dispatch({ type: types.masM })}
              value='+'
            />
          </div>
          <div className='flex flex-col items-center justify-center gap-2'>
            <p className='font-sans font-semibold'>Años:</p>
            <div className='flex gap-2'>
              <input
                placeholder='Ingresar unidades'
                className='rounded-md px-2 py-1'
                type="Number"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
              />
              <input
                className='bg-blue-500 text-white rounded-md w-10 py-1'
                type="button"
                onClick={() => { dispatch({ type: types.menosY, payload: Number(units) }) }}
                value='-'
              />
            </div>
            <div className='flex gap-2'>
              <input
                placeholder='Ingresar unidades'
                className='rounded-md px-2 py-1'
                type="Number"
                value={units}
                onChange={(e) => setUnits(e.target.value)}
              />
              <input
                className='bg-blue-500 text-white rounded-md w-10 py-1'
                type="button"
                onClick={() => { dispatch({ type: types.masY, payload: Number(units) }) }}
                value='+'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calendar 