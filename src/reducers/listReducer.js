import { ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM, CHANGE_CHECKED_ITEM} from './../types/list.types';

export const ListReducer = (state, action) => {
    switch(action.type) {
        case ADD_ITEM:
            return [action.payload, ...state]
        case REMOVE_ITEM:
            return state.filter(item => item.id != action.payload)
        case CHANGE_CHECKED_ITEM:
            return state.map(item => item.id === action.payload ? {...item, checked: !item.checked} : item)
        case CHANGE_ITEM:
            return ''
        default: 
            return state
    }
}