import { createStore, applyMiddleware,compose } from "redux";
import reducer from "./reducer";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk';

const storageConfig = {
    key: 'root', 
    storage:storage, 
    whitelist: ['id','email'] 
}

const middlewares = [ReduxThunk];

const myPersistReducer = persistReducer(storageConfig, reducer)
const store = createStore(myPersistReducer,compose(applyMiddleware(...middlewares)),)
export const persistor = persistStore(store)

export default store;