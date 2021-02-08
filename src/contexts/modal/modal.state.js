import { useState, useEffect } from 'react';
import { ModalContext } from './modal.context';

export const Modal = ({children}) => {
    const [modal, setModal] = useState({
        turnOn: false,
        id:     null,
        value:  ''
    });

    // useEffect(()=> {
    //     console.log(getState())
    // })

    const getState = () => {
        return modal
    }

    const show = (todo) => {
        setModal({
            turnOn: true,
            id:     todo.id,
            value:  todo.text
        });
    }

    const hide = () => {
        setModal({...modal, turnOn: false});
    }

    const setValue = (e) => {
        setModal({...modal, value: e.target.value})
    }

    return (
        <ModalContext.Provider value={{show, hide, getState, setValue}}>
            {children}
        </ModalContext.Provider>
    )
}

