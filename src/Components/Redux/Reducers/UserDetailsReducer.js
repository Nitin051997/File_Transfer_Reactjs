
export const UserDetailsReducer = (state = false, action) => {
    switch(action.type) {
        case 'UserDetailsAction' : return action.payload
        default : return state
    }
}