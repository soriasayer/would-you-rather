import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import Media from 'react-media';

class LeftMenu extends Component {
  
  render() {
    return (
      <Media queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
      }}>
      {matches => (
        <Menu
          theme="dark"
          mode={matches.small ? "vertical" : "horizontal"} 
          selectedKeys={[this.props.location.pathname]}
          style={{ lineHeight: '64px' }}>
          <Menu.Item key="/">
            Home
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="/new-question">
            New Question
            <Link to="/new-question" />
          </Menu.Item>
          <Menu.Item key="/leader-board">
            Leader Board
            <Link to="/leader-board" />
          </Menu.Item>
        </Menu>
      )}
      </Media>
    );
  }
}

export default withRouter(LeftMenu)
