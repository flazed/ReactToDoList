import { StoreContext } from './store.context';
import Storage from './../../components/store/states';

export const Store = ({children}) => {
    // const {getState, onChangeInput, onAddItem, onRemoveItem, onKeyDownInput} = Storage();
    return (
        <StoreContext.Provider value={Storage()}>
            {children}
        </StoreContext.Provider>
    )
}