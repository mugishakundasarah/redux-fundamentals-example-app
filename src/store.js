import { applyMiddleware , createStore } from "redux";
import rootReducer from "./reducer";
import {print1, print2, print3} from './exampleAddons/middleware'
import { composeWithDevTools } from "redux-devtools-extension";


let preloadedState
const persistedTodosString = localStorage.getItem('todos')

if(persistedTodosString){
    preloadedState = {
        todos: JSON.parse(persistedTodosString)
    }
}

const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3)
)

// Pass enhancer as teh second arg, since there's no preloaded state
const store = createStore(rootReducer, composedEnhancer)

export default store