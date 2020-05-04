const initialState = {
    source: {
        data:[],
    },
    pagination: {
        total: 1,
        current: 1,
        pageSize: 5, // jumlah data yg muncul. 5 data yg muncul
    },
    reset: true,
    search: null,
    remove: false,
    loading: false,
    selecetItem: {},
    openPopup: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'OPEN_POPUP': {
            return {...state, openPopup: true};
        }
        case 'CLOSE_POPUP': {
            return {...state, openPopup: false};
        }
        case 'LOADING': {
            return {...state, loading: true};
        }
        case 'REMOVE_LOADING': {
            return {...state, loading: false};
        }
        case 'SELECT_ITEM': {
            return {...state, selecetItem: action.payload};
        }
        case 'SEARCH': {
            return {
                ...state, 
                search: action.payload, 
                pagination: {
                    ...state.pagination,
                    current: 1,
                }
            };
        }
        case 'CHANGE_PAGE': {
            return {
                ...state, 
                pagination: {
                    ...state.pagination,
                    current: action.payload,
                }
            }
        }
        case 'SHOW_PAGE': {
            return {
                ...state, 
                pagination: {
                    ...state.pagination,
                    current: 1,
                    pageSize: action.payload,
                }
            }
        }
        case 'DELETE_DATA': {
            return {
                ...state,
                remove: true,
                loading: false,
            }
        }
        case 'FETCH_DATA': {
            let data = action.payload;

            return {
                ...state, 
                source: data,
                pagination: {
                    ...state.pagination,
                    total: data.total,
                    pageSize: data.per_page,
                    current: data.current_page,
                },
                remove: false,
                loading: false,
            }
        }
        default:
            return state;
    }
}

export default reducer;