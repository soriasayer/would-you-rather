import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {
   

    return(
        <Route
            {...rest}
            render={props => {
                return(
                    authedUser !== ""
                    ? <Component {...props} />
                    : <Redirect to={{
                        pathname: '/login',
                        state: { from: props.location}
                    }} /> 
                );
            }}  
        />
    )
}
    

function mapStateToProps({ authedUser }) {
    return{
        authedUser
    }
  }

export default connect(mapStateToProps)(PrivateRoute);