import {createStore, combineReducers} from "redux";
import themeReducer from './themeApplication/Theme.reducer'

const theme = combineReducers({
    theme: themeReducer
})

const store = createStore(theme)

export default store;