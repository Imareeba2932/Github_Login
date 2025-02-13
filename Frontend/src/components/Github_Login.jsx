import React from 'react'
import { enqueueSnackbar } from 'notistack';
import useAppContext from '../AppContext';
import logo from "../assets/GL.png"
import login from "../assets/login.gif"

const Github_Login = () => {
  const { setLoggedIn } = useAppContext();
  const handleLogin = () => {
    // Redirect the user to the GitHub login page
    window.location.href = 'http://localhost:3000/auth/github'; // Change the URL to your backend authentication route
  };

  const getData = async () => {
    // Fetch the data from the backend
    const res = await fetch('http://localhost:3000/user');

    console.log(res.status);

    if (res.status === 200) {
      console.log('Success');

      enqueueSnackbar('Loggedin Successfully', { variant: 'success' });

      const data = await response.json();
      console.log(data);

      // to save user data in session
      sessionStorage.setItem('user', JSON.stringify(data));
      setLoggedIn(true);
      navigate('/');

    } else if (response.status === 401) {
      enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
    } else {
      enqueueSnackbar('Something went wrong', { variant: 'error' });
    }


}

return (
  <div style={{backgroundImage: `url(${login})`, backgroundSize:'cover', height:'91vh'}}>
  <div className='container d-flex justify-content-center'>
    <div className="card login-card">
      <img src={logo} className='git-logo' />
      <button type="submit" className='login-btn' onClick={handleLogin}>
        Login with GitHub
      </button>


      {/* <button onClick={getData}>Get User Data</button> */}
    </div>
  </div>
  </div>
)
}

export default Github_Login