import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <div className="py-5 px-5">
      <div className="w-full max-w-md mx-auto my-0">
        {Array.isArray(todos)
          ? todos.map((todo) => <TodoItem key={todo._id} todo={todo} />)
          : null}
      </div>
    </div>
  );
};

export default Todos;
