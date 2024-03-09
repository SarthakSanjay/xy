import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Auth from './layout/auth/Auth.tsx'
import TweetDetail from './layout/content/TweetDetail.tsx'
import Content from './layout/content/Content.tsx'
import CommentDetails from './layout/comment/CommentDetails.tsx'
import { Login } from './layout/auth/Login.tsx'
import Notification from './layout/notification/Notification.tsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
      path:"",
      element: <Content />
    },
      {
      path:"/:username/tweet/:tweetId",
      element: <TweetDetail />
    },
      {
      path:"tweet/:commentId",
      element: <CommentDetails />
    },{
      path:'notification',
      element:<Notification />
    }]
  },
  {
    path:'/auth',
    element: <Auth />,
    children:[
      {
        path:'login',
        element:<Login />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </ThemeProvider>

)
