import { Todo } from '@/types/todo.types';
import { create } from 'zustand';

interface TodosState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (updatedTodo: Todo) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  filterStatus: 'all' | 'completed' | 'incomplete';
  setFilterStatus: (status: 'all' | 'completed' | 'incomplete') => void;
  sortOption: 'date' | 'priority';
  setSortOption: (option: 'date' | 'priority') => void;
}

export const useTodos = create<TodosState>((set) => ({
  todos: [],
  addTodo: (todo: Todo) => set((state) => ({ todos: [...state.todos, todo] })),
  updateTodo: (updatedTodo: Todo) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      ),
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
  filterStatus: 'all',
  setFilterStatus: (status) => set(() => ({ filterStatus: status })),
  sortOption: 'date',
  setSortOption: (option) => set(() => ({ sortOption: option })),
}));
