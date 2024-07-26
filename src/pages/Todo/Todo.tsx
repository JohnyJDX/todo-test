import FilterSortTodos from '@/components/Todo/FilterSortTodos';
import TodoForm from '@/components/Todo/TodoForm';
import TodoList from '@/components/Todo/TodoList';
import { useTodos } from '@/store/todo.store';

const Todos = () => {
  const todos = useTodos((state) => state.todos);

  return (
    <div className='min-w-[310px] w-full sm:w-[500px]'>
      <TodoForm />
      {todos.length > 0 && <FilterSortTodos />}
      {todos.length > 0 && <TodoList />}
    </div>
  );
};

export default Todos;
