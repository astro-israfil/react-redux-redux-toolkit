import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoReducer";

const store = configureStore({
    reducer: todoReducer,
})

export default store;