// Use the initalState as a default value
import { combineReducers } from "redux"

import todosReducer from "./features/todos/todoSlice"
import filtersReducer from "./features/filters/filtersSlice"

const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer