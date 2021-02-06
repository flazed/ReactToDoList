import { useEffect, useContext } from 'react'
import { TodoItem } from '../todo-item/todo-item';
import { ReactSVG } from 'react-svg'
import { todo_list, edit_item, delete_item } from '../../static/icons'
import { StoreContext } from './../../contexts/storage/store.context';
import './todo-list.scss';

export const TodoList = () => {    
    const store = useContext(StoreContext);    
    
    return (
        <div className="todos">
            {
                store.getState().list.length ? (
                    <>
                    <div className="todos--unsolved">
                        {store.getState().list.filter(item => !item.checked).map(item => {
                            // console.log(item.id)
                            return (
                                <div className="item" key={item.id}>
                                    <input type="checkbox" className="item-input" onChange={store.onChangeCheckedItem.bind(this, item.id)} checked={item.checked}/>
                                    <span className="item-text">{item.text}</span>
                                    <button className="btn btn--edit">
                                        <ReactSVG src={edit_item}/>
                                    </button>
                                    <button className="btn btn--delete" onClick={store.onRemoveItem.bind(this, item.id)}>
                                        <ReactSVG src={delete_item}/>
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <hr/>
                    <div className="todos--resolved">
                        {store.getState().list.filter(item => item.checked).map(item => {
                            return (
                                <div className="item" key={item.id}>
                                    <input type="checkbox" className="item-input" onChange={store.onChangeCheckedItem.bind(this, item.id)} checked={item.checked}/>
                                    <span className="item-text">{item.text}</span>
                                    <button className="btn btn--edit">
                                        <ReactSVG src={edit_item}/>
                                    </button>
                                    <button className="btn btn--delete" onClick={store.onRemoveItem.bind(this, item.id)}>
                                        <ReactSVG src={delete_item}/>
                                    </button>
                                </div>
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