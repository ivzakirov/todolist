import useLocalStorageState from 'use-local-storage-state';
import TodoListItem from '../TodoListItem/TodoListItem';
import AddTodoItem from '../AddTodoItem/AddTodoItem';

const TodoList = () => {
  const [todos, setTodos] = useLocalStorageState('todos', {
    defaultValue: []
  });

  const onItemToggle = (updatedItem) => {
    setTodos(todos.map(
      item => {
        if (updatedItem === item) {
          item.done = !item.done;
        }
        return item;
      }
    ))
  }

  const onAddItem = (value) => {
    setTodos([...todos, { title: value, done: false }])
  }

  return (
    <div>
      <AddTodoItem onAddItem={onAddItem} />
      <div>
        {todos.map(
          item => <TodoListItem
            itemData={item}
            key={item.title}
            onToggle={() => onItemToggle(item)}
          />
        )}
      </div>
    </div>
  );
}

export default TodoList;