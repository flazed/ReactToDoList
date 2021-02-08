import { useReducer, useEffect, useContext } from 'react';
import { InputReducer } from './../../reducers/inputReducer';
import { CHANGE_INPUT, CLEAR_INPUT } from './../../types/input.types';
import { ListReducer } from './../../reducers/listReducer';
import { ADD_ITEM, REMOVE_ITEM, CHANGE_ITEM, TOGGLE_ITEM} from './../../types/list.types';
import { ModalContext } from './../../contexts/modal/modal.context';

const Store = () => {
    const [input, inputDispatch] = useReducer(InputReducer, '');
    const [list, listDispatch] = useReducer(ListReducer, localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);

    const modal = useContext(ModalContext);

    const getState = () => {
        return {input, list};
    }

    // LocalStorage
    useEffect(() => {
            localStorage.setItem('todos', JSON.stringify(list));
        }
    )

    // Инпут ввода таска
    const onChangeInput = (event) => {
        inputDispatch({
            type:       CHANGE_INPUT,
            payload:    event.target.value
        })
    }

    const onClearInput = () => {
        inputDispatch({
            type:   CLEAR_INPUT
        })
    }

    const onKeyDownInput = (event) => {
        if(event.code === "Enter") {
            onAddItem();
        }
    }

    // Список
    const onAddItem = () => {
        if(input.trim()) {
            onClearInput();

            listDispatch({
                type: ADD_ITEM,
                payload: {id: Math.random()*100, text: input, checked: false}
            })
        }
    }

    const onRemoveItem = (id) => {
        listDispatch({
            type: REMOVE_ITEM,
            payload: id
        })
    }

    const onToggleItem = (id) => {
        listDispatch({
            type: TOGGLE_ITEM,
            payload: id
        })
    }

    const onChangeItem = (id, value) => {
        if(value) {
            listDispatch({
                type: CHANGE_ITEM,
                payload: {id, value}
            })
            modal.hide();
        }
    }


    return {getState, onChangeInput, onAddItem, onRemoveItem, onKeyDownInput, onToggleItem, onChangeItem}
}

export default Store;