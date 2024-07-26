import { useTodos } from '@/store/todo.store';
import { Plus } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

const TodoForm = () => {
  const [todoTitle, setTodoTitle] = useState('');
  const [error, setError] = useState('');

  const addTodo = useTodos((state) => state.addTodo);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!todoTitle) {
      setError('The field cannot be empty');
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: todoTitle,
      completed: false,
      createdDate: new Date().toISOString(),
      priority: 0,
    };
    addTodo(newTodo);
    setTodoTitle('');
    setError('');
  };

  return (
    <Card className='p-4 mb-3'>
      <form
        onSubmit={handleSubmit}
        className='flex justify-between items-center content-start gap-3'
      >
        <Input
          value={todoTitle}
          onChange={(event) => {
            setTodoTitle(event.target.value);
            setError('');
          }}
          type='text'
          placeholder='Todo'
        />
        <Button variant='outline' size='icon' className='shrink-0	'>
          <Plus className='h-4 w-4' />
        </Button>
      </form>
      {error && <p className='mt-3 leading-7 text-red-500'>{error}</p>}
    </Card>
  );
};

export default TodoForm;
