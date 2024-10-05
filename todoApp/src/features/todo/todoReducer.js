import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [/*{_id: 1 taskName: "My task to learn somethig"}, {}*/],
    updateTodo: null,
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {_id: nanoid(), taskName: action.payload}
            state.todos.push(newTodo);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo._id !== action.payload);
        },

        sendTodoForUpdate: (state, action) => {
            state.updateTodo = action.payload
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo._id === action.payload._id ? action.payload : todo);
            state.updateTodo = null;
        }
    }
})

export const {addTodo, removeTodo, sendTodoForUpdate, updateTodo} = todoSlice.actions;

export default todoSlice.reducer;