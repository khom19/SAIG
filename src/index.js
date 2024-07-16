import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Forgot from './Login/forgot';
import App from './App';
import SignUp from './Login/signUp';
import Home from './Home/home';

const router = createBrowserRouter ([
{ 
  path: "/",
  element: <App />
},
{
  path: "Forgot",
  element: <Forgot />
},
{
  path: "SignUp",
  element: <SignUp/>
},
{
  path: "Home",
  element: <Home />
}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
