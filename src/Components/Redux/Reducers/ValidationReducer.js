
export const ValidationReducer = (state = false, action) => {
    switch(action.type) {
        case 'ValidationAction' : return action.payload
        default : return state
    }
}