import { useContext } from 'react';
import { StoreContext } from './../../contexts/storage/store.context';
import './todo-input.scss';

export const TodoInput = () => {
    const store = useContext(StoreContext);

    return (
        <div className="input-block">
            <input type="text" value={store.getState().input} onChange={store.onChangeInput} onKeyDown={store.onKeyDownInput}/>
            <button className="input-block--btn" onClick={store.onAddItem}>Добавить</button>
        </div>
    );
}