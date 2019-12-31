import React, { Component } from 'react';
import { Menu, Col } from 'antd';

class LeftMenu extends Component {
  render() {
    return (
      
			<Col sx={12} md={16}>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}>
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">New Question</Menu.Item>
            <Menu.Item key="3">Leader Board</Menu.Item>
        </Menu>
      </Col>
     
    );
  }
}

export default LeftMenu;
