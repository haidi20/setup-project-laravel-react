const initialState = {
    modal: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'OPEN_MODAL':{
            return {
                modal: !state.modal,
            }
        }
        default:
            return state;
    }
}

export default reducer;