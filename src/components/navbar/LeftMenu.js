import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            Home
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
            New Question
            <Link to="/newQuestion" />
          </Menu.Item>
          <Menu.Item key="3">
            Leader Board
            <Link to="/leaderBoard" />
          </Menu.Item>
        </Menu>
      )}
      </Media>
    );
  }
}

export default LeftMenu;
