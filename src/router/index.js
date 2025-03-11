import { createBrowserRouter } from "react-router-dom"
import React from 'react';
const Login = React.lazy(() => import('../pages/Login.jsx'))
const Blog = React.lazy(() => import('../pages/blog/index.jsx'))
const User = React.lazy(() => import('../pages/user/index.jsx'))
const Home = React.lazy(() => import('../pages/home/index.jsx'))
const Welcome = React.lazy(() => import('../pages/Welcome.jsx'))
const NotFound = React.lazy(() => import('../pages/NotFound.jsx'))
// 创建路由
const routes = createBrowserRouter([
  {
    path: '/login',
    Component: Login
  },
  {
    path: '/',
    Component: Home,
    children: [{
      index: true,
      Component: Welcome,
    }, {
      path: '/blog',
      Component: Blog,
    },
    {
      path: '/user',
      Component: User,
    },
    {
      path: '*',
      Component: NotFound,
    }]
  },
])
export default routes