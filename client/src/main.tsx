import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from './components/theme-provider.tsx'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Auth from './layout/auth/Auth.tsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:'/auth',
    element: <Auth />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </ThemeProvider>

)
