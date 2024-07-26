import { Layout } from '@/layout/Layout';
import Login from '@/pages/Login/Login';
import Registration from '@/pages/Registration/Registration';
import Todos from '@/pages/Todo/Todo';
import { createHashRouter, Navigate } from 'react-router-dom';

export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/login' replace />,
      },
      {
        path: '/todos',
        index: true,
        element: <Todos />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
    ],
  },
]);
