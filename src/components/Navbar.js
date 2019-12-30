import React, { Component } from 'react'
import { Menu, Row, Col, Avatar, Button, Layout } from 'antd';

const { Header } = Layout;

class Navbar extends Component {
    render() {
        return(
            <Header className="header"  style={{marginBottom: '20px'}}>
            <Row type='flex' justify='center'>
                <Col xs={{ span: 22, offset: 1}} lg={{ span: 20, offset: 2 }}>
                <Row gutter={16} >
                    <Col sx={12} md={12}>
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
                    <Col sx={12}  md={12} >
                        <div className="navStyle">
                            <span>Hello, Tyler McGinnis</span>
                            <Avatar style={{marginLeft: '10px'}} icon="user" src='https://i.pinimg.com/originals/f1/a3/6a/f1a36a8bf241e6deaa66c268d22b5035.jpg' />
                            <Button style={{marginLeft: '10px'}} type="link" ghost>
                                Log in
                            </Button>
                        </div>
                    </Col>
                </Row>
                </Col>
                </Row>
            </Header>
        )
    }
}

export default Navbar

