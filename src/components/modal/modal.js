import { useContext } from 'react'
import { ReactSVG } from 'react-svg';
import classnames from 'classnames'
import { ModalContext } from './../../contexts/modal/modal.context'
import { StoreContext } from './../../contexts/storage/store.context'
import { close, success } from './../../static/icons' 
import './modal.scss'

export const ModalAlert = () => {
    const store = useContext(StoreContext);
    const modal = useContext(ModalContext);

    return (
        <div className={classnames('modal', {active: modal.getState().turnOn})}>
            <div className="modal-alert ">
                <input type="text" value={modal.getState().value} onChange={modal.setValue.bind(this)}/>
                <button className="btn btn-save" onClick={store.onChangeItem.bind(this, modal.getState().id, modal.getState().value)}>
                    <ReactSVG src={success}/>
                </button>
                <button className="btn btn-close" onClick={modal.hide.bind(this)}>
                    <ReactSVG src={close}/>
                </button>
            </div>
        </div>
    )
}