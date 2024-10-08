import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import App from './App';
import SignUp from './Login/signUp';
import Home from './Home/home';
import History from './Home/history';
import Payment from './Home/payment';
import Profile from './Home/profile';
import Adminpage from './Admin/admin';
import Boardpop from './Home/boardpopup';
import AdminProfile from './Admin/adminprofile';
import AlluserPayment from './Admin/alluserpayment';
import Addboard from './Admin/addboard';
import Updateboard from './Admin/updateboard';
import Table from './Admin/table';

const router = createBrowserRouter ([
{ 
  path: "/",
  element: <App />
},
{
  path: "SignUp",
  element: <SignUp/>
},
{
  path: "Home",
  element: <Home />
},
{
  path: "History",
  element: <History />
},
{
  path: "Payment",
  element: <Payment />
},
{
  path: "user" ,
  element: <Profile />
},
{
  path: "Adminpage" ,
  element: <Adminpage />
},
{
  path: "Pop" ,
  element: <Boardpop />
},
{
  path: "AdminProfile" ,
  element: <AdminProfile />
},
{
  path: "AllUserPayment" ,
  element: <AlluserPayment />
},
{
  path: "Addboardgame" ,
  element: <Addboard />
},
{
  path: "Update",
  element: <Updateboard />
},
{
  path: "AllTable",
  element: <Table />
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
