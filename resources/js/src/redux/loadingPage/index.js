const initialState = {
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'loadingPage/close': {
            return {...state, loading: false};
        }
        case 'loadingPage/open': {
            return {...state, loading: true};
        }
        default:
            return state;
    }
}

export default reducer;