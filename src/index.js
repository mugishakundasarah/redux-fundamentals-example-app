import store from "./store";

// Log the initial state
console.log('Initial state: ' , store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log("State after dispatch: ", store.getState()))

// Now, dispatch some actions
store.dispatch({type: 'todos/todoAdded' , payload: 'Learn about actions'})
store.dispatch({type: 'todos/todoAdded' , payload: 'Learn about reducers'})
store.dispatch({type: 'todos/todoAdded' , payload: 'Learn about stores'})

store.dispatch({type: 'todos/todoToggled' , payload: 0})
store.dispatch({type: 'todos/todoToggled', payload: 2})

store.dispatch({type: 'filters/statusFilterChanged' , payload: 'Active'})
store.dispatch({
  type: 'filters/colorFilterChanged',
  payload: {color: 'red', changeType: 'added'}
})

// stop listening to state updates 
unsubscribe()

// Dispatch one more action what happens
store.dispatch({type: 'todos/todoAdded', payload: 'Try creating a store'})