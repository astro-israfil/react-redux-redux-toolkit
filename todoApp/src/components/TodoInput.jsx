import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoReducer";

const TodoInput = () => {
  const todoWillUpdate = useSelector((state) => state.updateTodo);
  const [taskNameInput, setTaskNameInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (taskNameInput) dispatch(addTodo(taskNameInput));
    setTaskNameInput("");
  };

  const handleUpdateTodo = () => {
    if (todoWillUpdate) {
      dispatch(
        updateTodo({ _id: todoWillUpdate._id, taskName: taskNameInput })
      );
      setTaskNameInput("");
    }
  };

  useEffect(() => {
    if (todoWillUpdate && todoWillUpdate._id) {
      setTaskNameInput(todoWillUpdate.taskName);
    }
  }, [todoWillUpdate, setTaskNameInput]);
  return (
    <div className="w-full px-8 py-5">
      <div className="flex max-w-md mx-auto my-0">
        <input
          value={taskNameInput}
          onChange={(e) => setTaskNameInput(e.target.value)}
          className="flex-1 border-none rounded-s-sm outline-0 bg-gray-800 text-gray-300 px-2 py-1"
          type="text"
          name="taskName"
          id="taskName"
        />
        <button
          onClick={todoWillUpdate ? handleUpdateTodo : handleAddTodo}
          className="bg-purple-600 text-blue-300 font-semibold px-4 py-2 rounded-e-sm"
        >
          {todoWillUpdate ? "UPDATE TODO" : "ADD TODO"}
        </button>
      </div>
    </div>
  );
};

export default TodoInput;
