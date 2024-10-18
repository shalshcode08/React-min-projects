import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSilce';

export const store = configureStore({
    reducer : todoReducer
})