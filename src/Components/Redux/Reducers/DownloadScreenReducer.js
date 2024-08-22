
export const DownloadScreenReducer = (state = false, action) => {
    switch(action.type) {
        case 'DownloadScreenAction' : return action.payload
        default : return state
    }
}