import React, { Component, Fragment } from 'react';
import { Avatar, Button, Popover } from 'antd';
import { logoutUser } from '../../actions/authedUser'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class RightMenu extends Component {
  

  handleClick = () => {
    const {dispatch} = this.props
    dispatch(logoutUser(''))
    this.props.history.push('/')
  }

  renderPopover = () => {
    return(
      <span>
          <Button type="secondary" onClick={this.handleClick} >Logout</Button>
      </span>
    )
  }
  render() {
    
    const { user, authedUser } = this.props
    
    return (
      <Fragment>
      {authedUser === ''
        ? ''
        : (<div className="navStyle">
            <Popover placement="topRight" content={this.renderPopover()} trigger="click">
              <span style={{ marginRight: '10px' }}>{`Hello, ${user.name}`}</span>
              <Avatar style={{ cursor: 'pointer' }} icon="user" src={user.avatarURL} />
            </Popover>
          </div>)
      }
      </Fragment>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  const user = users[authedUser] 
  
  return {
    user,
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(RightMenu))

