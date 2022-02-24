const initialState = {
    todos: [
        { id: 0, text: 'Learn React', completed: true },
        { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
        { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
    ],
    filters: {
        status: 'All',
        colors: []
    }
}

// Use the initalState as a default value
export default function appReducer(state = initialState, action){
    // T // The reducer normally looks at the action type field to decide what happens
    switch(action.type){
         // Do something here based on the different types of actions
         case 'todos/todoAdded' : {
            //  we need to return a new sate object 
            return {
                // that has all the existing state data
                ...state,
                // but has a new narray for the `todos` field
                todos: [
                    // with all of the old todos
                    ...state.todos,
                    // and the new todo object 
                    {
                        // use an auto-incrementing numeric ID for this example
                        id: nextTodoId(state.todos), 
                        text: action.payload,
                        completed : false
                    }
                ]
            }
         }
         default: 
             // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state
    }
}