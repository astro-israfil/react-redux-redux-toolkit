import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, sendTodoForUpdate } from "../features/todo/todoReducer";

const TodoItem = React.memo(({ todo }) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    if (!todo || !todo._id) return null;
    dispatch(removeTodo(todo._id));
  };

  const handleSendTodoForUpdate = () => {
    if (!todo) return null;
    dispatch(sendTodoForUpdate(todo));
  };

  return (
    <div className="w-full flex justify-between items-center gap-3">
      <i className="text-base text-blue-200 flex-1 overflow-hidden">
        {todo.taskName}
      </i>
      <button
        onClick={handleSendTodoForUpdate}
        className="p-3 rounded-full hover:shadow-lg hover:bg-gray-700 flex items-center justify-center transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 48 48"
        >
          <path
            fill="#E57373"
            d="M42.583,9.067l-3.651-3.65c-0.555-0.556-1.459-0.556-2.015,0l-1.718,1.72l5.664,5.664l1.72-1.718C43.139,10.526,43.139,9.625,42.583,9.067"
          ></path>
          <path
            fill="#FF9800"
            d="M4.465 21.524H40.471999999999994V29.535H4.465z"
            transform="rotate(134.999 22.469 25.53)"
          ></path>
          <path
            fill="#B0BEC5"
            d="M34.61 7.379H38.616V15.392H34.61z"
            transform="rotate(-45.02 36.61 11.385)"
          ></path>
          <path fill="#FFC107" d="M6.905 35.43L5 43 12.571 41.094z"></path>
          <path fill="#37474F" d="M5.965 39.172L5 43 8.827 42.035z"></path>
        </svg>
      </button>
      <button
        onClick={handleRemoveTodo}
        className="p-3 rounded-full hover:shadow-lg hover:bg-gray-700 flex items-center justify-center transition-all"
      >
        <svg
          className="fill-red-600"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z"></path>
        </svg>
      </button>
    </div>
  );
});

export default TodoItem;
