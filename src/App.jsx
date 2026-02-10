import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Errorpage from './pages/Errorpage'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Applayout from './components/layout/Applayout'
import Skills from './pages/Skills'
function App() {
  const Router = createBrowserRouter([
    {
      path:'/',
      element:<Applayout />,
      errorElement:<Errorpage />,
      children:[
        {
          path:'/',
          element:<Home  />,
        },
        {
          path:'/projects',
          element:<Projects />,
        },
        {
          path:'/skills',
          element:<Skills />,
        },
      ]
    }
  ])
  return <RouterProvider router={Router}></RouterProvider>
}

export default App
