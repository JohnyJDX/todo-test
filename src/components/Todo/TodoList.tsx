import { useTodos } from '@/store/todo.store';
import { Card } from '../ui/card';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { todos, filterStatus, sortOption } = useTodos();

  const filteredTodos = todos.filter((todo) => {
    if (filterStatus === 'completed') return todo.completed;
    if (filterStatus === 'incomplete') return !todo.completed;
    return true;
  });

  const sortedTodos = filteredTodos.sort((a, b) => {
    if (sortOption === 'date') {
      return (
        new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      );
    }
    if (sortOption === 'priority') {
      return a.priority - b.priority;
    }
    return 0;
  });

  if (sortedTodos.length === 0) {
    return (
      <Card className='p-3 mb-3'>
        <p>No Todos Found</p>
      </Card>
    );
  }

  return (
    <Card className='p-3 mb-3'>
      <ul>
        {sortedTodos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
    </Card>
  );
};

export default TodoList;
