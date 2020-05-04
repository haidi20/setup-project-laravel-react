import {
    createStore, 
    combineReducers,
} from 'redux';

import datatableReducer from './datatable';

const rootReducer = combineReducers({
    datatable: datatableReducer,
});

const store = createStore(rootReducer);

export default store;

