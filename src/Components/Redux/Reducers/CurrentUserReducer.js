
export const CurrentUserReducer = (state = 'Admin', action) => {
    switch(action.type) {
        case 'CurrentUserAction' : return action.payload
        default : return state
    }
}