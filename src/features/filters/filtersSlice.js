export const StatusFilters = {
    All : 'all',
    Active: 'active',
    Completed: 'completed'
}
const initalState = {
    status: StatusFilters.All,
    colors: []
}

export default function filtersReducer(state = initalState, action) {
    switch(action.type){
        case 'filter/statusFilterChanged' : {
            return {
               ...state,
                status: action.payload
            }
        }
        case 'filters/colorFIlterChanged' : {
            let {color, changeType} = action.payload
            const {colors} = state

            switch (changeType) {
                case 'added' : {
                    if(colors.includes(color)){
                        // this color is already set as a filter. Don't change the state
                        return state
                    }
                    return {
                        ...state,
                        colors: state.colors.concat(color)
                    }
                }
                case 'removed' : {
                    return {
                        ...state, 
                        colors: state.colors.filter((existingColor) => existingColor !== color)
                    }
                }
                default:
                    return state
            }
        }
        default: 
            return state 
    }
}