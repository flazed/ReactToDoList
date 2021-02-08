import { createContext } from 'react'

export const ModalContext = createContext({
    show: (todo) => {},
    hide: () => {},
    getState: () => {},
    setValue: () => {}
});