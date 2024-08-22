
export const ConfFormSreenSectionReducer = (state = [], action) => {
    switch(action.type) {
        case 'ConfFormSreenSectionAction' : return action.payload
        default : return state
    }
}