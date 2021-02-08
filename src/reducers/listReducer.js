import { ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM, TOGGLE_ITEM} from './../types/list.types';

export const ListReducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return [action.payload, ...state]
        case REMOVE_ITEM:
            return state.filter(item => item.id != action.payload)
        case TOGGLE_ITEM:
            return state.map(item => item.id === action.payload ? {...item, checked: !item.checked} : item)
        case CHANGE_ITEM:
            return state.map(item => item.id === action.payload.id ? {...item, text: action.payload.value} : item)
        default: 
            return state
    }
}