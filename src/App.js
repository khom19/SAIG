import './App.css';
import React , {useState , useEffect} from 'react';
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './index' ;
import { Link , useNavigate} from 'react-router-dom';

function App() {
  const [allUser , setAllUser] = useState([]) ;
  const [allAdmin , setAllAdmin] = useState([]) ;
  const [email , setEmail] = useState('') ;
  const [password , setPassword] = useState('') ;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchusers = async() => {
        try {
            const response = await fetch('http://localhost:5000/api/users');
            if (response.ok) {
                console.log("fectched users success");
              }else{
                console.log("Error");
              }
            const data = await response.json();
            setAllUser(data);
        }catch(error){
            console.error('Error:', error);
        }
    };

    fetchusers();
}, []);

useEffect(() => {
  const fetchadmins = async() => {
      try {
          const response = await fetch('http://localhost:5000/api/admins');
          if (response.ok) {
              console.log("fectched admins success");
            }else{
              console.log("Error");
            }
          const data = await response.json();
          setAllAdmin(data);
      }catch(error){
          console.error('Error:', error);
      }
  };

  fetchadmins();
}, []);

const handleLogin = (e) => {
  e.preventDefault();

  const user = allUser.find(user => user.email === email && user.password === password);
  const admin = allAdmin.find(admin => admin.email === email && admin.password === password);
  if(user){
    navigate('/Home');
  }
  else if(admin){
    navigate('/Adminpage') ;
  }else{
    alert('Invalid email or password');
  }
}

  return (
  <form onSubmit={handleLogin}>   
  <section className='background'>
    <div className='warp'>
      <h1>Welcome to Board-Go</h1>
      <div className='warp-box'>
        <h2 className='head'>Login</h2>

        <div className='inputbox'>
          <input 
            type='email' 
            placeholder='Email' 
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
          </input>
          <MdEmail className='icon'/>
        </div>
        <div className='inputbox'>
          <input 
            type='password' 
            placeholder='Password' 
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          > 
          </input>
          <FaLock className='icon'/>
        </div>

        <div className='forgot-remem'>
          <label className='remem'>
            <input type='checkbox' ></input>
            Remember me
          </label>
          <nav><Link to='/Forgot'>Forgot password?</Link></nav>
        </div>

        <div className='singIn'>
          <button type='submit'>Sign in</button>
        </div>

        <div className='account'>
        <nav>Don't have an account?<Link to='/SignUp'>Sign Up</Link></nav>
        </div>
      </div>
    </div> 
  </section>
  </form>    
    );
  }

export default App;
