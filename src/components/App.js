import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import '../index.css'
import '../App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import Navbar from './navbar/Navbar'
import QuestionsTab from './QuestionsTab'
import LoginPage from './LoginPage'
import Questions from './Questions'
import PrivateRoute from './PrivateRoute'
 class App extends Component {
   componentDidMount() {
     this.props.dispatch(handleInitialData())
   }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <LoadingBar />
            <div>
              <Route path='/login' exact component={LoginPage} />
              <PrivateRoute path='/' exact component={QuestionsTab} />
              <PrivateRoute path='/questions/:id' component={Questions} />
              <PrivateRoute path='/newQuestion' component={NewQuestion} />
              <PrivateRoute path='/leaderBoard' component={LeaderBoard} />
            </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App)
