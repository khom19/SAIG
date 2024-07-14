import './App.css';
import { FaUser , FaLock } from "react-icons/fa";


function App() {
  return (
    <div className='warp'>
      <h1>Welcome to Board-Go</h1>
      <div className='warp-box'>
        <h2 className='head'>Login</h2>

        <div className='inputbox'>
          <input type='text' placeholder='Username' required></input>
          <FaUser className='icon'/>
        </div>
        <div className='inputbox'>
          <input type='text' placeholder='Password' required></input>
          <FaLock className='icon'/>
        </div>

        <div className='fogot-remem'>
          <input type='checkbox'></input>
          Remember me
          <a href='#' > Forgot password?</a>
        </div>

        <div className='remember'>
          <button type='submit'>Sing in</button>
        </div>

        <div className='account'>
          Don't have an account?
          <a href='#' > Sing up</a>
        </div>
      </div>
    </div>
  );
}

export default App;
