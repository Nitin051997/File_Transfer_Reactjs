
export const PaperConfScreenReducer = (state = false, action) => {
    switch(action.type) {
        case 'PaperConfScreenAction' : return action.payload
        default : return state
    }
}