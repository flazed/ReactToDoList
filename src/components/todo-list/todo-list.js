import { useContext } from 'react'
import { ReactSVG } from 'react-svg'
import { todo_list, edit_item, delete_item } from '../../static/icons'
import { StoreContext } from './../../contexts/storage/store.context';
import { ModalContext } from './../../contexts/modal/modal.context';
import './todo-list.scss';

export const TodoList = () => {    
    const store = useContext(StoreContext);   
    const modal = useContext(ModalContext);

    modal.getState().turnOn ? document.body.classList.add('edit') : document.body.classList.remove('edit');
    
    const createTodoItem = (item) => {
        return (
            <div className="item" key={item.id}>
                <label className="item-label">
                    <input type="checkbox" className="item-input" onChange={store.onToggleItem.bind(this, item.id)} checked={item.checked}/>
                    <span className="item-span"></span>
                </label>
                <span className="item-text">{item.text}</span>
                <button className="btn btn--edit" onClick={modal.show.bind(this, item)}>
                    <ReactSVG src={edit_item}/>
                </button>
                <button className="btn btn--delete" onClick={store.onRemoveItem.bind(this, item.id)}>
                    <ReactSVG src={delete_item}/>
                </button>
            </div>
        )
    }

    return (
        <div className="todos">
            { 
                store.getState().list.length ? (
                    <>
                        <div className="todos--unsolved">
                            {store.getState().list.filter(item => !item.checked).map(item => {
                                return (
                                    createTodoItem(item)
                                )
                            })}
                        </div>
                        <hr/>
                        <div className="todos--resolved">
                            {store.getState().list.filter(item => item.checked).map(item => {
                                return (
                                    createTodoItem(item)
                                )
                            })}
                        </div>
                    </>
                ) : (
                    <div className="todos--empty">
                        <ReactSVG src={todo_list}/>
                        <span>Нет задач!</span>
                    </div>
                )
            }
        </div>
    );
}