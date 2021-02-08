import './index.css';
import { TodoInput } from './components/todo-input/todo-input';
import { TodoList } from './components/todo-list/todo-list';
import { Store } from './contexts/storage/store.state';
import { Modal } from './contexts/modal/modal.state';
import { ModalAlert } from './components/modal/modal';

export default function App() {
  return (
    <div className="container">
      <Modal>
        <Store>
          <ModalAlert/>
          <TodoInput/>
          <TodoList/>
        </Store>
      </Modal>
    </div>
  );
}