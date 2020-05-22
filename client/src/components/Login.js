import React, { useState } from "react";
import { useHistory } from 'react-router-dom'

import axiosWithAuth from '../utils/axiosWithAuth'; 

const initialCredentials = {
  username: '',
  password: '',
}
const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState(initialCredentials)
  const { push } = useHistory();

  const handleChange = e => {
      setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
        });
    };

  const login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            push('/bubbles');
        })
  }

  
    return(
      <div>
        <h1>Welcome to the Bubble App!</h1>
          <form onSubmit={login}>
            {/* username */}
            <input
              placeholder='username'
              type='text'
              name='username'
              value={credentials.username}
              onChange={handleChange}
            />
            {/* password */}
              <input
                placeholder='password'
                type='password'
                name='password'
                value={credentials.password}
                onChange={handleChange}
              />
              <button>Log in</button>
            </form>
      </div>
    );
};

export default Login;
