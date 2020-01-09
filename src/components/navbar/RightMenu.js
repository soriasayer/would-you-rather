import React, { Component, Fragment } from 'react';
import { Avatar, Button, Popover } from 'antd';
import { logoutUser } from '../../actions/authedUser'
import { connect } from 'react-redux';

class RightMenu extends Component {

  handleClick = () => {
    const {dispatch} = this.props
    dispatch(logoutUser(''))
  }

  renderPopover = (user, authedUser) => {
    return(
      <span>
          <div style={{ marginBottom: '10px' }}>{`Hello, ${user.name}`}</div>
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
            <Popover placement="topRight" content={this.renderPopover(user, authedUser)} trigger="click">
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

export default connect(mapStateToProps)(RightMenu)

