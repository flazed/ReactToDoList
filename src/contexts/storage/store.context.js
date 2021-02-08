import { createContext } from 'react'

export const StoreContext = createContext({ 
    getState: () => {},
    onChangeInput: (e) => {},
    onAddItem: (e) => {},
    onRemoveItem: (id) => {},
    onKeyDownInput: (e) => {},
    onToggleItem: (id) => {},
    onChangeItem: (id, value) => {}
});