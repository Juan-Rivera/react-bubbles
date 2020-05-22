import React from 'react';
import { Route, Redirect } from 'react-router-dom'


const PrivateRoute = ({component: Component, ...rest}) => {
    //gets token from local storage
    const token = localStorage.getItem('token')

    return(
        <Route
            {...rest}
            render={() => {
                if(token){
                    //if theres a token then it will route to the component (in this case its going to be the friends list)
                    return <Component/>
                }
                else{
                    //if there is no token found then it will route you to the login page again
                    return <Redirect to='/login' />
                }
            }}
        />
    )
}

export default PrivateRoute