import {AnyAction} from 'redux'
const INITIAL_STATE = 'light'

export default function reducer(state = INITIAL_STATE, action: AnyAction) {
    switch (action.type) {
        case 'toggleTheme':
            return action.payload
        default:
            return state
    }
}