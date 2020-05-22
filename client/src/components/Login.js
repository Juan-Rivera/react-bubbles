import React from "react";
import { useHistory } from 'react-router-dom'

const push = useHistory()
class Login extends React.Component{
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  constructor(){
    super();
    this.state = {
        credentials: {
            username: '',
            password: '',
        }
    }
  }


  handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };

  login = e => {
      e.preventDefault();
      axiosWithAuth()
        .post('/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            push('/protected');
        })
  }

  render(){
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
          <form onSubmit={this.login}>
            {/* username */}
            <input
              placeholder='username'
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
            {/* password */}
              <input
                placeholder='password'
                type='password'
                name='password'
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              <button>Log in</button>
            </form>
      </>
    );
  }
  
};

export default Login;
