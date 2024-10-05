import React from "react";
import TodoInput from "./components/TodoInput";
import Todos from "./components/Todos";

const App = () => {
  return (
    <>
      <h1 className="text-4xl text-blue-300 font-bold text-center m-7">
        TODO APP with Redux-Toolkit and REACT-REDUX
      </h1>
      <TodoInput />
      <Todos />
    </>
  );
};

export default App;
