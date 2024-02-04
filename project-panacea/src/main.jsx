import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './main.scss'

import App from './App'
import Home from './components/Home/Home'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Library from './components/Library/Library'
import { ContactUs } from './components/Email/Email'
import Personal from './components/Personal/Personal'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/library',
        element: <Library />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/profile',
        element: <Personal />
      }
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
