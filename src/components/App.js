import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'antd/dist/antd.css'
import '../index.css'
import '../App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Navbar from './navbar/Navbar'
import QuestionsTab from './questions-tab/QuestionsTab'
import LoginPage from './LoginPage'
import Questions from './questions-tab/questions/Questions'
import PrivateRoute from './PrivateRoute'
import Error from './Error'
import AddUser from './AddUser'

 class App extends Component {
   componentDidMount() {
     this.props.dispatch(handleInitialData())
   }

  render() {

    return (
      <Router>
        <Fragment>
          <Navbar />
          <LoadingBar className="loading" />
            <Switch>
              <Route path='/sign-up' component={AddUser} />
              <Route path='/login'  component={LoginPage} />
              <PrivateRoute path='/' exact component={QuestionsTab} />
              <PrivateRoute path='/questions/:id' component={Questions} />
              <PrivateRoute path='/new-question' component={NewQuestion} />
              <PrivateRoute path='/leader-board' component={LeaderBoard} />
              <PrivateRoute component={Error} />
            </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App)
