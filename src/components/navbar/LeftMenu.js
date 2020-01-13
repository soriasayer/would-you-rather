import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Menu } from 'antd';
import Media from 'react-media';

class LeftMenu extends Component {
  state = {
    current: '1',
  };

  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
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
          onClick={this.handleClick} 
          selectedKeys={[this.state.current]}
          style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">
            Home
            <Link to="/" />
          </Menu.Item>
          <Menu.Item key="2">
            New Question
            <Link to="/new-question" />
          </Menu.Item>
          <Menu.Item key="3">
            Leader Board
            <Link to="/leader-board" />
          </Menu.Item>
        </Menu>
      )}
      </Media>
    );
  }
}

export default LeftMenu;
