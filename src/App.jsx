import React from "react";
import WelcomeReact from "./components/project1/WelcomeReact";
import ChangeImage from "./components/project1/ChangeImage";
import Conversion from "./components/project1/Conversion";
import Counter from "./components/project2/Counter";
import ChangeMoney from "./components/project2/ChangeMoney";
import Message from "./components/project2/Message";
import CostDinner from "./components/project3/CostDinner";
import Methods from "./components/project4/Methods";
import ActivitiesWithMethods from "./components/project4/ActivitiesWithMethods";
import EmployeesOfTheMonth from "./components/project5/EmployeesOfTheMonth";
import PeopleWinners from "./components/project5/PeopleWinners";
import ChangeColor from "./components/project6/ChangeColor";
import Number from "./components/project6/Number";
import MainLenguages from "./components/project7/MainLenguages";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PageA from "./components/project8/PageA";
import PageB from "./components/project8/PageB";
import PageC from "./components/project8/PageC";
import Home from "./components/project8/kings/Home";
import Error404 from "./components/project8/Error404";
import Model from "./components/project8/kings/Model";
import Products from "./components/project9/Products";
import Calendar from "./components/project9/Calendar";
import MainSearchMovies from "./components/project10/MainSearchMovies";
import MainCart from "./components/project11/MainCart";
import TodoList from "./components/project9/TodoList";
import MyCalculation from "./components/project12/MyCalculation";
import CalculatePrice from "./components/project12/CalculatePrice";

function App() {
  return (
    <>
      <section className="bg-[#11DDAA] py-12">
        <WelcomeReact />
        <ChangeImage />
        <Conversion />
      </section>
      <section className="bg-[#FFBBAA] py-12">
        <Counter />
        <ChangeMoney />
        <Message />
      </section>
      <section className="bg-[#11AABB] py-12">
        <CostDinner />
      </section>
      <section className="bg-[#DDBBDD] py-12">
        <Methods />
        <ActivitiesWithMethods />
      </section>
      <section className="bg-[#DDFFAA] py-12">
        <EmployeesOfTheMonth />
        <PeopleWinners />
      </section>
      <section className="bg-[#11DDAA] py-12">
        <ChangeColor />
        <Number />
      </section>
      <section className="bg-[#BB1133] py-12">
        <MainLenguages />
      </section>
      <section className="bg-[#55AAFF] py-12">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PageA />} />
            <Route path="/page-a" element={<Navigate to={"/"} />} />
            <Route path="/page-b" element={<PageB />} />
            <Route path="/page-c" element={<PageC />} />
            <Route path="/kings" element={<Home />} />
            <Route path="/kings/:king" element={<Model />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </section>
      <section className="bg-[#AAFF55] py-12">
        {/* useReducer */}
        <Products />
        <Calendar />
        <TodoList />
      </section>
      <section className="bg-[#CCEEFF] py-12">
        {/* useRef
            useState
            useEffect
            CustomHook: useMovies
            UseCallBack 
        */}
        <MainSearchMovies />
      </section>
      <section className="bg-[#54c46c] py-12">
        <MainCart />
      </section>
      <section className="bg-[#c49454] py-12">
        <MyCalculation/>
        <CalculatePrice/>
      </section>
    </>
  );
}

export default App;
