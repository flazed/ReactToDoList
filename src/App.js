import './index.css';
import { TodoInput } from './components/todo-input/todo-input';
import { TodoList } from './components/todo-list/todo-list';
import { Store } from './contexts/storage/store.state';

export default function App() {
  return (
    <div className="container">
      <Store>
        <TodoInput/>
        <TodoList/>
      </Store>
    </div>
  );
}