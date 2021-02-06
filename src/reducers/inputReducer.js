import { CHANGE_INPUT, CLEAR_INPUT } from './../types/input.types';

export const InputReducer = (state, action) => {
    switch(action.type) {
        case CLEAR_INPUT:
            return ''
        case CHANGE_INPUT:
            return action.payload
        default: 
            return state
    }
}