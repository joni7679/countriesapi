import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CountriesDetlist from './components/CountryDetails.jsx'
import Header from './components/Header.jsx'
import Error404 from './components/Error404.jsx'
let router = createBrowserRouter([{
  path: '/',
  element: <App />,
},
{
  path: '/:name',
  element: <CountriesDetlist />,
},{
  path: '*',
  element: <Error404/>,
}

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
    <RouterProvider  router={router}/>
  </StrictMode>,
)
