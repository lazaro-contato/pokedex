import {createStore, combineReducers} from "redux";
import themeReducer from './themeApplication/Theme.reducer'

const rootReducer = combineReducers({
    appTheme: themeReducer
});

const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>

export default store;