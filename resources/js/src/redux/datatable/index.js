const initialState = {
    openModal: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'OPEN_MODAL':{
            return {
                openModal: !state.openModal,
            }
        }
        default:
            return state;
    }
}

export default reducer;