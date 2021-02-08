import { StoreContext } from './store.context';
import Storage from './../../components/store/states';

export const Store = ({children}) => {
    return (
        <StoreContext.Provider value={Storage()}>
            {children}
        </StoreContext.Provider>
    )
}