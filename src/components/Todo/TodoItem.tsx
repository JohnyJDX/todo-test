import { useTodos } from '@/store/todo.store';
import { Todo } from '@/types/todo.types';
import { Check, CheckCheck, Pencil, Trash } from 'lucide-react';
import { FC, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../ui/alert-dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [editText, setEditText] = useState(todo.text);
  const [error, setError] = useState('');

  const { updateTodo, toggleTodo, deleteTodo } = useTodos();

  const handleUpdateTodo = () => {
    const updatedText = editText.trim();

    if (updatedText.length === 0) {
      setError('The field cannot be empty');
      return;
    }

    const updatedTodo = { ...todo, text: updatedText };
    updateTodo(updatedTodo);
    setSelectedTodo(null);
  };

  if (selectedTodo?.id === todo.id) {
    return (
      <div className='border-b last:border-0'>
        <form
          className='py-3 flex justify-between items-center gap-3'
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdateTodo();
          }}
        >
          <Input
            type='text'
            placeholder='Todo'
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
              setError('');
            }}
            autoFocus
          />
          <Button variant='outline' size='icon' className='shrink-0	'>
            <CheckCheck className='h-4 w-4' />
          </Button>
        </form>
        {error && <p className='leading-7 text-red-500'>{error}</p>}
      </div>
    );
  }

  return (
    <li className='py-3 flex justify-between items-center border-b last:border-0 gap-3'>
      <Button
        variant='outline'
        size='icon'
        className='flex-shrink-0'
        onClick={() => toggleTodo(todo.id)}
      >
        <Check className='h-4 w-4' color={todo.completed ? 'green' : 'gray'} />
      </Button>
      <p className={`text-left w-full ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </p>
      <div className='space-x-1 flex items-center'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => setSelectedTodo(todo)}
        >
          <Pencil className='h-4 w-4' />
        </Button>

        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant='outline' size='icon'>
              <Trash className='h-4 w-4' />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Are you sure you want to delete this task?
              </AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the
                task from your todo list.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => deleteTodo(todo.id)}>
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </li>
  );
};

export default TodoItem;
