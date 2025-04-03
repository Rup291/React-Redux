import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../features/todo/todoSlice.jsx"

export const store = configureStore({
    reducer: todoReducer,
});