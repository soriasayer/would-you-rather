import React, { Component } from 'react';
import { Menu, Col, Avatar, Button  } from 'antd';

class RightMenu extends Component {
  render() {
    return (
      <Col sx={12} md={8}>
        <div className="navStyle ">
          <Menu  theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px', borderBottom: '#e8e8e8;' }}>
            <Menu.Item>
            <span>Hello, Tyler McGinnis</span>
            </Menu.Item>
            <Menu.Item>
              <span>
                <Avatar icon="user" src='https://i.pinimg.com/originals/f1/a3/6a/f1a36a8bf241e6deaa66c268d22b5035.jpg' />
              </span>
            </Menu.Item>
            <Menu.Item>
                <Button type="link" ghost>
                    Log in
                </Button>
            </Menu.Item>
          </Menu>
        </div>
      </Col>
    );
  }
}

export default RightMenu;

{/*<div className='mobileView navStyle'>
              <Popover placement="topRight" content={content} trigger="click">
                  <Avatar style={{marginLeft: '10px'}} icon="user" src='https://media4.s-nbcnews.com/j/newscms/2019_49/1516941/madbaby-today-main-tease1-191202_cecdbd51347888dce9ce34ed6ea98efe.fit-760w.jpg' />
              </Popover>
          </div>
*/}